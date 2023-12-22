import {AuthClient} from "@dfinity/auth-client";
import {Identity} from "@dfinity/agent";
import {Principal} from "@dfinity/principal";

export class IIForIdentity {
  public authClient: AuthClient | undefined;
  public principal: Principal | undefined;
  public identity: Identity | undefined;
  private isAuthClientReady: undefined | boolean = false;

  constructor() {
    return this;
  }

  async create() {
    this.authClient = await AuthClient.create({
      idleOptions: {
        idleTimeout: 1000 * 60 * 30, // set to 30 minutes
        disableDefaultIdleCallback: true // disable the default reload behavior
      }
    });
    this.isAuthClientReady = await this.authClient?.isAuthenticated();
  }

  public setOwnerPrincipal(principal: Principal | undefined) {
    this.principal = principal;
  }

  //ii login
  async login() {
    return new Promise<any>(async (resolve, reject) => {
      this.authClient?.login({
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
        onSuccess: async () => {
          this.identity = this.authClient?.getIdentity() as Identity | undefined;
          this.principal = this.identity?.getPrincipal();
          this.isAuthClientReady = await this.authClient?.isAuthenticated();
          resolve(this.identity);
        },
        onError: (err) => {
          reject(err);
        },
      });
    });
  }
  //II
  async logout() {
    await this.authClient?.logout({returnTo: "/"});
    window.location.reload()
  }

  async getIdentity() {
    return this.authClient?.getIdentity();
  }

  async isAuthenticated() {
    return this.authClient?.isAuthenticated();
  }
}

export const authClient = new IIForIdentity();

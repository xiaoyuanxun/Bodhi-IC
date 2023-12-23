import React, {useEffect, useState} from 'react';
import styles from "./index.less"
import {NewModal} from "../modals/newModal";
import {useAuth} from "../../utils/useAuth";
import {useNavigate} from "react-router-dom";
import {sliceString} from "../../utils/common";
import {bodhiApi} from "../../api/bodhi";

export const Header = React.memo(() => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const {isAuth} = useAuth()
  return <div className={styles.header_wrap}>
    <NewModal setOpen={setOpen} open={open}/>
    <div className={styles.header_left} onClick={() => navigate("explore")}>
      <img height={30} width={30} src="https://bodhi.wtf/assets/bodhi-f8f8fb-180-faebd556.png" alt=""/>
      BodHi - IC
    </div>
    <div style={{height: "100%", display: "flex", alignItems: "center", gap: "10px"}}>
      {isAuth && <div onClick={() => setOpen(true)} className={styles.header_button}
                      style={{borderColor: "#C05522", color: "#C05522"}}>
        + &nbsp;
        New
      </div>}
      {isAuth ? <Account/> : <Connect/>}
    </div>

  </div>
})

const Connect = React.memo(() => {
  const {logIn} = useAuth()
  return <div className={styles.header_button} onClick={() => logIn?.()}>
    <span style={{width: "16px", height: "16px", marginRight: "8px"}}>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true"
           focusable="false" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path
        d="M16 12h2v4h-2z"></path><path
        d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"></path></svg>
    </span>
    Connect
  </div>
})


const Account = React.memo(() => {
  const [isClick, setIsClick] = useState(false)
  const {principal, logOut} = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (e.target) {
        if ("id" in e.target) {
          if (e.target.id !== "header_button") {
            setIsClick(false)
          }
        }
      }
    })

    return () => {
      document.removeEventListener("click", () => {
      })
    }
  }, [])

  return <div style={{position: "relative"}}>
    <div id={"header_button"} className={styles.header_button} onClick={() => setIsClick(true)}>
      🌭
      {sliceString(principal?.toText())}
      <span style={{height: "24px", width: "24px"}}>
        <svg viewBox="0 0 24 24" focusable="false" className="chakra-icon css-onkibi" aria-hidden="true">
        <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
      </svg>
      </span>
    </div>
    <div className={styles.header_button_dropdown} style={{display: isClick ? "flex" : "none"}}>
      <div style={{padding: "0 12px"}}>Balance:0.000ETH</div>
      <div style={{
        borderTop: "1px solid rgb(226, 232, 240)",
        borderBottom: "1px solid rgb(226, 232, 240)",
        padding: "6px 0"
      }}>
        <div className={styles.button} onClick={() => navigate(`/user/contents/${principal?.toText()}`)}>My Contents
        </div>
        <div style={{height: "10px"}}/>
        <div className={styles.button} onClick={() => navigate(`/user/holdings/${principal?.toText()}`)}>My Holdings
        </div>
      </div>
      <div onClick={() => {
        logOut?.()
      }} style={{color: "rgb(229, 62, 62)"}} className={styles.button}>Disconnect
      </div>
    </div>
  </div>
})


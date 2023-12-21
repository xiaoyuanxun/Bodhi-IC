import React from 'react';
import {Modal} from 'antd';
import styles from "./index.less"

export const NewModal = React.memo((props: { open: boolean, setOpen: Function }) => {
  const {open, setOpen} = props


  return (
    <Modal
      width={"576px"}
      title="Create"
      open={open}
      onCancel={() => setOpen(false)}
      footer={null}
    >
      <div className={styles.new_modal_content}>
        <div className={styles.new_modal_item}>
          <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" focusable="false"
                 className="chakra-icon css-19vv2c5" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><path
              d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>
          </span>
          <p className={styles.p1}>Write Something</p>
          <p className={styles.p2}>Short messages or long article with markdown</p>
        </div>
        <div style={{height: "16px"}}/>
        <div className={styles.new_modal_item}>
          <span>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" focusable="false"
                 className="chakra-icon css-19vv2c5" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path
              d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z"></path></svg>
          </span>
          <p className={styles.p1}>Publish Media</p>
          <p className={styles.p2}>image / video / pdf / games, or any other file</p>
        </div>
        <p style={{fontSize: "14px", color: "rgb(113, 128, 150)", textAlign: 'center'}}>
          All formats are accepted. Content will be stored forever till the world ends. No one can change your content
          but you.
        </p>
      </div>
    </Modal>
  );
})


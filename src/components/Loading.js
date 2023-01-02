import React from 'react';
import styles from "../myStyle.module.css"
import { SyncLoader } from 'react-spinners';
function Loading(props) {
    return (
        <div className={styles.loadingPage} >            
            <SyncLoader
  color="#36d7b7"
  margin={4}
  size={20}
  speedMultiplier={1}
/>

        </div>
    );
}

export default Loading;
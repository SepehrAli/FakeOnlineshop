import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../myStyle.module.css"
function Login(props) {
 
    return (
        <div className={styles.loginPage}>
           <div className={styles.login} >
                <span>username</span>
                <input type="text"/>
                <span  >password</span>
                <input type="number" />
                 <button>  <Link className={styles.linkLogin} to="/All" >Login</Link></button>
              
           </div>
        </div>
    );
}

export default Login;
import styles from './Navbar.module.css'
import peugeotLogo from '../assets/peugeottasks.svg'
import { Img } from './Image'

import { BellFill, PersonCircle } from 'react-bootstrap-icons'

export function Navbar(){
    return(
        <div className={styles.navbar}>
            <div className={styles.columnleft}>
                <Img src={peugeotLogo} alt='Peugeot Logo'/>
            </div>
            <div className={styles.columnright}>
                 <button className={styles.button}>
                    <BellFill color='white' size={32}/> 
                 </button>
                 <button className={styles.button}>
                    <PersonCircle color='white' size={32}/> 
                    <span className={styles.username}>José</span>
                 </button>
            </div>    
        </div>
    )
}
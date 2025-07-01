import { ListCards } from './ListCards'
import styles from './Main.module.css'

export function Main(){
    return(
        <div className={styles.wrapper}>
            <ListCards/>
            <ListCards/>
            <ListCards/>
            <ListCards/>
            <ListCards/>
            <ListCards/>

        </div>
    )
}
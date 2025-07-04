import { ListCards } from './ListCards'
import styles from './Main.module.css'
import { ModalTask } from './ModalTask'

export function Main(){
    return(
        <div className={styles.wrapper}>
            <ListCards/>
            <ModalTask/>
            <ListCards/>
            <ListCards/>
            <ListCards/>
            <ListCards/>
            <ListCards/>

        </div>
    )
}
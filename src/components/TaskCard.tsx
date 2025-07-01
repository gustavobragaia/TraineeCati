import { CalendarWeekFill, Check2 } from 'react-bootstrap-icons'
import {format} from 'date-fns'
import styles from './TaskCard.module.css'

 type TaskCardProps = {
    id: number;
    priorityStatus: string;
    taskTitle: string,
    taskDescription: string,
    taskDate: Date,
}

export function TaskCard(props: TaskCardProps){

    const formatedDate = format(props.taskDate,  "d 'de' LLLL 'ás' HH:mm'h'")

    return(
        <div className={styles.wrapper}>

            <div className={styles.headerCardTask}>
                <div className={styles.priority}>
                    <span className={styles.priorityText}>{props.priorityStatus}</span>
                </div>
                <div className={styles.finishedTask}>
                    <Check2 
                        color='white' 
                        size={24} 
                        style={{ border: '1px dashed #fff', borderRadius: '50%', padding: '3px' }}>
                    </Check2>
                    <span>Finalizar</span>
                </div>
            </div>

            <div className={styles.contentCardTask}>
                <h6>{props.taskTitle}</h6>
                <p>{props.taskDescription}</p>
            </div>

            <div className={styles.footerCardTask}>
                <CalendarWeekFill color='var(--date-text)'></CalendarWeekFill>
                <time>{formatedDate}</time>
            </div>
        </div>  
    )

}
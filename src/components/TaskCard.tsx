import { CalendarWeekFill, Check2 } from 'react-bootstrap-icons'

import {format} from 'date-fns'
import { ptBR } from 'date-fns/locale'

import styles from './TaskCard.module.css'
import { FinishTaskButton } from './FinishTaskButton'

type TaskCardProps = {
    key: number;
    priorityStatus: string;
    taskTitle: string,
    taskDescription: string,
    taskDate: Date,
}


export function TaskCard(props: TaskCardProps){
    

    const formatedDate = format(props.taskDate,  "dd MMMM',' u",{
        locale: ptBR
    })

    function finishTask(key){
        console.log(`Setei como finalizado a task ${key}`)
    }

    return(
        <div className={styles.wrapper}>

            <div className={styles.headerCardTask}>
                <div className={styles.priority}>
                    <span className={styles.priorityText}>{props.priorityStatus}</span>
                </div>

            <FinishTaskButton
                finishTask={finishTask}
            ></FinishTaskButton>

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
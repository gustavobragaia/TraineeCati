import { useState } from 'react'
import { FinishTaskButton } from './FinishTaskButton'
import styles from './ModalTask.module.css'
import { CalendarWeekFill } from 'react-bootstrap-icons'

// import {format} from 'date-fns'
// import { ptBR } from 'date-fns/locale'

export function ModalTask(props: any){

    const [isFinished, setIsFinished] = useState(false)

    function handleFinishedTask(){
        setIsFinished(prev => !prev)
        console.log(props)
    }

    // const formatedDate = format(props.taskDate,  "dd MMMM',' u",{
    //     locale: ptBR
    // })

    return(
      <div className={styles.modalTask}>
        <div className={styles.headerModalTask}>
            <div className={styles.finishTaskContainer}>
                <FinishTaskButton
                    onClick={handleFinishedTask}
                    isFinished={isFinished}
                ></FinishTaskButton>
            </div>
            <h1>Task Title</h1>
        </div>
        <hr className={styles.separator}/>
        <div className={styles.contentModalTask}>
            <div className={styles.conclusionContentModal}>
                <p>Data de conclusão</p>
                <div>
                    <CalendarWeekFill color='var(--date-text)'></CalendarWeekFill>
                    <time></time>            
                </div>
            </div>
            <div className={styles.conclusionContentModal}>
                <p>Prioridade</p>
                <datalist>
                    <option>one</option>
                    <option>one</option>
                    <option>one</option>
                </datalist>       
            </div>
        </div>
        <hr className={styles.separator}/>
        <div className={styles.footerModalTask}></div>
        <h1>Task Title</h1>
      </div>  
    )
}
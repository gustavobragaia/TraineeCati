import { ThreeDots } from 'react-bootstrap-icons'
import styles from './ListCards.module.css'
import { TaskCard } from './TaskCard.tsx'

const tasks: {id: number; taskTitle: string; taskDescription: string; taskDate: Date; priorityStatus: string;}[] = [
    {
        id: 1,
        priorityStatus: "Baixa prioridade",
        taskTitle: "Como morar no Japão",
        taskDescription: "Migos the classic",
        taskDate: new Date('2025-05-03 20:00:00'),
    },
    {
        id: 2,
        priorityStatus: "Média prioridade",
        taskTitle: "Como morar no Afeganistão",
        taskDescription: "Migos the classic",
        taskDate: new Date('2025-05-03 20:00:00'),
    },
    {
        id: 3,
        priorityStatus: "Baixa prioridade",
        taskTitle: "Como morar no Jalapão",
        taskDescription: "Migos the classic",
        taskDate: new Date('2025-05-03 20:00:00'),
    }
]

type TaskCard = {
    key: number;
    priorityStatus: string;
    taskTitle: string,
    taskDescription: string,
    taskDate: Date,
}

export function ListCards(){
    return(
        <div className={styles.listCard}>  
            <div className={styles.listHeader}>
                <h6>A fazer</h6>
                <ThreeDots color='white' size={24}></ThreeDots>
            </div>

            <div className={styles.listTasks}>
                {tasks.map(task => {
                    return(
                        <TaskCard
                            key={task.id}
                            priorityStatus={task.priorityStatus}
                            taskTitle={task.taskTitle}
                            taskDescription={task.taskDescription}
                            taskDate={task.taskDate}
                        />
                    )
                })}
            </div>

            <div className={styles.newTaskFooter}></div>
        </div>
    )
}
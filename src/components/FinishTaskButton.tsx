import { Check2 } from "react-bootstrap-icons";
import { useState } from 'react'
import styles from './FinishTaskButton.module.css'

type finishTaskButtonProps = {
    handleFinishedTask: ()=> void;
    finishTask
}
export function FinishTaskButton(props: finishTaskButtonProps){

        const [isFinished, setIsFinished] = useState(false)
        function handleFinishedTask(handleFinishedTask){
            setIsFinished(prev => !prev)
            props.finishTask(key)
        }

    return(
        <button onClick={props.handleFinishedTask} className={styles.finishedTask}>
            <Check2 
                color={isFinished? 'green': 'white'}
                size={24} 
                style={{ borderColor: isFinished? 'green': 'white' , border: '1px dashed #fff', borderRadius: '50%', padding: '3px' }}>
            </Check2>
            <span style={{color: isFinished? 'green': 'white'}}>{isFinished? 'Finalizar': 'Finalizado'}</span>
        </button>
    )
}
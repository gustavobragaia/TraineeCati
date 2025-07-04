import { Check2 } from "react-bootstrap-icons";
import styles from './FinishTaskButton.module.css'

interface FinishTaskButtonProps {
    onClick: () => void;
    isFinished: boolean;
}

export function FinishTaskButton({ onClick, isFinished }: FinishTaskButtonProps){

    return(
        <button onClick={onClick} className={styles.finishedTask}>
            <Check2 
                color={isFinished? 'green': 'white'}
                size={24} 
                style={{ borderColor: isFinished? 'green': 'white' , border: '1px dashed white', borderRadius: '50%', padding: '3px', transition: 'all 0.3s' }}>
            </Check2>
            <span style={{color: isFinished? 'green': 'white'}}>{isFinished? 'Finalizado': 'Finalizar'}</span>
        </button>
    )
}
import { useState } from 'react'
import { ETaskStatus, ITaskData } from '../../interfaces/types'
import styles from "./TodoItem.scss"
interface ITaskItem {
    task: ITaskData
    setToDoListData: any,
    todoListData: ITaskData[]
}
const ToDoItem = (props: ITaskItem) => {
    const [selectState, setSelectState] = useState(false)
    const { task, setToDoListData, todoListData } = props
    const handleSelect = () => {
        setSelectState(!selectState)
        task.status = !selectState ? ETaskStatus.COMPLETED : ETaskStatus.NOT_COMPLETED
    }
    const handleDelete = (id: number) => {
        const updatedToDoList = todoListData.filter((task) => {
            return task.id !== id;
        })
        setToDoListData(updatedToDoList)
        setSelectState(!selectState)
    }

    return (
        <>
            <div className={"todoListItem"} data-testid="todoListItem">

                <input type="checkbox" className={"checkBox"} style={styles.checkBox} checked={selectState} onChange={() => {
                    handleSelect()

                }} />
                <p className={"title"} style={styles.title}>{task.title}</p>
                <p className={task.status === ETaskStatus.COMPLETED ? styles.statusCompleted : styles.statusNotCompleted} style={task.status === ETaskStatus.COMPLETED ? { color: "green" } : { color: "red" }}>{task.status}</p>
                {task.status === ETaskStatus.NOT_COMPLETED ? <p className={"date"} style={styles.date}>{'due on ' + task.dueDate}</p> :
                    <button className={"deleteButton"} onClick={() => { handleDelete(task.id) }}>Delete</button>
                }
            </div >
        </>

    )
}

export default ToDoItem

import { useState } from "react"
import { ADD_TASK, ETaskStatus, ITaskData } from "../../interfaces/types"
import styles from './AddTaskForm.scss'
import cx from "classnames"
import ToDoList from "../todoList/TodoList"

interface IAddTaskForm {
    setToDoListData: any,
    todoListData: ITaskData[]
}
export const AddTaskForm = (props: IAddTaskForm) => {
    const min = new Date();
    const { todoListData, setToDoListData } = props
    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const onClickHandler = () => {

        if (title.length && date.length) {
            setToDoListData([...todoListData, { id: todoListData.length + 1, title: title, dueDate: date, status: ETaskStatus.NOT_COMPLETED }])
            setTitle("")
            setDate("")

        } else {
            alert("Please fill required filled first")
        }

    }

    return (
        <div className={styles.addTaskForm} data-testid={"add-task-form"}>
            <form onSubmit={(e) => { e.preventDefault() }} style={{ position: "relative" }}>
                <div className={styles.div}>
                    <label className={cx(styles.label, "todoInputLabel")} id="todoInputLabel">
                        Add Task
                    </label>

                    <input type="text" id="todInputTitle" className={"todoInputBox"} value={title}
                        placeholder="Add task title" required={true} onChange={(e) => { setTitle(e.target.value) }} />
                </div>
                <div className={"todoDateDiv"}>
                    <label className={cx(styles.label, "todoInputDateLabel")}>
                        Select Due Date
                    </label>
                    <input type="date" className={"todoInputDate"} min={min.toString()} value={date} placeholder="Select due date" required={true} onChange={(e) => { setDate(e.target.value) }} />
                </div>

                <button type="submit" className="todo-task-submit" onClick={() => {
                    onClickHandler()
                }}>{`${ADD_TASK}`}</button>

            </form>
            <ToDoList todoListData={todoListData} setToDoListData={setToDoListData} />
        </div>
    )
}
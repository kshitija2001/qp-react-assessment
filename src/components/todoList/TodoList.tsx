
import { ITaskData } from "../../interfaces/types"
import ToDoItem from "../todoItem/TodoItem"
interface ITodoList {

    setToDoListData: any,
    todoListData: ITaskData[]

}
const ToDoList = (props: ITodoList) => {
    const { setToDoListData, todoListData } = props

    return (
        <>
            {
                todoListData.length ? todoListData.map((task) => <ToDoItem data-testId="toDoItem" task={task} setToDoListData={setToDoListData} todoListData={todoListData} />) : <>
                    <h2 style={{ color: "blue" }}>Great..There are no todo's pending!!!</h2>
                </>
            }
        </>
    )
}

export default ToDoList

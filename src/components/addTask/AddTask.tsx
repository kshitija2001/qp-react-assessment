import { useState } from "react"
import { ITaskData } from "../../interfaces/types"
import { AddTaskForm } from "../addTaskForm/AddTaskForm"

const AddTask = () => {
    const [todoListData, setToDoListData] = useState([] as ITaskData[])
    return (
        <>
            <div>
                <AddTaskForm todoListData={todoListData} setToDoListData={setToDoListData} />
            </div>
        </>
    )
}

export default AddTask
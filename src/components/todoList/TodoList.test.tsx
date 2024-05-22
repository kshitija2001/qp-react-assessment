import { render, screen } from '@testing-library/react'
import ToDoList from './TodoList'
import { ETaskStatus, ITaskData } from '../../interfaces/types'

describe('ToDoList component', () => {
    const mockData: ITaskData[] = [

        {
            "id": 1,
            "title": "task 1",
            "dueDate": "2024-05-10",
            "status": "NOT COMPLETED" as ETaskStatus
        }
    ]
    const iterate = () => {
        let count = 1000
        for (let i = 2; i <= count; i++) {
            const mock: ITaskData = {
                "id": i,
                "title": "task" + i,
                "dueDate": "2024-05-10",
                "status": "NOT COMPLETED" as ETaskStatus
            }
            mockData.push(mock)
        }
        return mockData
    }
    const mockToDoListData: ITaskData[] = iterate()


    it('renders no todo message when todoListData is empty', () => {
        render(<ToDoList todoListData={[]} setToDoListData={jest.fn()} />)
        expect(screen.getByText("Great..There are no todo's pending!!!")).toBeInTheDocument()
    })

    it('renders todo items when todoListData is 1000 times', () => {
        render(<ToDoList todoListData={mockToDoListData} setToDoListData={jest.fn()} />)
        expect(screen.getByText("task1000")).toBeInTheDocument()
    })

})

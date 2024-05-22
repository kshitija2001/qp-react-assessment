import { render, screen, fireEvent } from '@testing-library/react'
import { ETaskStatus, ITaskData } from '../../interfaces/types'
import ToDoItem from './TodoItem'

describe('ToDoItem component', () => {
    const mockTask: ITaskData = {
        id: 1,
        title: 'Task 1',
        status: 'NOT_COMPLETED' as ETaskStatus,
        dueDate: '2024-05-30'
    }

    const mockTodoListData: ITaskData[] = [mockTask]
    const mockSetToDoListData = jest.fn()

    it('calls handleDelete when delete button is clicked', () => {
        render(<ToDoItem task={mockTask} setToDoListData={mockSetToDoListData} todoListData={mockTodoListData} />)
        const deleteButton = screen.getByRole('button', { name: /delete/i })
        fireEvent.click(deleteButton)
        expect(mockSetToDoListData).toHaveBeenCalledWith([])
    })
})

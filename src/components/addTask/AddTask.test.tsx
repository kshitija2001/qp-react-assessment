import { render, screen } from '@testing-library/react'
import AddTask from './AddTask'

describe('AddTask component', () => {
    it('renders AddTaskForm component', () => {
        render(<AddTask />)
        expect(screen.getByTestId('add-task-form')).toBeInTheDocument()
    })
})
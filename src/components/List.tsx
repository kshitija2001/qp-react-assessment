import { useEffect, useState } from 'react'

export const List = () => {
	const [taskData, setTaskData] = useState([])
	const [buttonState, setButtonState] = useState(false)
	const [page, setPage] = useState(1)

	const fetchData = () => {
		console.log('limit==>', page)
		fetch(
			`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${10}`
		)
			.then((response) => response.json())
			.then((data) => {
				setTaskData((prevtaskData) => [...prevtaskData, ...data])
			})
	}
	useEffect(() => {
		console.log('taskData==>', taskData),
			console.log('taskData.length=>', taskData.length),
			taskData.length >= 100
				? setButtonState(true)
				: setButtonState(false)
	}, [taskData])

	return (
		<div>
			<button
				onClick={() => {
					alert('')
					setPage(page + 1)
					fetchData()
				}}
				disabled={buttonState}
			>
				Click Me
			</button>
			{taskData.map((item) => (
				<h1>{item.id}</h1>
			))}
		</div>
	)
}

export default List

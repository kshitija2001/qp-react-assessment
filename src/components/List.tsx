import { useEffect, useState } from 'react'

export const List = () => {
	const [taskData, setTaskData] = useState([] as any)
	const [buttonState, setButtonState] = useState(false)
	const [page, setPage] = useState(1)

	const fetchData = () => {
		console.log('limit==>', page)
		fetch(
			`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${10}`
		)
			.then((response) => response.json())
			.then((data) => {
				setTaskData((prevtaskData:any) => [...prevtaskData, ...data])
				
			})
	}
	const updateButtonState = () =>{
		console.log('taskData==>', taskData)
		console.log('taskData.length=>', taskData.length)
		taskData.length >= 100
		? setButtonState(true)
		: setButtonState(false)
	}
	useEffect(() => {
	
			updateButtonState()
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
			{taskData.map((item:any) => (
				<h1>{item.id}</h1>
			))}
		</div>
	)
}

export default List

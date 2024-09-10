//On button click add last 2 elements sum in an array and add it in array
export const ButtonClick = () => {
	const arr = [1, 4, 3, 5, 6, 7, 9]
	let sum = 0
	const addSum = () => {
		for (let i = arr.length - 2; i < arr.length; i++) {
			sum = sum + arr[i]
		}
		arr.push(sum)
		sum = 0
		console.log('arr=>', arr)
	}
	return (
		<div>
			<button
				onClick={() => {
					addSum()
				}}
			>
				{' '}
				Add Sum{' '}
			</button>
		</div>
	)
}

export default ButtonClick

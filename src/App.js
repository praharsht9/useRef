import { useRef, useState } from 'react';
import './App.css';

function App() {
	const refElement = useRef('');
	console.log(refElement);
	const [name, setName] = useState('Praharsh');

	function Reset() {
		setName('');
		refElement.current.focus();
	}

	const handleInput = () => {
		refElement.current.style.color = 'blue';
	};

	return (
		<div className='App'>
			<h1>useRef</h1>
			<input
				type='text'
				ref={refElement}
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={Reset}>Reset</button>

			{/* 2nd example  */}
			<button onClick={handleInput}>Color Change</button>
		</div>
	);
}

export default App;

import React from 'react';
import './App.css';

function App() {
	const [xAxis, setxAxis] = React.useState(0);
	const [yAxis, setyAxis] = React.useState(0)
	return (
		<div className='main_container'>
			<button className='horizontal' onClick={() => setyAxis(yAxis - 50)} disabled={yAxis === 0}>Up</button>
			<div className='container'>
				<button className='vertical' onClick={() => setxAxis(xAxis - 50)} disabled={xAxis === 0}> Left</button>
				<div className='main'>
				<div className='box' style={{ left: xAxis, top: yAxis }}></div>
				</div>
				<button className='vertical' onClick={() => setxAxis(xAxis + 50)} disabled={xAxis === 450}>Right</button>
			</div>
			<button className='horizontal' onClick={() => setyAxis(yAxis + 50)} disabled={yAxis === 450}>Bottom</button>
		</div>
	);
}

export default App;

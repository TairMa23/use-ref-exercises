import { useRef, useState } from 'react';

export default function ClickCounter() {
	const clickCount = useRef(0);
	const [shownCount, setShownCount] = useState(null);

	function handleClick() {
		clickCount.current += 1;
	}

	return (
		<div>
			<button onClick={handleClick}>Click Me</button>
			<button onClick={() => setShownCount(clickCount.current)}>
				Show Total Clicks
			</button>
			{shownCount !== null && <p>Total clicks: {shownCount}</p>}
		</div>
	);
}

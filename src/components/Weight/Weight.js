import React, { useState } from "react";

export function Weight({ weight }) {
	const [newWeight, setWeight] = useState(weight);

	const weightChangeHandler = (event) => {
		setWeight(event.target.value);
	};

	return (
		<div className="input-weight">
			<input
				type="number"
				defaultValue={newWeight}
				onChange={weightChangeHandler}></input>
		</div>
	);
}

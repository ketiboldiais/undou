import React, { useState } from "react";

export default function NewSet(props) {
	const [enteredReps, setNumberOfReps] = useState("");
	const [enteredWeight, setWeight] = useState("");
	const newRepsHandler = (event) => {
		setNumberOfReps(event.target.value);
	};
	const newWeightHandler = (event) => {
		setWeight(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const set = {
			reps: enteredReps,
			weight: enteredWeight,
		};
		props.onSaveSetData(set);
		setNumberOfReps("");
		setWeight("");
	};

	return (
		<form onSubmit={submitHandler} className="new-set-form">
			<div className="new-reps__control">
				<label>Reps</label>
				<input
					type="number"
					onChange={newRepsHandler}
					value={enteredReps}
				/>
			</div>
			<div className="new-weight__control">
				<label htmlFor="">Weight</label>
				<input
					type="number"
					onChange={() => newWeightHandler}
					value={enteredWeight}
				/>
			</div>
			<button className="add-set-button" type="submit">
				Add Set
			</button>
		</form>
	);
}

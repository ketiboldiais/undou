import React, { useState } from "react";

export default function NewExercise(props) {
	const [enteredExerciseName, setExerciseName] = useState("");
	const [enteredSets, setNumberOfSets] = useState("");
	const [enteredReps, setNumberOfReps] = useState("");
	const [enteredWeight, setWeight] = useState("");
	const exerciseNameHandler = (event) => {
		setExerciseName(event.target.value);
	};
	const newSetHandler = (event) => {
		setNumberOfSets(event.target.value);
	};
	const newRepsHandler = (event) => {
		setNumberOfReps(event.target.value);
	};
	const newWeightHandler = (event) => {
		setWeight(event.target.value);
	};
	const submitHandler = (event) => {
		event.preventDefault();
		const exerciseData = {
			exercise: enteredExerciseName,
			sets: [],
		};
		for (let i = 0; i < enteredSets; i++) {
			const set = { reps: enteredReps, weight: enteredWeight };
			exerciseData.sets.push(set);
		}
		props.onSaveExerciseData(exerciseData);
		setExerciseName("");
		setNumberOfSets("");
		setNumberOfReps("");
		setWeight("");
	};

	return (
		<form onSubmit={submitHandler} className="new-exercise-form">
			<div className="new-exercise__control">
				<label>Exercise</label>
				<input
					type="text"
					onChange={exerciseNameHandler}
					value={enteredExerciseName}
				/>
			</div>
			<div className="new-sets__control">
				<label>Sets</label>
				<input
					type="number"
					onChange={newSetHandler}
					value={enteredSets}
				/>
			</div>
			<div className="new-reps__control">
				<label>Reps</label>
				<input
					type="number"
					onChange={newRepsHandler}
					value={enteredReps}
				/>
			</div>
			<div className="new-weight__control">
				<label>Weight</label>
				<input
					type="number"
					onChange={newWeightHandler}
					value={enteredWeight}
				/>
			</div>
			<button type="submit" className="add-exercise-button">
				Add Exercise
			</button>
		</form>
	);
}

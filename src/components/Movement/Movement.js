import React, { useState } from "react";
import { ExerciseSet } from "../ExerciseSet/ExerciseSet";
import NewSet from "../NewSet/NewSet";
import { ExerciseName } from "../Exercise/ExerciseName";
export function Movement({ exercise, sets, onDeleteExercise }) {
	const [enteredSet, insertSet] = useState(sets);

	const insertSetHandler = (set) => {
		console.log(set);
		insertSet((previousSets) => {
			return [...previousSets, set];
		});
	};

	return (
		<div className="movement-card">
			<div className="movement-card-header">
				<ExerciseName exercise={exercise} />
				<button
					className="delete-exercise-button"
					onClick={() => {
						onDeleteExercise(exercise);
					}}>
					delete exercise
				</button>
			</div>
			<div className="set-reps-weight-header">
				<div>Set</div>
				<div>Reps</div>
				<div>Weight</div>
			</div>
			<div className="exercise-container">
				<ExerciseSet sets={enteredSet} />
				<NewSet onSaveSetData={insertSetHandler} />
			</div>
		</div>
	);
}

import React, { useState } from "react";
import { Movement } from "../components/Movement/Movement";
import NewExercise from "../components/NewExercise/NewExercise";

export function MovementList({ movements }) {
	const [exercises, setExercise] = useState(movements);
	const handleRemoveExercise = (exerciseName) => {
		const newExercises = exercises.filter(
			(item) => item.exercise !== exerciseName,
		);
		setExercise(newExercises);
	};
	const insertExerciseHandler = (exercise) => {
		setExercise((prevExercises) => {
			return [...prevExercises, exercise];
		});
	};
	return (
		<div>
			<div className="movement-container">
				{exercises.map((round) => {
					return (
						<Movement
							key={round.exercise}
							exercise={round.exercise}
							sets={round.sets}
							onDeleteExercise={handleRemoveExercise}
						/>
					);
				})}
			</div>
			<NewExercise onSaveExerciseData={insertExerciseHandler} />
		</div>
	);
}

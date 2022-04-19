import { Exercise } from "./Exercise";
import React from "react";
export function ExerciseSet({ sets }) {
	return sets.map((set, index) => {
		return (
			<Exercise
				key={index}
				setNumber={index}
				reps={set.reps}
				weight={set.weight}
			/>
		);
	});
}

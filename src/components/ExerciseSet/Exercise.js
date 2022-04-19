import React from "react";
import { SetNumber } from "../SetNumber/SetNumber";
import { Reps } from "../Reps/Reps";
import { Weight } from "../Weight/Weight";
export function Exercise({ setNumber, reps, weight }) {
	return (
		<div className="exercise-set">
			<div className="cell-setNumber">
				<SetNumber setNumber={setNumber} />
			</div>
			<div className="cell-reps">
				<Reps reps={reps} />
			</div>
			<div className="cell-weight">
				<Weight weight={weight} />
			</div>
			<button className="delete-button">x</button>
		</div>
	);
}

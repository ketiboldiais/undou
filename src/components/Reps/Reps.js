import React from "react";
export function Reps({ reps }) {
	return (
		<div className="input-reps">
			<input type="number" defaultValue={reps}></input>
		</div>
	);
}

import React from "react";
export function SessionDate({ sessionDate }) {
	const year = sessionDate.getFullYear();
	const month = sessionDate.toLocaleString("en-US", { month: "long" });
	const day = sessionDate.toLocaleString("en-US", { day: "2-digit" });
	return (
		<div className="session-date">
			<span>
				{year} {month} {day}
			</span>
		</div>
	);
}

import "./App.css";
import Session from "./components/Session/Session";

function App() {
	const workout = {
		id: "Session1",
		date: new Date(),
		rounds: [
			{ exercise: "bench press", sets: [{ reps: 0, weight: 0 }] },
			{ exercise: "squat", sets: [{ reps: 5, weight: 285 }] },
			{ exercise: "deadlift", sets: [{ reps: 5, weight: 305 }] },
			{ exercise: "OHP", sets: [{ reps: 5, weight: 125 }] },
			{ exercise: "Curl", sets: [{ reps: 5, weight: 125 }] },
		],
	};
	return (
		<div className="App">
			<Session sessionData={workout} />
		</div>
	);
}

export default App;

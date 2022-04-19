import { MovementList } from "../../MovementList/MovementList";
import { SessionName } from "../SessionName/SessionName";
import { SessionDate } from "../SessionDate/SessionDate";

export default function Session({ sessionData }) {
	return (
		<div className="session-window">
			<div className="session-window-control-bar">
				<SessionName name={sessionData.id} />
				<button className="end-session-button">End Session</button>
			</div>
			<div className="movement-cards-container">
				<div className="meta-data-container">
					<SessionDate sessionDate={sessionData.date} />
				</div>
				<MovementList movements={sessionData.rounds} />
			</div>
		</div>
	);
}

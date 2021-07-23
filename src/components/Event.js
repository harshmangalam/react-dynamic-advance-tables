import { useAppDispatch } from "../context/AppContext";

function Event({ event }) {
  const dispatch = useAppDispatch();
  return (
    <div
      style={{
        borderBottom: "1px solid grey",
        padding: "16px",
        cursor: "pointer",
      }}
      onClick={() => {
        dispatch("ADD_SELECTED_EVENT", event);
        dispatch("SET_ACTIVE_EVENT", event);
      }}
    >
      <p style={{ fontSize: "20px" }}>{event.name}</p>
    </div>
  );
}

export default Event;

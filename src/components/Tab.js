import { useState } from "react";
import { useAppDispatch, useAppState } from "../context/AppContext";

function Tab({ event }) {
  const [showClose, setShowClose] = useState(false);
  const { activeEvent } = useAppState();
  const dispatch = useAppDispatch();

  const handleClose = (e) => {
    e.stopPropagation()
    dispatch("REMOVE_SELECTED_EVENT", event.id);

    if (activeEvent?.id === event.id) {
      dispatch("SET_ACTIVE_EVENT", null);
    }
  };
  return (
    <div
      onMouseOver={() => setShowClose(true)}
      onMouseOut={() => setShowClose(false)}
      onClick={() => dispatch("SET_ACTIVE_EVENT", event)}
      style={{
        padding: "10px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        cursor: "pointer",
        alignItems: "center",
        borderBottom:
          activeEvent?.id === event.id ? "3px solid red" : "3px solid grey",
      }}
    >
      <div style={{ textAlign: "center", fontWeight: "600", fontSize: "20px" }}>
        {event.name}
      </div>

      <button
        style={{
          padding: "4px",
          borderRadius: "20px",
          width: "20px",
          height: "20px",
          display: showClose ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={handleClose}
      >
        &times;
      </button>
    </div>
  );
}

export default Tab;

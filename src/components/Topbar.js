import { useAppState } from "../context/AppContext";
import Tab from "./Tab";

function Topbar() {
  const { selectedEvents } = useAppState();
  return (
    <div
      style={{
        paddingTop: "8px",
        paddingLeft: "4px",
        paddingRight: "4px",
        backgroundColor: "gray",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ width: "25%", paddingLeft: "16px" }}>
        <div style={{ fontWeight: "bold", fontSize: "24px" }}>
          Events Viewer
        </div>
      </div>

      <div style={{ flexGrow: "1", marginLeft: "16px", display: "flex" }}>
        {selectedEvents.map((event) => (
          <div key={event.id} style={{ marginRight: "8px" }}>
            <Tab event={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topbar;

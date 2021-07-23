import { events } from "./data/events";

import Event from "./components/Event";
import Details from "./components/Details";
import Topbar from "./components/Topbar";
import AppContext from "./context/AppContext";
function App() {
  return (
    <AppContext>
      <div style={{ maxWidth: "1200px", margin: "auto" }}>
        <div style={{ paddingTop: "16px", paddingBottom: "16px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "90vh",
              border: "1px solid gray",
            }}
          >
            <Topbar />

            <div
              style={{
                backgroundColor: "white",
                flexGrow: "1",
                display: "flex",
              }}
            >
              <div style={{ border: "1px solid grey", width: "25%",backgroundColor:"lightgray",overflowY:"scroll",height:"85vh" }}>
                {events.map((event) => (
                  <Event event={event} key={event.id} />
                ))}
              </div>

              <div style={{ flexGrow: "1", marginLeft: "16px" }}>
                <Details />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppContext>
  );
}

export default App;

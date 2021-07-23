import { useAppState } from "../context/AppContext";

function Details() {
  const { activeEvent } = useAppState();

  return (
    <div style={{ padding: "16px", position: "relative", height: "100%" }}>
      {activeEvent ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid grey",
          }}
        >
          {activeEvent.data.map((detail) => (
            <div
              key={detail.id}
              style={{
                padding: "8px",
                borderBottom: "1px solid grey",
                display: "flex",
              }}
            >
              <div>
                <p>timestamps</p>
                <p>{detail.timestamps}</p>
              </div>
              <div style={{ marginLeft: "24px" }}>
                <p>_raw</p>
                <p>{detail.raw}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <h4>Select event to get detail</h4>
        </div>
      )}
    </div>
  );
}

export default Details;

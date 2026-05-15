import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div style={{ padding: 40 }}>
      <h1>ALC Scheduler</h1>
      <p>Η εφαρμογή λειτουργεί σωστά 🎉</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

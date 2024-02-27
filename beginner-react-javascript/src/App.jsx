import "./App.css";

{
  /* <div className="container">
      <h1>Very Cool</h1>
    </div>
 */
}
// Above JSX Text Will Be Converted Into Below

/* 
React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", null, "Very Cool")
);
 */
function App() {
  return (
    <div className="container">
      <h1 onClick={() => console.log("test")}>Very Cool</h1>
    </div>
  );
}

export default App;

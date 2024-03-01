import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";

function App() {
  return (
    <main>
      <div className="card">
        <Title />
        <Count />
        <ResetButton />
        <CountButtons />
      </div>
    </main>
  );
}

export default App;

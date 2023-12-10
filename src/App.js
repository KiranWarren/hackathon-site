import "./App.css";
import { AppControls } from "./components/AppControls.jsx";
import QuoteDisplay from "./components/QuoteDisplay.jsx";

function App() {
  return (
    <div className="App">
      <QuoteDisplay />
      <AppControls />
    </div>
  );
}

export default App;

import "./App.css";
import { RegenQuoteButton } from "./components/RegenQuoteButton.jsx";
import QuoteDisplay from "./components/QuoteDisplay.jsx";
import MoodButtonGroup from "./components/MoodButtonGroup.jsx";

function App() {
  return (
    <div className="App">
      <QuoteDisplay />
      <RegenQuoteButton />
      <MoodButtonGroup />
    </div>
  );
}

export default App;

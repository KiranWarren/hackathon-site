import "./App.css";
import { RegenQuoteButton } from "./components/RegenQuoteButton.jsx";
import QuoteDisplay from "./components/QuoteDisplay.jsx";
import MoodButtonGroup from "./components/MoodButtonGroup.jsx";
import { useContext } from "react";
import { MoodContext } from "./contexts/MoodContext.jsx";

function App() {
  let photoUrl = `${process.env.REACT_APP_PHOTO_API_URL}/${window.innerWidth}/${window.innerHeight}`;
  let { mood } = useContext(MoodContext);

  return (
    <div
      className="App"
      id={mood}
      style={
        mood === "Peaceful"
          ? { backgroundImage: `url(${photoUrl})` }
          : { backgroundImage: `url(${photoUrl}?grayscale&blur=5)` }
      }
    >
      <MoodButtonGroup />
      <QuoteDisplay />
      <RegenQuoteButton />
    </div>
  );
}

export default App;

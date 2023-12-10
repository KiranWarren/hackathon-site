import "./App.css";
import { RegenQuoteButton } from "./components/RegenQuoteButton.jsx";
import QuoteDisplay from "./components/QuoteDisplay.jsx";
import MoodButtonGroup from "./components/MoodButtonGroup.jsx";

function App() {
  let height = window.innerHeight;
  let width = window.innerWidth;
  let photoUrl = `${process.env.REACT_APP_PHOTO_API_URL}/${width}/${height}`;
  console.log(photoUrl);
  return (
    <div className="App" style={{ backgroundImage: `url(${photoUrl})` }}>
      <MoodButtonGroup />
      <QuoteDisplay />
      <RegenQuoteButton />
    </div>
  );
}

//  style={{
//   backgroundImage: `url(${photoUrl})`,
// }}

export default App;

import { useContext, useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { MoodContext } from "../contexts/MoodContext";

export default function MoodButtonGroup() {
  const [moodValue, setMoodValue] = useState("1");

  let { setMood } = useContext(MoodContext);

  const moods = [
    { name: "Peaceful", value: "1" },
    { name: "Cranky", value: "2" },
  ];

  return (
    <div id="moodButtons">
      <p>Choose your mood:</p>
      <ButtonGroup>
        {moods.map((mood, index) => (
          <ToggleButton
            key={index}
            id={`mood-${index}`}
            type="radio"
            variant={index % 2 ? "outline-danger" : "outline-success"}
            value={mood.value}
            checked={moodValue === mood.value}
            onChange={(event) => {
              setMoodValue(event.currentTarget.value);
              setMood(mood.name);
            }}
          >
            {mood.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>
  );
}

import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function MoodButtonGroup() {
  const [moodValue, setMoodValue] = useState("1");

  const moods = [
    { name: "Peaceful", value: "1" },
    { name: "Cranky", value: "2" },
  ];

  return (
    <>
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
            onChange={(e) => setMoodValue(e.currentTarget.value)}
          >
            {mood.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </>
  );
}

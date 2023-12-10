import { useState } from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export default function MoodButtonGroup() {
  const [moodValue, setMoodValue] = useState("1");

  const moods = [
    { name: "Peace", value: "1" },
    { name: "Rage", value: "2" },
  ];

  return (
    <ButtonGroup>
      {moods.map((mood, idx) => (
        <ToggleButton
          key={idx}
          id={`mood-${idx}`}
          type="radio"
          variant={idx % 2 ? "outline-danger" : "outline-success"}
          value="mood.value"
          checked={moodValue === mood.value}
          onChange={(e) => setMoodValue(e.currentTarget.value)}
        >
          {mood.name}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

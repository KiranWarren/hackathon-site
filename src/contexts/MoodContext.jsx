import { createContext, useState } from "react";

export const MoodContext = createContext(null);

export function MoodProvider(props) {
  let [mood, setMood] = useState("Peaceful");

  return (
    <MoodContext.Provider value={{ mood, setMood }}>
      {props.children}
    </MoodContext.Provider>
  );
}

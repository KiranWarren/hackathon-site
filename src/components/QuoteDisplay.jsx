// Quote Display
// Fetches a quote from 'Programming Quotes API'

import { useContext } from "react";
import { QuoteContext } from "../contexts/QuoteContext";

export default function QuoteDisplay() {
  let { quote } = useContext(QuoteContext);

  return (
    <div id="quote">
      <p>{quote.quote}</p>
      <p>- {quote.author}</p>
    </div>
  );
}

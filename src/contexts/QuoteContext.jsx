import { createContext, useEffect, useState } from "react";

export const QuoteContext = createContext([]);

export function QuoteProvider(props) {
  let [quote, setQuote] = useState([]);
  let url = process.env.REACT_APP_QUOTE_API_URL;

  const retrieveQuote = async () => {
    let response = await fetch(url);
    let data = await response.json();
    setQuote(data);
  };

  useEffect(() => {
    retrieveQuote();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QuoteContext.Provider value={{ quote, setQuote }}>
      {props.children}
    </QuoteContext.Provider>
  );
}

import { createContext, useEffect, useState } from "react";

export const QuoteContext = createContext([]);

export function QuoteProvider(props) {
  let [quote, setQuote] = useState([]);
  let url = "https://programming-quotesapi.vercel.app/api/random";

  //   const retrieveQuote = async () => {
  //     let response = await fetch(url);
  //     let data = await response.json();
  //     setQuote(data);
  //   };

  // REPLACE WITH API FETCH
  const retrieveQuote = () => {
    let data = { quote: "testtttinnng", author: "me" };
    setQuote(data);
  };
  //----------------------

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

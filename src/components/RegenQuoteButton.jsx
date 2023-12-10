// TODO:
// - Change to Button loading state (bootstrap)

import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { QuoteContext } from "../contexts/QuoteContext";

export function RegenQuoteButton() {
  let { setQuote } = useContext(QuoteContext);
  let [isLoading, setLoading] = useState(false);
  let url = process.env.REACT_APP_QUOTE_API_URL;

  useEffect(() => {
    const retrieveQuote = async () => {
      let response = await fetch(url);
      let data = await response.json();
      setQuote(data);
    };

    if (isLoading) {
      retrieveQuote().then(() => {
        setLoading(false);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  // const retrieveQuote = async () => {
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setQuote(data);
  // };

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
    >
      {isLoading ? "Loading..." : "Generate Quote"}
    </Button>
  );
}

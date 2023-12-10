import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { QuoteContext } from "../contexts/QuoteContext";

export function AppControls() {
  let { quote, setQuote } = useContext(QuoteContext);

  // REPLACE WITH API FETCH
  const retrieveQuote2 = () => {
    let data = { quote: "te2stt2t2tin2n2ng", author: "m222e" };
    setQuote(data);
  };
  //----------------------

  return (
    <Button
      variant="outline-success"
      onClick={() => {
        retrieveQuote2();
      }}
    >
      Generate Quote
    </Button>
  );
}

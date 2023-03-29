import { useEffect, useState } from 'react';
import getQuote from '../components/servises/quotes.service';

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const apiData = async () => {
      const quoteResponse = await getQuote();
      if (!quoteResponse || quoteResponse.error) {
        setError(true);
        setLoading(false);
        return;
      }

      setError(false);
      setLoading(false);
      setQuote(quoteResponse.data[0]);
    };
    apiData();
  }, [setQuote]);

  return (
    <div className="quote-grp">
      {loading && <p>Loading...</p>}
      {error && <p>Something went wrong</p>}
      {quote && (
        <p>
          {quote.quote}
          <br />
          <span className="author">{quote.author}</span>
        </p>
      )}
    </div>
  );
};

export default Quote;

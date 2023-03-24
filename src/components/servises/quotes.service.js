import axios from 'axios';

const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';

const getQuote = async () => {
  const response = await axios.get(url, {
    headers: {
      'X-Api-Key': 'l2nP4o4mgRPlZgv/DtFD9g==R2MWag7mvk7CezeO',
    },
    mode: 'cors',
  });

  const { data, error } = response;
  if (data) return { data };
  if (error) return { error };

  return null;
};

export default getQuote;

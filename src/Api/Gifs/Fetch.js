import ParseResponse from './Format';

export async function FindGifs(search = null) {
  if (!search)
    return {
      error: null,
      data: [],
    };

  const QueryParams = new URLSearchParams({
    api_key: process.env.REACT_APP_GIPHY_KEY,
    q: search,
    limit: 25,
    offset: 0,
    lang: 'en',
  });

  const RequestHTTP = await fetch(
    'https://api.giphy.com/v1/gifs/search?' + QueryParams,
  ).catch((err) => ({ error: err }));

  if (RequestHTTP.error)
    return {
      error: RequestHTTP.error,
      data: [],
    };
  
  const RequestJSON = await RequestHTTP.json();

  return ParseResponse(RequestJSON);
};

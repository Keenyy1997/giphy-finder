export default function ParseGiphyResponse (Response) {

  if (Response.message)
    return {
      error: Response.message,
      data: [],
    };

  return {
    error: null,
    data: Response.data.map((item) => {
      return {
        id: item.id,
        title: item.title,
        image: item.images?.fixed_height_downsampled?.url,
        large_image: item.images?.downsized_large?.url,
      };
    })
  }
};

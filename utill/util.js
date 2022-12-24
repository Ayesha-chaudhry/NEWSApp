export const destructuredPostData = (data = null) => {
  if (!data) return;
  let {
    articles,
    source,
    id,
    name,
    title,
    description,
    urlToImage,
    publishedAt,
  } = data;
  return { title, urlToImage };
};

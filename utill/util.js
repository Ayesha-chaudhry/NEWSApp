import moment from "moment/moment";

export const destructuredPostData = (data = null) => {
  if (!data) return;
  let {
    articles,
    source,
    id,
    name,
    title,
    category,
    description,
    urlToImage,
    publishedAt,
  } = data;
  return { title, urlToImage, category, publishedAt };
};

export const DateConverter = (publishedAt = null) => {
  if(!publishedAt) return
  return moment(publishedAt).fromNow()
}

export const dateFormat = (publishedAt = null) => {
  if(!publishedAt) return
  let mDate = new Date(publishedAt).getDate()
  let mMonth = new Date(publishedAt).getMonth()
  let mYear = new Date(publishedAt).getFullYear() 
  return `${mDate}/${mMonth}/${mYear}` 
}
import { decode } from "html-entities"


export const DecodeTitle = (text = null) => {
    if (!text) return
    return decode(text, { level: 'html5' })
}

export const destructuredPostData = (data = null) => {
    if(!data) return
    let{articles, source, id, name, title, description,  urlToImage, publishedAt} = data
    return{title, urlToImage}
}
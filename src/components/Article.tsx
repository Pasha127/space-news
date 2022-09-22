import { News } from "../Types/News";

interface NewsArticleProps {
    articleData: News;
}

const Article = ({articleData}:NewsArticleProps)=>{
    return(
        <div>
            <div>Title: {articleData.title}</div>
        </div>
    )
}
export default Article;
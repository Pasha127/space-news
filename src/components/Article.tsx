import { Col,Row } from "react-bootstrap";
import { News } from "../Types/News";

interface NewsArticleProps {
    articleData: News;
}

const Article = ({articleData}:NewsArticleProps)=>{
    return(
        <div className="container">
            <Row>           
             <Col><div>Title: {articleData.title}</div></Col>
             <Col className="imageLimit"><img  src={articleData.imageUrl} alt={articleData.title + "image"}/></Col>
             <Col><div>Summary: {articleData.summary}</div></Col>
             <Col><div>Read More:: {articleData.newsSite}</div></Col>
            </Row>            
        </div>
    )
}
export default Article;
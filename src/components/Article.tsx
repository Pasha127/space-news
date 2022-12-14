import { Col,Card,Button } from "react-bootstrap";
import  News  from "../Types/News";

interface NewsArticleProps {
    articleData: News;
}

const Article = ({articleData}:NewsArticleProps)=>{
    const publishDate = () =>{return(new Date(articleData.publishedAt).toLocaleDateString(undefined,{ year: "numeric", month: "long", day: "numeric" }))}
    return(
        
                 
            <Col>
             <Card className="mt-4" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={articleData.imageUrl}alt={articleData.title + "image"} />
              <Card.Body>
                <Card.Title>{articleData.title}</Card.Title>
                <Card.Title>{publishDate()}</Card.Title>
                <Card.Text>
                  {articleData.summary}
                </Card.Text>
                <Button variant="primary">Read More</Button>{/* {articleData.newsSite} */}
              </Card.Body>
             </Card>
            </Col>
             
            
             
    )
}
export default Article;
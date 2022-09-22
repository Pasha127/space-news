import { Col,Card,Button } from "react-bootstrap";
import  News  from "../Types/News";

interface NewsArticleProps {
    articleData: News;
}

const Details = ({articleData}:NewsArticleProps)=>{
    const publishDate = () =>{return(new Date(articleData.publishedAt).toLocaleDateString(undefined,{ year: "numeric", month: "long", day: "numeric" }))}
    const upDate = () =>{if(articleData.updatedAt){return(new Date(articleData.updatedAt).toLocaleDateString(undefined,{ year: "numeric", month: "long", day: "numeric" }))}}
    return(
        
                 
            <Col>
             <Card className="mt-4" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={articleData.imageUrl}alt={articleData.title + "image"} />
              <Card.Body>
                {articleData.featured && <Card.Title>FEATURED:</Card.Title>}
                <Card.Title>{articleData.title}</Card.Title>
                <Card.Title>Article ID:{articleData.id}</Card.Title>
                <Card.Title>Published:{publishDate()}</Card.Title>
                {articleData.updatedAt && <Card.Title>Updated:{upDate()}</Card.Title>}
                {articleData.launches && <Card.Title>Launches: {articleData.launches}</Card.Title>}
                {articleData.events && <Card.Title>Events: {articleData.events}</Card.Title>}
                <Card.Text>
                  {articleData.summary}
                </Card.Text>
                <Button variant="primary">Read More</Button>{/* {articleData.newsSite} */}
              </Card.Body>
             </Card>
            </Col>
             
            
             
    )
}
export default Details;
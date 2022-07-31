import { Card } from "react-bootstrap";

export default function Pajinas(props){
 
    return(



        <Card className="bg-dark text-white    imagefather " data-aos="fade-up"     data-aos-delay={props.delay} >
  <Card.Img src={props.img} alt="card image" className="image" />
  <div className={props.dive}><strong>In Process</strong></div>
  <Card.ImgOverlay  className="imagefather" >
    <Card.Title className="objectspajes" >{props.title}</Card.Title>
    <Card.Text>
  
    </Card.Text>
    <Card.Text> 
    <a href={props.src} ><button variant="outline-primary"className="objectspajes"  >{props.text}</button></a>
    </Card.Text>
  </Card.ImgOverlay >
</Card>
    );
}

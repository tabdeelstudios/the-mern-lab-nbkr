import Card from 'react-bootstrap/Card';

function CourseCard(props) {
    return (
        <>
            <Card>
                <Card.Img src={props.courseImg} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>Rs. {props.price}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default CourseCard;

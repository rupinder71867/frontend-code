import { Button, Row, Col} from 'react-bootstrap';
const Reservation = () => {
    return (
        <Row>
        <Col><h4>Reservation Tags</h4></Col>
        <Col><Button variant="primary">
        Add Category
      </Button></Col>
      </Row>
    )
}
export default Reservation;
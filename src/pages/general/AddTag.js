import { Button, Form, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

const AddTag = (props) => {
    const { tagColor } = props;
    const [tag, setTag] = useState([]);
    const [label, setLabel] = useState('');
    const [validated, setValidated] = useState(false);

    const handleTag = () => {
        setTag(tag => [...tag, label]);
        setLabel('');
    }
    const handleChange = (evt) => {
        setLabel(evt.target.value);
    }
    const removeTag = (arrIndex) => {
        setTag([
            ...tag.slice(0, arrIndex),
            ...tag.slice(arrIndex + 1)
        ]);

    }
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            setTag(tag => [...tag, label]);
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
        setLabel('');
    }
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mt-2">

                    <Col className="col-md-6">
                        <Form.Control required type="text" name="title" value={label} onChange={handleChange} placeholder="Enter tag" />
                    </Col>
                    <Col className="col-md-4">
                        <Button type="submit">Add Tag</Button>

                    </Col>

                </Row>
            </Form>
            <Row style={{ color: 'grey' }} className="mt-2">
                {tag.map((x, i) =>
                    <Col className="col-md-2 tag-item mt-2 mx-2">
                        <Row>
                            <Col className="md-6">{x}</Col>
                            <Col className="md-6" align="Right"><FontAwesomeIcon onClick={() => removeTag(i)} style={{ cursor: 'pointer' }} icon={faClose} /></Col>
                        </Row>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default AddTag;


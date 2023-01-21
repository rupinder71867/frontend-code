import {Button, Form, Row, Col} from 'react-bootstrap';
import React, { useState } from 'react';
const AddTag = (props) => {
    const {tagColor} = props;
    const [tag,setTag] = useState([]);
    const [label, setLabel] = useState('');
    const handleTag = () => {
        setTag(tag => [...tag,label] );
        setLabel('');
    }
    const handleChange = (evt) => {
        setLabel(evt.target.value);
    }
    return (
        <>
         <Form>
        <Row className="mt-2">
           
          <Col className="col-md-6">
            <Form.Control type="text" name="title" value={label} onChange={handleChange} placeholder="Enter tag" />
          </Col>
          <Col className="col-md-4">
          <Button variant="primary" onClick={handleTag}>
            Add Tag
          </Button>
          </Col>
          
        </Row>
        </Form>
        <Row style={{color:tagColor}} className="mt-2">
                {tag.map((x, i) =>
                  <Col className="col-md-2">{x}</Col>

                )}
        </Row>
        </>
    )
}

export default AddTag;
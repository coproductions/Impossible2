import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Item from './Item.jsx';

const ItemList = ({content}) => (
  <Row className="show-grid">
    <Col xs={12}>
       <Item/>
     </Col>
  </Row>
);

export default ItemList;
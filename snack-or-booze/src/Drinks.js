import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import './Drinks.css';

const Drinks = () => {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Drinks Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
};

export default Drinks;

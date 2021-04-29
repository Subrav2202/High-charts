import React from "react";
import { Col, Card } from "react-bootstrap";

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'; /////// HighCharts Wrapper. /////////


function Cards({val}) {
  const options = {
    chart: {
      type:val,
      zoomType: 'xy',
      options3D:{
        alpha:1,
        beta:10,
        depth:1000,
      }
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 3, 6]
      }
    ]
  };
  return (
    <>
      <Col md={4}>
        <Card>
          <Card.Body>
          <HighchartsReact highcharts={Highcharts} options={options} />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Cards;

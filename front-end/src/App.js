import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabPane from 'react-bootstrap/TabPane'
function App() {

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />

      <header className="App-header">

      </header>

      <section>
      <Container>
        <Row>
          <Tabs defaultActiveKey="dashboard" id="uncontrolled-tab-example">
            <Tab eventKey="dashboard" title="dashboard"></Tab>
            <Tab eventKey="poi" title="สถานที่ท่องเที่ยวยอดนิยม"></Tab>
            <Tab eventKey="trip" title="ทริปยอดนิยม"></Tab>
          </Tabs>
        </Row>
      </Container>
      </section>
    </div>
  );
}

export default App;

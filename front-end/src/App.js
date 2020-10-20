import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
//import TabPane from 'react-bootstrap/TabPane'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '800px',
  height: '500px'
};

export class MapContainer extends Component {

  render() {
    return (
      <div className="App">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
   
      <header className="App-header">
        <Container fluid>
        <Row>
          <Tabs defaultActiveKey="dashboard" className="tabsetting">
            <Tab eventKey="dashboard" title="Dashboard"></Tab>
            <Tab eventKey="poi" title="สถานที่ท่องเที่ยวยอดนิยม"></Tab>
            <Tab eventKey="trip" title="ทริปยอดนิยม"></Tab>
          </Tabs>
        </Row>
        </Container>
      </header>

      <section className="App-section">
      <Container fluid>
        <Row style={{marginLeft:40,marginTop:40}}>
          <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat:  13.736717,
              lng:  100.523186
            }
          }
          />
        </Row>
      
      </Container>
    
  
     
      </section>
    </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDf8sqiZUNBWHSQkw3Tqpt5R6LIb4kLdbc'
})(MapContainer);


/*
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

      <section className="App-section">
      <Container>
        <Row>
          <Tabs defaultActiveKey="dashboard" className="tabsetting">
            <Tab eventKey="dashboard" title="Dashboard"></Tab>
            <Tab eventKey="poi" title="สถานที่ท่องเที่ยวยอดนิยม"></Tab>
            <Tab eventKey="trip" title="ทริปยอดนิยม"></Tab>
          </Tabs>

        </Row>
        <Row></Row>

      </Container>
      </section>

    </div>
  );
}

export default App; */

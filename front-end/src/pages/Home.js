import React , {Component} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
//import TabPane from 'react-bootstrap/TabPane'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from "react-router-bootstrap";

const mapStyles = {
  width: '800px',
  height: '500px',
  marginTop: '20px',
  marginLeft: '-150px'
};

export class MapContainer extends Component {
  render() {
    return (
      <div className="Home">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
   
      <header className="App-section">
            <h5>dashboard page</h5>
      </header>
   
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

/*
import React,{Component} from "react";
import { BrowserRouter as Router, Route , Switch } from "react-router-dom";
import Poi from "./pages/Poi";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (      
       <Router>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Poi} exact/>
           </Switch>
        </div> 
      </Router>
    );
  }
}
 
export default App;
*/
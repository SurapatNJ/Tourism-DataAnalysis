import React , {Component, Fragment, useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import InputGroup from 'react-bootstrap/InputGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import { Typeahead } from 'react-bootstrap-typeahead';
import options from './data';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Scrollbars } from 'react-custom-scrollbars';

const mapStyles = {
  width: '825px',
  height: '500px',
  marginTop: '20px',
  marginLeft: '80px'
};


const PlaceSequence = () => {
  const ref = useRef();
  return (
    <Fragment>
      <Typeahead
        clearButton
        id="placeSequence"
        labelKey="pname"
        multiple
        options={options}
        placeholder="ชื่อสถานที่ (จำนวน5สถานที่)"
        ref={ref}
        style={{width:680}}
      />
    </Fragment>
  );
};


class SelectDay extends Component{
  constructor(){
      super();
      this.state = {
          day:null,
      }
      this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
      this.setState({
          day: event.target.value
      });
  }
  render(){
      return(
              <select className="form-control" onChange={this.handleInputChange}>
                <option selected>Select Day</option>
                <option value="1">Monday</option>
                <option value="2">Tuesday</option>
                <option value="3">Wednesday</option>
                <option value="4">Thursday</option>
                <option value="5">Friday</option>
                <option value="6">Saturday</option>
                <option value="7">Sunday</option>
                </select>
      )  
  }
}

class SelectTime extends Component{
  constructor(){
      super();
      this.state = {
          time:null,
      }
      this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
      this.setState({
          time: event.target.value
      });
  }
  render(){
      return(
              <select className="form-control" onChange={this.handleInputChange}>
                <option selected>Select Time</option>
                <option value="1">00:00-01:00</option>
                <option value="2">01:00-02:00</option>
                <option value="3">02:00-03:00</option>
                <option value="4">03:00-04:00</option>
                <option value="5">04:00-05:00</option>
                <option value="6">05:00-06:00</option>
                <option value="7">06:00-07:00</option>
                <option value="8">07:00-08:00</option>
                <option value="9">08:00-09:00</option>
                <option value="10">09:00-10:00</option>
                <option value="11">10:00-11:00</option>
                <option value="12">11:00-12:00</option>
                <option value="13">12:00-13:00</option>
                <option value="14">13:00-14:00</option>
                <option value="15">14:00-15:00</option>
                <option value="16">15:00-16:00</option>
                <option value="17">16:00-17:00</option>
                <option value="18">17:00-18:00</option>
                <option value="19">18:00-19:00</option>
                <option value="20">19:00-20:00</option>
                <option value="21">20:00-21:00</option>
                <option value="22">21:00-22:00</option>
                <option value="23">22:00-23:00</option>
                <option value="24">23:00-00:00</option>
                </select>
      )  
  }
}


export class MapContainer extends Component {
  render() {
    return (
      <div className="Trip">
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
   
      <header className="App-header">
      </header>

      <section className="App-section">
      <Container fluid style={{marginTop:50}}>
        <Row style={{marginTop:20,marginLeft:95}} noGutters={true}>
          <Col md="auto">
            <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text style={{backgroundColor:"#525B76",color:"#FFFFFF"}}>Point of Interest</InputGroup.Text>
                </InputGroup.Prepend>
                 <PlaceSequence/>
            </InputGroup>
          </Col>
          <Col md="auto">
            <InputGroup style={{width:400}}>
                <InputGroup.Prepend>
                  <InputGroup.Text style={{backgroundColor:"#525B76",color:"#FFFFFF"}}>Day</InputGroup.Text>
                </InputGroup.Prepend>
                <SelectDay/>
                {/* -------------------------------------- */ }
                <InputGroup.Prepend>
                  <InputGroup.Text style={{backgroundColor:"#525B76",color:"#FFFFFF"}}>Time</InputGroup.Text>
                </InputGroup.Prepend>
                <SelectTime/>
            </InputGroup>
          </Col>
          <Col>
                <InputGroup.Append>
                  <Button variant="secondary">Submit</Button>{' '}
                </InputGroup.Append>
          </Col>
      
        </Row>
        <Row>
          <Col md="auto">
            <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            disableDefaultUI ={true}
            scrollwheel={false}
            disableDoubleClickZoom = {true}
            draggable={false}
            initialCenter={
              {
                lat:  13.736717,
                lng:  100.523186
              }
            }
            />

          </Col>
          <Col style={{marginLeft:780}} md="auto">
            <Jumbotron style={{backgroundSize:'cover' , backgroundColor:'#525B76', marginTop:20, marginLeft:150 , width:450}}>
                <CardDeck style={{ width: '450px',marginLeft:-32,marginTop:-50}}> 
                  <Card border="primary">
                    <Card.Header style={{textAlign:"center",fontSize:20}}>ทริปยอดนิยม</Card.Header>
                    <Scrollbars style={{ width: 400, height: 400 }}>
                    <Card.Body>
                      <ListGroup variant="flush" style={{fontSize:14}}>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="warning"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="warning"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="warning"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="warning"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="warning"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                    </Scrollbars>
                    <Card.Footer>
                      <small className="text-muted"></small>
                    </Card.Footer>
                  </Card>
                </CardDeck>
                </Jumbotron>
          </Col>
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


 

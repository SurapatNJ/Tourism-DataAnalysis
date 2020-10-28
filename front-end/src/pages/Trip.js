import React , {Component, Fragment, useRef } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Form from 'react-bootstrap/Form';
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
  marginLeft: '-150px'
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
        placeholder="เลือกสถานที่ (จำนวน5สถานที่)"
        ref={ref}
      />
    </Fragment>
  );
};




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
      <Container>
        <Row style={{marginTop:20}} noGutters={true}>
          <Col md={8}>
            <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Point of Interest</InputGroup.Text>
                </InputGroup.Prepend>
                 <PlaceSequence/>
            </InputGroup>
          </Col>
          <Col md={2.5}>
            <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Time</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="time" name="time"></Form.Control>
            </InputGroup>
          </Col>
          <Col>
                <InputGroup.Append>
                  <Button variant="secondary">Submit</Button>{' '}
                </InputGroup.Append>
          </Col>
      
        </Row>
        <Row>
          <Col>
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

          </Col>
          <Col>
            <Jumbotron style={{backgroundSize:'cover' , backgroundColor:'#525B76', marginTop:20, marginLeft:150 , width:450}}>
            
                <CardDeck style={{ width: '450px',marginLeft:-32,marginTop:-50}}> 
                  <Card border="primary">
                    <Card.Header style={{textAlign:"center"}}>Tourist Attraction</Card.Header>
                    <Scrollbars style={{ width: 400, height: 400 }}>
                    <Card.Body>
                      <ListGroup variant="flush" style={{fontSize:14}}>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="success"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="success"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="success"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="success"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
                        <ListGroup.Item>จุดเริ่มต้น: <br></br>จุดปลายทาง: <br></br>เวลารวม: <br></br>ระยะทางรวม: <br></br>คะแนนความนิยม: <ProgressBar variant="success"animated now={45} /> <br></br><Card.Link href="#">เลือกเส้นทาง</Card.Link></ListGroup.Item>
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


 
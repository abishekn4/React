import React from 'react';
import './App.css';
import {Button, Form, Container,Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    
    
    <div className="Apps">
      <div>
     <nav class="navbar navbar-expand-lg navbar-light navbar-background">
  <a class="navbar-brand" href="#">Xworkz</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="https://www.x-workz.in/">Home 
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.x-workz.in/about-X-workz-trainers-courses.html">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://www.x-workz.in/courses-available-at-X-workz-Rajajinagar.html">Courses</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
</div>
     
       

      <header className="App-header">
       


        <h1 className="title">Enquiry Form</h1>
        
        <Container className='class-container'>
          <Form>
            <Row>
              <Col className='coloums'>
                <Form.Group controlId="formName">
                  <Form.Label></Form.Label>
                  <Form.Control type="text" placeholder='Name' />
                </Form.Group>
              </Col>
              <Col className='coloums'>
                <Form.Group controlId="formEmail">
                  <Form.Label></Form.Label>
                  <Form.Control type="email" placeholder='Email' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className='coloums'>
                <Form.Group controlId="formPhonenumber">
                  <Form.Label></Form.Label>
                  <Form.Control className='class-control' type="tel" placeholder='Phone Number' />
                </Form.Group>
              </Col>
              <Col className='coloums'>
                <Form.Group controlId="formQualification">
                  <Form.Label></Form.Label>
                  <Form.Control className='class-control' type="text" placeholder='Qualification' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col className='coloums'>
                <Form.Group controlId="formName">
                  <Form.Label></Form.Label>
                  <Form.Control className='class-control' type="number" placeholder='Graduation year' />
                </Form.Group>
              </Col>
              <Col className='coloums'>
                <Form.Group controlId="formPlace">
                  <Form.Label></Form.Label>
                  <Form.Control className='class-control' type="text" placeholder='Place' />
                </Form.Group>
              </Col>
            </Row>



            

          </Form>
          <br></br>

          <center>
          <input type="submit" id="submit-btn" name="Submit" alt="Sumbmit" value="Submit" />
          </center>
         
        </Container>
       



      </header>
    </div>
  );
}

export default App;

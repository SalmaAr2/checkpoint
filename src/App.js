import { Navbar, Container, Card, Row,Col , Nav } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar bg="primary" className="justify-content-between">
      
            <Navbar.Brand href="#home" className="text-light" >MY APP</Navbar.Brand>
         
            <Nav >
              <Nav.Link href="#home" className="text-light">Home</Nav.Link>
              <Nav.Link href="#about" className="text-light">About</Nav.Link>
              <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
            </Nav>
       
   
      </Navbar>
      <Container className="mt-3 mb-4 flex ">
        <h1 className="text-center ">
          <span>React</span>
          <span>ES6 Array</span> <span>Methods</span>
        </h1> <br />

        <div className=" d-flex  justify-content-evenly ">
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-center text-primary">Sort()</Card.Title>
          <Card.Text>
          Sorts the elements of an array in place and returns the sorted
                array. The default sort order is built upon converting the
                elements into strings, then comparing their sequences of UTF-16
                code units values.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card border="success" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title className="text-center text-success">Map()</Card.Title>
          <Card.Text>
          Creates a new array with the results of calling a provided
                funtion on every element in the calling array.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="danger" style={{ width: '18rem' }}>
    
        <Card.Body>
          <Card.Title className="text-center text-danger">Filter()</Card.Title>
          <Card.Text>
          Creates a new array with all elements that pass the test
                implemented by the provided function.
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      </Container>
    </>
  );
};

export default App;

import './aboutme.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import image from './2018-12-13 18.15.15_1.jpeg'


const Aboutme = ()=>{

    return (
        <>
        <Card className=" w-50 p-3 mx-auto align-items-center" style={{marginTop:"100px"}}>
          <Card.Body>
            <Card.Title>About Me</Card.Title>
            <Card.Text className='h6'>
            Hi, I'm Aadish Sharma, a recent graduate from IIT Delhi, carving my way into computer sciences.I am also an open-source enthusiast and maintainer.I learned a lot from the open-source community and I love how collaboration and knowledge sharing happened through open-source.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* <Card className=" w-50 p-3 mx-auto align-items-center" style={{marginTop:"100px"}}>
        <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Card.Body>
      </Card> */}
        </>
        
      );
}

export default Aboutme;
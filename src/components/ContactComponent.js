import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors,actions,Form } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit = (values) => {
        console.log('Current feedback is:' + JSON.stringify(values));
        alert('Current feedback is:' + JSON.stringify(values));
        this.props.postFeedback(this.props.id,values.firstname,values.lastname,values.telnum,values.email.values.contactType, values.message, values.date);
        //this.props.resetFeedbackForm();
    };
    
    render() {
        return (
            <div className="containter">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our address</h5>
                        <address>
                            121, Cleat water Bay road<br />
                            Kowloon<br />
                            Soeul, South Korea<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>

                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First name: </Label>
                                <Col md={10}>
                                    <Control.text model=".firstname"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators = { { 
                                            required,minLength : minLength(3), maxLength: maxLength(15)
                                         }}
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model = ".firstname"
                                    show="touched"
                                    messages = { { 
                                        required:'Required',
                                        minLength: 'Must be greater than 2 character', maxLength: 'Must be 15 character or less'
                                     }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last name: </Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" 
                                    id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators = { { 
                                            required,minLength : minLength(3), maxLength: maxLength(15)
                                         }}
                                    
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model = ".lastname"
                                    show="touched"
                                    messages = { { 
                                        required:'Required',
                                        minLength: 'Must be greater than 2 character', maxLength: 'Must be 15 character or less'
                                     }}
                                    />
                                    
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact tel: </Label>
                                <Col md={10}>
                                    <Control.text model=".telnum"
                                        id="telnum" className="form-control"
                                        name="telnum"
                                        placeholder="Contact tel"
                                    
                                        validators = { { 
                                            required,minLength : minLength(3), maxLength: maxLength(15),
                                            isNumber
                                         }}
                                    
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model = ".telnum"
                                    show="touched"
                                    messages = { { 
                                        required:'Required',
                                        minLength: 'Must be greater than 2 character', maxLength: 'Must be 10 character or less',
                                        isNumber: 'Must be a number'
                                     }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email: </Label>
                                <Col md={10}>
                                    <Control.text model=".email"
                                        id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators = { { 
                                            required, validEmail
                                         }}
                                    />
                                    <Errors 
                                    className="text-danger"
                                    model = ".email"
                                    show="touched"
                                    messages = { { 
                                        required:'Required',
                                        validEmail: 'Invaild email address'
                                     }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                name="agree" className="form-check-input"
                                            
                                            />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType"
                                        name="ContactType" className="form-control"
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>

                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Feedback: </Label>
                                <Col md={10}>
                                    <Control.textarea model=".message"
                                        id="message" rows="12" className="form-control"
                                    
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

/*class Contact extends Component {

    constructor(props) {
        super(props);
        /* this.state = {
             firstname: '',
             lastname: '',
             telnum: '',
             email: '',
             agree: false,
             contactType: 'Tel.',
             message: '',
             touched: {
                 firstname: false,
                 lastname: false,
                 telnum: false,
                 email: false
             }
         }
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleInputChange = this.handleInputChange.bind(this);
        //this.handleBlur = this.handleBlur.bind(this);
    }
    /*handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });

    }
    handleSubmit(value) {
        console.log('Current state is:' + JSON.stringify(this.value));
        alert('Current state is:' + JSON.stringify(this.value));
        //event.preventDefault();
    }
    /* handleBlur = (field) => (evt) => {
         this.setState({
             touched: { ...this.state.touched, [field]: true }
         });
     }*/

    /*  validate(firstname,lastname,telnum,email) {
          const errors = {
              firstname: '',
              lastname: '',
              telnum: '',
              email: ''
          };
          if(this.state.touched.firstname && firstname.length < 30)
          errors.firstname ='First name should be >= 3 characters';
          else if(this.state.touched.firstname && firstname.length > 10)
          errors.firstname = 'First name should be <= 10 character'
  
          if(this.state.touched.lastname && lastname.length < 30)
          errors.firstname ='lastname should be >= 3 characters';
          else if(this.state.touched.lastname && lastname.length > 10)
          errors.firstname = 'lastname should be <= 10 character'
  
          const reg = /^\d+$/;
          if(this.state.touched.telnum && !reg.test(telnum))
          errors.telnum = 'Tel number should contain only number'
          else if(telnum.length < 10 || telnum.length >10)
          errors.telnum = 'Enter proper 10 digit number'
  
          const emailreg = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
          if(this.state.touched.email && !emailreg.test(email))
          errors.telnum = 'Enter valid email';
  
          return errors;
  
      }
    render() {
        /* const errors = this.validate(this.state.firstname,this.state.lastname, this.state.email, this.state.telnum)
        return (
            <div className="containter">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our address</h5>
                        <address>
                            121, Cleat water Bay road<br />
                            Kowloon<br />
                            Soeul, South Korea<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>

                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First name: </Label>
                                <Col md={10}>
                                    <Control.text model=".firstname"
                                        id="firstname"
                                        name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                    // value={this.state.firstname}
                                    // valid={errors.firstname === ''}
                                    // invalid={errors.firstname !== ''}
                                    // onBlur={this.handleBlur('firstname')}
                                    // onChange={this.handleControl.textChange}
                                    />
                                    {/* <FormFeedback>{errors.firstname}</FormFeedback> }
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last name: </Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" 
                                    id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                    // value={this.state.lastname}
                                    // valid={errors.lastname === ''}
                                    // invalid={errors.lastname !== ''}
                                    // onBlur={this.handleBlur('lastname')}
                                    // onChange={this.handleInputChange} 
                                    />
                                    {/* <FormFeedback>{errors.lastname}</FormFeedback> }
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact tel: </Label>
                                <Col md={10}>
                                    <Control.text model=".telnum"
                                        id="telnum" className="form-control"
                                        name="telnum"
                                        placeholder="Contact tel"
                                    // value={this.state.telnum}
                                    // valid={errors.telnum === ''}
                                    // invalid={errors.telnum !== ''}
                                    // onBlur={this.handleBlur('telnum')}
                                    // onChange={this.handleInputChange} 
                                    />
                                    {/* <FormFeedback>{errors.telnum}</FormFeedback> }
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email: </Label>
                                <Col md={10}>
                                    <Control.text model=".email"
                                        id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                    // value={this.state.email}
                                    // valid={errors.email === ''}
                                    // invalid={errors.email !== ''}
                                    // onBlur={this.handleBlur('email')}
                                    // onChange={this.handleInputChange} 
                                    />
                                    {/* <FormFeedback>{errors.email}</FormFeedback> }
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 6, offset: 2 }}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree"
                                                name="agree" className="form-check-input"
                                            // checked={this.state.agree}
                                            //     onChange={this.handleInputChange} 
                                            />{' '}
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Control.select model=".contactType"
                                        name="ContactType" className="form-control"
                                    // value={this.state.contactType} onChange={this.handleInputChange}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>

                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Feedback: </Label>
                                <Col md={10}>
                                    <Control.textarea model=".message"
                                        id="message" rows="12" className="form-control"
                                    // name="message"
                                    // placeholder="First Name" 
                                    // value={this.state.message}
                                    // onChange={this.handleInputChange}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send feedback
                                    </Button>
                                </Col>

                            </Row>
                        </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}*/
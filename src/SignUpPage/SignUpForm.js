import React, {Component} from 'react'
import {Link} from 'react-router-dom'



class SignUpForm extends Component {

    constructor (){
        super();
        this.state = {
            fullname: '',
            username: '',
            email: '',
            password: '',
            phone: '',
            hasAgreed: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render(){
        return (
            <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" htmlFor="fullname">Full Name</label>
                <input type="text" id="fullname" className="FormField__Input" placeholder="Enter your full name" name="fullname" value={this.state.fullname} onChange={this.handleChange}/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="username">User Name</label>
                <input type="text" id="username" className="FormField__Input" placeholder="Enter your user name" name="username" value={this.state.username} onChange={this.handleChange}/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange}/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange}/>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="phone">Phone</label>
                <input type="number" id="phone" className="FormField__Input" placeholder="Enter your phone" name="phone" value={this.state.phone} onChange={this.handleChange}/>
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" value={this.state.hasAgreed}  onChange={this.handleChange}/> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button type="submit" className="FormField__Button mr-20">Sign Up</button> <Link to="/sign-in" className="FormField__Link">I'm already member</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignUpForm;
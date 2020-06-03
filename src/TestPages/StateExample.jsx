import React, {Component} from 'react'


class StateExample extends Component{
    constructor() {  
        super();        
        this.state = { displayBio: false };  
        console.log('Component this', this);  
        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);  
    }

    toggleDisplayBio(){  
        this.setState({displayBio: !this.state.displayBio});  
    }  



    render() {  
        return (  
            <div>  
                <h1>Welcome to Example of State!!</h1>  
                {  
                    this.state.displayBio ? (   
                        <div>  
                            <p><h4>The state is an updatable structure that is used to contain data or information about the component. The state in a component can change over time. The change in state over time can happen as a response to user action or system event. A component with the state is known as stateful components. It is the heart of the react component which determines the behavior of the component and how it will render. They are also responsible for making a component dynamic and interactive.
                                   <br/>
                                    A state must be kept as simple as possible. It can be set by using the setState() method and calling setState() method triggers UI updates. A state represents the component's local state or information. It can only be accessed or modified inside the component or by the component directly. To set an initial state before any interaction occurs, we need to use the getInitialState() method</h4></p>  
                            <button onClick={this.toggleDisplayBio}> Show Less </button>  
                      </div>  
                        ) : (  
                            <div>  
                                <button onClick={this.toggleDisplayBio}> Read More </button>  
                            </div>  
                        )  
                }  
           </div>  
      )  
  }  
}
export default StateExample;
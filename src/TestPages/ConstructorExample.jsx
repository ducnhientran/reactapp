import React, {Component} from 'react'



class ConstructorExample extends Component{

    render(){
        return (

            <div>
                <h1>What is Constructor?</h1>
                <h3>
                    The constructor is a method used to initialize an object's state in a class. It automatically called during the creation of an object in a class.

                    The concept of a constructor is the same in React. The constructor in a React component is called before the component is mounted. When you implement the constructor for a React component, you need to call super(props) method before any other statement. If you do not call super(props) method, this.props will be undefined in the constructor and can lead to bugs.</h3>
            </div>
        );
    };
}

export default ConstructorExample;
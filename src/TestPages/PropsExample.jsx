import React, {Component} from 'react'

class PropsExample extends Component{

    constructor(props){
        super(props);
        this.state ={
            name: 'State && Prop'
        }

    }


    render() {     
        return (  
            <div>  
                <div>
                    <h1>Default Props Example</h1>  
                    <h3>Welcome to {this.props.name}</h3>   
                    <p>Props stand for "Properties." They are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from one component to other components. It is similar to function arguments. Props are passed to the component in the same way as arguments passed in a function.</p>          
                </div>  
                <div>
                        <PropsAndState abc = {this.state.name} />
                </div>                
            </div>  
          );  
      } 
}

PropsExample.defaultProps = {  
    name: "Props"  
 } 



class PropsAndState extends Component {

    render(){
        return (
            <div>  
               <h1>State And Props Example</h1>  
              <h3>Welcome to {this.props.abc}</h3>   
              <p>It is possible to combine both state and props in your app. You can set the state in the parent component and pass it in the child component using props. It can be shown in the below example.</p>          
            </div>    
        );
    }
}


export default PropsExample;
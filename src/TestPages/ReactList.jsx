import React, { Component } from 'react'

import ReactDOM from 'react-dom';   

class ReactList extends Component
{
    constructor(props){
        super(props);
        
         const myLists = ['Peter', 'Sachin', 'Kevin', 'Dhoni', 'Alisa'];
        const listItems = myLists.map((myList) =>  
            <li>{myList}</li>  
         );
     
     this.state = {
        listItems : listItems
     };
    }

     
    render(){
        return (  
            <div>  
                <h2>Rendering Lists inside component</h2>  
                <ul>{this.state.listItems}</ul>  
            </div>  
        ); 
    };
}

export default ReactList;
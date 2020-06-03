import React, {Component} from 'react'


class Test1 extends Component{


    constructor() {  
        super();  
        this.state = {  
           data:   
           [  
              {             
                 "name":"Abhishek"             
              },  
              {            
                 "name":"Saharsh"             
              },  
              {    
                 "name":"Ajay"          
              }  
           ]  
        }  
     }  


    // render (){
    //     return(
    //     <div>
    //         <h1>TEST1</h1>
    //     </div>
    //     );
    // }


    // render(){  
    //     return(  
    //        <div>  
    //            <h1>JavaTpoint</h1>  
    //             <h2>Training Institutes</h2>  
    //            <p data-demoAttribute = "demo">This website contains the best CS tutorials.</p>  
    //        </div>  
    //     );  
    //  }  

    // render(){  
    //     return(  
    //        <div>  
    //           <h1 className = "hello" >{25+20}</h1>  
    //        </div>  
    //     );  
    //  }  


    // render() {  
    //     return (  
    //        <div>  
    //           <First/>  
    //           <Second/>  
    //        </div>  
    //     );  
    //  }  

     render() {  
        return (  
           <div>  
              <StudentName/>  
              <ul>            
                  {this.state.data.map((item) => <ListName data = {item} />)}           
              </ul>  
           </div>  
        );  
     }  

}


class First extends Component {  
    render() {  
       return (  
          <div>  
             <h1>First</h1>  
          </div>  
       );  
    }  
 }  
 class Second extends Component {  
    render() {  
       return (  
          <div>  
             <h2>Second</h2>  
          </div>  
       );  
    }  
 }  


 class StudentName extends React.Component {  
    render() {  
       return (  
          <div>  
             <h1>Student Name Detail</h1>  
          </div>  
       );  
    }  
 }  
 class ListName extends React.Component {  
    render() {  
       return (  
          <ul>            
             <li>{this.props.data.name}</li>   
          </ul>  
       );  
    }  
 }  



export default Test1;
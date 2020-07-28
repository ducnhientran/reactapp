import React, { Component } from 'react'

import axios from 'axios';
import GetAPI from '../Utils/GetAPI';
import Button from '@material-ui/core/Button';
import DialogExample from './DialogExample';
import CustomizedDialogs from './dialog/CustomizedDialogs';





class GetAPIExample extends Component {

    constructor(props){
        super(props);
        this.state ={
            jobs :[], 
            openFlag: false,
            inputdata: '',
            fromChild: ''

        }
        this.handleData = this.handleData.bind(this);
    }

    componentDidMount() {
        // axios.get("http://api.dataatwork.org/v1/jobs")
        //   .then(res => {
        //     const jobs = res.data;
        //     this.setState({ jobs });
        //   })
        GetAPI.getJobsApi("http://api.dataatwork.org/v1/jobs")
        .then(jobs => this.setState({jobs :  jobs}))
        .catch(err => console.log("err is : " + err)

        );
    }

    componentDidUpdate(){
        console.log("component did update");   
    }

    componentWillUpdate(){
        console.log("component will update");   
    }

    handleClickOpen = () =>{
        this.setState({ 
            openFlag: !this.state.openFlag,
        });
    }
      
    handleData(data) {
        console.log("handleData parent : " + data);
        this.setState({
          fromChild: data
        });
    }

    render (){
        console.log("Render() run");
        return (
            <div>
                <h1>GET API Example</h1>
                    <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Open dialog</Button>
                    <DialogExample open = {this.state.openFlag} handleClose={this.handleClickOpen}  handlerFromParant={this.handleData} />
                    <h5>Received by parent:<br />{this.state.fromChild}</h5>
                    <ul>
                        {this.state.jobs.map(job => <li>{job.title}</li>)}
                    </ul>
            </div>
        );
    }
}

export default GetAPIExample;
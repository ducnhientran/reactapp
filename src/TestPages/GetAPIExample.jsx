import React, { Component } from 'react'

import axios from 'axios';
import GetAPI from '../Utils/GetAPI';
import Button from '@material-ui/core/Button';
import DialogExample from './DialogExample';
import CustomizedDialogs from './CustomizedDialogs';


class GetAPIExample extends Component {

    constructor(props){
        super(props);
        this.state ={
            jobs :[], 
            openFlag: false

        }
    }

    //componentWillMount(){
    componentDidMount() {
        // axios.get("http://api.dataatwork.org/v1/jobs")
        //   .then(res => {
        //     const jobs = res.data;
        //     this.setState({ jobs });
        //   })
        const  jobsAPI = GetAPI.getJobsApi("http://api.dataatwork.org/v1/jobs")
        .then(jobs => this.setState({jobs :  jobs}))
        .catch(err => console.log("err is : " + err)

        );
      }

      handleClickOpen(){
        console.log("Open dialog");
      }

      
    render (){
        return (
            <div>
                <h1>GET API Example</h1> 
                  <CustomizedDialogs/>
                <ul>
                    { this.state.jobs.map(job => <li>{job.title}</li>)}
                </ul>
            </div>
        );
    }

}

export default GetAPIExample;
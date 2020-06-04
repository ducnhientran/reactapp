import React, { Component } from 'react'

import axios from 'axios';
import GetAPI from '../Utils/GetAPI';
import Button from '@material-ui/core/Button';
import DialogExample from './DialogExample';


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

     successCallback(result) {
      this.setState({ result});
    }

      // handleClickOpen = () => {
      //   this.setState= {
      //     openFlag : true
      //   }
      // };

      componentWillMount(){
        this.setState= {
          openFlag : true
        }
      }

      
    render (){
        return (
            <div>
                <h1>GET API Example</h1> 
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                  Open dialog
                </Button>
                <DialogExample openFlag = {this.state.openFlag}/>
                <ul>
                    { this.state.jobs.map(job => <li>{job.title}</li>)}
                </ul>
            </div>
        );
    }

}

export default GetAPIExample;
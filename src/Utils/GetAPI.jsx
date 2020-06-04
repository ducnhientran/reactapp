

import React, { Component } from 'react'
import axios from 'axios';

class GetAPI{

    static getJobsApi(url){



      return new Promise((resolve, reject) => {
              axios.get(url)
              
              .then(res => {
                resolve(res.data);
              }).catch(error => {
                  reject(error)
              })
    });

  }
}

export default  GetAPI;

import React, { Component } from 'react'
import { withRouter } from "react-router";
//import queryString from 'query-string';

class  WithRouterExample extends Component {

      render() {
        const { match, location, history } = this.props;
        let id = this.props.match.params.id;
        //let url = this.props.location.search;
        //let params = queryString.parse(url);
        return (

            <div>
                <h1>Your id is {this.props.match.params.id}</h1>
                <h1>Your action is {this.props.match.params.action}</h1>
            </div>

        );
      }

}

 export default withRouter(WithRouterExample);

//const WithRouterExample = withRouter(WithRouterExample);
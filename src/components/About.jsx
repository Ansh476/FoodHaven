import React from 'react'
// import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext';

class About extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count1: 0,
      count2: 1,
      userinfo:{},
    }
    console.log("parent constructor")
  }
  async componentDidMount(){
    console.log("parent Mounted")
  }
  render(){
    console.log("parent rendered");
    return (
      <div>
        <h2>About page</h2>
        {/* <User name={"Ansh func"} location={'mumbai'}/> */}       
        <div>
          <UserContext.Consumer>
            {({loggedinusername})=><h1>{loggedinusername}</h1>}
          </UserContext.Consumer>
        </div>
  
        <UserClass name={"Ansh class"} location={'thane'}/>
      </div>
    )
  }
}

export default About
import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count1: 0,
            count2: 1,
            userinfo: {},
        }
        console.log("child constructor called")
    }

    async componentDidMount(){
        console.log('Component Mounted');
        const data = await fetch("https://api.github.com/users/Ansh476");
        const json = await data.json();
        this.setState({
          userinfo:json
        })
    }

    componentDidUpdate(){
        console.log('Component Updated');
    }

    componentWillUnmount(){
        console.log('Component Unmounted');
    }

    render(){
        // const {name,location} = this.props;
        const {count1,count2} = this.state;
        const {login,public_repos} = this.state.userinfo
        console.log("child rendered");
        return (
            <div className='user-card'>
                <h1>Count1:{count1}</h1>
                <h1>Count2:{count2}</h1>
                <h1>name:{login}</h1>
                <h1>repos:{public_repos}</h1>
                <button onClick={()=>{
                    this.setState({
                        count1: count1 + 1,
                    })
                }
                }>Inc value</button>
                {/* <h1>Name:{name}</h1>
                <h2>Location:{location}</h2> */}
                <h3>Age</h3>
            </div>
        )
    }
}
export default UserClass;
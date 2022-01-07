import React from 'react'
import Controls from '../Controls/Controls'
import Activities from '../Activities/Activities'
import User from '../User/User'
import './Callscreen.css';
import Title from '../Title/Title'



class Callscreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      users : [
        {
          username : "Omkar Nighot",
          microphoneOn : true,
        },
        {
          username : "Manish",
          microphoneOn : false

        },
        {
          username : "Sathya",
          microphoneOn : true

        },
        {
          username : "Pazcare",
          microphoneOn : false

        },
        {
          username : "Omkar Nighot",
          microphoneOn : true

        },
        {
          username : "Omkar Nighot",
          microphoneOn : true

        },

      ],
      meetingTitle : "Pazcare Assesment"
    }
  }
  render () {
    let userArray = this.state.users.map((user)=>{
      return (<>
        <User username={user.username} microphoneOn={user.microphoneOn} />
      </>)
    });
    return (
      <>
        <div className='callers container'>
          {userArray}
        </div>
        <div className="footer ">
          <Title title={this.state.meetingTitle} />
          <Controls />
          <Activities userNumber={this.state.users.length}/>
        </div>
      </>
    )
  }
}

export default Callscreen;

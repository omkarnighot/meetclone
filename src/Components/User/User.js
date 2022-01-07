import React from 'react'
import {AudioOutlined,VideoCameraOutlined,UploadOutlined,MoreOutlined,PhoneOutlined,AudioMutedOutlined} from '@ant-design/icons';
import { Avatar } from '@mui/material';
import './User.css'
import {Button} from 'antd'


class User extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      microphoneOn : this.props.microphoneOn
    }
  }

  render () {
    let letters = this.props.username.split('');
    let initial = letters[0].toUpperCase();
    return (

      <div className="usercard ">
        <div className="avtar-container">
        <div className="control-icon user-mic">
          {this.state.microphoneOn === true ? (<Button onClick={this.toggleMic} type="primary" shape="round" icon={<AudioOutlined />} />) : <Button onClick={this.toggleMic} className='btn-off' type="primary" shape="round" icon={<AudioMutedOutlined />} /> }
        </div>
          <Avatar className="avtar" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
              <h1>{initial}</h1>
          </Avatar>
        </div>
        <div className="username">
          {this.props.username}
        </div>
      </div>

    )
  }
}

export default User;

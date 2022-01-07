import React from 'react'
import {Button } from 'antd';
import {AudioOutlined,VideoCameraOutlined,UploadOutlined,MoreOutlined,PhoneOutlined,AudioMutedOutlined} from '@ant-design/icons';
import './Controls.css'
import CallEndRoundedIcon from '@mui/icons-material/CallEndRounded';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import VideocamIcon from '@mui/icons-material/Videocam';

class Controls extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      microphoneOn : true,
      cameraOn : true,

    }
    this.toggleMic = this.toggleMic.bind(this);
    this.toggleCam = this.toggleCam.bind(this);
  }
  toggleMic(){
    this.setState((state)=>{
      return {
        microphoneOn : !state.microphoneOn
      }
    });
  }
  toggleCam(){
    this.setState((state)=>{
      return {
        cameraOn : !state.cameraOn
      }
    });
  }
  render () {
    return (
      <div className="icon-pallete ">
      <div className="control-icon">
        {this.state.microphoneOn === true ? (<Button onClick={this.toggleMic} type="primary" shape="round" icon={<AudioOutlined />} />) : <Button onClick={this.toggleMic} className='btn-off' type="primary" shape="round" icon={<AudioMutedOutlined />} /> }
      </div>
      <div className="control-icon">
        {this.state.cameraOn === true ? (<Button onClick={this.toggleCam} type="primary" shape="round" icon={<VideocamIcon />} />) : <Button onClick={this.toggleCam} className='btn-off' type="primary" shape="round" icon={<VideocamOffIcon />} /> }
      </div>
      <div className="control-icon">
        <Button type="primary" shape="round" icon={<UploadOutlined />} />
      </div>
      <div className="control-icon">
        <Button type="primary" shape="round" icon={<MoreOutlined />} />
      </div>
      <div className="control-icon ">
        <Button className="CallEndRounded" type="primary" shape="round" icon={<CallEndRoundedIcon />} />
      </div>
      </div>
    )
  }
}

export default Controls;

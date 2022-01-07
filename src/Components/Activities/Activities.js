import React from 'react'
import {Badge,Button } from 'antd';
import Drawer from '@mui/material/Drawer';
import {InfoCircleOutlined,UsergroupDeleteOutlined,MessageOutlined,AppstoreOutlined,SettingOutlined} from '@ant-design/icons';
import './Activities.css'

class Activites extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
       }
  }
  showDrawer = () => {
    this.setState((state)=>{
      return {visible : !state.visible}
    });
    };

    onClose = () => {
      this.setState((state)=>{
        return {visible : !state.visible}
      });
    };

  render () {
    return (
      <>
      {this.state.visible === true ? (<Drawer
        title="Basic Drawer"
        anchor="right"
        variant="persistent"
        onClose={this.onClose}
        open={this.state.visible}
      >
        <p>Some contents...</p>
      </Drawer>) : null}

      <div className="icon-pallete ">
        <div className="activites-icon">
          <Button  onClick={this.showDrawer} className="act-btn" type="primary" shape="round" size="large" icon={<InfoCircleOutlined />} />
        </div>
        <div className="activites-icon">
        <button onClick={this.showDrawer} className="act-btn">  <Badge color="#f50"count={this.props.userNumber}> <UsergroupDeleteOutlined /> </Badge></button>
        </div>
        <div className="activites-icon">
          <Button onClick={this.showDrawer}className="act-btn" type="primary" shape="round" icon={<MessageOutlined />} />
        </div>
        <div className="activites-icon">
          <Button onClick={this.showDrawer} className="act-btn" type="primary" shape="round" icon={<AppstoreOutlined />} />
        </div>
        <div className="activites-icon">
          <Button onClick={this.showDrawer} className="act-btn" type="primary" shape="round" icon={<SettingOutlined />} />
        </div>

      </div>
      </>
    )
  }
}

export default Activites;

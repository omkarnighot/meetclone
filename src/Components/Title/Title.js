import React from 'react'
import './Title.css'
import Clock from '../Clock/Clock'
class Title extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return(
      <div>
      <div className=" title"> <Clock /><span />{" " + '|'+" " + this.props.title}</div>
      </div>
    )


  }
}

export default Title;

import React, { Component } from 'react';

class ProjectItem extends Component {

render(){
  const {divStyle} = styles
  return(
    <div style={divStyle}>
    </div>
  )
}
}
const styles ={
  divStyle:{
    margin:20,
    height:140,
    width:230,
    backgroundColor:'white',
    boxShadow: '17px 17px rgba(0,0,0,0.1)'

  }
}
export default ProjectItem

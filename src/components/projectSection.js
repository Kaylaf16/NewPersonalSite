import React, { Component } from 'react';
import ProjectItem from './commons/projectItem'

class ProjectSection extends Component {
  constructor(props){
    super(props)
    this.state={
      screenwidth:null,
      hovered:false
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({screenwidth: window.innerWidth});
  }
  renderPc(){
      const {projectgallery,projectdesc, HeaderStyle} =styles
    return(
      <div>
      <div style={projectgallery}>
        <ProjectItem onClick={() => console.log("hi")} />

        <ProjectItem/>
        <ProjectItem/>
      </div>
        <div style={projectdesc}>
            <span><p style = {HeaderStyle}>Tools</p></span>
            <span><p style = {HeaderStyle}>Backstory</p></span>
      </div>
      </div>
    )
  }
  renderMobile(){
    const {projectgallerymobile,projectdescmobile,HeaderStyle} =styles
  return(
    <div>
    <div style={projectgallerymobile}>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
    </div>
      <div style={projectdescmobile}>
          <span><p style = {HeaderStyle}>Tools</p></span>
          <span><p style = {HeaderStyle}>Backstory</p></span>
    </div>
    </div>
  )
  }
  render(){
    const {divStyle} =styles
    const PcVersion = this.renderPc()
    const mobileVersion = this.renderMobile()
    return(
      <div style={divStyle}>
      {this.state.screenwidth >1000?PcVersion:mobileVersion}
      </div>
    )
  }
}
const styles={
  divStyle:{
    minHeight:800,
    maxHeight:'auto',
    width:'100%',
    marginTop:300
  },
  HeaderStyle:{
    fontFamily:'Helvetica Neue',
    fontSize:30,
    fontWeight:'100'
  },
  projectdesc:{
    width:'50%',
    height:'100%',
    marginRight:0,
    marginLeft:0,
    float:'right'
  },
  projectgallerymobile:{
    width:'100%',
    height:'100%',
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    marginRight:'auto',
    marginLeft:'auto',
    paddingTop:90,
    paddingBottom:90,
    justifyContent:'center',
    backgroundColor:'#F06292'
  },
  projectdescmobile:{
    width:'100%',
    height:'100%',
    marginRight:0,
    marginLeft:0,
  },
  projectgallery:{
    width:'40%',
    height:'100%',
  justifyContent:'center',
  padding:50,
  paddingTop:70,
  paddingBottom:70,
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    marginRight:0,
    float:'left',
    marginLeft:0,
    backgroundColor:'#F06292'
  }
}
export {ProjectSection}

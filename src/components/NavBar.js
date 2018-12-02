import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import Icon from '@material-ui/core/Icon';

import Divider from '@material-ui/core/Divider';
class NavBar extends Component{
  constructor(props){
    super(props)
    this.state={
      Experience:false,
      Projects:false,
      Contact:false,
      buttonPressed:false,
       right: false,
      screenwidth:window.innerWidth
    }
    this.setButtonHovered = this.setButtonHovered.bind(this)
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  resize() {
    this.setState({screenwidth: window.innerWidth});
  }
  setButtonHovered(id){
    let targetValue = id.target.innerHTML
      console.log(this.state.screenwidth)
    switch(targetValue){
      case 'Experiences':
        this.setState({Experience:true})
        break;
      case 'Projects':
        this.setState({Projects:true})
        break;
      case 'Contact':
        this.setState({Contact:true})
        break;

      default:
      break;
    }

  }
  renderNavBarPC(){
    const {TextStyle, BarStyle,divStyle,hoverStyle} = style
    return(
    <div style = {divStyle}>
        <a href="" id = "exp"style={this.state.Experience?hoverStyle:TextStyle}  onMouseEnter={this.setButtonHovered} onMouseLeave={() => this.setState({Experience:false,Blurred:false})}>Experiences</a>
        <a href="" style={this.state.Projects?hoverStyle:TextStyle}  onMouseEnter={this.setButtonHovered} onMouseLeave={() => this.setState({Projects:false,Blurred:false})}>Projects</a>
        <a href="" style={this.state.Contact?hoverStyle:TextStyle}  onMouseEnter={this.setButtonHovered} onMouseLeave={() => this.setState({Contact:false,Blurred:false})}>Contact</a>
    </div>)
  }
  renderNavBarMobile(){
    const {TextStyle, BarStyle,divmobileStyle } = style
    return(
    <div style = {divmobileStyle}>
        <Button style={{fontSize:18,letterSpacing:3}} onClick={this.toggleDrawer('right', true)} variant="fab" color="secondary" aria-label="Edit" >
        <Icon>reorder_Icon</Icon>
        </Button>

    </div>)
  }
render(){
  const MobileNavBar = this.renderNavBarMobile();
  const PcNavBar = this.renderNavBarPC();

  const {TextStyle, BarStyle,divStyle,hoverStyle,list,TextStyleDrawer,hoverStyleDrawer} = style
  const sideList = (
  <div className={list}>
    <List style={{padding:30}}><a href="" style={this.state.Contact?hoverStyleDrawer:TextStyleDrawer}  onMouseEnter={this.setButtonHovered} onMouseLeave={() => this.setState({Contact:false,Blurred:false})}>Contact</a></List>

    <List style={{padding:30}}><a href="" style={this.state.Experience?hoverStyleDrawer:TextStyleDrawer}  onMouseEnter={this.setButtonHovered} onMouseLeave={() => this.setState({Experience:false,Blurred:false})}>Experiences</a></List>

    <List style={{padding:30}}><a href="" style={this.state.Projects?hoverStyleDrawer:TextStyleDrawer}  onMouseEnter={this.setButtonHovered} onMouseLeave={() => this.setState({Projects:false,Blurred:false})}>Projects</a></List>
  </div>
);

  return(
    <div>
      {(this.state.screenwidth>600)?PcNavBar:MobileNavBar}
      <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
  <div
  style={{padding:20}}
    tabIndex={0}
    role="button"
    onClick={this.toggleDrawer('right', false)}
    onKeyDown={this.toggleDrawer('right', false)}
  >
  {sideList}
  </div>
</Drawer>
    </div>
  )
}
}
const style= {
 TextStyle:{
   textDecoration:'none',
   padding:30,
   color:'#263238',
   fontWeight:'100',
   margin:10,
   letterSpacing:0,
   fontSize:20,
   textTransform: 'uppercase',
    fontFamily:'Roboto, sans-serif',
   height: 0,
   overflow: 'hidden'
 },
 hoverStyleDrawer:{
   paddingTop:10,
   borderTop:'2px solid #F06292',
   textDecoration:'none',
   padding:30,
   color:'#263238',
   fontWeight:'100',
   padding:10,
   margin:30,
   letterSpacing:3,
   fontSize:16,
   textTransform: 'uppercase',
   fontFamily:'Roboto, sans-serif',
   height: 0,
   overflow: 'hidden'
 },
TextStyleDrawer:{
  textDecoration:'none',
  padding:30,
  color:'#263238',
  fontWeight:'100',
  padding:10,
  margin:30,
  letterSpacing:3,
  fontSize:16,
  textTransform: 'uppercase',
   fontFamily:'Roboto, sans-serif',
  height: 0,
  overflow: 'hidden'
},
 listStyle:{

 },
 divmobileStyle:{
   paddingTop:40,
      textAlign:'right',
   paddingRight:50
 },
 hoverStyle:{
   textDecoration:'none',
   paddingTop:10,
   borderTop:'2px solid #F06292',
   padding:30,
   color:'#263238',
   fontWeight:'100',
   margin:10,
   letterSpacing:0,

   fontSize:20,
   textTransform: 'uppercase',
   fontFamily:'Roboto, sans-serif',
   height: 0,
   overflow: 'hidden'
 },
 BarStyle:{

 },
 list: {
  width: 250,
},
fullList: {
  width: 'auto',
},
 liStyle:{
   listStyleType:'none',
   padding:10
 },
 divStyle:{
   paddingTop:60,
   paddingRight:50,
   textAlign:'right'
 }
}
export { NavBar }

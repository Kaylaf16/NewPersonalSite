import React, { Component } from 'react';

class Heading extends Component {
  constructor(props){
    super(props)
    this.state ={
      screenwidth:window.innerWidth,
      hover:null
    }
    this.setButtonHovered = this.setButtonHovered.bind(this)
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }
  setButtonHovered(){
        this.setState({hover:true})
      }
  resize() {
    this.setState({screenwidth: window.innerWidth});
  }
  renderheadingPC(){
    const {TextStyle, divStyle,spanStyle, UnderText,ButtonStyle,hoverStyle} = styles
    return(
      <div  style = {divStyle}>
      <span style ={spanStyle}><p style={TextStyle}>Hey, Im <span style={{color:'#F06292'}}>Kayla</span> </p></span>
      <span style ={spanStyle}><p style = {UnderText}><i>Developer. Thinker. Creator.</i></p></span>
      <span style={spanStyle}><p style= {{marginLeft:50,marginTop:40}}><button style={this.state.hover?hoverStyle:ButtonStyle}  onMouseEnter={this.setButtonHovered} onMouseLeave={() => this.setState({hover:false})}>Learn More</button></p></span>
      </div>
    )
  }
  renderMobile(){
    const {TextStyleMobile, divStyleMobile,spanStyle, UnderTextMobile,ButtonStyleMobile} = styles
    return(
      <div  style = {divStyleMobile}>
      <span style ={spanStyle}><p style={TextStyleMobile}>Hey, Im <span style={{color:'#F06292'}}>Kayla</span> </p></span>
      <span style ={spanStyle}><p style = {UnderTextMobile}><i>Developer. Thinker. Creator.</i></p></span>
      <span style={spanStyle}><p style= {{marginLeft:50,marginTop:40}}><button style = {ButtonStyleMobile}>Learn More</button></p></span>
      </div>
    )
  }
  render(){
    const mobileheading = this.renderMobile();
    const pcheading = this.renderheadingPC();
      const {divStyle} = styles
    return(
          <div>
           {this.state.screenwidth>600?pcheading:mobileheading}
          </div>
    )
  }
}
const styles ={
 spanStyle:{
   textAlign:'left',
   justifyContent:'left'
 },
 divStyle:{
   marginLeft:'18%',
   marginTop:200
 },
 divStyleMobile:{
   marginLeft:'14%',
   marginTop:'180'
 },
 hoverStyle:{
   marginLeft:'90',
   width:195,
       textTransform: 'uppercase',
   boxShadow: '0px 15px 20px rgba(46, 229, 157, 0.4)',
cursor:'pointer',
   transform: 'translateY(-7px)',
   height:45,
   backgroundColor:'#2EE59D',
   border:'none',
   borderRadius:45,
   color:'white',
   fontFamily:'Roboto, sans-serif',
   fontSize:16,
   fontWeight:100
 },
 TextStyle:{
   fontSize:40,
   fontWeight:'500',
   fontFamily:'Roboto, sans-serif',
   marginBottom:0,
   marginTop:0
 },
 TextStyleMobile:{
   fontSize:30,
   fontWeight:'500',
   fontFamily:'Roboto, sans-serif',
   marginBottom:0,
   marginTop:0
 },
 ButtonStyleMobile:{
   marginLeft:'90',
   width:195,
    textTransform: 'uppercase',
   outline: 'none',
   boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.1)',
   height:45,
   backgroundColor:'#42e7a6',
   border:'none',
   borderRadius:45,
   color:'white',
   fontFamily:'Roboto, sans-serif',
   fontSize:16,
   fontWeight:100,
   cursor:'pointer'
 },
 ButtonStyle:{
   marginLeft:'90',
   width:195,
   transition: 'all 0.3s ease 0s',
   outline: 'none',
   boxShadow:'0px 8px 15px rgba(0, 0, 0, 0.1)',
   height:45,
   backgroundColor:'#42e7a6',
   border:'none',
   borderRadius:45,
   textTransform: 'uppercase',
   color:'white',
   fontFamily:'Roboto, sans-serif',
   fontSize:16,
   fontWeight:100,
   cursor:'pointer'
 },
 UnderText:{
   fontFamily:'Courier New, monospace',
   marginBottom:0,
   marginTop:4,
   fontSize:25,
   fontWeight:'100'
 },
 UnderTextMobile:{
   fontFamily:'Courier New, monospace',
   marginBottom:0,
   marginTop:4,
   fontSize:18,
   fontWeight:'100'
 }

}
export { Heading }

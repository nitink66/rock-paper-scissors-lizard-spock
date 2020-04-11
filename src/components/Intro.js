import React, { Component } from 'react'
import Logo1 from './Logo1.jpg'
import './Intro.css'


class Intro extends Component{
        render(){

            return(
                <div className="res" >
                    <img className="intro" src={Logo1} alt="iiiiiiiige" />
                </div>
            );

 }
}


export default Intro
import React, { Component } from 'react';
import styled from 'styled-components';
import Splash from './coverimg.JPG';
const HomeSplash = styled.div`
  background-image:url(${Splash});
  background-position:center;
  background-size:cover;
  width:100%;
  height:100vh;   
  display:flex;
  justify-content:center;
  align-items:center;
  h1{
    margin:0;
    text-align:center;
    text-shadow: 1px 1px 2px gray;
  }
`;

export class Home extends Component {
    render(){
        return(
            <HomeSplash>
                <h1>BRIAN TRANG</h1>
            </HomeSplash>
        );
    }
}
import React, { Component } from 'react';
import styled from 'styled-components';
import AboutSplash from './aboutpic.JPG';

const AboutWrap = styled.div`
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)
  ),url(${AboutSplash});
  background-position:center;
  background-size:cover;
  width:100%;
  height:100vh;   
  display:flex;
  justify-content:center;
  align-items:center;
  h2{
    color:white;
    margin:0;
    text-align:center;
    text-shadow: 1px 1px 2px black;
  }
`;
export class About extends Component{
    render(){
        return(
            <AboutWrap>
                <article>
                    <h2>Hi! I am Brian Trang and you're reading my about page. </h2>
                    <h2>I enjoy MMA, learning, rock climbing, shooting, and walking my dogs.</h2>
                </article>
            </AboutWrap>
        )
    }
}
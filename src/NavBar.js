import React, { Component } from 'react';
import styled from 'styled-components';

export const NavBar = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: flex-end;
height:5em;
background: #7395AE;
position: fixed; /* Set the navbar to fixed position */
top: 0; /* Position the navbar at the top of the page */
width: 100%; /* Full width */

a{
  text-decoration: none;
  display: block;
  padding: 2em;
  color: black;
}
`;




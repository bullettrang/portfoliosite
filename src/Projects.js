import React, {Component} from 'react';
import styled from 'styled-components';

const ListOfProjects = styled.div`
    width:100%;
    height:100vh;
    background:blue;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`;

const Project = styled.div`{
    position:relative;
    top:5em;
    border:1px solid black;
    padding:1em;
}`;

//component display Gallery of Projects
export class Projects extends Component{
    render(){
        return( 
            <ListOfProjects>
                <h1>My Projects</h1>
                <Project>
                <iframe 
                    width="560" height="315" src="https://www.youtube.com/embed/_HKAeDvNcGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
                <p>Santorini: A Unity Game</p>
                </Project>
                
            </ListOfProjects>
            
            );
       
    }
}
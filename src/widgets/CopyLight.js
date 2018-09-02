import React, { Component } from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    background: #FFF;
    font-weight: 300;
    height: 100%;
    margin: 0;
    padding: 4rem;
    color: #94a3a8;
    font-size: 24px;
    line-height: 1.42857143;
    color: #333;
`
const WrapperGroup = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
`
export default class CopyLight extends Component {
  render() {
    return (
      <Wrapper>
       <WrapperGroup>
           <p>
           Creating dynamic and interactive data visualizations on the web is a pain in the ass. It gets really hard when you add animation, inter-connected dashboards, and fast performance on mobile devices.
            You're either using libraries you can't customize, copy pasting D3 examples you don't understand, or battling documentation to write spaghetti code you can't reuse.
            It's okay, we've all been there.

            But it doesn't have to be that way.

            With React+D3v4 you'll learn the basics of building fast data visualization components in about an hour. Get started immediately without installing anything.
            Don't know React? React+D3v4 starts at the very beginning.
            Struggling with D3? Every function is explained.
            New to modern JavaScript syntax? React+D3v4 comes with an interactive ES6 cheatsheet.
            Get the confidence you need to excell.💪
           </p>
       </WrapperGroup>
        
      </Wrapper>
    )
  }
}
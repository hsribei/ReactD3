import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 5rem auto;
`
const WrapperHeader = styled.div`
  font-size: 40px;
  text-align: center;
  margin: 0 0 3rem;
`

const WrapperImage = styled.img`
  height: 300px;
  grid-area: Picture;
`

const WrapperCopy = styled.div`
  font-size: 20px;
  line-height: 1.7;
  grid-area: Copy;
`

const Content = styled.div`
  margin: 0 3rem;
  display: grid;
  align-items: top;
  justify-items: center;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'Picture Copy';
  @media (max-width: 940px) {
    align-items: center;
    justify-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      'Copy'
      'Picture';
  }
`

const CopyLargeImageLeft = props => (
  <Wrapper>
    <WrapperHeader>{props.header}</WrapperHeader>

    <Content>
      <WrapperImage src={props.image} alt="pic" />
      <WrapperCopy>{props.copy}</WrapperCopy>
    </Content>
  </Wrapper>
)

export default CopyLargeImageLeft
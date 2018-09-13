import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #fff;
  height: 100%;
  width: 100%;
`
const WrapperGroup = styled.div`
  max-width: 1000px;
  margin: 2rem auto;
`

const WrapperHeader = styled.div`
  color: #384047;
  font-weight: 800;
  font-size: 40px;
  text-align: center;
  padding: 3rem 0;
`

const WrapperImage = styled.img`
  height: 300px;
  grid-area: Picture;
  @media (max-width: 940px) {
    height: 200px;
  }
`

const WrapperCopy = styled.div`
  font-size: 20px;
  line-height: 1.7;
  grid-area: Copy;
`
const WrapperTestimonial = styled.div`
  margin: 0 3rem;
`

const Content = styled.div`
  margin: 0 2rem;
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
      'Picture'
      'Copy';
  }
`

const CopyLargeImageLeft = props => (
  <Wrapper>
    <WrapperGroup>
      <WrapperHeader>{props.header}</WrapperHeader>

      <Content>
        <WrapperImage src={props.image} alt="pic" />
        <WrapperCopy>{props.copy}</WrapperCopy>
      </Content>
      <WrapperTestimonial>{props.testimonial}</WrapperTestimonial>
    </WrapperGroup>
  </Wrapper>
)

export default CopyLargeImageLeft

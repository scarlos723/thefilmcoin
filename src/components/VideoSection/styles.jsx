import styled from 'styled-components'

export const Section = styled.section`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  z-index: -1;
  margin-top: 20px;
`

export const VideoContainer = styled.div`
  width: 100%;
  max-width: 880px;
  margin: 0 auto;
`

export const Video = styled.div`
  margin: 2.5rem 0 2rem 0;
  width: 100%;
  position: relative;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
`

export const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

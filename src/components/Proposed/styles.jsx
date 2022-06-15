import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'

export const Section = styled.section`
  width: 100%;
  padding: 3rem 0 1.75rem;
  color: white;
  ${ResponsiveTo('md')}{
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
    padding-bottom: 6rem;
    padding-top: 4rem;
  }
  ${ResponsiveTo('lg')}{
    grid-template-columns: 1fr 2fr 4fr 1fr;
    padding-top: 9rem;
  }

`

export const Title = styled.h2`
  ${ResponsiveTo('md')}{
    grid-column: 1 / span 2;
  }
  ${ResponsiveTo('lg')}{
    grid-column: 1 / -1;
    grid-row-start: 1;
  }
`

export const Grid = styled.div`
  width: 100%;
  padding: 2.5rem 1.25rem 2.5rem 0;
  .article-container{
    margin-top: 3rem;
    padding-left: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  ${ResponsiveTo('md')}{
    grid-column: 1 / span 2;
    padding-right: 3rem;
  }
  ${ResponsiveTo('lg')}{
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 3fr 2fr;
    padding-right: 10%;
    .article-container{
      margin: 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
      place-content: center;
      text-align: center;
    }
  }
  
`
export const GreenBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-radius: 0 0 68px 0;
  border: 1px solid #12D466;
  border-left-style: none;
  text-align: center;
  padding: 2rem 1rem;
  ${ResponsiveTo('md')}{
    padding: 1.5rem 2.5rem;
    justify-content: space-between;
  }
  ${ResponsiveTo('lg')}{
    padding: 1.25rem 1rem 1.25rem 10%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 900px;
  }
`
export const TitleBox = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 147%;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 0.5rem;
  ${ResponsiveTo('md')}{
    font-size: 1rem;
  }
`
export const Description = styled.p` 
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 0.75rem;
  line-height: 147%;
  text-align: center;
  text-transform: capitalize;
  ${ResponsiveTo('md')}{
    font-size: 1rem;
  }
`
export const Article = styled.article`
  font-size: 0.8rem;
  text-align: center;
  margin-bottom: 20px;
  & > ${TitleBox} {
    margin-bottom: 0;
    margin-top: 0.5rem;
  }
  ${ResponsiveTo('lg')}{
    font-size: 1rem;
    margin: 0;
    align-self: center;
  }
`

export const Image = styled.img`
  display: block;
  width: 100%;
  padding: 0 1.25rem;
  margin: -2rem auto 0;
  ${ResponsiveTo('md')}{
    margin: 0 auto;
    padding: 0;
    transform: scale(1.5);
  }
  ${ResponsiveTo('lg')}{
    transform: none;
    grid-column-start: 3;
  }
`

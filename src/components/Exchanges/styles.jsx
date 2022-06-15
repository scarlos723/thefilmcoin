import styled from 'styled-components'
import { ResponsiveTo } from '@/hooks/useResponsive'
import coins1 from '@/icons/home/coinsExchanges1.svg'
import coins2 from '@/icons/home/coinsExchanges2.svg'
import coinsMb1 from '@/icons/home/coinsMbExchanges1.svg'
import coinsMb2 from '@/icons/home/coinsMbExchanges2.svg'
export const Section = styled.section`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  overflow: hidden;
  ${ResponsiveTo('420px')} {
    padding: 3rem 2.5rem;
  }
  ${ResponsiveTo('md')} {
    gap: 6rem;
    padding: 5rem;
    background-image: url(${coinsMb1}), url(${coinsMb2});
    background-size: auto, auto;
    background-repeat: no-repeat, no-repeat;
    background-position-x: 8%, 90%;
    background-position-y: 25% , 18%;
  }
  ${ResponsiveTo('lg')}{
    padding: 4rem 2.75rem;
    //display: grid;
   // grid-template-columns: 385px minmax(1fr,655px);
    gap: 4rem;

    background-image: url(${coins1}), url(${coins2});
    background-size: auto, auto;
    background-repeat: no-repeat, no-repeat;
    background-position-x: 8%, 88%;
    background-position-y: 30%, 20%;
    
  }

  ${ResponsiveTo('xl')}{
    background-position-x: 20%, 80%;
    grid-template-columns: 385px 655px;
    padding: 9rem 5%;
  }
`

export const Title = styled.h2`
  color: white;
  text-transform: uppercase;
  text-align: center;
  ${ResponsiveTo('lg')} {
    grid-column: 1 / span 2;
  }
`

export const SubTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: bold;
  font-size: 1.125rem;
  letter-spacing: -3%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  ${ResponsiveTo('420px')} {
    line-height: 45.7px;
  }
  ${ResponsiveTo('md')} {
    font-size: 1.25rem;
    line-height: 48px;
  }
`
export const OurExchanges = styled.div`
  border-radius: 7px;
  border: 0.94px solid #12D466;
  padding: 1.5rem;
  width: 100%;
  max-width: 655px;
  ${ResponsiveTo('md')}{
    padding: 1.5rem 1.875rem 1.25rem;
  }
`

export const BoxFutureExchanges = styled(OurExchanges)`
  max-width: 655px;
`

export const CoinsImage = styled.div`
  display: none;
  position: absolute;
  left: -400px;
  top:8px;
  ${ResponsiveTo('md')}{
    display:block;
    width: 600px;
    height: 600px;
    img{
      width: 100%;
    }
  }
`

export const ListingContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  img{
    padding: 1rem 1.5rem;
    height:60px;
    border-radius: 6.6px;
    border: 0.94px solid #12D466;
    width: 100%;
    max-width: 150px;
  }
  ${ResponsiveTo('md')}{
    gap: 1.25rem;
  }
`

export const FutureContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  img{
    padding: 1rem 1.5rem;
    height:60px;
    border-radius: 6.6px;
    border: 0.94px solid #12D466;
    width: 100%;
    max-width: 160px;
  }
  ${ResponsiveTo('md')}{
    gap: 2rem;
  }
`

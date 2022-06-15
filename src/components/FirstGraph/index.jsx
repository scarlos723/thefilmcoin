import { ReactComponent as ChangeIcon } from '@/icons/tokenomics/change_icon.svg'
import { ReactComponent as DateIcon } from '@/icons/tokenomics/date_of_lunch_icon.svg'
import { ReactComponent as SmartIcon } from '@/icons/tokenomics/smart_contract_icon.svg'
import { ReactComponent as LiquidityIcon } from '@/icons/tokenomics/liquidity_lock_icon.svg'
import { ReactComponent as VerifiedIcon } from '@/icons/tokenomics/verified_icon.svg'
import {
  Article,
  Container,
  GraphContainer,
  Grid, IconsContainer
} from './styles'
import lottie from 'lottie-web'
import { useEffect, useRef } from 'react'
import firstGraph from '@/images/tokenomics/graph1data.json'

export default function FirstGraph () {
  const gifcontainer = useRef(null)
  function goTo (path) {
    // console.log('go to', path)
    window.location.href = path
  }
  useEffect(() => {
    lottie.loadAnimation({
      container: gifcontainer.current, // Required
      renderer: 'svg', // Required
      loop: true, // Optional
      autoplay: true, // Optional
      animationData: firstGraph // Name for future reference. Optional
    })
  }, [])

  return (
    <Container>

      <Grid>
        <IconsContainer>
          <Article>
            <ChangeIcon />
            <h4>Chain</h4>
            <small>Ethereum</small>
          </Article>
          <Article>
            <DateIcon />
            <h4>Date of launch</h4>
            <small>10th March 2022</small>
          </Article>
          <Article id='smart-contract-article' onClick={() => goTo('https://etherscan.io/address/0x9280abF1AF455d6228def9c93b5E6D85F3F1ecc8')}>
            <SmartIcon />
            <h4>Smart Contract  </h4>
            <small>Etherscan Address</small>
            <span className='hover-msg'>
              <small>Address: </small>
              <a
                href='https://etherscan.io/address/0x9280abF1AF455d6228def9c93b5E6D85F3F1ecc8'
                target='_blank'
                rel='noopener noreferrer'
              >
                0x9280abF1AF455d6228def9c93b5E6D85F3F1ecc8
              </a>
            </span>
          </Article>
          <Article>
            <LiquidityIcon />
            <h4>Liquidity lock</h4>
            <small>YES</small>
          </Article>
          <Article>
            <VerifiedIcon />
            <h4>Verified</h4>
            <small>YES - HACKEN.IO</small>
          </Article>
        </IconsContainer>
        <GraphContainer>
          <div className='graph-container' ref={gifcontainer} />
          <div className='params'>
            <div>
              <h5>Founders</h5>
              <small>20%</small>
            </div>
            <div>
              <h5>Team</h5>
              <small>4%</small>
            </div>
            <div>
              <h5>Treasury</h5>
              <small>32%</small>
            </div>
            <div>
              <h5>Liquidity</h5>
              <small>10%</small>
            </div>
            <div>
              <h5>Partnership</h5>
              <small>4%</small>
            </div>
            <div>
              <h5>Burn Wallet</h5>
              <small>20%</small>
            </div>
            <div>
              <h5>Marketing</h5>
              <small>10%</small>
            </div>
            <div>
              <h5>Community</h5>
              <small>8%</small>
            </div>
          </div>
        </GraphContainer>
      </Grid>

    </Container>
  )
}

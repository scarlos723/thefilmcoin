import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import success from '../../assets/icons/payment/successfulstep.png'
import current from '../../assets/icons/payment/currentstep.png'
import error from '../../assets/icons/payment/errorstep.png'
import next from '../../assets/icons/payment/nextstep.png'
import stepStatusOptions from './stepStatusOptions'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  max-width: 250px;
  padding: 4rem 0;
  ${ResponsiveTo('md')} {
    max-width: 390px;
  }
`

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.75rem;
  justify-content: center;
  align-items: stretch;
  background-color: transparent;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: white;
    position: absolute;
    top: 25%;
    left: 85%;
  }
  ${ResponsiveTo('md')} {
    width: 155px;
    &:not(:last-child)::after {
      left: 75%;
    }
  }
`

/**
 * Returns the correct icon for the step
 * @param {string} status
 */
const returnIcon = (status) => {
  switch (status) {
    case stepStatusOptions.current:
      return current
    case stepStatusOptions.success:
      return success
    case stepStatusOptions.error:
      return error
    case stepStatusOptions.next:
      return next
    default:
      return current
  }
}

export const Icon = styled.img.attrs(props => ({
  src: returnIcon(props.status),
  alt: `${props.status} icon`,
  role: 'presentation'
}))`
  width: 46px;
  height: 46px;
  margin: 0 auto;
`

export const Description = styled.p`
  margin-top: 1.125rem;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
`

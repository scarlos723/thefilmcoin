

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.75rem;
`

export const SwitchContainer = styled.div`
  display: flex;
  background: transparent;
  border: 0.5px solid #12D466;
  border-radius: 1rem;
  cursor: pointer;
  padding: 3px;
  justify-content: ${props => props.active === 'first' ? 'flex-start' : 'flex-end'};
  width: 3.25rem;
  overflow: hidden;
`

export const Selector = styled.div`
  border-radius: 50%;
  background: #12D466;
  width: 1rem;
  height: 1rem;
`

export const Label = styled.span`
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.875rem;
  line-height: 1.125rem;
  font-weight: 700;
`

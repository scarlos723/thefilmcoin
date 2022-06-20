import {
  Label,
  Selector,
  SwitchContainer,
  Wrapper
} from './styles'

export default (props) => {
  const { options, handleSwitch, currentValue } = props

  return (
    <Wrapper>
      <Label>{options[0].name}</Label>
      <SwitchContainer onClick={handleSwitch} active={currentValue === options[0] ? 'first' : 'second'}>
        <Selector />
      </SwitchContainer>
      <Label>{options[1].name}</Label>
    </Wrapper>
  )
}
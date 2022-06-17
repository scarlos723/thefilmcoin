import stepStatusOptions from './stepStatusOptions'
import {
  Container,
  Step,
  Icon,
  Description
} from './styles'

export default function Stepper({
  labels,
  currentStep = 0,
  currentStepStatus = stepStatusOptions.current
}) {

  /**
   * Returns the correct icon component for the step
   * @param {int} index The index of the step
   * @returns the correct icon for the step
   */
  const getIcon = (index) => {
    if (index < currentStep) {
      return <Icon status={stepStatusOptions.success} />
    } else if (index === currentStep) {
      return <Icon status={
        currentStepStatus === stepStatusOptions.error
          ? stepStatusOptions.error
          : stepStatusOptions.current
      } />
    }
    return <Icon status={stepStatusOptions.next} />
  }

  const steps = labels.map((label, index) => {
    return (
      <Step key={index}>
        {getIcon(index)}
        <Description>
          {label}
        </Description>
      </Step>
    )
  })

  return (
    <Container>
      {steps}
    </Container>
  )
}


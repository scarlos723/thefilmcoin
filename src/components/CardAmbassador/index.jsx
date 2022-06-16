import {
  Card,
  GreenBox,
  ImgContainer,
  Ul
} from './styles'
export default function CardAmbassador (props) {
  return (
    <Card>
      <ImgContainer>
        <img src={props.info.img} alt='' />
      </ImgContainer>
      <GreenBox>
        <Ul>
          {
            props.info.socialnets.map((item, index) => {
              if (item.show) {
                return (
                  <li key={index}>
                    <img src={item.icon} alt={`${item.name} icon`} />
                  </li>
                )
              } else {
                return false
              }
            })
          }
        </Ul>
        <h5>{props.info.name}</h5>
        <p>{props.info.ocupation}</p>

      </GreenBox>
    </Card>
  )
}

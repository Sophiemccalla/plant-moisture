import { Container, Header, Segment, List, Button } from 'semantic-ui-react';
import MoistureInstructions from './MoistureInstructions';

function RadishDetails() {
  return (
    <Container>
      <Segment basic>
        <Header size='huge' content='Radishes'/>
        <MoistureInstructions image='/images/card-radish.jpeg' /> 
        <Button>Download</Button>
        <Button>Just Watered</Button>
        <Header size='medium' content='General plant care'/>
        <List bulleted>
          <List.Item>
            Radishes need as much sun as possible so if you're growing them inside make sure to keep them
            by the window as long as possible.
          </List.Item>
          <List.Item>
            When watering, make sure to do so evenly and not to concentrate it in one spot. If you don't
            do this there is a risk of the roots rotting 
          </List.Item>
          <List.Item>
            When harvesting your radishes, leaving them in the ground too long could cause them to have
            a weird starchy taste. To make sure this doesn't happen you can examine the growth above the
            soil. When the height reaches 6 to 8 inches tall the radish is probably approaching the right 
            time to harvest.
          </List.Item>
          <List.Item>
            The standard amount you have to water per week is one inch above the soil.
          </List.Item>
          <List.Item>
            A final tip is that the best sign to see if your radish is ready to harvest is when you can
            feel or see the top of the radish poking through the soil.
          </List.Item>
        </List>
        <a href='https://www.almanac.com/plant/radishes'>https://www.almanac.com/plant/radishes</a>
      </Segment>
    </Container>
  )
}

export default RadishDetails;

import './App.css';
import { Card, Container, Header, Segment, List, Button, Modal, } from 'semantic-ui-react';
import MoistureInstructions from './MoistureInstructions';
import { useEffect, useState } from 'react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import moment from 'moment';
import CodeInstructions from './CodeInstructions';

function BeetDetails() {
  const [date] = useState(moment().add(7, 'days').format("YYYY-MM-DD"))
  return (
    <Container>
      <Segment basic>
        <Header size='huge' content='Beets'/>
        <MoistureInstructions image='/images/card-beet.png' /> 
        <CodeInstructions />
        <AddToCalendarButton
          name='Weekly beat watering reminder'
          startDate={date}
          recurrence='weekly'
          recurrence_interval='1'          
          options={['Apple','Google','Yahoo','iCal']}
          timeZone="America/Montreal"
        ></AddToCalendarButton>
        <Header size='medium' content='General plant care'/>
        <List bulleted>
          <List.Item> 
            Beets are a lot like radishes and need as much sun as possible. If you're growing them inside 
            make sure to keep them by the window as long as possible.
          </List.Item>
          <List.Item>
            When handling the beet be careful in the beginning stages because beets have shallow roots
            that can easily be disturbed.
          </List.Item>
          <List.Item>
            The amount of time needed for the beets to fully grow and are ready for harvest is 55 to
            70 days so about 2 months.
          </List.Item>
          <List.Item>
            The standard amount you have to water per week is one inch or until it is moist.
          </List.Item>
        </List>
        <a href='https://www.almanac.com/plant/beets'>https://www.almanac.com/plant/beets</a>
      </Segment>
    </Container>
  )
}

export default BeetDetails;

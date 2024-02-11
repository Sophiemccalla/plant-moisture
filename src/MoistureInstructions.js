import { Header, Segment, Image, List, Grid, GridColumn } from 'semantic-ui-react';

function MoistureInstructions(props) {
  return (
    <Segment basic>
      <Grid columns={2}>
        <GridColumn>
          <Image src={props.image} size='medium' floated='left' />
        </GridColumn>
        <GridColumn stretched>
          <Header size='medium' content='How to use your moisture sensor'/>
          <List ordered>
          <List.Item>
              Download the <a href='https://www.arduino.cc/en/software'>Arduino IDE</a> software.
            </List.Item>
            <List.Item>
              Start a new project on the Arduino IDE software and click on the "code" button located
              above the add calendar button.
            </List.Item>
            <List.Item>
              Copy the code that pops up after clicking the "code" button onto your new project.
            </List.Item>
            <List.Item>
              Use the USB cable to connect your moisture sensor to your laptop.
            </List.Item>
            <List.Item>
              Click the upload button that looks like an arrow at the top left of your project 
              to send the information for your plant to your moisture sensor.
            </List.Item>
            <List.Item>
              Once uploaded, stick your moisture sensor in your plant and water it evenly until
              you hear the buzzer stop. Once it has stoped the plant is at it's ideal moisture level.
            </List.Item>
            <List.Item>
              Click the "Add to calendar" button and click your desired calendar. It will bring you
              to that calendar so you can set a weekly reminder to water your plant.
            </List.Item>
          </List>
        </GridColumn>
      </Grid>
    </Segment>
  )
}

export default MoistureInstructions;

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
              Use the USB cable to connect your moisture sensor to your laptop.
            </List.Item>
            <List.Item>
              Click the "Download" button to send the information for your plant to your moisture sensor.
            </List.Item>
            <List.Item>
              Once downloaded, stick your moisture sensor in your plant and water it evenly until
              you hear the buzzer. Once it has buzzed the plant is at it's ideal moisture level.
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

import './App.css';
import { Card, Container, Header, Segment } from 'semantic-ui-react';

function Home() {
  return (
    <Container>
      <Segment basic>
        <Header content="Plants" />
      </Segment>
      <Card.Group>
        <Card
          href='/details/radishes'
          image='images/card-radish.jpeg'
          header='Radishes'
          description='The radish (Raphanus raphanistrum subsp. sativus) is an edible root vegetable of the mustard family, Brassicaceae, that was domesticated in Asia prior to Roman times.'
        />
        <Card
          href='/details/beets'
          image='images/card-beet.png'
          header='Beets'
          description='The beetroot is the taproot portion of a beet plant, usually known in North America as beets while the vegetable is referred to as beetroot in British English, and also known as the table beet, garden beet, red beet, dinner beet or golden beet.'
        />
      </Card.Group>

    </Container>
  )
}

export default Home;

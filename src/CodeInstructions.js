import { Segment, Button, Modal } from 'semantic-ui-react';
import code from './code.txt'

function CodeInstructions(props) {
  return (
    <Modal
    trigger={<Button>Code</Button>}
    header='Code'
    content={
      <Segment basic>
        <pre>{code}</pre>
      </Segment>
    }
    actions={['Close']}
  />
)
}

export default CodeInstructions;

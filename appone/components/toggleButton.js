import * as React from 'react';
import { ToggleButton } from 'react-native-paper';

const ToggleBtn = () => {
  const [value, setValue] = React.useState('left');

  return (
    <ToggleButton.Row  onValueChange={value => setValue(value)} value={value}>
      <ToggleButton style = {{width: '50%'}} icon="close" value="left" />
      <ToggleButton style = {{width: '50%'}} icon="check" value="right" />
    </ToggleButton.Row>
  );
};

export default ToggleBtn;
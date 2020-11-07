import React from "react";
import { Sidebar, Menu, Divider, Button } from "semantic-ui-react";
//class component for color panel
class ColorPanel extends React.Component {
  render() {
    return (
      <Sidebar
        as={Menu}
        icon="labeled"
        inverted
        vertical
        visible
        width="very thin"
      >
        <Divider />
        <Button icon="add" size="small" color="black" />
      </Sidebar>
    );
  }
}

export default ColorPanel;

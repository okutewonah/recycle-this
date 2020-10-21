import React, { PureComponent } from "react";
import { StyleSheet, View, Image } from "react-native";
 
const RADIUS = 20;

class Item extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const x = this.props.position[0] - RADIUS / 2;
    const y = this.props.position[1] - RADIUS / 2;
    return (
      <Image source={require('./assets/apple.png')} style={[styles.newspaper, { left: x, top: y }]}/>
    );
  }
}

class Bin extends PureComponent {
    render() {
        const x = this.props.position[0] - RADIUS / 2;
        const y = this.props.position[1] - RADIUS / 2;
        return (
          <View style={[styles.bin, { left: x, top: y }]} />
        );

    }
}
 
const styles = StyleSheet.create({
  item: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "pink",
    position: "absolute"
  },
  bin: {
    borderColor: "#CCC",
    borderWidth: 4,
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    backgroundColor: "blue",
    position: "absolute"
  },
  newspaper: {
    borderRadius: RADIUS * 2,
    width: RADIUS * 2,
    height: RADIUS * 2,
    position: "absolute"
  }

});
 
export { Item, Bin };
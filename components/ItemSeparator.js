import { View, Text } from "react-native";
import React from "react";

const ItemSeparator = ({ height, width }) => {
  return;
  <View style={{ width, height }} />;
};
//kichu kori ni ajkeo keno jani shoril kharap lagteseye
ItemSeparator.defaultProps = {
  height: 0,
  width: 0,
};
export default ItemSeparator;

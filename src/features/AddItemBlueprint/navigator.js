import { createStackNavigator } from "react-navigation-stack";

import AddItem from "./screens/addItem";
import Home from "./screens";

export const AddItemBlueprintNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    AddItem: { screen: AddItem },
  },
  {
    initialRouteName: "Home"
  }
);

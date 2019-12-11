import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';

import { GoogleMapsNavigator } from "../features/MapsScreen/navigator";
import CalendarNavigator from "../features/Calendar/navigator";
import TutorialNavigator from "../features/Tutorial/navigator";
import { MessengerNavigator } from "../features/Messenger/navigator";
import {EmailAuthNavigator} from '../features/EmailAuth/navigator';
import { CameraNavigator } from "../features/UserCamera/navigator";

//@BlueprintImportInsertion
import { LeaderBoardBlueprintNavigator } from '../features/LeaderBoardBlueprint/navigator';
import { FeedBlueprintNavigator } from '../features/FeedBlueprint/navigator';
import { Dashboard2BlueprintNavigator } from '../features/Dashboard2Blueprint/navigator';
import { Dashboard1BlueprintNavigator } from '../features/Dashboard1Blueprint/navigator';
import { ContactsBlueprintNavigator } from '../features/ContactsBlueprint/navigator';
import { ArticlesBlueprintNavigator } from '../features/ArticlesBlueprint/navigator';
import { AddItemBlueprintNavigator } from '../features/AddItemBlueprint/navigator';
import { SignIn01BlueprintNavigator } from '../features/SignIn01Blueprint/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    
    MapsScreen: {
      screen: GoogleMapsNavigator
    },
    
    
    Calendar: {
      screen: CalendarNavigator
    },
    
    
    EmailAuth: {
      screen: EmailAuthNavigator,
    },
    
    
    Tutorial: {
      screen: TutorialNavigator
    },
    
    
    UserCamera: {
      screen: CameraNavigator
    },
    
    
    Messenger: {
      screen: MessengerNavigator
    },
    

    //@BlueprintNavigationInsertion
LeaderBoardBlueprint: { screen: LeaderBoardBlueprintNavigator },
FeedBlueprint: { screen: FeedBlueprintNavigator },
Dashboard2Blueprint: { screen: Dashboard2BlueprintNavigator },
Dashboard1Blueprint: { screen: Dashboard1BlueprintNavigator },
ContactsBlueprint: { screen: ContactsBlueprintNavigator },
ArticlesBlueprint: { screen: ArticlesBlueprintNavigator },
AddItemBlueprint: { screen: AddItemBlueprintNavigator },
SignIn01Blueprint: { screen: SignIn01BlueprintNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

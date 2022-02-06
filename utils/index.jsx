import { Linking } from "react-native";

export default openURL = url => {
    Linking.openURL(url).catch( err => console.error(`An error occured while we were trying to route you to your deal: ${err}`));
  };
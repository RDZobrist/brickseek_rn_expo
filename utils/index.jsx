import { Linking } from "react-native";

export const openURL = url => {
    Linking.openURL(url).catch( err => console.error(`An error occured while we were trying to route you to your deal: ${err}`));
  };

export const formatCurrency = unformattedCurrency => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
    .format(unformattedCurrency)
};

export const calculateAndFormatPercentSavings = (msrp, low_price)=>{
    let dollarsSaved = msrp-low_price;
    let percentSaved = (dollarsSaved/msrp) * 100;
    return `${percentSaved.toFixed(2)}%`;
};
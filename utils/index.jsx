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

export const extractFilterValuesFromState = 
(
    targetSelected, lowesSelected, homeDepotSelected, 
    bestBuySelected, macysSelected, samsclubSelected,
    dollarGeneralSelected,bedbathandbeyondSelected,kohlsSelected,
    ultaSelected,wallmartSelected,amazonSelected,
    staplesSelected,officeDepotSelected,academySportsSelected
) => {
    let extractedFilterValues = [];
    targetSelected?extractedFilterValues.push("1"):null
    lowesSelected?extractedFilterValues.push("10"):null
    homeDepotSelected?extractedFilterValues.push("11"):null
    bestBuySelected?extractedFilterValues.push("12"):null
    macysSelected?extractedFilterValues.push("13"):null
    dollarGeneralSelected?extractedFilterValues.push("23"):null
    samsclubSelected?extractedFilterValues.push("19"):null
    bedbathandbeyondSelected?extractedFilterValues.push("24"):null
    kohlsSelected?extractedFilterValues.push("25"):null
    ultaSelected?extractedFilterValues.push("26"):null
    academySportsSelected?extractedFilterValues.push("28"):null
    wallmartSelected?extractedFilterValues.push("3"):null
    amazonSelected?extractedFilterValues.push("5"):null
    staplesSelected?extractedFilterValues.push("7"):null
    officeDepotSelected?extractedFilterValues.push("8"):null
    return extractedFilterValues;
}
export const getTemplate = (deviceType:string):string  => {

    switch(deviceType) {
    case "desktop":
        return "./plantillaGoogle/resultsPagePC.html";
    case "mobile":
        return "./plantillaGoogle/resultsPageMobile.html";
    default:
        return "Error loading device type"
    }
        

}

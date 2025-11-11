export const getTemplate = (deviceType:string):string  => {

    switch(deviceType.toLowerCase()) {
    case "desktop":
        return "./plantillaGoogle/resultsPagePC.html";
    case "mobile":
        //AGREGAR PLANTILLA MOBILE
        return "./plantillaGoogle/resultsPagePC.html";
    default:
        return "Error loading device type"
    }
        

}

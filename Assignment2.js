function getUrlParameterValue(url, parameter) {
    const urlParams = new URLSearchParams((new URL(url)).search);
    return urlParams.get(parameter);
}

// Example usage:
var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getUrlParameterValue(url, "utm_medium")); // Should return "webplugin"
console.log(getUrlParameterValue(url, "utm_campaign")); // Should return "poweredby"

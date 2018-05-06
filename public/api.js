class Api {
    constructor(url) {
        this.url = url
    }
    fetch($serchData) {
        var city = $serchData;
        var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" +
            city + "') and u='c'"
        return $.ajax({
            method: "GET",
            url: this.url + searchtext + "&format=json"
        })
    }
}
export { Api }
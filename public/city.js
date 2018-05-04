class City {
    constructor(cityName, currentTemp, weatherDiscription) {
        this.cityName = cityName
        this.currentTemp = currentTemp
        this.weatherDiscription = weatherDiscription
    }


    console() {
        console.log(
            this.cityName,
            this.currentTemp,
            this.weatherDiscription)
    }
}
export { City }
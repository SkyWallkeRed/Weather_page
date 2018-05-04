import { City } from './city.js'

class Data {
    constructor(data) {
        this.dataArr = [data]
    }
    pushData(data) {
        this.dataArr.push(data)
    }
    console() {
        console.log(this.dataArr)
    }


}

export { Data }
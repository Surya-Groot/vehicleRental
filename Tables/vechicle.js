const mongoose = require('mongoose');



const vechical = mongoose.Schema({

    uniqId: String,
    orgId: String,
    vType: String,
    brand: String,
    vModel:String,
    regNo: String,
    regType:String,
    seatCnt:String,
    ac:String,
    gear:String,
    fuel:String,
    toll:String,
    color:String,
    rangeKm:String,
    priceDay:String,
    fuelCap:String,
    mileage:String,
    engineCC:String,
    sunroof:String,
    gps:String,
    insId:String,
    

});

module.exports = mongoose.model('vechical', vechical)










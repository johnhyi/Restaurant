let RestaurantRoutes = require("../routes/RestaurantRoutes.js");
let path = require("path");

module.exports = (app) =>{
    RestaurantRoutes(app);

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("../client/dist/client/index.html"));
    })
}
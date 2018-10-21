let RestaurantController = require("../controllers/RestaurantController.js");

module.exports=(app)=>{
    app.get("/api/restaurants",RestaurantController.all);
    app.post("/api/restaurants",RestaurantController.create);
    app.get("/api/restaurants/:id",RestaurantController.findById);
    app.patch("/api/restaurants/:id",RestaurantController.update);
    app.delete("/api/restaurants/:id",RestaurantController.destroy);
    app.patch("/api/restaurants/:id/like",RestaurantController.like);
}
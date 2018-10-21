let Restaurant = require("mongoose").model("Restaurant");

class RestaurantController{

    create(req,res){
        let restaurant = new Restaurant(req.body);

        restaurant.save(e=>{
            if(e) return res.json(e);
            return res.json(restaurant);
        });
    }
    all(req,res){
        Restaurant.find({},(e,restaurants)=>{
            if(!restaurants) return res.json(e);
            return res.json(restaurants);
        })
    }
    findById(req,res){
        Restaurant.findOne({ _id: req.params.id }, (e,restaurant)=>{
            if(!restaurant) return res.status(404).json("Restaurant not found.");
            return res.status(200).json(restaurant);
        })

    }
    update(req,res){
        Restaurant.findOne({ _id: req.params.id }, (e,restaurant)=>{
            if(!restaurant) return res.status(404).json("Restaurant not found.");
            restaurant.name = req.body.name;
            restaurant.type = req.body.type;
            restaurant.likes = req.body.likes

            restaurant.save(e=>{
                if(e) return res.json(e);
                return res.status(200).json(restaurant);
            })
        })

    }
    destroy(req,res){
        Restaurant.findOne( {_id: req.params.id}, (e, restaurant)=>{
            if(!restaurant) return res.status(404).json("Restaurant not found.");
            Restaurant.deleteOne( {_id: req.params.id}, (e)=>{
                if(e) return res.status(500).json(e);
                return res.json(restaurant);
            })
        })
    }
    like(req,res){
        Restaurant.findOne( {_id: req.params.id}, (e,restaurant)=>{
            if(!restaurant) return res.status(404).json("Restaurant not found.");
            
            restaurant.likes++;

            restaurant.save(e=>{
                if(e) return res.status(400).json(e);
                return res.status(200).json(restaurant);
            });
        } )

    }
}

module.exports = new RestaurantController();
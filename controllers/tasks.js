// All necessary requires, such as the Quote model.
mongooseSetting = require('../config/mongoose.js').mongooseSettings;
mongoose = mongooseSettings.mongoose;
mongooseSettings.connect();

var Task = mongoose.model('Task'); // We are retrieving this Schema from our Models, named 'User'

module.exports = {
    display: function(req,res){
        Task.findOne({_id: req.params.id}, function(err,data){
            if(err){
                console.log("Failed to query for task");
                res.json({message: "Error", error: err});
            }
            console.log(data);  
        
            res.json({message: "Success", data: data});
        });
    },
    index: function(req, res) {
    	Task.find({}, function(err,data){
            if(err){
                console.log("Failed to query for tasks");
                res.json({message: "Error", error: err});
            }
            console.log(data);  
        
            res.json({message: "Success", data: data});
        });
    },
    create: function(req, res) {
        console.log(req.body);
        var task = new Task({title: req.body.title, description: req.body.description, completed: false});

            task.save(function(err,result){
                if(err){
                    console.log("Failed to insert task into the DB!");
                    res.json({message: "Error", error: err});
                }
                else{
                    res.json({message: "Success!", data:result})
                }
            });

        

    },
    delete: function(req,res){

            Task.deleteOne({_id: req.params.id}, function(err,result){
                if(err){
                    console.log(err);
                    res.json({message: "Error", error: err});
                }
                else{
                    console.log('Sucessfully deleted a task!');
                    res.json({message: "Success", data: result});
                }
            })
    },
    update: function(req,res){
        Task.findOne({_id: req.params.id}, function(err,result){
            if(err){
                res.json({message: "Error", error: err});
            }
            else{
                result.title = req.body.title;
                result.description = req.body.description;
                result.completed = req.body.completed;
                result.save(function(err,result){
                    if(err){
                        res.json({message: "Error", error: err});
                    }
                    else{
                        res.json({message: "Success!", data:result});
                    }
                })
        
            }
        })
    }
};

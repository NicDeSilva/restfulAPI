//Set the Quote schema
module.exports = function(mongooseSettings){
    mongoose = mongooseSettings.mongoose;
    mongooseSettings.connect();
    
    var TaskSchema = new mongoose.Schema({
        title: {type: String, required: true, minlength:2, maxlength:50},
        description: {type: String, required: true, maxlength:200},
        completed: {type: Boolean, required: true},

       }, {timestamps: true});
    mongoose.model('Task',TaskSchema);
}

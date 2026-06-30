const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
     institutionname: { type: String, required: true},
   
    

degreetype:{type: String, required: true} ,

fieldOfStudy:{type: String, required: true} ,

startDate:{type: String, required: true},

endDate :{type: String, required: true}
    
});

module.exports = mongoose.model('education', educationSchema);
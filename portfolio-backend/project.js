const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    
   
    
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, // هنا هنخزن اسم الصورة بس، مثلاً "dashboard.png"
       // required: true 
        default: ""
    },
    githubUrl: { 
        type: String, 
        default: "" 
    },
    liveUrl: { 
        type: String, 
        default: "" 
    }
});



module.exports = mongoose.model('Project', projectSchema);
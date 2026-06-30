const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const skills= require('./skills')
const contact= require('./contact')
const education= require('./education')
const project= require('./project')
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // angular to backend talk

app.use(express.json());

// portfolio_db connection
mongoose.connect('mongodb://127.0.0.1:27017/portfolio_db')
  .then(() => console.log(' Connected to MongoDB successfully!'))
  .catch(err => console.error(' MongoDB connection error:', err));

// api end points

//////////////////////////////////////////////////////skills
app.get('/api/skills', async (req, res) => {
  try {
    const data = await skills.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/skills', async (req, res) => {
  try {
    const newSkill = new skills({ name: req.body.name });
    await newSkill.save();
    res.status(201).json({ message: 'Skill added successfully!', skill: newSkill });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
})



app.get('/api/contact', async (req, res) => {
  try {
    const data = await contact.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});   


// contact
app.post('/api/contact', async (req, res) => {
  try {
    const newLocation = new contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
      
    });
    
    await newLocation.save();
    res.status(201).json({ message: 'Your message has been sent successfully!', data: newLocation });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

//skills
app.put('/api/skills/:id', async (req, res) => {
  try {
    const updatedSkill = await skills.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true, runValidators: true }
    );

    res.json(updatedSkill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/skills/:id', async (req, res) => {
  try {
    await skills.findByIdAndDelete(req.params.id);
    res.json({ message: 'Skill deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});











////////////////////////////////////////////////////education


app.get('/api/education',async (req, res) => {
try {
    const data = await education.find();
    
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/education', async (req, res) => {
  try {
    const neweducation = new education({  institutionname: req.body.institutionname,

       degreetype:req.body. degreetype ,
 fieldOfStudy:req.body. fieldOfStudy,
 startDate:req.body. startDate,
 endDate :req.body. endDate

     }

       
    );
    await neweducation.save();
    res.status(201).json({ message: 'education added successfully!', education: neweducation });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
})


app.put('/api/education/:id', async (req, res) => {
  try {
    const updatedEducation = await education.findByIdAndUpdate(
      req.params.id, 
       {
        institutionname: req.body.institutionname,
        degreetype: req.body.degreetype,
        fieldOfStudy: req.body.fieldOfStudy,
        startDate: req.body.startDate,
        endDate: req.body.endDate
      },
      { new: true, runValidators: true } // after edit
    );

    if (!updatedEducation) {
      return res.status(404).json({ message: 'Education item not found!' });
    }

    res.json({ message: 'Education updated successfully!', education: updatedEducation });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.delete('/api/education/:id', async (req, res) => {
  try {
    const deletedEducation = await education.findByIdAndDelete(req.params.id);

    if (!deletedEducation) {
      return res.status(404).json({ message: 'Education item not found!' });
    }

    res.json({ message: 'Education deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});








////////////////////////////////////////////////////////project



app.get('/api/project',async (req, res) => {
try {
    const data = await project.find();
    
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.post('/api/project', async (req, res) => {
  try {
    const neweproject = new project({ 
title: req.body.title,
      description: req.body.description,
      image: req.body.image,
      githubUrl: req.body.githubUrl,
      liveUrl: req.body.liveUrl


    });
    await neweproject.save();
    res.status(201).json({ message: 'project added successfully!', project: neweproject });
  } catch (err) { console.log(err);
    res.status(400).json( err);
  }
})


app.put('/api/project/:id', async (req, res) => {
  try {
    const updatedproject = await project.findByIdAndUpdate(
      req.params.id, 
      {
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        githubUrl: req.body.githubUrl,
        liveUrl: req.body.liveUrl
      },
      { new: true, runValidators: true } );

    if (!updatedproject) {
      return res.status(404).json({ message: 'project item not found!' });
    }

    res.json({ message: 'project updated successfully!', project: updatedproject });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


app.delete('/api/project/:id', async (req, res) => {
  try {
    const deletedproject = await project.findByIdAndDelete(req.params.id);

    if (!deletedproject) {
      return res.status(404).json({ message: 'project item not found!' });
    }

    res.json({ message: 'project deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});






//server run
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
const mongoose = require('mongoose');

uri = "mongodb+srv://yuvalfarjun1:yuval123@cluster0.qdzu4dm.mongodb.net/hitdb?retryWrites=true&w=majority";

mongoose.connect(uri, 
{   
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const personSchema = new mongoose.Schema({
    id: String,
    firstname: String,
    lastname: String,
    dob: Date,
    //photo: String,
    condition1: String,  
    condition2: String,  
    condition3: String,  
    condition4: String,  
    condition5: String
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person;
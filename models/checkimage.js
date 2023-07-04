const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');

 const apiKey = 'acc_1dc723afa146186';
 const apiSecret = '44b61c8773b321f87beffe1e8dad4013';

async function sendImageForTagging(filepath) {
  const imageUrl = 'https://api.imagga.com/v2/tags';
  try {
    // Read the image file
    const file = fs.readFileSync(filepath)   

    // Create form data
    const formData = new FormData();
    formData.append('image', file);  

    // Send the POST request
    const response = await axios.post(imageUrl, formData, {
      auth: {
        username: apiKey,
        password: apiSecret,
      },
      headers: formData.getHeaders()
    });

    // Handle the response
    return(response.data.result.tags)   
       
  } catch (error) {
    // Handle any errors
    console.error('Error:', error.response.data);
  }
}

// Call the function to send the image for tagging
module.exports=sendImageForTagging
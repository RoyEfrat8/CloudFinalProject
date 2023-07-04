
const { Configuration, OpenAIApi } = require("openai");
 
const configuration = new Configuration({
  apiKey: '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',
});
 
 
const openai = new OpenAIApi(configuration);

 
const checkIt = async (question) => {
  let messages = [
        { role: 'user', content: question }
      ];
  console.log(question);
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages
    });
    return (completion.data.choices[0].message);
 
  } catch (error) {
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
    }
  }
}
 
module.exports=checkIt

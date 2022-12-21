import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `Write a sermon about the title or verse below. Quote some verses of the bible. If the prompt is in spanish, write in spanish. Use a style of writing like a famous pastor.
Title:
`;
const generateAction = async (req, res) => {

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.6,
    max_tokens: 3000,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;

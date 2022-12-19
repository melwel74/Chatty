// const { Configuration, OpenAIApi } = require("openai");

// const configuration = new Configuration({
//   apiKey: "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",
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "code-davinci-003",
//   prompt: "You: How do I combine arrays?\nJavaScript chatbot: You can use the concat() method.\nYou: How do you make an alert appear after 10 seconds?\nJavaScript chatbot",
//   temperature: 0,
//   max_tokens: 60,
//   top_p: 1.0,
//   frequency_penalty: 0.5,
//   presence_penalty: 0.0,
//   stop: ["You:"],
// });
// console.log(response.data)

// Get the chatbot messages container and message input form
const messagesContainer = document.querySelector('.chatbot-messages');
const messageForm = document.querySelector('.chatbot-input form');

// Add a submit event listener to the form
messageForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting and refreshing the page
  event.preventDefault();

  // Get the message input field and the message text
  const messageInput = document.querySelector('#message-input');
  const messageText = messageInput.value;

  // Clear the message input field
  messageInput.value = '';

  // Add the user's message to the chatbot messages container
  const userMessage = document.createElement('div');
  userMessage.classList.add('user-message');
  userMessage.innerHTML = `<p>${messageText}</p>`;
  messagesContainer.appendChild(userMessage);

  /

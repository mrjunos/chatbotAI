const _body = document.querySelector('body');
const header = document.querySelector('header');
const chat = document.createElement('div');

chat.innerHTML = '<!DOCTYPE html>'+
'<html lang="en" dir="ltr">'+
'<head>'+
'    <meta charset="UTF-8">'+
'    <title>Chatbot by Mateo A. | CEIPA</title>'+
'    <link rel="stylesheet" href="../../../embbeded/style.css">'+
'    <meta name="viewport" content="width=device-width, initial-scale=1.0">'+
'    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0">'+
'</head>'+
'<body class="show-chatbot">'+
'    <button class="chatbot-toggler">'+
'        <span class="material-symbols-outlined">mode_comment</span>'+
'        <span class="material-symbols-outlined">close</span>'+
'    </button>'+
'    <div class ="chatbot">'+
'        <header>'+
'            <h2>Chatbot</h2>'+
'            <span class="close-btn material-symbols-outlined">close</span>'+
'        </header>'+
'        <ul class="chatbox">'+
'            <li class="chat incoming">'+
'                <span class="material-symbols-outlined">smart_toy</span>'+
'                <p>Hi there <br> How can I help you today?</p>'+
'            </li>'+
'        </ul>'+
'        <div class="chat-input">'+
'            <textarea placeholder="Enter a message..." required></textarea>'+
'            <span id="send_btn" class="material-symbols-outlined">send</span>'+
'        </div>'+
'    </div>   '+
'</body>'+
'</html>';

_body.appendChild(chat);

const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatBotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;
const API_KEY = "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";
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    //Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const generateResponse = (incomingChatLi) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = incomingChatLi.querySelector("p");
console.log(window.Mateo.chatbotId);
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {role: "system", content: "You are a helpful assistant."},
                {role: "user", content: userMessage}
            ]
        })
    }
    console.log(requestOptions);

    // Send POST request to API, get response
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        console.log(data);
        messageElement.textContent = data.choices[0].message.content;
    }).catch((error) => {
        console.log(error);
        messageElement.classList.add("error");
        messageElement.textContent = "Oops! Something went wrong. Please try again!";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    console.log(userMessage);
    if(!userMessage) return;
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    //Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    //Adjust the height of the input text area based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
})

chatInput.addEventListener("keydown", (e) => {
    // To handle enter as send action
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 700){
        e.preventDefault();
        handleChat();
    }
})

// chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatBotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
sendChatBtn.addEventListener("click", handleChat);
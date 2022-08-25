
let userName = '';
const thisApp = this;

//select

const loginForm = document.querySelector('#welcome-form');
const messagesSection = document.querySelector('#messages-section');
const messagesList = document.querySelector('#messages-list');
const addMessageForm = document.querySelector('#add-messages-form');
const userNameInput = document.querySelector('#username');
const messageContentInput = document.querySelector('#message-content');

//functions

const login = (e) => {
    e.preventDefault();
    const userId = userNameInput.value;
    if(userId) {
        const userName = userId;
        loginForm.classList.remove('show');
        messagesSection.classList.add('show');
        console.log(userName);
    } else {
        return alert('The field is empty.')
    }
};

const sendMessage = (e) => {
    e.preventDefault();
    const isMessage = messageContentInput.value;
    if(isMessage) {
        addMessage(userName, isMessage);
        messageContentInput.value = '';
    } else {
        return alert ('The message file is empty')
    }
};

const addMessage = (author, content ) => {
    const message = document.createElement('li');
    message.classList.add('message');
    message.classList.add('message--received');
    if(author === userName) message.classList.add('message--self');
    message.innerHTML += 
        `<h3 class="message__author">${ author === userName ? 'You' : author }</h3>;
        <div class="message__content"> ${content} </div>`;

    messagesList.appendChild(message)
};
console.log(loginForm);
loginForm.addEventListener('submit',  (e) => { login(e) });
addMessageForm.addEventListener('submit', (e) => { sendMessage(e) });

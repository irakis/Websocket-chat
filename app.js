import { select } from "./settings";

const userName = 'user1';
const thisApp = this;

thisApp.dom ={};
thisApp.dom.loginForm = document.querySelector(select.loginForm);
thisApp.dom.messagesSection = document.querySelector(select.messagesSection);
thisApp.dom.messagesList = document.querySelector(select.messagesList);
thisApp.dom.addMessageForm = document.querySelector(select.addMessageForm);
thisApp.dom.userNameInput = document.querySelector(select.userNameInput);
thisApp.dom.messageContentInput = document.querySelector(select.messageContentInput);

const loginFormHandler = (e) => { 
    
    thisApp.dom.loginForm.addEventListener( 'submit', function login (e) {
        e.preventDefault();
        const userId = thisApp.dom.userNameInput.value;
        if(userId) {
            const userName = userId;
            thisApp.dom.loginForm.classList.remove('show');
            thisApp.dom.messagesSection.classList.add('show');
        } else {
            return alert('The field is empty.')
        }
        console.log('prevent and dom  works?', userId)
    })

};

const addMessageFormHandler = () => {
    e.preventDefault();
    const isMessage = thisApp.dom.addMessageForm.value;
    thisApp.dom.addMessageForm.addEventListener('submit', function sendMessage (e) {
        if(isMessage) {
            addMessage(userName, thisApp.dom.messageContentInput.value);
            thisApp.dom.messageContentInput.value = '';
        } else {
            return alert ('The message file is empty')
        }
    })
}



//export default loginFormHandler;
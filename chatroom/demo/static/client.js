// messageContainer.children[messageContainer.childElementCount - 1]

messageContainer = document.querySelector('.messageContainer');

function displayMsg(sender, senderName, msg) {
    let newMsg = document.createElement('div');
    newMsg.setAttribute('class', `msg ${sender}`);
    // if (senderName == lastMsgSender) {
    //     if (sender == 'mm') {
    //         newMsg.innerHTML = `
    //               <div class="${sender}">${msg}</div>`;
    //     }
    //     else {
    //         newMsg.innerHTML = `
    //               <div class="${sender}">${msg}</div>`;
    //     }
    //     console.log('same');
    // }
    // else {
    // newMsg.setAttribute('style', 'margin : 8px 0px 0px 0px');
    // if (sender == 'mm') {
        newMsg.innerHTML = `
                <div class="sender">
                    <div class="s">@${senderName}</div>
                    <div class="time">${getTime().date} ${getTime().month} ${getTime().year} ${getTime().hours}:${getTime().minutes}:${getTime().seconds} ${getTime().meridiem}</div>
                  </div>
                  
                  <div class="${sender}">${msg}</div>`;
    // }
    // else {
    //     newMsg.innerHTML = `
    //               <div class="sender">@${senderName}</div>
    //               <div class="${sender}">${msg}</div>`;
    // }
    console.log(getTime());
    // console.log('not same');
    // }
    // newMsgLine.appendChild(newMsg);
    messageContainer.appendChild(newMsg);
    messageContainer.scroll(0, messageContainer.scrollHeight);
    lastMsgSender = senderName;
}

function notify(notification) {
    let notifier = document.createElement('div');
    notifier.innerText = notification;
    notifier.setAttribute('class', 'notifier');
    messageContainer.appendChild(notifier);
    messageContainer.scroll(0, messageContainer.scrollHeight);
}







name = getName('enter your name :');
function getName(str) {
    let userName = prompt(str);
    if (userName == '' || userName == null) {
        getName('please specify your name to join the chat room :');
    }
    if (userName.length > 26) {
        getName(
            `sorry! can't set username.\nusername should contain less than 26 characters.`);
    }
    else {
        socket.emit('user name', userName);
        notify(`you joined the chat as ${userName}`);
        return userName;
    }
}

socket.on('un', (name) => {
    notify(`${name} joined the chat`);
});
socket.on('user leaved', (wholeaved) => {
    notify(wholeaved);
});

let form = document.querySelector('form');
let message = document.querySelector('input');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (message.value != 0) {
        socket.emit('user message', name, message.value);
        displayMsg('mm', name, message.value);
        message.value = '';
    }
});

socket.on('um', (sender, msg) => {
    displayMsg('om', sender, msg);
});
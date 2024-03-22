const button=document.getElementById('button')
const toasts=document.getElementById('toasts')

const messages=[
    'messages one',
    'messages two',
    'messages three',
    'messages four',
    'messages five',
]
button.addEventListener('click',()=>createNotification())

function createNotification(message=null){
    const notif=document.createElement('div')
    notif.classList.add('toast')

    notif.innerText= message ? message:getRandomMessage(); 
    toasts.appendChild(notif)

    setTimeout(()=>{
        notif.remove()
    },3000)
}
function getRandomMessage(){ 
    return messages[Math.floor(Math.random()* messages.length)]
}

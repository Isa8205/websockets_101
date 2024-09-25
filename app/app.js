const socket = new WebSocket('ws://localhost:3000')

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()

    const input = document.querySelector('input')
    if (input.value) {
        socket.send(input.value)
        input.value = ""
    }
    input.focus
})

// Listen for messages from the server
socket.addEventListener('message', ({ data }) => {
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    li.textContent = data

    ul.appendChild(li)
})
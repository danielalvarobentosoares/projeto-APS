// Adicionando interatividade básica
document.addEventListener('DOMContentLoaded', function() {
    console.log("Document is ready!");

    const sendMessageButton = document.querySelector('button[type="submit"]');
    sendMessageButton.addEventListener('click', function() {
        const input = document.querySelector('#chatBox input[type="text"]');
        const message = input.value;
        if (message) {
            const chatBox = document.getElementById('chatBox');
            const newMessage = document.createElement('p');
            newMessage.textContent = `Você: ${message}`;
            chatBox.appendChild(newMessage);
            input.value = ''; // Limpar o input
        }
    });
});

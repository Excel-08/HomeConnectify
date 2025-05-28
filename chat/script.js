function sendMessage() {
      const input = document.getElementById('messageInput');
      const message = input.value.trim();
      if (message !== '') {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message sent';
        msgDiv.textContent = message;
        document.getElementById('chatMessages').appendChild(msgDiv);
        input.value = '';
        msgDiv.scrollIntoView({ behavior: 'smooth' });
      }
    }

    document.getElementById('messageInput').addEventListener('keypress', function(e) {
      if (e.key === 'Enter') sendMessage();
    });

    
function addChat() {
  const chatList = document.getElementById('chat-list');
  const newChat = document.createElement('div');
  newChat.className = 'chat-item';
  newChat.innerHTML = `
    <img src="images/img2.jpg" class="chat-pic">
    <div class="chat-info">
      <span class="name">New Contact</span>
      <span class="msg">New message...</span>
    </div>
    <span class="time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
  `;
  chatList.appendChild(newChat);
}
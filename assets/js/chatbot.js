// assets/js/chatbot.js

// API Key của bạn đã được cấu hình
const API_KEY = 'AQ.Ab8RN6LE7zhI2AsjhWl9W4x5aV5m3aBhu6pGi6ZNvSSelZ5K5g';
const MODEL_NAME = 'gemini-1.5-flash'; // Sử dụng mô hình flash để tốc độ phản hồi nhanh nhất

// Hàm chính gọi Gemini API
async function callGeminiAPI(userMessage) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;
    
    // Cấu trúc dữ liệu gửi lên API theo chuẩn của Google
    const requestData = {
        contents: [
            {
                parts: [
                    { text: userMessage }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`Lỗi HTTP: ${response.status}`);
        }

        const data = await response.json();
        
        // Trích xuất câu trả lời từ kết quả trả về của Gemini
        const botReply = data.candidates?.[0]?.content?.parts?.[0]?.text || "Xin lỗi, mình không thể phản hồi lúc này.";
        return botReply;

    } catch (error) {
        console.error("Lỗi khi kết nối tới Gemini API:", error);
        return "Đã xảy ra lỗi kết nối với máy chủ AI. Bạn hãy kiểm tra lại kết nối mạng nhé.";
    }
}

// Gắn sự kiện lắng nghe khi người dùng bấm gửi hoặc nhấn Enter trên giao diện chat
document.addEventListener("DOMContentLoaded", () => {
    const chatForm = document.querySelector("#chat-form"); 
    const userInput = document.querySelector("#user-input"); 

    if (chatForm) {
        chatForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const messageText = userInput.value.trim();
            if (!messageText) return;

            // 1. Hiển thị tin nhắn của người dùng lên khung chat
            appendMessage("User", messageText);
            userInput.value = "";

            // 2. Hiển thị trạng thái đang suy nghĩ
            const loadingId = appendMessage("Bot", "Gemini đang suy nghĩ...");

            // 3. Gọi Gemini API
            const replyText = await callGeminiAPI(messageText);

            // 4. Xóa thông báo đang chờ và hiển thị câu trả lời thật từ Gemini
            removeMessage(loadingId);
            appendMessage("Bot", replyText);
        });
    }
});

// Hàm hỗ trợ thêm tin nhắn vào giao diện
function appendMessage(sender, text) {
    const chatBox = document.querySelector("#chat-box");
    if (!chatBox) return;
    
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${sender.toLowerCase()}-message`;
    messageDiv.innerText = `${sender}: ${text}`;
    
    const messageId = "msg_" + Date.now();
    messageDiv.id = messageId;
    
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; 
    return messageId;
}

// Hàm xóa tin nhắn tạm thời (đang suy nghĩ)
function removeMessage(id) {
    const element = document.getElementById(id);
    if (element) {
        element.remove();
    }
}
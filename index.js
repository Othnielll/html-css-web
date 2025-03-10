document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the respective slide-in classes
    const slideInLeftElements = document.querySelectorAll('.slide-in-left');
    const slideInRightElements = document.querySelectorAll('.slide-in-right');
    const slideInBottomElements = document.querySelectorAll('.slide-in-bottom');

    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the animation
                entry.target.classList.add('visible');
                // Stop observing the element after it has been animated
                observer.unobserve(entry.target);
            }
        });
    });

    // Observe each element for left slide-in
    slideInLeftElements.forEach(element => {
        observer.observe(element);
    });

    // Observe each element for right slide-in
    slideInRightElements.forEach(element => {
        observer.observe(element);
    });

    // Observe each element for bottom slide-in
    slideInBottomElements.forEach(element => {
        observer.observe(element);
    });
});





    document.addEventListener("DOMContentLoaded", function () {
        // Get elements
        var chatbox = document.getElementById("chatbox");
        var chatInput = document.getElementById("chat-input");
        var sendButton = document.getElementById("send-btn");
        var attachmentButton = document.getElementById("attachment-btn");
        var chatButton = document.querySelector(".chatbtn");
        var closeButton = document.querySelector(".chatbox-header button");

        // Ensure chatbox is hidden on page load
        chatbox.style.display = "none";

        // Toggle chatbox visibility
        function toggleChatbox() {
            chatbox.style.display = (chatbox.style.display === "none" || chatbox.style.display === "") ? "flex" : "none";
        }

        // Toggle between send button and attachment button
        function toggleSendButton() {
            if (chatInput.value.trim() !== "") {
                sendButton.style.display = "inline-block";
                attachmentButton.style.display = "none";
            } else {
                sendButton.style.display = "none";
                attachmentButton.style.display = "inline-block";
            }
        }

        // Event listeners
        chatButton.addEventListener("click", toggleChatbox);
        closeButton.addEventListener("click", toggleChatbox);
        chatInput.addEventListener("input", toggleSendButton);
    });



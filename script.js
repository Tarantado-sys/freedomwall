// Freedom Wall - Discord Webhook Integration

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('messageForm');
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const submitBtn = document.getElementById('submitBtn');
    const statusMessage = document.getElementById('statusMessage');
    
    // Update character count
    messageInput.addEventListener('input', function() {
        charCount.textContent = this.value.length;
    });
    
    // Handle form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const username = usernameInput.value.trim() || 'Anonymous';
        const message = messageInput.value.trim();
        
        if (!message) {
            showStatus('Please enter a message', 'error');
            return;
        }
        
        // Disable button and show loading state
        submitBtn.disabled = true;
        submitBtn.querySelector('.btn-text').style.display = 'none';
        submitBtn.querySelector('.btn-loading').style.display = 'inline';
        
        try {
            await sendToDiscord(username, message);
            showStatus('Message posted successfully! 🎉', 'success');
            form.reset();
            charCount.textContent = '0';
        } catch (error) {
            console.error('Error sending message:', error);
            showStatus('Failed to post message. Please try again.', 'error');
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.querySelector('.btn-text').style.display = 'inline';
            submitBtn.querySelector('.btn-loading').style.display = 'none';
        }
    });
    
    // Send message to Discord via webhook
    async function sendToDiscord(username, message) {
        // Check if webhook URL is configured
        if (!CONFIG.DISCORD_WEBHOOK_URL || CONFIG.DISCORD_WEBHOOK_URL === 'YOUR_DISCORD_WEBHOOK_URL_HERE') {
            throw new Error('Discord webhook URL not configured');
        }
        
        const payload = {
            username: CONFIG.BOT_USERNAME || 'Freedom Wall',
            avatar_url: CONFIG.BOT_AVATAR_URL || '',
            embeds: [{
                title: '🗽 New Freedom Wall Post',
                description: message,
                color: 0x667eea, // Purple color
                fields: [
                    {
                        name: 'Posted by',
                        value: username,
                        inline: true
                    },
                    {
                        name: 'Time',
                        value: new Date().toLocaleString(),
                        inline: true
                    }
                ],
                footer: {
                    text: 'Freedom Wall'
                },
                timestamp: new Date().toISOString()
            }]
        };
        
        const response = await fetch(CONFIG.DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return response;
    }
    
    // Show status message
    function showStatus(message, type) {
        statusMessage.textContent = message;
        statusMessage.className = `status-message ${type}`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            statusMessage.className = 'status-message';
        }, 5000);
    }
});

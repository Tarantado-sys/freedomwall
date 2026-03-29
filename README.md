# 🗽 Freedom Wall

A beautiful, anonymous message board that posts directly to Discord using webhooks. Perfect for communities, teams, or anyone who wants to create a safe space for sharing thoughts.

## Features

- 🎨 Modern, responsive design
- 🔒 Anonymous posting (optional username)
- 💬 Direct Discord integration via webhooks
- ⚡ Real-time message posting
- 📱 Mobile-friendly interface

## Live Demo

Once deployed to GitHub Pages, your Freedom Wall will be available at:
```
https://yourusername.github.io/freedom-wall/
```

## Setup Instructions

### 1. Create a Discord Webhook

1. Open Discord and go to your server
2. Click on **Server Settings** (gear icon)
3. Navigate to **Integrations** > **Webhooks**
4. Click **New Webhook**
5. Customize the webhook name (e.g., "Freedom Wall")
6. Select the channel where messages should be posted
7. Click **Copy Webhook URL**

### 2. Configure the Webhook

1. Open [`config.js`](config.js) in your project
2. Replace `YOUR_DISCORD_WEBHOOK_URL_HERE` with your actual webhook URL:
   ```javascript
   DISCORD_WEBHOOK_URL: 'https://discord.com/api/webhooks/1234567890/abcdefghijklmnopqrstuvwxyz'
   ```
3. Optionally, customize the bot username and avatar:
   ```javascript
   BOT_USERNAME: 'My Freedom Wall',
   BOT_AVATAR_URL: 'https://example.com/avatar.png'
   ```

### 3. Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g., `freedom-wall`)
2. Upload all files to the repository:
   - [`index.html`](index.html)
   - [`style.css`](style.css)
   - [`script.js`](script.js)
   - [`config.js`](config.js)
   - [`README.md`](README.md)

3. Go to repository **Settings** > **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Choose the **main** branch and **/(root)** folder
6. Click **Save**
7. Wait a few minutes for deployment

Your Freedom Wall will be live at: `https://yourusername.github.io/freedom-wall/`

## File Structure

```
freedom-wall/
├── index.html      # Main HTML page
├── style.css       # Styling
├── script.js       # JavaScript logic
├── config.js       # Configuration file
└── README.md       # This file
```

## How It Works

1. User enters a message (and optional username) on the web page
2. When submitted, the message is sent to Discord via webhook
3. Discord displays the message in the configured channel with:
   - User's message
   - Username (or "Anonymous")
   - Timestamp
   - Beautiful embed formatting

## Customization

### Change Colors
Edit [`style.css`](style.css) and modify the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Change Message Format
Edit [`script.js`](script.js) and modify the `payload` object in the `sendToDiscord` function.

### Add Features
- Message moderation
- Character counter
- Emoji support
- Image uploads
- Message history

## Security Notes

- ⚠️ **Never commit your webhook URL to a public repository**
- Consider using environment variables or a backend server for production
- The webhook URL is visible in the browser's network tab
- For production use, implement rate limiting and spam protection

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use and modify as you wish!

## Support

If you encounter any issues:
1. Check that your webhook URL is correctly configured in [`config.js`](config.js)
2. Verify the webhook is active in Discord
3. Check the browser console for error messages
4. Ensure the Discord channel allows webhook messages

---

Made with ❤️ for open communities

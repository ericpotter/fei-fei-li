window.botpressWebChat = {
    init,
    mergeConfig,
    onEvent,
    sendPayload,
    sendEvent,
}
window.botpressWebChat.init({
    "composerPlaceholder": "Chat with AiFei",
    "botConversationDescription": "AiFei is an intelligent assistant specifically designed to provide information about Dr. Fei-Fei Li.",
    "botId": "fad0198c-9145-43f0-8798-b762afd5e765",
    "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
    "messagingUrl": "https://messaging.botpress.cloud",
    "clientId": "fad0198c-9145-43f0-8798-b762afd5e765",
    "webhookId": "52a9fc90-50eb-49e5-a985-85985311d5c0",
    "lazySocket": true,
    "themeName": "prism",
    "botName": "AiFei",
    "avatarUrl": "",
    "stylesheet": "./assets/css/bot.css",
    "frontendVersion": "v1",
    "useSessionStorage": true,
    "showBotInfoPage": true,
    "theme": "prism",
    "themeColor": "#2563eb",
    "allowedOrigins": []
});
export function formatMessageTime(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
}
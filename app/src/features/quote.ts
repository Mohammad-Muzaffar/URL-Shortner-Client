export const signupQuotes = [
    "The journey of a thousand miles begins with a single step. — Lao Tzu",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
    "Believe you can and you’re halfway there. — Theodore Roosevelt",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "I am on a seafood diet. I see food and I eat it. — Unknown",
    "Why do they call it rush hour when nothing moves? — Robin Williams",
    "I’m not arguing, I’m just explaining why I’m right. — Unknown",
    "It does not matter how slowly you go as long as you do not stop. — Confucius",
    "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. — Roy T. Bennett",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "You don’t have to be great to start, but you have to start to be great. — Zig Ziglar",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair",
    "I’m not lazy, I’m on energy-saving mode. — Unknown",
    "I’m on a whiskey diet. I’ve lost three days already. — Tommy Cooper",
    "I’m not late, I’m just early for tomorrow. — Unknown"
  ];
  
  // Function to get a random quote
  export function getRandomQuote(quotes: string[]): string {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  
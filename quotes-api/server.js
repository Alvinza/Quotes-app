const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000; // ✅ use Render's assigned port

app.use(cors());

const quotes = {
  motivational: [
    { id: 1, author: "Unknown", quote: "You won't always be motivated, so learn to be disciplined. That's where the real change begins." },
    { id: 2, author: "Unknown", quote: "The comeback is always stronger than the setback. Stay down if you must—but never settle." },
    { id: 3, author: "Unknown", quote: "If you want a different life, you gotta start doing different things—even if it's uncomfortable as hell." },
    { id: 4, author: "Unknown", quote: "You're not behind. You're just in the middle of your becoming. Keep going." },
    { id: 5, author: "Unknown", quote: "The old you is comfortable. But the new you? He's a threat. That's why growth feels scary." },
    { id: 6, author: "Unknown", quote: "Every morning you wake up is proof that life is not done with you. You've got more to give." },
    { id: 7, author: "Unknown", quote: "One good habit can undo years of self-doubt. Start with one. Stick to it." },
    { id: 8, author: "Unknown", quote: "You can waste time or you can use it to build your escape plan. Either way—it's passing." },
    { id: 9, author: "Unknown", quote: "Don't wait for motivation to strike. Strike while you're tired, broke, hurting. That's power." },
    { id: 10, author: "Unknown", quote: "No one's coming to save you—but the good news is: you don't need saving, you need building." },
    { id: 11, author: "Unknown", quote: "In order for something new to come, something old must go." },
    { id: 12, author: "Tony Robbins", quote: "The only impossible journey is the one you never begin." },
    { id: 13, author: "Winston Churchill", quote: "Success is not final, failure is not fatal: it is the courage to continue that counts." },
    { id: 14, author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing." },
    { id: 15, author: "Sam Levenson", quote: "Don't watch the clock; do what it does. Keep going." },
    { id: 16, author: "Aristotle", quote: "It is during our darkest moments that we must focus to see the light." },
    { id: 17, author: "Theodore Roosevelt", quote: "Believe you can and you're halfway there." },
    { id: 18, author: "Eleanor Roosevelt", quote: "The future belongs to those who believe in the beauty of their dreams." },
    { id: 19, author: "John Lennon", quote: "Life is what happens to you while you're busy making other plans." },
    { id: 20, author: "Wayne Gretzky", quote: "You miss 100% of the shots you don't take." }
  ],
  sad: [
    { id: 1, author: "Unknown", quote: "Sometimes getting no message is a message" },
    { id: 2, author: "Unknown", quote: "The mirror is my best friend, because when I cry it doesn't laugh." },
    { id: 3, author: "Naruto Uzumaki", quote: "The sad thing is the person who gives you the most memories, ends up being a memory." },
    { id: 4, author: "Unknown", quote: "Don't take life so seriously, no one's gonna make it out alive" },
    { id: 5, author: "Unknown", quote: "Depression sucks, then again it's the only thing that hasn't left me." },
    { id: 6, author: "Unknown", quote: "Hurting someone is easy as throwing a rock into a lake, but do you know how deep that rock can go?" },
    { id: 7, author: "Unknown", quote: "One day you're gonna have to stop pretending that everything's ok" },
    { id: 8, author: "Unknown", quote: "Pain never ends, we just find another reason to smile" },
    { id: 9, author: "Unknown", quote: "A person in 2 months can make you feel what a person in 2 years couldn't. Time means nothing, character does." },
    { id: 10, author: "Winnie the Pooh", quote: "We didn't realize we were making memories, we just knew we were having fun." },
    { id: 11, author: "Joker", quote: "Be careful who you trust, salt looks like sugar." },
    { id: 12, author: "Unknown", quote: "It's crazy how much a smile can hide" },
    { id: 13, author: "Unknown", quote: "We all are suicidal kids telling each other not to suicide" },
    { id: 14, author: "Unknown", quote: "Our generation is messed up" },
    { id: 15, author: "Unknown", quote: "We are not friends, not enemies, just strangers with memories" },
    { id: 16, author: "Unknown", quote: "Learn to be alone, because not everyone will stay" },
    { id: 17, author: "Unknown", quote: "The worst kind of pain is when you're smiling just to stop the tears from falling." },
    { id: 18, author: "Unknown", quote: "Sometimes you need to sit lonely on the floor in a quiet room in order to hear your own voice." },
    { id: 19, author: "Unknown", quote: "The saddest people smile the brightest. The most damaged people are the wisest." },
    { id: 20, author: "Maya Angelou", quote: "There is no greater agony than bearing an untold story inside you." }
  ],
  love: [
    { id: 1, author: "Unknown", quote: "Love is not about how many days, months, or years you've been together. Love is about how much you love each other every single day." },
    { id: 2, author: "Mother Teresa", quote: "Let us always meet each other with a smile, for the smile is the beginning of love." },
    { id: 3, author: "Maya Angelou", quote: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope." },
    { id: 4, author: "Unknown", quote: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds." },
    { id: 5, author: "Buddha", quote: "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage." },
    { id: 6, author: "Oscar Wilde", quote: "Keep love in your heart. A life without it is like a sunless garden when the flowers are dead." },
    { id: 7, author: "Unknown", quote: "Love isn't something you find. Love is something that finds you." },
    { id: 8, author: "Pablo Neruda", quote: "I love you without knowing how, or when, or from where. I love you simply, without problems or pride." },
    { id: 9, author: "Unknown", quote: "True love stories never have endings." },
    { id: 10, author: "Rumi", quote: "Love is not just looking at each other, it's looking in the same direction." },
    { id: 11, author: "Unknown", quote: "In a sea of people, my eyes will always search for you." },
    { id: 12, author: "Nicholas Sparks", quote: "The best love is the kind that awakens the soul; that makes us reach for more, that plants the fire in our hearts." },
    { id: 13, author: "Unknown", quote: "Love is when you look into someone's eyes and see everything you need." },
    { id: 14, author: "John Green", quote: "Some infinities are bigger than other infinities." },
    { id: 15, author: "Unknown", quote: "I fell in love with you because of the million things you never knew you were doing." },
    { id: 16, author: "Unknown", quote: "You are my today and all of my tomorrows." },
    { id: 17, author: "Hafez", quote: "Even after all this time, the sun never says to the earth, 'You owe me.' Look what happens with a love like that. It lights the whole sky." },
    { id: 18, author: "Unknown", quote: "Love is not about finding the right person, but creating a right relationship." },
    { id: 19, author: "Unknown", quote: "In your arms, I have found my home." },
    { id: 20, author: "Unknown", quote: "Love is the bridge between two hearts." }
  ]
};


// Home Route
app.get('/', (req, res) => {
  res.send('Welcome to the Quotes API 📚');
});

// Get all quotes
app.get('/api/quotes', (req, res) => {
  res.json(quotes);
});

// Get quotes by category
app.get('/api/quotes/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  const categoryQuotes = quotes[category];

  if (!categoryQuotes) {
    return res.status(404).json({ message: "Category not found" });
  }

  res.json(categoryQuotes);
});

// Get specific quote by category and id
app.get('/api/quotes/:category/:id', (req, res) => {
  const category = req.params.category.toLowerCase();
  const id = parseInt(req.params.id);
  const categoryQuotes = quotes[category];

  if (!categoryQuotes) {
    return res.status(404).json({ message: "Category not found" });
  }

  const quote = categoryQuotes.find(q => q.id === id);
  if (!quote) {
    return res.status(404).json({ message: "Quote not found in this category" });
  }

  res.json(quote);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

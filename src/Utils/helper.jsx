const variable = [
    "Dhruv", "James", "Ayush", "Max", "Sophie", "Liam", "Ella", "Aiden", "Olivia", "Noah",
    "Ava", "Isabel", "Ethan", "Mia", "Lucas", "Amelia", "Mason", "Harper", "Logan", "Evelyn",
     "Abigail", "Elijah", "Emily", "Henry", "Ella", "Jack", "Scarlett", "Sebastian", 
    "Madison", "Wyatt", "Aria", "Owen", "Chloe", "Isaac", "Grace", "Nathan", "Zoe", "Caleb", "Pen",
    "Ryan", "Riley", "Leo", "Victoria", "Asher", "Lily", "Julian", "Hannah", "Thomas", "Samantha",
    "Michael", "Nora", "Benji", "Layla", "Daniel", "Aurora", "Matthew", "Savannah", "Joseph", 
    "Addison", "David", "Brook", "Carter", "Hazel", "Samuel", "Ellie", "Gabriel", "Paisley", 
    "John", "Mila", "Luke", "Violet", "Anthony", "Claire", "Dylan", "Stella", "Andrew", "Lucy",
    "Isaiah", "Bella", "Joshua", "Nova", "Willow", "Grayson", "Emilia", "Jack", 
    "Eleanor", "Levi", "Everly", "Lincoln", "Anna", "Mateo", "Aubrey", "Jaxon", "Luna", "Dominic", "Leah"
];

const comments = [
    "Can't wait for the next episode! 😄",
    "Who else is watching this at 3 AM?",
    "OMG, that was epic! 🔥",
    "Hi from Jamaica!",
    "Loving the stream so far! ❤️",
    "The chat is going so fast I can't keep up!",
    "Shoutout to my favorite YouTuber! 🎉",
    "Let's get this stream to 1 million likes! 👍",
    "I've been waiting all day for this! ⏳",
    "Anybody else eating snacks while watching?",
    "That was hilarious! 😂",
    "Who else is here from tik tok? 📱",
    "Subscribed and turned on notifications! 🔔",
    "I'm supposed to be studying, but this is too good! 📚",
    "This stream is the highlight of my day! ☀️",
    "Can you say hi to my friend ayushi? 👋",
    "I'm a new subscriber! Love your content! 💖",
    "Let's see if we can break the chat! 💥",
    "Who else is watching with their pet?",
    "How many likes can we get in 1 minute? 🚀",
    "I've been binge-watching your videos all week! 📺",
    "This stream is better than TV!",
    "I should be sleeping, but this is too addictive! 😴",
    "Can you do a meetup in delhi? 🌆",
    "I can't believe I caught the stream live! 🎥",
    "Who's your favorite character in the series? 🤔",
    "You're the reason I procrastinate! 😅",
    "I've got popcorn ready for this!",
    "I wish I could donate, but I'm broke!",
    "What's your favorite episode so far?",
    "I've watched every video on your channel!",
    "This is my first time watching live!",
    "I'm dying of laughter right now!",
    "Can I get a shoutout for my birthday?",
    "Who else is here from the recommended section?",
    "You're the best YouTuber ever!",
    "I've got exams tomorrow, but I couldn't miss this!",
    "Who else is watching in 4K?",
    "This stream is better than Netflix!",
    "I'm so glad I clicked on this stream!",
    "Your videos always make my day better!",
    "I've got tea ready for this tea spill!",
    "You're so underrated!",
    "Can you react to GTA VI next?",
    "I'm streaming this on my TV!",
    "I've got my whole family watching with me!",
    "This stream is the highlight of my week!",
    "I'm supposed to be working, but I'm here instead!",
    "Can you say hi to my mom?",
    "I've been subscribed since day one!",
    "Who else is watching in bed right now?",
    "Can you do a house tour?",
    "Your channel is my happy place!",
    "I've got merch on the way!",
    "I've got snacks for days!",
    "This stream makes me feel like part of a community!",
    "You deserve way more subscribers!"
];


export const generateRandomNames = () => {
    return variable[Math.floor(Math.random() * variable.length)];
};

export const generateRandomComments = () => {
    return comments[Math.floor(Math.random() * comments.length)];
};
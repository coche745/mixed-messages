/* The Plan
topic will be philosophical quotes
i will store the messages in an array for now. maybe an object later but we'll see.
*/

const quotesArr = [
    'For as he thinketh in his heart, so is he - Proverbs 23:7', 
    'I assess the power of a will by how much resistance, pain, torture it endures and knows how to turn to its advantage. - Nietzsche',
    'All credibility, all good conscience, all evidence of truth come only from the senses. - Nietzsche', 
    "One ought to hold on to one's heart; for if one lets it go, one soon loses control of the head too. - Nietzsche", 
    "I do not know what the spirit of a philosopher could more wish to be than a good dancer. For the dance is his ideal, also his fine art, finally also the only kind of piety he knows, his 'divine service.' - Nietzsche", 
    "There is more wisdom in your body than in your deepest philosophy. - Nietzsche", 
    "Thoughts are the shadows of our feelings - always darker, emptier and simpler. - Nietzsche", 
    "The doer alone learneth. - Nietzsche", 
    "Live your life as though your every act were to become a universal law. - Immanuel Kant", 
    "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough, we must do. - Leonardo da Vinci", 
    "My powers are ordinary. Only my application brings me success. - Isaac Newton", 
    "Genius is patience - Isaac Newton", 
    "I do not think there is any thrill that can go through the human heart like that felt by the inventor as he sees some creation of the brain unfolding to success… such emotions make a man forget food, sleep, friends, love, everything. - Nikola Tesla", 
    "The only source of knowledge is experience. - Albert Einstein", 
    "The important thing is not to stop questioning. Curiosity has its own reason for existing. - Albert Einstein", 
    "A hundred times every day I remind myself that my inner and outer life depend on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.", 
    "There is nothing impossible to him who will try. - Alexander the Great", 
    "[37] Jesus said unto him, Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets. - Jesus Christ", 
    "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life. - John 3:16", 
    "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.", 
    "So I say to you, Ask and it will be given to you; search, and you will find; knock, and the door will be opened for you. - Jesus Christ", 
    "I tell you the truth, it is hard for a rich man to enter the kingdom of heaven. Again I tell you, it is easier for a camel to go through the eye of a needle than for a rich man to enter the kingdom of heaven. - Jesus Christ", 
    "Blessed are the meek, for they will inherit the earth. - Jesus Christ",
    "And Jesus said unto the centurion, Go thy way; and as thou hast believed, so be it done unto thee. And his servant was healed in the selfsame hour. - Matthew 9:29", 
    "Concentrate the mind on the present moment. - Buddha", 
    "We are shaped by our thoughts; we become what we think. When the mind is pure, joy follows like a shadow that never leaves. - Buddha", 
    "Those who are free of resentful thoughts surely find peace. - Buddha", 
    "There are only two mistakes one can make along the road to truth; not going all the way, and not starting. - Buddha", 
    "Whatever words we utter should be chosen with care for people will hear them and be influenced by them for good or ill. - Buddha", 
    "To live a pure unselfish life, one must count nothing as one's own in the midst of abundance. - Buddha", 
    "Chaos is inherent in all compounded things. Strive on with diligence. - Buddha", 
    "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves. - Buddha", 
    "If something's important enough, you should try. Even if - the probable outcome is failure. - Elon Musk", 
    "People work better when they know what the goal is and why. It is important that people look forward to coming to work in the morning and enjoy working. - Elon Musk", 
    "Correction does much, but encouragement does more. - Goethe", 
    "Behavior is the mirror in which everyone shows their image. - Goethe", 
    "The way you see people is the way you treat them, and the way you treat them is what they become. - Goethe", 
    "There are only two lasting bequests we can hope to give our children. One of these is roots, the other, wings. - Goethe", 
    "Let everyone sweep in front of his own door, and the whole world will be clean. - Goethe", 
    "Dream no small dreams for they have no power to move the hearts of men. - Goethe", 
    "He is happiest, be he king or peasant, who finds peace in his home. - Goethe", 
    "All theory, dear friend, is gray, but the golden tree of life springs ever green. - Goethe", 
    "What is not started today is never finished tomorrow. - Goethe", 
    "Thinking is easy, acting is difficult, and to put one's thoughts into action is the most difficult thing in the world. - Goethe", 
    "In the realm of ideas everything depends on enthusiasm... in the real world all rests on perseverance. - Goethe", 
    "The deed is everything, the glory is naught. - Goethe", 
    "Nature knows no pause in progress and development, and attaches her curse on all inaction. - Goethe", 
    "If you wish to know the mind of a man, listen to his words. - Goethe", 
    "Love can do much, but duty more. - Goethe", 
    "If your treat an individual... as if he were what he ought to be and could be, he will become what he ought to be and could be. - Goethe", 
    "What by a straight path cannot be reached by crooked ways is never won. - Goethe", 
    "It seems to never occur to fools that merit and good fortune are closely united. - Goethe", 
    "We usually lose today, because there has been a yesterday, and tomorrow is coming. - Goethe", 
    "We cannot fashion our children after our desires, we must have them and love them as God has given them to us. - Goethe", 
    "Talk well of the absent whenever you have the opportunity. - Goethe", 
    "Do not waste water even if you were at a running stream. - Muhammad", 
    "Do you know what is better than charity and fasting and prayer? It is keeping peace and good relations between people, as quarrels and bad feelings destroy mankind. - Muhammad", 
    "The best among you are those who have the best manners and character. - Muhammad", 
    "How wonderful is the situation of a believer. There is good for him in everything and this applies only to a believer. If prosperity comes to him, he expresses gratitude to God and that is good for him; and if adversity befalls him, he endures it patiently and that is better for him. - Muhammad", 
    "Kindness is a mark of faith and whoever is not kind has no faith. - Muhammad", 
    "The greatest Jihad is to battle your own soul. To fight the evil within yourself. - Muhammad", 
    "It is also charity to utter a good word. - Muhammad", 
    "When a husband and wife look at each other with love, Allah looks at both of them with mercy. - Muhammad", 
    "What actions are most excellent? To gladden the heart of human beings, to feed the hungry, to help the afflicted, to lighten the sorrow of the sorrowful, and to remove the sufferings of the injured. - Muhammad", 
    "Wherever you go, go with all your heart. - Confucius", 
    "The strength of a nation derives from the integrity of the home. - Confucius", 
    "The superior man acts before he speaks, and afterwards speaks according to his action. - Confucius", 
    "You will never do anything in this world without courage. It is the greatest quality of the mind next to honor. - Aristotle", 
    "We know what we are, but know not what we may be. - William Shakespeare", 
    "There is a tide in the affairs of men, Which taken at the flood, leads on to fortune. Omitted, all the voyage of their life is bound in shallows and in miseries. On such a full sea are we now afloat. And we must take the current when it serves, or lose our ventures. - William Shakespeare", 
    "To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man. - William Shakespeare", 
    "Sweet are the uses of adversity which, like the toad, ugly and venomous, wears yet a precious jewel in his head. - William Shakespeare", 
    "Boldness be my friend. - William Shakespeare", 
    "The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke", 
    "Happiness is a virtue, not its reward. - Baruch Spinoza", 
    "Peace is not an absence of war, it is a virtue, a state of mind, a disposition for benevolence, confidence, justice. - Baruch Spinoza", 
    "Peace is not the absence of war, but a virtue based on strength of character. - Baruch Spinoza",  
    "All happiness or unhappiness solely depends upon the quality of the object to which we are attached by love. - Baruch Spinoza", 
    "I have made a ceaseless effort not to ridicule, not to bewail, not to scorn human actions, but to understand them. - Baruch Spinoza", 
    "Whatsoever is contrary to nature is contrary to reason, and whatsoever is contrary to reason is absurd. - Baruch Spinoza", 
    "Men govern nothing with more difficulty than their tongues, and can moderate their desires more than their words. - Baruch Spinoza", 
    "He alone is free who lives with free consent under the entire guidance of reason. - Baruch Spinoza", 
    "The endeavor to understand is the first and only basis of virtue. - Baruch Spinoza", 
    "So long as a man imagines that he cannot do this or that, so long as he is determined not to do it; and consequently so long as it is impossible to him that he should do it. - Baruch Spinoza", 
    "Freedom is absolutely necessary for the progress in science and the liberal arts. - Baruch Spinoza", 
    "When the consciousness is kept on God, you will have no fears; every obstacle will then be overcome by courage and faith. - Paramahansa Yogananda", 
    "Fear causes the brain to send an inhibiting message to all bodily organs. It constricts the heart, checks the digestive functions, and causes many other physical disturbances. - Paramahansa Yogananda", 
    "If you learn how to withdraw your attention from all objects of distraction and to place it upon one object of concentration, you too will know how to attract at will whatever you need. - Paramahansa Yogananda", 
    "Never ever give up. - Donald Trump", 
    "Divide each difficulty into as many parts as is feasible and necessary to resolve it. - Rene Descartes"
];

let randomNum = Math.floor(Math.random() * quotesArr.length);

let randomQuote = quotesArr[randomNum];
console.log(randomQuote);
// quotesArr.splice(randomNum, 1);
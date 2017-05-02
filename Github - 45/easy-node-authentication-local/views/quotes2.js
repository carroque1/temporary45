var quotes = [
    'All of the women on The Apprentice flirted with me - consciously or unconsciously. That\'s to be expected.', 
    'Robert Pattinson should not take back Kristen Stewart. She cheated on him like a dog & will do it again \– just watch. He can do much better!',
    'An ‘extremely credible source’ has called my office and told me that Barack Obama\’s birth certificate is a fraud.',
    'My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.',
    'You\’re disgusting.',
    'You know, it really doesn\’t matter what the media write as long as you\’ve got a young, and beautiful, piece of ass.',
    'You know what uranium is? This thing called nuclear weapons and other things, like lots of things are done with uranium, including some bad things.',
    'He\'s not a war hero - he\'s a war hero because he was captured. I like people that weren\'t captured.',
    'Donald J. Trump is calling for a total and complete shutdown of Muslims entering the United States.',
    '[Putin] is a strong leader...He\'s making mincemeat out of our President.',
    'I could stand in the middle of 5th Avenue and shoot somebody and I wouldn\'t lose voters.',
    'How do you throw somebody out that\'s lived here for 20 years?',
    'If I had been the son of a coal miner I would have left the damn mines. But most people don\'t have that imagination - or whatever - to leave their mine.',
    'Jeb Bush has to like the Mexican Illegals because of his wife.',
    'When you get these terrorists, you have to take out their families. They care about their lives, don\'t kid yourself. But they say they don\'t care about their lives. You have to take out their families.',
    'After Friday’s Twilight release, I hope Robert Pattinson will not be seen in public with Kristen--she will cheat on him again!',
]
{
function newQuote () {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
    window.onload=newQuote;
}
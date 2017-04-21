    var quotes = [
    {
    		quote: 'All of the women on The Apprentice flirted with me - consciously or unconsciously. That\'s to be expected.',
            quoteType: 'Trump: How to Get Rich',
            year: '2004'
    },
    {
    		quote: 'It\'s freezing and snowing in New York \- we need global warming!',
    		quoteType: 'Twitter',
    		year: '2016'
	},
];
{
function newQuote () {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    document.getElementById('quoteType').innerHTML = quotes[randomNumber];
}
    window.onload=newQuote;
}
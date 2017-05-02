$(document).ready(function(){
		var quoteSource=[
		{
			quote: "It's freezing and snowing in New York  - we need global warming!",
			source:"Twitter, 2012"
	    },
	    {
	    	quote:"I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.",
	    	source:"The View, 2006"
	    },
	    {
	    	quote:"The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.",
	    	source:"Twitter, 2012"
	    },
	    {
	    	quote:"If I decide to run for office, I'll produce my tax returns. Absolutely.",
	    	source:"Interview with Ireland AM, 2014"
	    },
	    {
			quote: "Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man - he made a good decision.",
			source:"Twitter, 2012"
	    },
	    {
	    	quote:"I have a great relationship with the blacks. I've always had a great relationship with the blacks.",
	    	source:"Albany Talk Radio, 2011"
	    },
	    {
	    	quote:"I'm intelligent. Some people would say I'm very, very, very intelligent.",
	    	source:"Fortune Magazine, 2000"
	    },
	    {
	    	quote:"If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America?",
	    	source:"Twitter, 2015"
	    },
	    {
	    	quote:"If Obama attacks Syria and innocent civilians are hurt and killed, he and the U.S. will look very bad!",
	    	source:"Twitter, 2013"
	    },
	    {
	    	quote:"Frederick Douglass is an example of somebody who’s done an amazing job and is getting recognized more and more, I notice.",
	    	source:"African-American History Month, 2016"
	    },
	    {
	    	quote:"I will build a great wall - and nobody builds walls better than me, believe me - and I'll build them very inexpensively. I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.",
	    	source:"Campaign trail, 2016"
	    },
	    {
	    	quote:"I'm, like, a smart person.",
	    	source:"Fox News, 2016"
	    },

	];

		$('#quoteButton').click(function(evt){
			//define the containers of the info we target
			var quote = $('#quoteContainer p').text();
			var source = $('#source').text();
			//prevent browser's default action
			evt.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = quoteSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0;i<=sourceLength;i+=1){
			var newQuoteText = quoteSource[randomNumber].quote;
			var newQuoteGenius = quoteSource[randomNumber].source;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 100;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+newQuoteText+'</p>'+'<p id="source">'+'								'+newQuoteGenius+'</p>');
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end quoteButton function
});//end document ready


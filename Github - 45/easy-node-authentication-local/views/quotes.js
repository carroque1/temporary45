$(document).ready(function(){
		var quoteSource=[
		{
			quote: "\"It's freezing and snowing in New York  - we need global warming!\"",
			source:"Twitter, 2012"
	    },
	    {
	    	quote:"\"I’ve said if Ivanka weren’t my daughter, perhaps I’d be dating her.\"",
	    	source:"The View, 2006"
	    },
	    {
	    	quote:"\"The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.\"",
	    	source:"Twitter, 2012"
	    },
	    {
	    	quote:"\"If I decide to run for office, I'll produce my tax returns. Absolutely.\"",
	    	source:"Interview with Ireland AM, 2014"
	    },
	    {
			quote: "\"Ariana Huffington is unattractive, both inside and out. I fully understand why her former husband left her for a man - he made a good decision.\"",
			source:"Twitter, 2012"
	    },
	    {
	    	quote:"\"I have a great relationship with the blacks. I've always had a great relationship with the blacks.\"",
	    	source:"Albany Talk Radio, 2011"
	    },
	    {
	    	quote:"\"I'm intelligent. Some people would say I'm very, very, very intelligent.\"",
	    	source:"Fortune Magazine, 2000"
	    },
	    {
	    	quote:"\"If Hillary Clinton can't satisfy her husband what makes her think she can satisfy America?\"",
	    	source:"Twitter, 2015"
	    },
	    {
	    	quote:"\"If Obama attacks Syria and innocent civilians are hurt and killed, he and the U.S. will look very bad!\"",
	    	source:"Twitter, 2013"
	    },
	    {
	    	quote:"\"Frederick Douglass is an example of somebody who’s done an amazing job and is getting recognized more and more, I notice.\"",
	    	source:"African-American History Month, 2016"
	    },
	    {
	    	quote:"\"I will build a great wall - and nobody builds walls better than me, believe me - and I'll build them very inexpensively.\"",
	    	source:"Presidential Announcement, 2015"
	    },
	    {
	    	quote:"\"I will build a great, great wall on our southern border, and I will make Mexico pay for that wall. Mark my words.\"",
	    	source:"Presidential Announcement, 2015"
	    },
	    {
	    	quote:"\"I'm, like, a smart person.\"",
	    	source:"Fox News, 2016"
	    },
	    {
	    	quote:"\"[Being President] is more work than in my previous life. I thought it would be easier.\"",
	    	source:"Fox News, 2016"
	    },
	    {
	    	quote:"\"I think $10 billion or less [for the wall]. And if I do a super-duper, higher, better, better security, everything else, maybe it goes a little bit more.\"",
	    	source: "Associated Press, 2016"
	    },
	    {
	    	quote:"\"My fingers are long and beautiful, as, it has been well documented, are various other parts of my body.\"",
	    	source: "New York Post, 2011"
	    },
	    {
	    	quote:"\"You know what uranium is? This thing called nuclear weapons and other things, like lots of things are done with uranium, including some bad things.\"",
	    	source: "Press Conference, 2017"
	    },
		{
	    	quote:"\"I have a very good brain and I have said a lot of things.\"",
	    	source: "MSNBC, 2016"
	    },
	    {
	    	quote:"\"I don't stand by anything.\"",
	    	source: "CBS, 2017"
	    },
		{
	    	quote:"\"We can’t have someone in the Oval Office who doesn’t understand the meaning of the word ‘confidential.’\"",
	    	source: "Greenville, North Carolina, 2016"
	    },
	    {
	    	quote:"\"In a short period of time I understood everything there was to know about health care.\"",
	    	source: "Time Magazine, 2017"
	    },
	    {
 			quote:"\"There’s nobody bigger or better at the military than I am.\"",
	    	source: "Fox News, 2015"
	    },
	    {
	     	quote:"\"There’s nobody that respects women more than I do.\"",
	    	source: "NBC Today, 2016"
	    },
	    {
	    	quote:"\"There’s nobody that understands the horror of nuclear better than me.\"",
	    	source: "Campaign Rally, 2016"
	    },
	    {
	    	quote:"\"Nobody has better toys than I do.\"",
	    	source: "Campaign Rally, 2016"
	    },
	    {
	    	quote:"\"Hillary Clinton doesn't have the strength or stamina to be president. Jeb Bush is a low energy individual, but Hillary is not much better!\"",
	    	source: "Twitter, 2016"
	    },
	    {
			quote:"\"It is a great honor to be here with all of my friends - so amazing and will never forget.\"",
	    	source: "Yad Vashem Guestbook, Israeli Holocaust memorial, 2017"
	    },
	    {
	    	quote:"\"You know, if you’re a conservative Republican, if I were a liberal, if, like, OK, if I ran as a liberal Democrat, they would say I'm one of the smartest people anywhere in the world.\"",
	    	source: "Sun City, South Carolina, 2015"
	    },
	    {
	    	quote:"\"My uncle used to tell me about nuclear before nuclear was nuclear.\"",
	    	source: "Boston Globe, 2015"
	    },
	    {
	    	quote:"\"An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud.\"",
	    	source: "Twitter, 2012"
	    },
	    {
	    	quote:"\"Remember, don't believe \"sources said\" by the VERY dishonest media. If they don't name the sources, the sources don't exist.\"",
	    	source: "Twitter, 2016"
	    },
	   	{
	    	quote:"\"Nobody knew healthcare could be so complicated.\"",
	    	source: "Press Conference, 2017"
	    },
	   	{
	    	quote:"\"[John McCain's] not a war hero. I like people who weren’t captured.\"",
	    	source: "Family Leadership Summit, 2015"
	    },
	    {
	    	quote:"\"I know words, I have the best words.\"",
	    	source: "Hilton Head Campaign Rally, 2015"
	    },
	    {
	    	quote:"\"I don't repeat myself. I don't repeat myself.\"",
	    	source: "Republican Debate, 2016"
	    },
	    {
	    	quote:"\"I will tell you this, Russia: If you’re listening, I hope you’re able to find the 30,000 emails that are missing.\"",
	    	source: "Press Conference, 2016"
	    },
	    {
	    	quote:"\"Knock the crap out of him. I promise you I'll pay for the legal fees.\"",
	    	source: "Campaign Rally, 2016"
	    },
	    {
	    	quote:"\"I have the most loyal people. I could stand in the middle of 5th Avenue and shoot somebody and wouldn't lose any voters.\"",
	    	source: "Iowa Campaign Rally, 2016"
	    },
	    {
	    	quote:"\"Obama just appointed an Ebola Czar with zero experience in the medical area and zero experience in infectious disease control. A TOTAL JOKE!\"",
	    	source: "Twitter, 2014"
	    },
	    {
	       	quote:"\"@BarackObama has a record low 39% Gallup approval rating. Why so high?\"",
	    	source: "Twitter, 2011"
	    },
	    {
	    	quote:"\"They show those phony statistics where we are 5.4% unemployment. The real number, I saw a number that could be 42%, believe it or not.\"",
	    	source: "National Federation of Republican Assemblies, 2015"
	    },
	    {
	    	quote:"\"President Obama played golf yesterday???\"",
	    	source: "Twitter, 2013"
	    },
	    {
	    	quote:"\"Ted Nugent was obviously using a figure of speech [when threatening Barack Obama], unfortunate as it was.\"",
	    	source: "Twitter, 2012"
	    },
	    {
	    	quote:"\"Crooked Hillary Clinton and her team \"were extremely careless in their handling of very sensitive, highly classified information.\" Not fit!\"",
	    	source: "Twitter, 2016"
	    },
	    {
	    	quote:"\"I am not trying to get \"top level security clearance\" for my children. This was a typically false news story.\"",
	    	source: "Twitter, 2016"
	    },
	    {
	    	quote:"\"[Obama] lost the popular vote by a lot and won the election. We should have a revolution in this country!\"",
	    	source: "Twitter, 2012"
	    },
	    {
	    	quote:"\"We need a President who isn't a laughing stock to the entire World. We need a truly great leader, a genius at strategy and winning. Respect!\"",
	    	source: "Twitter, 2014"
	    },
	    {
	    	quote:"\"Obama looks absolutely exhausted in the Netherlands. He is not a natural leader, was never ment to lead - it is tough work for him\"",
	    	source: "Twitter, 2014"
	    },
	    {
	    	quote:"\"I am honered to serve you, the great American People.\"",
	    	source: "Twitter, 2017"
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
      var timeAnimation = 300;
      var quoteContainer = $('#quoteContainer');
      //fade out animation with callback
      quoteContainer.fadeOut(timeAnimation, function(){
        quoteContainer.html('');
				quoteContainer.append('<p>'+'</p>'+'<p>'+'								'+newQuoteText+'</p>'+'<p id="source">'+newQuoteGenius);
        
        //fadein animation.
        quoteContainer.fadeIn(timeAnimation);
        //auto refresh div
		update();
        setInterval(update, 3000);
      });  		
			break;
		};//end for loop
	
	});//end quoteButton function
           

});//end document ready

//auto refresh test
                        var update = function () {
                            
                            var values = $(".task").map(function(){

                                return $(this).val();

                            }).get();

                            for (i = 0; i < values.length; i++)  {   

                                var div = $("<div>");

                                var testing = moment(values[i], "YYYYMMDD hh:mm:ss a"); // 5 years ago
                                var testingz = testing.clone().add(7, 'hour')
                                testings = testingz.fromNow()
                                div.text(testings);
                                $('.testz'+[i]).html(div);

                            }

                            date = moment(new Date())
                            datetime.html(date.format('ddd, MMMM Do YYYY, h:mm:ss a'));
                            datetimeday.html(date.format('dd'));

                        };

                        $(document).ready(function(){
                            //$('input').each(function(){    
                            datetime = $('#datetime')
                            datetimeAlt = $('#datetimeAlt')
                            datetimeday = $('#datetimeday')
                            
                            testing = $('.testz')
                            
                            update();
                            setInterval(update, 1000);
                            //});
                        //console.log(testz)
                        });
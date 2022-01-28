function buyRomance() {
	console.log("Romance Purchased");
	var event_and_custom_data = {
	   "transaction_id": "498356873",
	   "currency": "USD",
	   "revenue": 5.0,
	   "shipping": 0.0,
	   "tax": 0.4,
	   "affiliation": "none",
	   "description": "Romance Genre",
	};

	var content_items = [
	{
	   "$content_schema": "COMMERCE_PRODUCT",
	   "$og_title": "Romance Genre",
	   "$og_description": "Find Love with this new Genre Selection",
	   "$canonical_identifier": "storyprompt/genre/romance",
	   "$price": 5.0,
	   "$quantity": 1,
	   "$sku": "1101123445",
	   "$product_name": "Romance",
	   "$product_brand": "Story Prompts",
	   "$product_category": "Software",
	}];

	var customer_event_alias = "Romance Genre Purchase";

	branch.logEvent(
	   "PURCHASE",
	   event_and_custom_data,
	   content_items,
	   customer_event_alias,
	   function(err) { console.log(err); }
	);
}

function generateStoryPrompt(){
	// Content Event for viewing Item
	var custom_data = {
	   "noun" : "bees",
	   "genre" : "scifi",
	   "adjective" : "yellow",
	   "verb" : "stings",
	   "number" : 9
	};

	branch.logEvent(
	    "Story Prompt Attributes",
	    custom_data,
	    function(err) { console.log(err); }
	);
}


function viewStoryPrompt(){
	// Lifecycle event for unlocking achievement of viewing Story Prompt
	var event_and_custom_data = {
	   "description": "User unlocked an achievement for viewing a story prompt.",
	};

	var customer_event_alias = "View Achievement";

	branch.logEvent(
	   "UNLOCK_ACHIEVEMENT",
	   event_and_custom_data,
	   customer_event_alias,
	   function(err) { console.log(err); }
	);
}

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}

function renderStoryPromptText(){
	let noun = GetURLParameter("noun");
	let genre = GetURLParameter("genre");
	let adjective = GetURLParameter("adjective");
	let verb = GetURLParameter("verb");
	let number = GetURLParameter("number");
	let text = document.querySelector(".story-prompt-text");
	console.log(text);
	if (text){
		text.innerHTML = `This is a ${genre} story about ${number} ${adjective} ${noun} that ${verb} a bunch of people`
	}
}
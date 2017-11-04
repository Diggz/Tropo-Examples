var magicWord=currentCall.initialText;
var lcaMagicWord=magicWord.toLowerCase();
var trimMagicWord=lcaMagicWord.trim();
var myCard='unknown';


if(trimMagicWord=='abracadabra'){
    myCard=("Three of Clubs");
}

else if(trimMagicWord=='hocuspocus'){
    myCard=("Seven of spades");
}

else if(trimMagicWord=='hocus pocus'){
    myCard=("Seven of spades");
}

else if(trimMagicWord=='hocus-pocus'){
    myCard=("Seven of spades");
}

else if(trimMagicWord=='julie andrews'){
    myCard=("Queen of Hearts");
}

else if(trimMagicWord=='julieandrews'){
    myCard=("Queen of Hearts");
}

else if(trimMagicWord=='alakazam'){
    myCard=("Five of Hearts");
}
else if(trimMagicWord=='bob dylan'){
    myCard=("Jack of Hearts");
}

else if(trimMagicWord=='bobdylan'){
    myCard=("Jack of Hearts");
}

else if(trimMagicWord=='houdini'){
    myCard=("Ace of Spades");
}

else if(trimMagicWord=='weed'){
    myCard=("Gary, you're too high to remember what card you picked! But it was the Jack of Hearts");
}

else if(trimMagicWord=='guitarman'){
    myCard=("C-Lane, you shouldn't fall for silly tricks but it's the Jack of Hearts");
}

else if(trimMagicWord=='david blaine sucks'){
    myCard=("King of Clubs and the Ten of Diamonds");
}

else if(trimMagicWord=='chris angel sucks'){
    myCard=("Ten of Diamonds");
}

else {
    say('Richard the Adequate has just taken over your phone. He says you do not follow instructions very well. Check your spelling and try typing that again.');
}

if(myCard=='unknown'){
    say('Richard the Adequate has just taken over your phone. He says you do not follow instructions very well. Check your spelling and try typing that again.');
}

else {
    
    say('Richard the Adequate has just taken over your phone');
    wait(5000);
    say('he says your card is the...');
    wait(5000);
    say(myCard);
}

//random number generator function
const randNumGen = (num) =>{
    RandNum = (Math.floor(Math.random() * num));
    return RandNum;
};
//array of candy flavors of parody candy brand
let laphyTaphy = ['Bannana Blast-Off', 'Strawberry Sizzle', 'Atomic Apple', 'Grape Galaxy', 'Lime Lightyear'];
//array of fun facts
let funFact = [
    'stop signs Used to be yellow', 
    'the speed of sound is 761mph', 
    'the circulatory system is more than 60,000 miles long', 
    'a one-way trip on the Trans-Siberian Railway involves crossing 3,901 bridges', 
    'it takes a drop of water 90 days to travel the entire Mississippi River', 
    'lemons float, but limes sink', 
    'in 2006, a Coca-Cola employee offered to sell Coca-Cola secrets to Pepsi', 
    'at birth, a baby panda is smaller than a mouse.', 
    'there is a company in Japan that has schools that teach you how to be funny', 
    'there are more Lego Minifigures than there are people on Earth', 
    'the Roman - Persian wars were the longest in history, lasting over 680 years'
];
//array of song suggestions
let songSuggestion = [
    "Caravan, by Juan Tizol and Duke Ellington, featured in the movie 'Whiplash' (2014)", 
    "Clear the Lane, by RATM", 
    "Swamp Music, by Lynrd Skynyrd", 
    "Reminiscing, By Little River Band, featured in the movie 'The Other Guys' (2010)", 
    "Santa Monica, by Everclear", 
    "Cellphone's Dead, by Beck (A singer-songwriter originating from central europe)", 
    "Coco Mango Diced, by Damu the Fudgemunk, featuring artist MF DOOM", 
    "Arizona, By Kings of Leon", 
    "There Ain't No Good Chain Gang, by Johnny Cash, and Waylon Jennings", 
    "Goin' Out West, by Tom Waits, featured in the movie 'Fight Club' (1999)", 
    "Hip to Be Square, by Huey Lewis and the News, featured in cult classic film 'American Pyscho' (2000)"
];
//array containing location you bought the candy from
const purchaseLocation = [
    'workplace', 
    'local billiards club', 
    'local strip joint', 
    'local theatre', 
    'local gym', 
    'giant mansion', 
    'local jazz club', 
    'local underground boxing league', 
    'private beach', 
    'local weekend fish fry', 
    'local sub-par mechanic shop'
];
//function returning a string which simulates a machine dispensing a laphy taphy candy and reading the flavor, fun fact, and song suggestion then giving it to you 
const dispenseCandy = (arr) => {
    return arr = 'You decide to purchase a tasteful candy from a vending machine while at your ' + purchaseLocation[randNumGen(purchaseLocation.length)]+ '...\nYou have selected laphy taphy...\nThe machine commmends your choice...\n\nIt begins dispensing your laphy taphy...\n(vending machine sounds)...\nThe laphy taphy drops into your hand...\n\nLooks like you got ' + laphyTaphy[randNumGen(laphyTaphy.length)] + '!!!\nThe fun fact reads: Did you know that ' + funFact[randNumGen(funFact.length)] + '?\nYour song suggestion is "' + songSuggestion[randNumGen(songSuggestion.length)] + '".\n\nYou enjoy the well-flavored candy, as you mull over the fun fact, on your way to the music store.'
 
};
console.log(dispenseCandy());
emptyArr = []
document.getElementById("randMessGen").innerHTML = "<p>"+ dispenseCandy(emptyArr) + "</p>"
//Create an array with the following values: "NYC", "SF", "LA", "ATX", "SYD"; use afor loop in JavaScript to loop through them
//Use $.append() in your loop (from above) to populate the <select> drop-down menu

// Develops an array of values for selection. 

var cities = ["NYC", "SF", "LA", "ATX", "SYD"];

cities.forEach(function(element,index){
    console.log(element); // output the name of the current element
    $("select").append("<option>"+element+"</option>");

});

// When the user changes the input of the drop-down, update the background image based on what they selected

// Creates a function that adjusts the background according to the selection. 

$("select").change(changeBackground)
function changeBackground(){
 var city = $("select").val(); 



if (city == "NYC"){
  $("body").attr("class",'nyc');
}
else if(city == "SF"){
  $("body").attr("class","sf");
}
else if(city == "LA"){
  $("body").attr("class", "la");
}
else if(city == "ATX"){
  $("body").attr("class", "austin")
}
else if(city == "SYD"){
  $("body").attr("class","sydney")
}
}

//Use the $.attr() function to update html classes
//Get the value of user input using $.val()
//Use the $.change event handler to capture user actions
//Use if/else if/else conditionals to control the flow of your application
// //Display your pseudocode as Javascript comments
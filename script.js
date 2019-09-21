
// grab the colors.. on click?
// on a click, refresh the background with BOTH of the current colors..
var test = document.querySelector("h3");
console.log(test);
var color1 = document.querySelector(".color1");
console.log(color1);
var color2 = document.querySelector(".color2");
console.log(color2);

var body = document.getElementById("gradient");

document.querySelector(".changer").innerHTML = "The CSS 'background' property would be: \n"
    + "background: linear-gradient(to right, " + color1.value +", "
    + color2.value + ");";
// use querySelectors
// hit the document, hit the body (element or property), hit style, hit which style, then STYLE!




function setGradientNoCSSvariables() {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " 
                                                    + color2.value + ")";
    
        document.querySelector(".changer").innerHTML = "The CSS 'background' property would be: \n"
        + "background: linear-gradient(to right, " + color1.value + ", "
        + color2.value + ");";


        // this is how to do it on the fly!
        //  test.textContent ="\n" + body.style.background + ";";
        
}

// here, why do we not use the function () on top??
color1.addEventListener("input", setGradientNoCSSvariables );
color2.addEventListener("input", setGradientNoCSSvariables );


// color1.addEventListener("input", function() {

//     //just logging to see what color is being picked
//     console.log(color1.value);

//     // this is the way to change it via css variables,
//     // if we weren't using variables we could use:
//     // body.style.background = ......... ;
//     document.documentElement.style.setProperty('--color1',color1.value);

//     document.querySelector(".changer").innerHTML = "The CSS 'background' property would be: \n"
//     + "background: linear-gradient(to right, " + color1.value + ", "
//     + color2.value + ");";
// });

// color2.addEventListener("input", function() {
//     console.log(color2.value);
//     document.documentElement.style.setProperty('--color2',color2.value);

//     document.querySelector(".changer").innerHTML = "The CSS 'background' property would be: \n"
//     + "background: linear-gradient(to right, " + color1.value +", "
//     + color2.value + ");";
// }); 


// change this to write just to <h3> and update with current colors
// document.write("The CSS 'background' property would be: \n"
//                 + "background: linear-gradient(to right, " +color2.value+", "
//                 + color1.value + ");");



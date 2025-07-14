import React from "react";
import ReactDom from "react-dom/client";

//const element = <h1> Using JSX </h1>;

//index
const elementIndex = <h1> using index {30} </h1>


//operator
//const elementAdd = <h1> 3 + 3 is {3 + 3} </h1>
//const elementSub = <h1> 3 - 3 is {3 - 3} </h1>
//const elementMultiplication = <h1> 3 * 3 is {3 * 3} </h1>
//const elementDivision = <h1> 3 / 3 is {3 / 3} </h1>

//list
/*
const elementList = (
    <ul>
        <li>Apple</li>
        <li>Orange</li>
        <li>Peach</li>
    </ul>
);
*/

//condition
const x = 10;
let text = 'hello';

if (x < 11) {
    text = "What's up";
}


const elementCondition = <h1>conditional = {text} </h1>

const root = ReactDom.createRoot(document.getElementById("root"));

//root.render(element);

root.render(elementIndex);

//root.render(elementAdd);

//root.render(elementList);
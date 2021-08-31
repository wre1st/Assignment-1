import React from "react"
import ReactDom from "react-dom"
// import ObjectArrayDestructure from "./components/object-array-destructuring"
// import {Country} from "./components/Country"
// import {SuperPower} from "./components/Country"
// import SpreadAndRest from "./components/spread-and-rest"
// import LetConst from "./components/let-const"
import ArrowFunction from "./components/arrow-function"

function Info(){
    return (
    <div>
        <h3>Object and Array Destructuring</h3>
        </div>
        )
}

function Classes(){
    return (

        <div>

            <h3>Classes</h3>
        </div>
    )
}


function RestAndSpread(){
    return (
        <div>
            <h3> Spread and Rest practise</h3>
        </div>
    )
}


function LetAndConst(){
    return (
        <div>
            <h3> Let and Const Practise</h3>
        </div>
    )
}

function Arrow(){
    return (
        <div>
            <h3>Arrow Function</h3>
        </div>
    )
}



// ReactDom.render(<Info />,document.getElementById("root"))
// ReactDom.render(<Classes />,document.getElementById("root"))
// ReactDom.render(<RestAndSpread />,document.getElementById("root"))
// ReactDom.render(<LetAndConst />,document.getElementById("root"))
ReactDom.render(<Arrow />,document.getElementById("root"))

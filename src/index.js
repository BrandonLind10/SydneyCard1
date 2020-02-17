let React= require("react");
let ReactDOM= require("react-dom");
let SecurityOverLay= require("./SecurityOverLay.js");
let root= document.getElementsByClassName("root")[0];
let overLay= document.getElementsByClassName("overLay")[0];

ReactDOM.render(
    <SecurityOverLay/>,
    overLay
);


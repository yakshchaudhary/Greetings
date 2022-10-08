import React from "react";
import ReactDom from "react-dom";
import './index.css';


let  curDate = new Date(2022 , 10, 8, 21);
curDate = curDate.getHours();
let greeting ="";
const cssStyle = { };
if(curDate>=1 && curDate <=12){
   greeting = "Good Morning";
   cssStyle.color = "Green";

}else if(curDate>=12 && curDate<=19){
   greeting = "Good Afternoon";
   cssStyle.color = "orange";
}else{
   greeting = "Good Night";
   cssStyle.color = " pink"
}



ReactDom.render(<>
<div>
<h1> Hellow Folks, <spam style ={cssStyle}>{greeting}</spam></h1> 
</div>
</>, document.getElementById('root'));
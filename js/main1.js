

//makes form element saves in variable
var answerDiv = document.createElement("div")
//gives from element and id attribute
answerDiv.setAttribute("id", "answerPool")
//retreives element on page inwhitch to place form and saves it in variable
var makeNewPage = document.getElementById("newPage")
//appentds input form to makeNewPage
makeNewPage.appendChild(answerDiv)

var aIMarkingsObj = [{
  marking: "White arc",
  meaning: "Flap oparating range"
}, {
  marking: "V<sub>SO</sub> Lower A/S Limit White Arc",
  meaning: "Stall speed landing configuration"
}, {
  marking: "V<sub>FE</sub> Upper A/S Limit White Arc",
  meaning: "Maximum flap extention speed"
}, {
  marking: "Green Arc",
  meaning: "Normal Oparating Range"
}, {
  marking: "V<sub>S1</sub> Lower A/S Limit Green Arc",
  meaning: "Maximum flap extention speed"
}, {
  marking: "V<sub>NO</sub> Upper A/S Limit Green Arc",
  meaning: "Maximum structural cruse speed"
}, {
  marking: "Yellow Arc",
  meaning: "Caution Range (oparations in smooth air only)"
}, {
  marking: "V<sub>NE</sub> Red Line",
  meaning: "never exceed speed; above this speed structural failure may occure"
}];
console.log(aIMarkingsObj.length)

displayQuiz()
function displayQuiz(){

	

	for(i = 0; i <= aIMarkingsObj.length; i++){
		
		var aPool = document.createElement("p")
    	aPool.innerHTML = aIMarkingsObj[i].marking
    	answerPool.appendChild(aPool)
	}
}

function submit(){

}

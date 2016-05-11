
//makes form element saves in variable
var quizDiv = document.createElement("div")
//gives from element and id attribute
quizDiv.setAttribute("id", "airspeedIndicatorQuiz")
//retreives element on page inwhitch to place form and saves it in variable
var makeNewPage = document.getElementById("newPage")
//appentds input form to makeNewPage
makeNewPage.appendChild(quizDiv)


var h1 = document.createElement("h1")
h1.setAttribute("id", "questioneerHeading")
var h1Text = document.createTextNode("Airspeed Indicator")
h1.appendChild(h1Text)
makeNewPage.appendChild(h1)

var h2 = document.createElement("h2")
h2.setAttribute("id", "questioneerSubHeading")
var h2Text = document.createTextNode("What airspeed limitations apply to the color code markings of the airspeed indicator")
h2.appendChild(h2Text)
makeNewPage.appendChild(h2)



var qForm = document.createElement("form")
qForm.setAttribute("id", "questionForm")
makeNewPage.appendChild(qForm)

var submitButton = document.createElement("button")
  var submitButtonText = document.createTextNode("Check Answers")
  submitButton.setAttribute("type", "button")
  submitButton.setAttribute("onclick", "submit()")
  submitButton.appendChild(submitButtonText)
  qForm.appendChild(submitButton)

var asiImage = document.createElement("img")
asiImage.setAttribute("id","airspeedIndicatorImg")
asiImage.setAttribute("src","img/airspeed.png")
makeNewPage.appendChild(asiImage)



var answerPoolh2 = document.createElement("h2")
answerPoolh2.setAttribute("id", "answerHeading")
var answerPoolh2Text = document.createTextNode("Answer Pool")
answerPoolh2.appendChild(answerPoolh2Text)


//makes form element saves in variable
var answerDiv = document.createElement("div")
//gives from element and id attribute
answerDiv.setAttribute("id", "answerPool")
//retreives element on page inwhitch to place form and saves it in variable
var makeNewPage = document.getElementById("newPage")
//appentds input form to makeNewPage
answerDiv.appendChild(answerPoolh2)
makeNewPage.appendChild(answerDiv)

var aIMarkingsObj = [
    {
      meaning: "Flap oparating range",
      marking: "White arc"
      
    }, 
    {
      meaning: "Stall speed landing configuration",
      marking: "V<sub>SO</sub> Lower A/S Limit White Arc"
    }, 
    {
      meaning: "Maximum flap extention speed",
      marking: "V<sub>FE</sub> Upper A/S Limit White Arc"
      
    }, 
    {
      meaning: "Normal Oparating Range",
      marking: "Green Arc"
      
    }, 
    {
      meaning: "Maximum flap extention speed",
      marking: "V<sub>S1</sub> Lower A/S Limit Green Arc"
      
    }, 
    {
      meaning: "Maximum structural cruse speed",
      marking: "V<sub>NO</sub> Upper A/S Limit Green Arc"
      
    },
    {
      meaning: "Caution Range (oparations in smooth air only)",
      marking: "Yellow Arc"
      
    }, 
    {
      
      meaning: "never exceed speed; above this speed structural failure may occure",
      marking: "V<sub>NE</sub> Red Line"
      
    }
]

  
displayQuiz()
function displayQuiz(){



	for(i = 0; i <= aIMarkingsObj.length; i++){
		var qNum = i+1
    
		var q = document.createElement("p")
		q.setAttribute("id","question" + i)
		var qText = document.createTextNode("Qestion "+ qNum + ": " + aIMarkingsObj[i].meaning + " applies to ")
		q.appendChild(qText)
		qForm.appendChild(q)


		var iBox = document.createElement("input")
		iBox.setAttribute("id","answerInputs"+ i)
		iBox.setAttribute("placeholder","Pick answer " + qNum + " from the answer pool -->")
		qForm.appendChild(iBox)

		var aPool = document.createElement("p")
    	aPool.innerHTML = aIMarkingsObj[i].marking
    	answerPool.appendChild(aPool)
	}
}

function submit(){

  for(i = 0; i <= aIMarkingsObj.length; i++){
    var answer = document.getElementById("answerInputs"+ i).value
    console.log (answer)
  }

}

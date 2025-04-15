function Menuverify() {
	var MenuInput = document.getElementById('ChoiceInput').value;

	switch (MenuInput){
		case "B":
			document.getElementById('resultChoice').innerHTML = "You ordered a Burger"; break;
		case "F":
			document.getElementById('resultChoice').innerHTML = "You ordered Fries"; break;
		case "S":
			document.getElementById('resultChoice').innerHTML = "You ordered Soda"; break;			
		default: 
			document.getElementById('resultChoice').innerHTML = "Invalid input. Please try again"

	}
}
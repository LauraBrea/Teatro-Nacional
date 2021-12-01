
function pruebaemail (datmail){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
	if(!re.exec(datmail)){
		alert('email no valido');
	}
	else alert('email valido');
	}

	<button class="loginbutton button" type="submit" onclick="pruebaemail(mail.value)" >ENVIAR</button>
    // datmail.onformdata = pruebaemail(datmail);

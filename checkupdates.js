
function check(argument) {
	checkfile = document.getElementById('arquivo').files[0]
	checkfile2 = document.getElementById('arquivo2').files[0]
	if(checkfile && checkfile2) {
		clearInterval(ck);
		for (i in botaowarn){
			botaowarn[i].className = "green"
		}
		log.innerHTML="2 files uploaded"
		checkfile = []
		checkfile2 = []
		return 0
	}else if(checkfile){
		console.log("files 1 loaded")
		botaowarn[2].className= "green"
		botaowarn[5].className= "green"
		log.innerHTML="Need secound file missing"
		return 1
	}
	console.log("files misson")
	log.innerHTML="Files missing"
	botaowarn[0].className= "red"
	botaowarn[1].className= "red"
	botaowarn[2].className= "red"
	botaowarn[3].className= "red"
	botaowarn[4].className= "red"
	botaowarn[5].className= "red"
}

var ck = setInterval(check,1000)
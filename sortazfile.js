	function sortaz(showfile=false){
		doc = document.getElementById('arquivo').files[0]
		if (!(doc)) {
			//se doc1 e doc2 estiver faltando, os dois resultados tem que dar verdadeiro e sao convertudos para false
			console.log("Está faltando arquivos")
			log.innerHTML="The first file is missing"
			return 0
		}

		doc = document.getElementById('arquivo').files[0]
		console.log("enviado")
		if (doc) {
	 	  	var reader = new FileReader();
		    reader.readAsText(doc, "UTF-8");
		    reader.onload = function (evt) {
		    console.log(evt)
	        formone = evt.target.result.split("\n");
	        formone = formone.sort()
	        ordenar(showfile)
	        console.log("documento 1 carregado!")
	        
	    	}
		    reader.onerror = function (evt) {
	        document.getElementById("fileContents").innerHTML = "error reading doc";
	    	}
		}
		
		console.log("Posted")
		return 1
}

function ordenar(showfile=false){
	//remove empty lines
	let filtered = []
	for (i in formone){
		if (formone[i] != "") {
			console.log("passou")
			filtered.push(formone[i])
		}
	}
	if (showfile) {adddomtest(filtered)}else{savetxt(filtered)}
	
	
}
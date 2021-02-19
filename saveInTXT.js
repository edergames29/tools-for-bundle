	function saveintxt(){
		doc = document.getElementById('arquivo').files[0]
		doc2 = document.getElementById('arquivo2').files[0]
		if (!(doc && doc2)) {
			//se doc1 e doc2 estiver faltando, os dois resultados tem que dar verdadeiro e sao convertudos para false
			console.log("Está faltando arquivos")
			log.innerHTML="Files are missing"
			return 0
		}

		doc = document.getElementById('arquivo').files[0]
		console.log("enviado")
		if (doc) {
	 	  	var reader = new FileReader();
		    reader.readAsText(doc, "UTF-8");
		    reader.onload = function (evt) {
	        formone = evt.target.result.split("\n");
	        console.log("documento 1 carregado!")
	        compareTXT()
	    	}
		    reader.onerror = function (evt) {
	        document.getElementById("fileContents").innerHTML = "error reading doc";
	    	}
		}
		if (doc2) {
	 	  	var reader = new FileReader();
		    reader.readAsText(doc2, "UTF-8");
		    reader.onload = function (evt) {
	        formtwo = evt.target.result
	    	console.log("documento 2 carregado!")
	    	compareTXT()
	    	}
		    reader.onerror = function (evt) {
	        document.getElementById("fileContents").innerHTML = "error reading doc";
	    	}
		}
		console.log("Posted")
		console.log(formone.length,formtwo.length)
		return 1
}

function compareTXT(){
	if (formone==0 || formtwo==0) {
		return 0
	}
	naopare= new Array()
	console.log('Dois arquivos prontos!')
	progress.max = formone.length
	let arraycompare = []
	let re = new RegExp(/=.+/i);
	for (f in formone){
		
		one = formone[f].replace(re,"").slice(0,-1)
		if (formtwo.indexOf(one) >=0) {
			console.log("Found")
			//arraycompare.push(one)
		}else{
			console.log(`Não achou, de ${one} no ${0}`)
			naopare.push(formone[f])
			
		}
		
		
	}
	savetxt(naopare)
	
}
function savetxt(arrs){
	console.log(arrs)
	arrs = arrs.join("\n")
	var blob = new Blob([arrs], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "bundle.properties");
}

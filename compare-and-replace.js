let formtwoSliced = new Array()
let showtab = false
function compareAndReplace(showintable=false){
		doc = document.getElementById('arquivo').files[0]
		doc2 = document.getElementById('arquivo2').files[0]
		if (!(doc && doc2)) {
			//se doc1 e doc2 estiver faltando, os dois resultados tem que dar verdadeiro e sao convertudos para false
			console.log("Está faltando arquivos")
			log.innerHTML="Files are missing"
			return 0
		}
		showtab = showintable
		doc = document.getElementById('arquivo').files[0]
		console.log("enviado")
		if (doc) {
	 	  	var reader = new FileReader();
		    reader.readAsText(doc, "UTF-8");
		    reader.onload = function (evt) {
	        formone = evt.target.result.split("\n");
	        console.log("documento 1 carregado!")
	        compareReplaceAlg()
	    	}
		    reader.onerror = function (evt) {
	        document.getElementById("fileContents").innerHTML = "error reading doc";
	    	}
		}
		if (doc2) {
	 	  	var reader = new FileReader();
		    reader.readAsText(doc2, "UTF-8");
		    reader.onload = function (evt) {
	        //formtwo = evt.target.result
	        formtwoSliced = evt.target.result.split("\n");
	        formtwo = evt.target.result
	    	console.log("documento 2 carregado!")
	    	compareReplaceAlg()
	    	}
		    reader.onerror = function (evt) {
	        document.getElementById("fileContents").innerHTML = "error reading doc";
	    	}
		}
		console.log("Posted")
		console.log(formone.length,formtwo.length)
		return 1
}

let comparedReplaced = new Array()
function compareReplaceAlg(){
	console.log('chamou compare')	
	if (formone==0 || formtwo==0) {
		return 0
	}
	comparedReplaced = []
	console.log('Dois arquivos prontos!')
	progress.max = formone.length

	let re = new RegExp(/=.+/i);
	for(f in formone){
		one = formone[f].replace(re,"").replace(/\s/g, '')
		if (formtwo.indexOf(one) >= 0) {
			//console.log(`${one} está em formtwo`)
			
			
			for(c in formtwoSliced){
				
				if (formtwoSliced[c].indexOf(one)>=0 ) {
					if (one == formtwoSliced[c].replace(re,"").replace(/\s/g, '')) {
						if (f == 43) {console.log('43 entrou')}
						//console.log(`${one} É IGUAL ${formtwoSliced[c]}`)
						comparedReplaced.push(formtwoSliced[c])
						break;
					}else{
						
						//two = formtwoSliced[c].replace(re,"").replace(/\s/g, '')
						//if (f <50) {console.log(`POSIÇÃO:F${f},C${c} Valor do one: ${one}, valor do two: ${two} `)}
					}
					
					if (c == formtwoSliced.length) {
							console.log('caiu para o esquecimento')
						}
					//console.log(`comparou ${formone[f]} com ${formtwoSliced[c]}`)
					//console.log(`comparando ${one} COM O ${formtwoSliced[c]}`)
					
				}
			//if (f == 43) {console.log(c)}
			if (c >= formtwoSliced.length-1) {
				comparedReplaced.push(formone[f])
				//console.log(`Valor de c ${c} tamanho ${formtwoSliced.length}`)
			}

			}
		}else{
			//console.log(`POSIÇÃO:${f}`)
			//console.log(`formone:${formone[f]}`)
			//console.log(`${formone[f]} não está em fortwo`)

			comparedReplaced.push(formone[f])
		}
	}

	
	if(showtab){adddomtest(comparedReplaced)}else{savetxt(comparedReplaced)}
}
function adddomtest(arr){
	log.innerHTML="Adding to the list"
	let adicionardom = ""
	for(i in arr){
		adicionardom+="<li>"+arr[i]+"</li>"
	}
	ol.innerHTML= adicionardom
	log.innerHTML=`Sucess, ${naopare.length} lines for transition`
	disableinput(false)

}
function savetxt(arrs){
	arrs = arrs.join("\n")
	var blob = new Blob([arrs], {type: "text/plain;charset=utf-8"});
	saveAs(blob, "bundle.properties");
}

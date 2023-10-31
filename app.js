
//alert('Olá, Mundo vocês estão felizes!');

let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){//Função para exibir Texto na tela 
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
}
function exibirMensagemInicial(){//Função para exibir mensagem inicial de forma sem repetir o codigo
	exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
	exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();//Chamdo a função para ela ser ativada quando o codigo for lido pela primeira vez 

function verificarChute(){
	let chute = document.querySelector('input').value;//Nesta linha cria a variavel 'chute' e pega a informação do 'input'
	
	if(chute == numeroSecreto){//Se o chute estiver certo
		exibirTextoNaTela('h1', 'Acertou! ');
		let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
		let mensagemTentativas = `Você descobriu o numero secreto! Com ${tentativas} ${palavraTentativa}.`;//Mensagem de sucesso!
		exibirTextoNaTela('p', mensagemTentativas);//Exibindo texto na tela 
		
		//Ativando o botão reiniciar
		document.getElementById('reiniciar').removeAttribute('disabled');
		
	}else{//Se o chute estiver errado
		if(chute > numeroSecreto){//Se o numero for menor
			exibirTextoNaTela('h1', 'Errou! ');//Exibindo texto na tela 
			exibirTextoNaTela('p', `O numero secreto é menor que! ${chute}. :(`);//Exibindo texto na tela 
		}else{//Se o numro for maior
			exibirTextoNaTela('h1', 'Errou! ');//Exibindo texto na tela 
			exibirTextoNaTela('p', `O numero secreto é maior que! ${chute}. :( `);//Exibindo texto na tela 
		}
		//tentativas = tentativas + 1;
		tentativas++;
		limparCampo();//Chamando função de limparCampo
	}
}

function gerarNumeroAleatorio(){//Função para gerar numero aleatorio!
	//return parseInt(Math.random() * 10 + 1);
	let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
	let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;
	
	if(quantidadeDeElementosNaLista == numeroLimite){
		listaDeNumeroSorteados = [];
	}
	
	if (listaDeNumeroSorteados.includes(numeroEscolhido)){
		return gerarNumeroAleatorio();
	}else{
		listaDeNumeroSorteados.push(numeroEscolhido);
		console.log(listaDeNumeroSorteados);
		return numeroEscolhido;
	}
}

function limparCampo(){//Função para limpar o campo onde se escreve o chute
	chute = document.querySelector('input');
	chute.value = '';
}

function reiniciarJogo(){
	numeroSecreto =  gerarNumeroAleatorio();
	limparCampo();
	tentativas = 1;
	exibirMensagemInicial();
	document.getElementById('reiniciar').setAttribute('disabled', true);
}

/*
 Boas Praticas de programação 
Evite copiar o mesmo codigo varias vezes utilizando funcões

 (function)
Uma função JavaScript é um bloco de código projetado para executar uma tarefa específica.
Uma função JavaScript é executada quando “algo” a invoca (chama)

(document)
O objeto document representa sua página da web.
Se você deseja acessar qualquer elemento em uma página HTML, você sempre começa acessando o objeto do documento.
Abaixo estão alguns exemplos de como você pode usar o objeto document para acessar e manipular HTML.

(querySelector e querySelectorAll)
O querySelector()método retorna o primeiro elemento que corresponde a um seletor CSS.
Para retornar todas as correspondências (não apenas a primeira), use o querySelectorAll()em vez disso.
Ambos querySelector()e querySelectorAll()lançam uma exceção SYNTAX_ERR se o(s) seletor(es) for(em) inválido(s).

(innetHTML)
A innerHTMLpropriedade define ou retorna o conteúdo HTML (HTML interno) de um elemento.

(getElementById)
O getElementById()método retorna um elemento com um valor especificado.
O getElementById()método retorna nullse o elemento não existir.
O getElementById()método é um dos métodos mais comuns no HTML DOM. É usado quase sempre que você deseja ler ou editar um elemento HTML.

(setAttribute)
O setAttribute()método define um novo valor para um atributo.
Se o atributo não existir, ele será criado primeiro.

(includes)
O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
*/

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Numero Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
function comprar(){
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    if(tipoIngresso == 'pista'){
        comprarPista(quantidade);
    }

    if(tipoIngresso == 'superior'){
        comprarSuperior(quantidade);
    }

    if(tipoIngresso == 'inferior'){
        comprarInferior(quantidade);
    }
    
}
function comprarPista(quantidade){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade>quantidadePista){
        alert('Quantidade maior do que o disponível para o tipo pista');

    }else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('Parabéns, compra efetuada com sucesso!');
    }
}
function comprarSuperior(quantidade){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade>quantidadeSuperior){
        alert('Quantidade maior do que o disponível para o tipo superior');
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('Parabéns, compra efetuada com sucesso!');
    }
}
function comprarInferior(quantidade){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade>quantidadeInferior){
        alert('Quantidade maior do que o disponível para o tipo inferior');
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior
        alert('Parabéns, compra efetuada com sucesso!');
    }
}




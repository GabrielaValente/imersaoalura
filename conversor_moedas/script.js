
function Converter() {
    var valorElemento = document.getElementById('valor');
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
  
    var elementoValorCovertido = document.getElementById('valorConvertido');
    var valorConvertido = "Este valor em real é R$ " + valorEmReal;
    elementoValorCovertido.innerHTML = valorConvertido;
  }
  
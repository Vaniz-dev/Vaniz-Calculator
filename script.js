function clean(){
    document.getElementById("Result").innerHTML = "";
}

function sub(){
    numero = document.getElementById("Result").innerHTML;
    if(numero != "NADA ESCRITO" ){
        if(numero != "Erro"){
            document.getElementById("Result").innerHTML = numero.substring(0, numero.length -1) 
        }
    }
}

function insert(num){
    var numero = document.getElementById("Result").innerHTML;
    if(numero != "NADA ESCRITO" ){
        if(numero != "Erro"){
            if(numero.length < 26){
                document.getElementById("Result").innerHTML = numero+num;    
            }
        }
    }
}

function somar(){
    var numero = document.getElementById("Result").innerHTML;
    try{
        if(numero){
        document.getElementById("Result").innerHTML = eval(numero);
        }else{
        document.getElementById("Result").innerHTML = "NADA ESCRITO";
        }
    }catch{
        document.getElementById("Result").innerHTML = "Erro"
    }
}




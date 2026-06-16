//O JavaScript é uma linguagem WEB

//Variáveis - Valores armazenados na memória do computador

//Funções - Blocos de código 

function carregar(){
    //alert("Bem vindo ao JavaScript")
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
     
    var data = new Data()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}:${minutos}Am`
if(hora >=0 && hora <12){
    img.src ='manha.png'
    document.body.style.background = '#ffcad4'
}
else if(hora >= 12 && hora < 18){
    img.src ='tarde.png'
    document.body.style.background = '#ff8fab'
}
else{
    mg.src ='noite.png'
    document.body.style.background = '#fb6f92'
}
}




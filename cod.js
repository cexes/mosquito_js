var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
function ajustarTamanho(){

    largura = window.innerHeight
    altura = window.innerWidth

    console.log(altura,largura)
}
     ajustarTamanho()

 var cronometro = setInterval(function(){
         tempo -=1
         if(tempo <0){
                clearInterval(cronometro)
                 window.location.href = "vitoria.html"
         }else{
         document.getElementById('cronometro').innerHTML = tempo}
         
 },1000)    

function posicaoRan(){
    if(document.getElementById('mosquito')){
            document.getElementById('mosquito').remove() 
            
      if(vidas >3){
               window.location.href  = "game_over.html"
      } else{
              document.getElementById("v" + vidas).src="imagens/coracao_vazio.png"
              vidas++
      }   
    }
   var posicaoX = Math.floor(Math.random() * largura) - 90
   var posicaoY = Math.floor(Math.random() * altura) - 90
   posicaoX  = posicaoX  < 0 ? 0:posicaoX
   posicaoY = posicaoY < 0 ? 0: posicaoY
   console.log(posicaoX, posicaoY)

   var mosquito = document.createElement('img')
   mosquito.src = 'imagens/mosca.png'
   mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio()
   mosquito.style.left = posicaoY + "px"
   mosquito.style.top = posicaoX + 'px'
   mosquito.style.position = 'absolute'
   mosquito.id = 'mosquito'
   mosquito.onclick = function(){
           this.remove()      
   }

   document.body.appendChild(mosquito)
   tamanhoAleatorio()
   console.log(ladoAleatorio())
   
}


function tamanhoAleatorio(){    
   var classe = Math.floor(Math.random()  * 3)
   switch(classe){
           case 0:
                   return 'mosquito_um'
           case 1:
                   return "mosquito_medio"        
           case 2:
                   return 'mosquito_grande'        
   }

}
function ladoAleatorio(){
   var lado = Math.floor(Math.random() * 2)
    switch(lado){
             case 1: 
               return 'ladoB'    
            
    }
}
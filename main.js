const botoes=document.querySelectorAll(".botao"); 
const botoes=document.querySelectorAll(".botao"); 
for(let i=0;i,botoes.lenght;i++){
  botoes[i].onclick=function(){

    for(let) j=0;,botoes.lenght;j++{
      botoes[j].classlist.remove("ativo");
      textos[j].classlist.remove("ativo");
    }
     botoes[j].classlist.add("ativo");
     textos[j].classlist.add("ativo");
  }
}
const contadores=document.querySelectorAll(".contador");
const tempoObjetivo1= new Date("2024-03-25T00:00:00")
let tempoAtual= new Date( );

contadores[0].textContent =tempoObjetivo1-tempoAtual;

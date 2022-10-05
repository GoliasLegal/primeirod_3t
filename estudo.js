let tabuada = 2;

function escreva(){
    //tabuada do dois
    document.write(tabuada + " x 1 = "+(tabuada*1)+"</br>");
    document.write(tabuada + " x 2 = "+(tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = "+(tabuada*3)+"<br>");
    document.write(tabuada + " x 2 = "+(tabuada*4)+"<br>");
    document.write(tabuada + " x 3 = "+(tabuada*5)+"<br>");
    document.write(tabuada + " x 2 = "+(tabuada*6)+"<br>");
    document.write(tabuada + " x 3 = "+(tabuada*7)+"<br>");
    document.write(tabuada + " x 2 = "+(tabuada*8)+"<br>");
    document.write(tabuada + " x 3 = "+(tabuada*9)+"<br>");
    document.write(tabuada + " x 2 = "+(tabuada*10)+"<br>");



}
function repete(){
for(let i = 1; i <= 10; i++){
  document.write("tabuada do " + i + "</br>");
  for(let j=1; j <= 10; j++){
  document.write(i + " X " + j + "=" + (j*i) + "</br>" );
  }
 document.write("</br>");
}
}

let lista = ["Banana","Uva","Abacate","Tomate"];

function minhaLista(){
  document.write(lista[1])
}


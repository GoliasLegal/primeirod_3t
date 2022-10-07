function total(){
   let c = document.getElementsByClassName("valor").value;
   let j = document.getElementsByClassName("juros").value;
   let t = document.getElementsByClassName("meses").value
   let r = 0;
   for(let i = 1; i <= t; i++){
      r = c * (1 + (j/100));
      document.write("mes: "+ i + "valor:" + r +)"<brs";
      v = r;
   }

   document.write("Resultado: " + r);
}

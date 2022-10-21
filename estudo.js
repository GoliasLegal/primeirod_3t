function total(){
  let c = document.getElementById("valor").value;
  let j = document.getElementById("juros").value;
  let t = document.getElementById("meses").value;

  if (!Number(c)){
    alert("0 Capital deve ser numeros.");
    document.getElementById("valor").value = "";
    document.getElementById("valor").focus();
    return
}
  if (!Number(j)){
    alert("0 Juros deve ser numeros.");
    document.getElementById("juros").value = "";
    document.getElementById("juros").focus();
    return
}
   if (!Number(t)){
      alert("0 Meses deve ser numeros.");
      document.getElementById("meses").value = "";
      document.getElementById("meses").focus();
      return
}
  let r = 0;
  for(let i = 1; i <= t; i++){
      r = c * (1 + (j/100));
      document.write("Mês " + i + " valor: " + r +"<br>");
      c = r;
  }
  document.write("Resultado: " + r);
}


function updateCart(name){
   var produto = JSON.parse(localStorage.getItem(document.title));
   var preco ;
   
   for (let x in produto) {
      if(x == name){
         produto[x][0] += 1;
         preco = parseFloat(localStorage.getItem("total")) + produto[x][1];
         break;
      }
   }
   
   localStorage.setItem("total",preco);
   localStorage.setItem(document.title, JSON.stringify(produto));

}


window.onload = function () {

   
   setInterval(getCurrentStat, 500);
}

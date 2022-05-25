```JavaScript
function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let maca = 0
  
  if (quantidade<12){
    maca=1.30
  }
    else if (quantidade >=12){
      maca = 1
    }
    
     return maca*quantidade
}
```
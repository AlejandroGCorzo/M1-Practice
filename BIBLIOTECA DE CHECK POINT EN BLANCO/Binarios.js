//De binario a decimal:



function BinarioADecimal(num) {
    let arrayD= num.split("");
    let acc= 0;
    let posicion= 0;
    for(let i = arrayD.length-1; i >= 0; i--){
        acc += arrayD[i]*2**posicion;
        posicion++;
    }
    return acc;
}


//De decimal a binario:

function DecimalABinario(num) {
    if(num<=0){return "0"}
    var array=[];

    while(num > 0){
        array.unshift(num%2);
        num=Math.floor(num/2);
    }
    return array.join("");

}
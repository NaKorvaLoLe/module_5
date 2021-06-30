let arr = [2,2];
let check = true;
for (i =0; i < arr.length; i++){
    if(typeof + arr[i] =='number' && !isNaN(arr[i]) ){
        if( +arr[i] != +arr[0]){
            check = false;
            break;
        }
    }
}

console.log(check)
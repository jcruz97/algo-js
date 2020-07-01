let arrayEx1 = [2,69,3,410];
let arrayEx2 = [3,2,1];

let tmp= [];

let sorting = (arr) =>{
    n=arr.length;
    for (j=0;j<=n; j++){

        if (arr[j] > arr[j+1]) {
            tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
           }
    }
}

console.log(sorting(arrayEx1));
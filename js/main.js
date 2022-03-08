var numbers = [1, 3, 5, 9];

function calculateNumbers(){
    var sum = 0;

    for( var allSum of numbers){
        sum += allSum;
    }
    return sum;
}

console.log(calculateNumbers());;
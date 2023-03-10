function area(){
    let triangle = (1/2 * 12 * 18);
    document.getElementById("area").value = triangle;
    console.log(triangle)
}

function date(){
    let d = new Date();
    let time = d.toTimeString();
    let day;
    if(d.getDay() == 0){
        day = "Sunday";
    }
    else if(d.getDay() == 1){
        day = "Monday";
    }
    else if(d.getDay() == 2){
        day = "Tuesday";
    }
    else if(d.getDay() == 3){
        day = "Wednesday";
    }
    else if(d.getDay() == 4){
        day = "Thurdsay";
    }
    else if(d.getDay() == 5){
        day = "Friday";
    }
    else if(d.getDay() == 5){
        day = "Saturday";
    }
    else {
        day = "Sunday"
    }
    document.getElementById("date").value = "Today's Date: " + day + ". Current Time: " + time;
}

function c2f(){
    let cel = document.getElementById("cel").value
    document.getElementById("c2f").value = 
    ((cel * 9/5) + 32)  + " Degrees Farenheit "
}

function f2c(){
    let far = document.getElementById("far").value
    document.getElementById("f2c").value = ((far - 32) * 5/9)
 + " Degrees Celsius "
}



function squareSum(num1,num2,num3){
    let total = 0
    arr = [num1,num2,num3]
    for(let i = 0; i<arr.length; i++){
        total += (arr[i] * arr[i])
    }
    return total
}

console.log(squareSum(1,2,2))


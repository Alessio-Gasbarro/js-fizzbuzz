//CREACTION OF 100

for (let i=0; i<100; i++){
    //CHECK IF ONLY *3
    if((i+1)%3 == 0){
        //CHECK IF *3 AND *5
        if((i+1)%5 == 0){
            console.log('FizzBuzz');
            continue;
        }
        else console.log('Fizz');
    }
    //CHECK IF ONLY *5
    else if((i+1)%5 == 0){
        console.log('Buzz');
        continue;
    }
    //JUST TO BE SURE
    else{
        console.log(i+1);
    }
}
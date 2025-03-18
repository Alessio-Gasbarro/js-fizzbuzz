//CREACTION OF 100

for (let i=0; i<100; i++){
    //CHECK IF *3
    if((i+1)%3 == 0){
        //CHECK IF *3 AND *5
        if((i+1)%5 == 0){
            console.log('FizzBuzz');
            continue;
        }
        else console.log('Fizz');
    }
    
}
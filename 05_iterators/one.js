// for loop

for(let index=0;index<10;index++){
    const element =index;
    //console.log(element);
}

 
for(let index=0;index<10;index++){

    console.log(`outer loop value ${index}`);
    for(let i=0;i<10;i++){
        console.log(`inner loop value ${i}`); 

    }
}

//array


//breaka and continue
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`detectde 5`);
        break;
    }
    console.log(`value of i is ${index}`);

    
}
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log(`detectde 5`);
        continue;
    }
    console.log(`value of i is ${index}`);

    
}
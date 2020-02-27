//make two functions one that does complicated math and then one that waits for the math to get returned
//complicated math
function someMath(){
for(i = 0; i<10000000; i++){
    if(i =10000000){
        console.log(i);
    }
}




}
//where we put our promise
function waitForMath(){
    return new Promise((resolve, reject) => {
        try{
        someMath();
        resolve();    
        } catch(error){
            reject('error: numbers arent real');
        }
       
    })     





}

waitForMath().then(res => {
    console.log(res);
});


const carlos=() =>{
    console.log(`hello carlos`);
}

const williams= (cb, string)=>{
    cb();
    console.log(`williams`);
    console.log(string)
}

const myObj = {
    myMethod: () =>{

    },
    myOtherMethod: function () {

    },
    //only works in objects
    myBestMethod(){

    }
}

// const harcourt = function(cb) {
    // cb();
//     console.log(`hello harcourt`);
// }

williams(carlos);
// williams(harcourt(carlos))


const myPromise = () => {
    const promise = new Promise((resolve, reject) => {
        const databaseQuery = true;
        let result= `yay you resolved`;

        if(databaseQuery){
            resolve(result);
        } else {
            reject(`you failed!`);
        }
    });
    return promise;
}

myPromise()
    .then(res => {
        console.log(res);
    })
    .catch(rej => {
        console.log(rej);
    })






 





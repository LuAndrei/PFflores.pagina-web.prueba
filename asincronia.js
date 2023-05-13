
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  
  promise.then(
    result => console.log(result), 
  );
  promise.catch(
    error => console.log(error)
  )
  
  console.log("primero")
  
  
  
  function delay(ms) {
    return new Promise( function(resolve) {
      setTimeout(function(){
        resolve('resolve inside delay after '+ ms/1000 + ' seconds' );
      }, ms)
    });
  }
  
  async function handlingDelayData() {
    let data =  await delay(2000);
    console.log('handling: ' + data)
  }
  handlingDelayData()
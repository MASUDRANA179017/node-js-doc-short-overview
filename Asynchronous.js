console.log ("Start Operation");

  function sleep(ms) {
    console.log ("operation is running");
    setTimeout(function() {
      console.log ("operation is done!");
    
    }, ms);
  }

  sleep (1000); 

  console.log ("do someting else...");


////////////////////////////////

  function final(someInput, callback) {
    callback(`${someInput} and terminated by executing callback `);
  }
  
  function middleware(someInput, callback) {
    return final(`${someInput} touched by middleware `, callback);
  }
  
  function initiate() {
    const someInput = 'hello this is a function ';
    middleware(someInput, function (result) {
      console.log(result);
      // requires callback to `return` result
    });
  }
  
  initiate();
  
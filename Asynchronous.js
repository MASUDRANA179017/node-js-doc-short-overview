console.log ("Start Operation");

  function sleep(ms) {
    console.log ("operation is running");
    setTimeout(function() {
      console.log ("operation is done!");
    
    }, ms);
  }

  sleep (1000); 

  console.log ("do someting else...");
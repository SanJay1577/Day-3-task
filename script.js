var xhr = new XMLHttpRequest();
xhr.open('GET',"https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
xhr.onload = function(){
  if(xhr.status >=200 && xhr.status < 300){
    var data = JSON.parse(this.response);
    //console.log(data);
    // Using for loop:
    for(let i=0; i<=data.length; i++){
      //console.log(data[i]);
    }

   // Using for in loop:
   for(let j in data){
     console.log(data[j]);
   }

   //using for of loop:
   for(let k of data){
     console.log(k);
   }

   //using for each loop:
   data.forEach(function(data){
     console.log(data);
   });

  } else{
    console.log("Data is not available");
  }
};
xhr.send();
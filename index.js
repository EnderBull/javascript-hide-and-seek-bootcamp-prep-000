/*----------------------------------*/

function getFirstSelector(selector){
  
  return document.querySelector(selector);
}

/*----------------------------------*/

function nestedTarget(){
  
  return document.getElementById('nested').querySelector('div.target');
}

/*----------------------------------*/

function increaseRankBy(n){
  
 const increase = document.getElementById('app').querySelectorAll( 'ul li');
 
 
 for (let i = 0; i < increase.length; i++){
   increase[i].innerHTML = (parseInt(increase[i].innerHTML) + n).toString();
 }
 
  return increase;
}

/*----------------------------------*/

function deepestChild(){
  
  /
 
  const dc = document.getElementById('grand-node').querySelector('div')
  
  var test;
  
   for (let i = 0; i < dc.length-1; i++){
     if (dc[i] === dc.length-1){
       test = dc[i].querySelector('div');
     }
  }
  
  return test;
}

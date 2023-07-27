
function insert(num){
  let input =document.querySelector('.textview')
  input.value += num
  }
  
  function equals(){
    let input =document.querySelector('.textview')
    let y = eval(input.value)
    input.value= y;
      
  }
  
  function clean(){
    let input =document.querySelector('.textview')
    input.value= ''
  }
  
  function back(){
    let back=document.querySelector(".textview").value
    document.querySelector(".textview").value = back.substr(0, back.length - 1);
   
  }
function dropdown() {
  let state = 0;
  if (state == 0) {
    const user = document.getElementById("user");
    user.style.height = "200px";
    
    state=1;
    console.log(state);
  }

  else if(state ==1){
    const user = document.getElementById("user");
    user.style.height = "200px";
    
    state=0;
    console.log(state);

  }
}

function dbd2() {
    let user = document.getElementById("user");

    user.classList.toggle("myClass");

}

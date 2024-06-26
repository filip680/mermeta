function toggleDisplayBlock(el){
    var st = getComputedStyle(el);
           
    if(st.display === "block") {
        el.style.display = "none";
    }
    else {
        el.style.display = "block";
    } 
  }
  
  function toggleMenu() {
  var el = document.getElementById("toggle1");
   toggleDisplayBlock(el);
   el = document.getElementById("toggle2");
   toggleDisplayBlock(el);
   el = document.getElementById("toggle3");
   toggleDisplayBlock(el);
  }
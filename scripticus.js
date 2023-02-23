
document.onpointermove = event => {
  console.log("К");
  var mfolower = document.getElementById("mfolowere")
  const {clientX,clientY} = event;

  mfolower.style.left = `${clientX}px`;
  mfolower.style.top = `${clientY}px`;
}

window.onscroll = function() {
    var scro = document.getElementById("src");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("Кінець сторінки");
      scro.style.display="block";
      scro.style.fontSize="1200 px";
    }else{
      scro.style.display="none";
      scro.style.fontSize="1200";
    }
  };
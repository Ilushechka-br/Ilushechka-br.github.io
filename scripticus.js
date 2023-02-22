window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      console.log("Кінець сторінки");
    }
  };
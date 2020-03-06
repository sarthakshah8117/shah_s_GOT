(() => {
  // varaible stack here -> the element you want to intract with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      houseVideo = lightBox.querySelector("video"),
      closeButton = lightBox.querySelector(".close-button");



  // functions go in the middle -> what do we want our app to do?
  function showLightBox() {
    // debugger;
    // retrive the css class that matches the video name in the video folder
    let houseName = this.className.split(" ")[1];

    //capatalize the first letter of the house name with javascript
    // and then add the rest of the house name to it
    let newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);

    let targetSource = `video/House-${houseName}.mp4`;
    // debugger;

    //show the lightbox on a click

    lightBox.classList.add("show-lightbox");

    // playthe lightbox video  when it opens
    houseVideo.src = targetSource;
    houseVideo.load();
    houseVideo.play();
      }

      function hideLightBox() {
        lightBox.classList.remove("show-lightbox");
        // playthe lightbox video  when it closes
        houseVideo.pause();
        houseVideo.currentTime = 0;

      }
  // event handling for our sigilButtons
  sigilButtons.forEach(button => button.addEventListener("click", showLightBox));

  // add some even handling for the lightbox close button
  closeButton.addEventListener("click", hideLightBox);


})();

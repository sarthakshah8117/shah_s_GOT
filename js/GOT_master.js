(() => {
  // varaible stack here -> the element you want to intract with
  let sigilButtons = document.querySelectorAll(".sigilContainer"),
      lightBox = document.querySelector(".lightbox"),
      houseVideo = lightBox.querySelector("video"),
      closeButton = lightBox.querySelector(".close-button"),
      currentHouseName = document.querySelector("h1");
      houseDescription = document.querySelector(".house-info");




      const houseData = [
        ["Stark", `House Stark of Winterfell is a Great House of Westeros, ruling over the vast region known as the North from their seat in Winterfell. It is one of the oldest lines of Westerosi nobility by far, claiming a line of descent stretching back over eight thousand years. Before the Targaryen conquest, as well as during the War of the Five Kings and Daenerys Targaryen's invasion of Westeros, the leaders of House Stark ruled over the region as the Kings in the North.`],
        ["Baratheon", `House Baratheon of Storm's End is a legally extinct Great House of Westeros. A cadet branch was formerly the royal house, but House Lannister now controls the throne. House Baratheon traditionally ruled the Stormlands on the eastern coast of Westeros, aptly named for its frequent storms, from their seat of Storm's End.`],


        ["Lannister", `House Lannister of Casterly Rock is one of the Great Houses of Westeros, one of its richest and most powerful families and oldest dynasties. It is also the current royal house of the Seven Kingdoms following the extinction of House Baratheon of King's Landing, which had been their puppet house anyway.

        The Lannisters rule over the Westerlands. Their seat is Casterly Rock, a massive rocky promontory overlooking the Sunset Sea which has had habitations and fortifications built into it over the millennia. They are the Lords Paramount of the Westerlands and Wardens of the West. As the new royal house, they also rule directly over the Crownlands from their seat of the Red Keep in King's Landing, the traditional seat of the royal family.`],


        ["Greyjoy", `House Greyjoy of Pyke is one of the Great Houses of Westeros. It rules over the Iron Islands, a harsh and bleak collection of islands off the west coast of Westeros, from the castle at Pyke. The head of the house is the Lord Reaper of Pyke.

        House Greyjoy's sigil is traditionally a golden kraken on a black field. Their house words are "We Do Not Sow," although the phrase "What Is Dead May Never Die" is also closely associated with House Greyjoy and their bannermen, as they are associated with the faith of the Drowned God. `]

      ];



  // functions go in the middle -> what do we want our app to do?
  function showLightBox() {
    // debugger;
    // retrive the css class that matches the video name in the video folder
    let houseName = this.className.split(" ")[1];

    //capatalize the first letter of the house name with javascript
    // and then add the rest of the house name to it
    let newSource = houseName.charAt(0).toUpperCase() + houseName.slice(1);


    // use this varaible to populate the h1 Element on the page
    currentHouseName.textContent = `House  ${houseData[this.dataset.offset][0]}`;
    houseDescription.textContent = `${houseData[this.dataset.offset][1]}`;

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

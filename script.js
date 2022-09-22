console.log("welcome to spotify");
let songIndex = 0;
let audioElement = new Audio("1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let mastersongname = document.getElementById("mastersongname");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let songs = [
  {
    songname: "Pachtaoge",
    filepath: "songs/1.mp3",
    coverPath: "12.jpg",
  },
  {
    songname: "Ek raat",
    filepath: "songs/2.mp3",
    coverPath: "21.jpg",
  },
  {
    songname: "Feeling",
    filepath: "songs/3.mp3",
    coverPath: "22.jpg",
  },
  {
    songname: "such keh raha",
    filepath: "songs/4.mp3",
    coverPath: "23.jpg",
  },
  {
    songname: "jaane meri",
    filepath: "songs/5.mp3",
    coverPath: "24.jpg",
  },
  {
    songname: "libaas",
    filepath: "songs/6.mp3",
    coverPath: "25.jpg",
  },
];

songitem.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
});
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myprogressbar.value = progress;
});

myprogressbar.addEventListener("change", () => {
  audioElement.currentTime =
    (myprogressbar.value * audioElement.duration) / 100;
});
const makeAllplays = () => {
  Array.from(document.getElementsByClassName("songitemplay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songitemplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllplays();
      index = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `${index + 1}.mp3`;
      mastersongname.innerText = songs[index].songname;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  mastersongname.innerText = songs[songIndex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `${songIndex + 1}.mp3`;
  mastersongname.innerText = songs[songIndex].songname;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

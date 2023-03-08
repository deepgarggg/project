//initailize the Varialbe
console.log("welcome to spotify")
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongPlay = document.getElementById("masterSongPlay")
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    { songName: "Warriyo-mortals", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo- Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV- Invicible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different human & Ehid - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Jinja-Heroes-by-johning", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba-Salem-e-ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiya-Salem-e-ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bhula-Dena-Salem-e-ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tumhara-Salem-e-ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
]
songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

});

// audioElement.play();
//handle plat/pouse click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//Listen to Event
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100)
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {

        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');


    })


}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    addEventListener('click', (e) => {
        makeAllPlay();
        masterSongPlay.innerText = songs[songIndex].songName;
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex > 8) {
        songIndex = 0;

    } else {
        songIndex += 1;


    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;

    } else {
        songIndex -= 1;


    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongPlay.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");

})
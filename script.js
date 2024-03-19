var arr = [
    {songName:"Phele bhi mein",duration:"3:56", url:"./songs/Phele bhi.mp3",image:"https://www.allindiandjsdrive.com/wp-content/uploads/2023/12/Pehle-Bhi-Main-2023-Progressive-Mix-Nkd.jpg"},
    {songName:"Aaj bhi ",duration:"4:56", url:"./songs/Aaj bhi.mp3",image:"https://c.saavncdn.com/710/Aaj-Bhi-Hindi-2020-20200407000137-500x500.jpg"},
    {songName:"Jo tu na mila",duration:"5:56", url:"./songs/jo tu na mila.mp3",image:"https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/4a/e8/e0/4ae8e0e3-4333-e400-f60c-f24654420186/22UMGIM72767.rgb.jpg/1200x1200bf-60.jpg"},
    {songName:"Ab Dusman ban gya",duration:"2:56", url:"./songs/Ab Dusman ban gya.mp3",image:"https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/8c/f9/75/8cf9758b-9c63-dbc9-e145-ff7bc86abbfd/8901854006298.jpg/400x400cc.jpg"}
]
    var allsongs= document.querySelector("#all-songs");
    var poster = document.querySelector("#left");
    var play = document.querySelector("#play");
    var backward = document.querySelector("#backward");
    var farward = document.querySelector("#farward");

    var audio = new Audio()
    var selectedAudio=0;

function AddImage(){
    var clutter ="";
arr.forEach(function(obj,index){
    clutter+=` <div class="song-card" id=${index}>
    <div class="part1">
        <img src="${obj.image}" alt="">
        <h3>${obj.songName}</h3>
    </div>${obj.duration}</h6>
     
</div>`;
})
    allsongs.innerHTML=clutter;
    audio.src= arr[selectedAudio].url
    poster.style.backgroundImage = `url(${arr[selectedAudio].image})`
}
AddImage();

allsongs.addEventListener("click",function(dets){
    selectedAudio=dets.target.id
    AddImage()
    play.innerHTML=`<i class="ri-pause-fill"></i>`
    flag=1
    audio.play()
})
var flag =0;
play.addEventListener("click", function(){
    if(flag==0){
        play.innerHTML=`<i class="ri-pause-fill"></i>`
        AddImage()
        audio.play()
        flag=1
    }
    else{
        play.innerHTML=`<i class="ri-play-fill"></i>`
        AddImage()
        audio.pause()
        flag=0
    }
    
})
farward.addEventListener("click", function(){
   if(selectedAudio < arr.length-1){
    selectedAudio++
    AddImage()
    audio.play()
    flag=1
   }else{
    farward.style.opacity=0.5
   }
})
backward.addEventListener("click", function(){
    if(selectedAudio > 0){
     selectedAudio--
     AddImage()
     audio.play()
     flag=1
    }else{
        backward.style.opacity=0.5
    }
 })


//  https://sheryians.com/whizz/test/65702c883a50f48f2a6f4d65
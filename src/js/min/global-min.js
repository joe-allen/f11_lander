"use strict";var objectFitImages=require("object-fit-images"),objectFitVideos=require("object-fit-videos"),a=require("testData"),videoContainer=document.querySelector(".video__vimeo"),playBtn=document.querySelector(".video__btn-icon--js"),closeBtn=videoContainer.querySelector(".video__close"),iframe=videoContainer.querySelector("iframe"),player=new Vimeo.Player(iframe);playBtn.addEventListener("click",function(){openPlayer(),videoContainer.classList.add("open")});var openPlayer=function(){videoContainer.style.display="flex",document.body.style.overflow="hidden",player.play()};closeBtn.addEventListener("click",function(){closePlayer(),videoContainer.classList.remove("open")});var closePlayer=function(){videoContainer.style.display="none",document.body.style.overflow="auto",player.pause()};window.addEventListener("DOMContentLoaded",function(){});
//# sourceMappingURL=maps/global-min.js.map

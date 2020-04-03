let requestURL = "data/videos.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let videosContainer = document.getElementsByClassName('videos-container')[0];
request.onload = function () {
    const videosjson = request.response;  
    //condition for checking if browser is Internet Explorer
    let videos =  ((false || !!document.documentMode))? JSON.parse(videosjson ).videos: videosjson.videos;
    
    let content = '';

    videos.forEach(function(video){
        content = content + 
        '<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 video-padding-margin">'+
        '   <div class="videoWrapper">' + 
        '       <iframe src="' + video.Link + '"></iframe>' +
        '   </div>' +
        '   <h5 class="spanbold">' + video.Title + '</h5>'+
        '</div>';
    }); 
    videosContainer.innerHTML = content.trim();
}
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
        '<div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 add-margin-bottom">'+
        '   <h4 class="spanbold">' + video.Title + '</h4>'+
        '   <div class="videoWrapper">' + 
        '       <iframe src="' + video.Link + '"></iframe>' +
        '   </div>' +
        '</div>';
    }); 
    videosContainer.innerHTML = content.trim();
}

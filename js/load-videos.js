let requestURL = "data/videos.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let content = document.getElementsByClassName('content')[0];
request.onload = function () {
    const videosjson = request.response;  
    //condition for checking if browser is Internet Explorer
    let videos =  ((false || !!document.documentMode))? JSON.parse(videosjson ).videos: videosjson.videos;
    
    let finalcontent = '';

    //finding list of distinct degreelevels
    agencies = videos.map(function (video) {
        return video.Agency;
    });

    distinctagencies = agencies.filter(function (v, i, a) {
        return a.indexOf(v) === i;
    });

    distinctagencies.sort(function (a, b) {
        if (a < b)
            return 1;
        else
            return -1;
    });

    //Iterating over list of agencies
    distinctagencies.forEach(function (agency) {
        
        agencyvideos = videos.filter(function (video) {
            return video.Agency == agency
        });

        let agencycontent = '';
        let icon = '';
        agencyvideos.forEach(function(video){
            agencycontent = agencycontent +
            '<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 video-padding-margin">'+
            '   <div class="videoWrapper">' + 
            '       <iframe src="' + video.Link + '"></iframe>' +
            '   </div>' +
            '   <h5 class="video-title">' + video.Title + '</h5>'+
            '</div>';
            icon = video.Icon;
        });
        finalcontent = finalcontent + 
        '<div class= "videos-container">'+
        '   <div class="videos-header">'+
        '       <h4 class="agency-title">'+agency+'</h4>'+
        '       <img class="videos-icon" src="../assets/images/'+icon +'" alt=""/>' +
        '   </div>'+
        '   <div class="row videos-body">'+
        agencycontent +
        '   </div>'+
        '</div>';

    });

    content.innerHTML = finalcontent.trim();
}

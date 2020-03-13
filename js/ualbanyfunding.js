//getting content Element to append grants information
let awrdsContainer = document.getElementsByClassName('awards-container')[0];
let requestURL = "/data/ualbanyawards.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function(){
    const awardsjson = request.response;  
    //condition for checking if browser is Internet Explorer
    let awards =  ((false || !!document.documentMode))? JSON.parse(awardsjson).ualbanyawards: awardsjson.ualbanyawards;
    
    let content = '';
    //Iterating over grants array to generate grant content
    for(let i = 0; i < awards.length; i++)
    {
        content = content + 
        '<div class="awardinfo">' +
        '   <h4 class="awardname"><a href="'+ awards[i].Website +'" target="_blank">' + awards[i].AwardName + '</a></h4>' +
        '   <div class="left"><i class="fas fa-calendar-day"></i> <strong>Due Date: </strong>' +  awards[i].DueDate + '</div>' +
        '   <div class="right"><i class="fa fa-graduation-cap"></i> <strong>Degree Level: </strong>' + awards[i].DegreeLevel + '</div>' +
        '   <div class="left"><i class="fas fa-dollar-sign"></i> <strong>Funding Level: </strong>' + awards[i].FundingLevel + '</div>' +
        '   <div class="right"> <br> </div>'+
        '   <p class="awarddescription"><strong>Description: </strong>'+ awards[i].Description + ' </p>'+
        '   <p class="awarddescription"><strong>Eligibility Requirements: </strong>' + awards[i].Eligibility + ' </p>' +
        '</div>';
    }
    awrdsContainer.innerHTML = content.trim();
}
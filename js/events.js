let requestURL = "data/events.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let eventsContainer = document.getElementsByClassName('event-container')[0];
request.onload = function () {
    const eventsjson = request.response;  
    //condition for checking if browser is Internet Explorer
    let events =  ((false || !!document.documentMode))? JSON.parse(eventsjson).events: eventsjson.events;
    
    let content = '';

    events.forEach(function(event){
        content = content + 
        '<div class = "col-sm-6 col-md-6 col-lg-6 col-xl-6 no-padding-left">'+
        '   <div class = "event-box">'+
        '       <h4 class="event-title"><span class="spanbold">' + event.Title +'</span><br>('+
        event.Purpose +
        '       )</h4>' +
        '       <p class="event-info"><span class = "spanbold">When: </span>'+ event.When+'</p>'+
        '       <p class="event-info"><span class = "spanbold">Where: </span>'+ event.Where+'</p>';
        if(event.hasOwnProperty('Description'))
        {
            content = content +  '<p class="event-info"><span class = "spanbold">Description: </span>'+ event.Description+'</p>';
        }
        content = content + '       <a class = "register-button" href="https://admissions.albany.edu/register/PersonalStatementSpr20a">Register</a>'+
        '   </div>' +
        '</div>';
    }); 
    eventsContainer.innerHTML = content.trim();
}
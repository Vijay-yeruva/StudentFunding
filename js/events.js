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
        '       <button class="event-title"><h4><span class="spanbold">' + event.Title +'</span><br>('+
        event.Purpose +
        '       )</h4></button>' +
        '       <div class="event-info"><p><span class = "spanbold">When: </span>'+ event.When+'</p>'+
        '       <p><span class = "spanbold">Where: </span>'+ event.Where+'</p>';
        if(event.hasOwnProperty('Description'))
        {
            content = content +  '<p><span class = "spanbold">Description: </span>'+ event.Description+'</p>';
        }
        content = content + '       <a class = "register-button" href="https://admissions.albany.edu/register/PersonalStatementSpr20a">Register</a></div>'+
        '   </div>' +
        '</div>';
    }); 
    eventsContainer.innerHTML = content.trim();
}


let mainContent = document.getElementsByClassName('main-content')[0];
mainContent.addEventListener('click', function(e){
    if(e.target && e.target.parentElement.className == 'event-title'||
       e.target && e.target.parentElement.parentElement.className == 'event-title'){

            let eventinfo = e.target.parentElement.nextElementSibling;
            if(e.target.parentElement.parentElement.className == 'event-title')
            {
                eventinfo = e.target.parentElement.parentElement.nextElementSibling;
            }

            if(eventinfo.style.display == "block" || eventinfo.style.display == "")
	        {
                //setting current content display to block to show content
                eventinfo.style.display = "none";
            }      
            //If content is not hidden, changing the display property to none to hide content
            else 
            {
                eventinfo.style.display = "block";
            }
    }
 })
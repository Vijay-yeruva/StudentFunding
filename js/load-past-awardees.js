let requestURL = "data/past-awardees.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
let awardeescontent = document.getElementById('content-awardees');
request.onload = function () {
    const awardeesjson = request.response;  
    //condition for checking if browser is Internet Explorer
    let pastawardees =  ((false || !!document.documentMode))? JSON.parse(awardeesjson).pastawardees: awardeesjson.pastawardees;
    
    let content = '';

    //Iterating over list of agencies
    pastawardees.forEach(function (awardee) {
        
        content += '<div class="display-flex awardee-info">' +
                  '<div class="col-xl-2 col-lg-3 ml-0 pl-0">' +
                  '<img class="awardee-photo" src="../assets/images/' + awardee.Photo +'.jpg"></div>'+
                  '<div class="col-xl-10 col-lg-9 p-0">' +
                  '     <h4 class="name">'+ awardee.FirstName + ' '+ awardee.LastName +'</h4>'+
                  '     <div class="award-details display-flex">'+
                  '         <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6 pl-0">'+
                  '             <strong>Award: </strong>'+ awardee.Award +'<br>'+
                  '             <i class="fas fa-dollar-sign"></i> <strong>Funding Amount: </strong>'+ awardee.FundingAmount +'<br>'+
                  '         </div>'+
                  '         <div class="col-sm-12 col-md-12 col-lg-12 col-xl-6">'+
                  '             <i class="fas fa-book"></i> <strong>Field Of Study: </strong>'+ awardee.FieldofStudy +'<br>'+
                  '             <i class="far fa-envelope"></i> <strong>Email: </strong>'+ awardee.Email+'<br>'+
                  '         </div>'+
                  '     </div>'+
                  '</div></div>'; 
    });
    awardeescontent.innerHTML = content.trim();
}

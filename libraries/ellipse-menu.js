let ellipsemenu = document.getElementById('ellipse-menu');
let pic = ellipsemenu.getElementsByTagName("image")[0];
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let button6 = document.getElementById("button6");
let desc = document.getElementById("ellipse-item-desc");

function displayDesc(button)
{
    switch(button.id){
        case "button1":
            desc.innerHTML = "Fellowships provide unique opportunities to conduct novel research,"+
                             "teach in a classroom, provide community service, or even work in "+
                             "a public or private sector organization positioning you for future success";
            break;
        case "button2":
            desc.innerHTML = "Mentorship will provide important opportunities strengthen your" + 
                             "skills and knowledge, while providing  professional socialization and networking"+
                             " and personal support";
            break;
        case "button3":
            desc.innerHTML = "These awards shine a light on your talents and abilities, while"+
                             " enabling you to establish new connections, build confidence, and create new "+
                             "opportunities for future growth";
            break;
        case "button4":
            desc.innerHTML = "Opportunity to acquire new knowledge and skills to enhance your transition"+
                             " from to further your education or to pursue a future profession";
            break;
        case "button5":
            desc.innerHTML = "Fellowships/assistantships provide opportunities for first-hand experience "+
                             "in research, training, service or work in a real-life setting";
            break;
        case "button6":
             desc.innerHTML = "Winning an award provides significant financial support, tuition, travel "+
                              "support and/or more";
             break;
        default:
            desc.innerHTML = "";
    }
    pic.style.visibility = "hidden";
}

clear = function()
{
    desc.innerHTML = "";
    pic.style.visibility = "visible";
}

button1.onmouseover = function() {displayDesc(this)};
button1.onmouseleave = clear;
button2.onmouseover = function() {displayDesc(this)};
button2.onmouseleave = clear;
button3.onmouseover = function() {displayDesc(this)};
button3.onmouseleave = clear;
button4.onmouseover = function() {displayDesc(this)};
button4.onmouseleave = clear;
button5.onmouseover = function() {displayDesc(this)};
button5.onmouseleave = clear;
button6.onmouseover = function() {displayDesc(this)};
button6.onmouseleave = clear;
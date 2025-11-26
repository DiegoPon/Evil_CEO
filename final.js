var evil_score = 0;

const $box = $("#vacation_background");
const $laptop = $("#vacation_laptop");
const $title_start = $("#start_button");
const $email = $("#email_window");
const $response = $("#choice_window");



var volume = 100;
var growth = 3;

const images = [
    "jombo.png",
    "../environ/jimbo.png",
    "../environ/there.jpg",
    ""
];

const choices = [ 
    //scenario 1
    ["Grant the wishes of the union, upset your shareholders.","Ignore the union, they will \
        come crawling back soon enough.","arrange for the union president’s dog to “accidentally”\
         get hit by a car. No strike today!"],

    ["choice4","choice5","choice6"]
];

const choice_value = [ 
    [-3,3,7],
     [1,2,4],
     [0,1,3]
];



const scenario = ["\
    \
    Rumors of a strike among the company factory worker’s union are circulating. \
    Granting the union their wishes may help boost company morale as well as the overall health, wellbeing, \
    and happiness of all you workers, but at a slight, near imperceptible cost to your shareholders dividends! "]
// scenario 1

let img_select = 0;
function update_office_screen(){
    randomImage = images[img_select % (images.length)] //progressively select through the image's array elements, could be done randomly if needed
    $("#vacation_background").css("background-image", `url(${randomImage})`); // set background image to thing
    img_select++; //increase img_select, tbh there could be a problem with max(int) but im lazy (its just like 3 more lines of code) 
    //if statement to fix edge case here
}


//title stuff
$title_start.on("click", function(){
    $(".title_screen").remove();
    var audio = new Audio("../ART101/ART101/environ/jackenstein-laugh.mp3"); // create audio
    audio.play(); // start playing
    
    bg_music.play();
    audio.onended = function() {
        $(".title_screen").remove();
    };
    
});

$title_start.on("mouseenter", function() {
    $(this).css("filter", "brightness(0.5)");
});

$title_start.on("mouseleave", function() {
    $(this).css("filter", "brightness(1)");
});

//laptop screen when its on the office screen

$laptop.on("dblclick", function(){laptop_clicked();});

$laptop.on("mouseenter", function() {
    $(this).css("filter", "brightness(0.5)");
});

$laptop.on("mouseleave", function() {
    $(this).css("filter", "brightness(1)");
});
function laptop_clicked(){
    update_office_screen();
    generate_email(choices[0],choice_value[0], scenario[0]);
    $("#email_text").html(scenario[0])

}






// desktop shenanigans 

function generate_email(choices_array, choices_value_array, scenario_text){
    $(".desktop").css("opacity", 1);
    $(".desktop").css("pointer-events", "auto");  
    $("#evil-meter-container").css("z-index",11)  
    //arrays are used to generate or replace text in designated div's
    let new_choices = "First choice: " + choices_array[0];
    new_choices += "<br>Secound choice: " + choices_array[1];
    new_choices += "<br>Third choice: " + choices_array[2];
    $("#choice_window_text").html(new_choices)

};

$("#choice_1").on("click", function(){
    evil_score += choice_value[0][0];
    setEvilMeter(evil_score);
    $("#email_text_container").css("opacity", 0);
    $("#email_window").css("backgroundImage", 'url("art_assets/popups/angrystock.png")');

});
$("#choice_2").on("click", function(){
    evil_score += choice_value[0][1];
   setEvilMeter(evil_score);

});
$("#choice_3").on("click", function(){
    evil_score += 10;
setEvilMeter(evil_score);

});


function generate_graphs(){
    //take in evil amount, and growth,
    //divide it and change it around using arbutary numbers
}
$email.on("mousedown",function(){
    $(this).css("z-index", 11);
    $response.css("z-index", 10);

});

$email.on("click",function(){
    $(this).css("z-index", 11);
    $response.css("z-index", 10);

});
$response.on("click", function(){
    $(this).css("z-index", 11);
    $email.css("z-index", 10);

});
$response.on("mousedown", function(){
    $(this).css("z-index", 11);
    $email.css("z-index", 10);

});



// runtime code

$(".desktop").css("opacity", 0);
$(".desktop").css("pointer-events", "none");
$(".settings").css("opacity", 0);
$(".settings").css("pointer-events", "none");


// audio functionality (this is just technical stuff)

function setVolume(name, value) {
    if (name) {
        name.volume = value;
    }
}

$("#musicSlider").on("input", function () {
    setVolume("bg_music", $(this).val());
});

$("#background_ac_slider").on("input", function () {
    setVolume("ac_noise", $(this).val());
});

//preload audio
let bg_music = new Audio("audio_assets/evilceo(maaaybeee).mp3");
bg_music.loop = true;
bg_music.preload = "auto";
bg_music.load;

let ac_noise = new Audio("need to download a ac noise to play");
ac_noise.loop = true;
ac_noise.preload = "auto";
ac_noise.load;


let user_name = "";
let company_name = "";

//myucode
$("#submit_name").on("click",function(){
    if(($("#name_input").val() != "") && ($("#company_input").val() != "")){
        user_name = $("#name_input").val() ;
        company_name = $("#company_input").val();
        $("#the_will").remove();

    }
});
//




function enableFreeDrag(el) {
  let startX, startY;

  el.addEventListener("mousedown", e => {
    startX = e.clientX - el.offsetLeft;
    startY = e.clientY - el.offsetTop;

    const move = e => {
      let x = e.clientX - startX;
      let y = e.clientY - startY;

      // Constrain inside viewport
      x = Math.max(0, Math.min(x, window.innerWidth - el.offsetWidth));
      y = Math.max(0, Math.min(y, window.innerHeight - el.offsetHeight));

      el.style.left = x + "px";
      el.style.top = y + "px";
    };

    const stop = () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", stop);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseup", stop);
  });
}

// Apply to all draggables
document.querySelectorAll(".draggable").forEach(enableFreeDrag);


function setEvilMeter(value) {
    // value: integer from 0 to 100
    const fill = document.getElementById("evil-meter-fill");
    fill.style.height = Math.min(Math.max(value, 0), 100) + "%";
}

// Example usage:
//let evilValue = 0; // can be any integer 0–100
setEvilMeter(evil_score);

var evil_score = 0;

const $box = $("#vacation_background");
const $laptop = $("#vacation_laptop");
const $title_start = $("#start_button");
const $email = $("#email_window");
const $response = $("#choice_window");



var volume = 100;
var growth = 3;

const images = [
    "art_assets/office_background/Window1.png",
    "art_assets/office_background/Window2.png",
    "art_assets/office_background/Window3.png",
    "art_assets/office_background/Window4.png",
    "art_assets/office_background/Window5.png",
    "art_assets/office_background/Window6.png",
    
];

const choices = [ 
    //                                          scenario 1
    ["Grant the wishes of the union, upset your shareholders.","Ignore the union, they will \
        come crawling back soon enough.","arrange for the union president’s dog to “accidentally”\
         get hit by a car. No strike today!"]
    , // 1
    ["choice4","choice5","choice6"]
    ,//2
    ["choice4","choice5","choice6"]
    ,//3
    ["choice4","choice5","choice6"]
    ,//4
    ["choice4","choice5","choice6"]
    ,//5
    ["choice4","choice5","choice6"]
    ,//6
    ["choice4","choice5","choice6"]
    ,//7
    ["choice4","choice5","choice6"]
    ,//8
    ["choice4","choice5","choice6"]
    ,//9
    ["choice4","choice5","choice6"]
    ,//10
    ["choice4","choice5","choice6"]
    ,//11
    ["choice4","choice5","choice6"]
    ,//12
    ["choice4","choice5","choice6"]
    ,//13
    ["choice4","choice5","choice6"]
    ,//14
    ["choice4","choice5","choice6"]
    ,//15
    ["choice4","choice5","choice6"]
    ,//16
    ["choice4","choice5","choice6"]
    ,//17
    ["choice4","choice5","choice6"]
    ,//18
    


];

const choice_value = [ 
    [-3,3,7]
    ,//1
    [1,2,4]
    ,//2
    [0,1,3]
    ,//3
    [0,1,3]
    ,//4
    [0,1,3]
    ,//5
    [0,1,3]
    ,//6
    [0,1,3]
    ,//7
    [0,1,3]
    ,//8
    [0,1,3]
    ,//9
    [0,1,3]
    ,//10
    [0,1,3]
    ,//11
    [0,1,3]
    ,//12
    [0,1,3]
    ,//13
    [0,1,3]
    ,//3
    [0,1,3]
    ,//14
    [0,1,3]
    ,//15
    [0,1,3]
    ,//16


];



const scenario = ["\
    \
    Rumors of a strike among the [COMPANY NAME] factory worker’s union are circulating. Granting the union their wishes may help boost company morale as well as the overall health, wellbeing,\
    and happiness of all you workers, but at a slight, near imperceptible cost to your shareholders dividends! "
    ,// scenario 1 
    "The FDA has issued a formal cease and desist to [COMPANY NAME] in regards to your newest product,  high strength barbiturates designed to taste and resemble gummy snacks a child might eat. \
    They have ordered the complete and total recall on all of these products, which will affect [COMPANY NAME]’s profit margins greatly." 
    , //2
    "The CIA has contracted your company to help destabilize a paramilitary group rebelling against the foreign dictator installed via a joint operation between the US government and the fruit company responsible for providing the majority of [COMPANY NAME]’s produce."
    , //3 
    "You’ve been contracted to build a bridge across a valley that connects Viltown with Townville. We’ve already scouted the cheapest possible area to build a bridge, but we’ll need to cut down a huge part of the state’s national park! What should we do?"
    ,//4
    " A crowd of protesters have pooled outside your company building because  your destroying the ocean! They especially hate that you blocked the entire Thermohaline circulation in order to improve the air conditioning aboard your double decker submarine yacht! We don’t understand why they’re mad. We paid off the right groups to make sure we’re not breaking the law, but they’re still mad at us! What should we do?"
    ,//5
    "You illegally reinforce your company buildings with armed robot militias in order to guard your company from a large ravenous army of criminals. An army composed of big ol’ meanie heads online that make fun of you and your stockholders! The government wants you to get rid of the guards because they take too many oil baths and electric shock massages which hurt the energy grid."
    ,//6
    "Activists have made a documentary revealing that your company’s chocolates have been outsourced to  <span class='chromatic_text'> cheap puppy prison camps!</span> They reported that our facilities have an alarmingly high death rate because the dogs sometimes eat the yummy cocoa beans they pick with their mouths. What should we do?"
    ,//7
    "The American League of Concerned Dog Moms have made their displeasure with your newest product (cheap canned meats made by recycling the bodies of dogs, cats, and other such family pets put down at kill shelters and veterinary hospitals) known by staging a protest outside the factories responsible for processing the animals into delicious and debatably nutritious products for consumer enjoyment. Their actions are greatly affecting the productivity of these factories and by consequence the bottom line of your shareholders."
    ,//8
    "Some of the compounds comprising [COMPANY NAME] brand energy pills have been linked to the development of a new and hyper-malignant type of cancer with a near 100% mortality rate. While your company faces no legal repercussions due to your extensive connections with the FDA, concerns are being raised among consumers as to the safety of your product."
    ,//9
    "Putting the employee break room directly above the ventilation system of your toxic gas and poison factory has caused some unforeseen health complications leading to a litany of lawsuits from your subordinates and threats of investigation from both OSHA and the Department of Public Health. "
    ,//10
    "Your employees are complaining about the hostile architecture you’ve placed around the workspace. You put it in to make the workspace more fun and dynamic, but employees keep saying that they don’t want to deal with   booby traps and bossfights before getting to work. They also hate the anti bathroom break architecture that you installed to stop them from taking breaks. What should you do?"
    ,//11
    "We’ve made a breakthrough update to one of our social media apps in order to increase our app’s revenue by 0.03%. By using spectral vortex technology we’re able to drain 1% of our user’s soul for every hour they spend on our site! This rate of extraction increases by 500% if the content the user watches was produced by our AI A.P.E. typewriters which specialize in attracting the most mentally vulnerable to our trap. Unfortunately a ton of people are demanding that we return their loved one’s souls. They’re apparently very angry as a disproportionate amount of the souls extracted are elderly due to their frail souls. What do we do?"
    ,//12
    "[COMPANY NAME] is hemorrhaging profits due to an unresolved conflict amongst your R&D department’s top engineers. Half of the staff, after analyzing market trends, have noticed a desire among consumers for an envelope  preloaded with forsoman termites that one may mail to an enemy’s place of residence. The other half of the staff, raising ethical concerns and fears that they themselves may be targeted with [COMPANY NAME] Brand Termite Envelopes, have attempted to bar the development of this project. They have instead suggested pivoting the company’s production towards the development of more animal shelters and food banks."
    ,//13
    "A council meeting has been called in the city where [COMPANY NAME]’s most productive industrial sector is located in regards to how the company’s policy of dumping hazardous chemical waste into nearby lakes and streams may be affecting the quality of life of those living within a 200 mile radius of the production plants. Environmentalists are claiming that toxic chemicals are leaching into the local aquifer and the resulting mass poisoning of the city’s population has caused mutations amongst the townsfolk."
    ,//14
    "You decided to invest in the lucrative flavored air market after polluting the atmosphere so much. You decided to import air from the most logical and luscious place to get fresh clean air cleaned by nature already: the Himalayas. Unfortunately they don’t like the fact that we’re flattening part of Mount Everest in order to build our air sucking factory. There’s also propaganda online saying that our factories kill a ton of locals from pollution, but they’re falsely attributing it to Yetis instead of people!"
    ,//15





]


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

let number_scenario = 0;
let evil_choice = 0;

function laptop_clicked(){
    update_office_screen();
    generate_email(choices[number_scenario],choice_value[number_scenario], scenario[number_scenario]);
    //$("#email_text").html(scenario[number_scenario]);
    $("#end_day_button").css("pointer-events", "none");
    $("#end_day_button").css("opacity", "0%");
    $(".draggable button").css("filter", "brightness(1)");
    evil_choice = 0;

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
    $("#email_text").html(scenario[number_scenario]);
    
};


$("#choice_1").on("click", function(){
    $(".draggable button").css("filter", "brightness(1)");
    $(this).css("filter", "brightness(0.5)");
    evil_choice = choice_value[number_scenario][0];
   // setEvilMeter(evil_score);
    $("#end_day_button").css("pointer-events", "auto");
    $("#end_day_button").css("opacity", "100%");
    
});
$("#choice_2").on("click", function(){
    $(".draggable button").css("filter", "brightness(1)");
    $(this).css("filter", "brightness(0.5)");
    
    
    evil_choice = choice_value[number_scenario][1];
   // setEvilMeter(evil_score);
    $("#end_day_button").css("pointer-events", "auto");
    $("#end_day_button").css("opacity", "100%");
    
});
$("#choice_3").on("click", function(){
    $(".draggable button").css("filter", "brightness(1)");
    $(this).css("filter", "brightness(0.5)");
    
    evil_choice = choice_value[number_scenario][2];
    //setEvilMeter(evil_score);
    
    $("#end_day_button").css("pointer-events", "auto");
    $("#end_day_button").css("opacity", "100%");
});

$("#end_day_button").on("click", function(){
    //fade screen
    $(".desktop").css("opacity", 0);
    $(".desktop").css("pointer-events", "none");  
    evil_score += evil_choice;
    setEvilMeter(evil_score);
    number_scenario++;
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
let bg_music = new Audio("audio_assets/EvilCEO.wav");
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

////
function setEvilMeter(value) {
    // value: integer from 0 to 100
    const fill = document.getElementById("evil-meter-fill");
    fill.style.height = Math.min(Math.max(value, 0), 100) + "%";
    $("#evil-meter-label").text(Math.min(Math.max(value, 0), 100) + "%")
}

// Example usage:
//let evilValue = 0; // can be any integer 0–100
setEvilMeter(evil_score);

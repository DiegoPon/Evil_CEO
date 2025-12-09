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

const OG_choices = [ 
    //                                          scenario 1
    ["Grant the wishes of the union, upset your shareholders.","Ignore the union, they will \
        come crawling back soon enough.","arrange for the union president’s dog to “accidentally”\
         get hit by a car. No strike today!"]
    , //                                        scenario 2
    ["Discontinue the product and issue a complete recall on the product.","Ignore this warning.\
         Pay off the FDA to let this one slide.","Plant these products in the homes of those responsible \
         for investigating your company. Sell them to their kids when nobody is looking. No mercy."]
    ,//                                         scenario 3
    ["Allocate resources towards the production of advanced military technology to decimate the rebellion. \
        Glory to the <span class='chromatic_text'>military industrial complex!</span>","Make an infographic on [COMPANY NAME]’s social media \
         pages denouncing the violence on both sides to save face for your company. Now don't you look like a saint!","Fund \
         the paramilitary group and help liberate them from the grips of a fruit company dictatorship."]
    ,//                                         scenario 4
    ["Demolish them!","Build a single pillar to support the whole thing. It's not like people are going to use it anyway.","Relocate \
        the bridge somewhere more accessible that's slightly more expensive. Preferably to a place where people will actually use it."]
    ,//                                         scenario 5
    ["Ignore them. It's not like they can unblock the gates holding back the conveyer belt anyways.","Apologize\
         for blocking all the deep sea currents responsible for maintaining the environment. Then decommission \
         your double decker yacht and cancel your company’s party aboard it.","Destroy them too!"]
        ,//                                         scenario 6
    ["Make a “generous donation” to government officials to switch the civilian energy grid from gas to [COMPANY NAME]'s \
        Soular energy(yes soul-ar, not sol-ar). Maybe then they’ll stop complaining about power outages.","Shut down the data\
         center and sell the building to the government. Hopefully they can convert it to something useful.\
         accidentally swallow it or something.","I declare war"]
    ,//                                         scenario 7
    ["Apologize and hire actual workers from your home country like your political beneficiaries promised.","Detooth \
         and de-taste-bud the dogs so they can’t enjoy chocolate anymore. So now they can’t blame us if they \
            accidentally swallow it or something.","<span style='font-size: 8px;' > Invest a buttload of money into interdimensional time travel,\
          flat earth theory, teleportation, quantum tunneling, fairies, and <span class='chromatic_text'>genetically modifying vibrating quantum \
          frequency theory</span> so that you can outsource the labor to the third dimension instead. You're opening up\
           Pandora's box, as the spacetime continuum is destabilized every time you travel to the third dimension. \
           But it may be cheaper than paying real workers.</span>"]
    ,//                                          scenario 8
    ["Covertly “handle” the protesters and recycle them into the product.","Run a media campaign rebranding the\
         consumption of pets as “green” and “eco friendly!”","Halt production of this product and make public\
          amends with the American League of Concerned Dog Moms"]
    ,//                                         scenario 9
    ["Remove the compound from the nutritional facts section of the label but not the product itself, then invest\
         heavily in <span class='chromatic_text'>“Living with Cancer”</span> self help books. Play both sides and bring economic glory to [COMPANY NAME]","\
         Do not acknowledge the situation. If you don’t say anything then maybe nobody will notice.","Recall the product\
          and donate the money into pharmaceutical research to undo the harm you have caused. You might lose a lot of money, \
          but the PR shift will be historic."]
    ,//                                         scenario 10
    ["Deliberately damage the ventilation system and flood the break room with toxic gas. Dead men file no lawsuits.","Offer\
         a <span class='chromatic_text'>complimentary pizza party</span> and take the expenses from the branch’s annual bonus fund. Maybe they will appreciate\
          the gesture and drop the lawsuits, water under the bridge and all that?","Relocate the company break room and offer \
          a health benefits plan to those working for [COMPANY NAME]. The shareholders will not be pleased…"]
    ,//                                         scenario 11
    ["Sell them passes so they can skip the level  space and make it to the end in time. Then add an automatic hard mode to your\
         workfloor to force people to buy your skips","Attempt to normalize it by forcing <span class='chromatic_text'>video game architecture</span>\
          into any building you can think of. Let's start by getting Congress to sign off on a build that turns\
           the Abe Lincoln statue into a mecha boss that you need to fight every time you step foot into Washington.","Give up \
           on the idea of <span class='chromatic_text'>video game architecture</span>."]
    ,//                                         scenario 12
    ["Make a statement saying that you’ve already sold the souls to Satan for profit, so we can’t give them back even if\
         you wanted to.","Find the critics' locations and convert them into computer chimps so they could actually do \
         something for a living instead of saying mean things to us like a loser!","Return all the souls still intact\
          and pay Satan to convert the energy back into souls. Although you will need to sign off a shareholder’s soul to Satan’s garden in order to pay for it."]
    ,//                                          scenario 13
    ["Develop the <span class='chromatic_text'>Termite Envelopes</span>, then, both to demonstrate the product to the broader consumer base \
        as part of a new advertisement campaign and to make\ an example out of the uncooperative staff, mail them the \
        envelopes and destroy their homes.","Split development amongst both sects of the department. Fencesitter!","Shift\
         development away from evil and towards animal shelters and food banks. It may not be popular among the current consumer market, but it's good for your soul."]
    ,//                                           scenario 14
    ["Start a carnival and parade the mutants you have created on an international tour to raise funds for the company. \
        Let the people gawk!","Create an advertising campaign touting the benefits of neon green skin and third arms.\
         Maybe the victims of your pollution will gain some self confidence? Hell, you could even bottle the toxic chemical \
         water and sell it to the masses so they can have a taste of mutant life.","Find a responsible way to dispose of the\
          chemical waste and invest company resources in a relief effort for the city."]
    ,//                                           scenario 15
    ["Clear up the misinformation and explain that you didn’t actually kill Bigfoot's cousin and that he actually sold you\
         the rights to mount Everest which makes everything totally legal.","Lace the air you produce with hallucinogenic\
          drugs so people wouldn’t notice all the yeti and human corpses nearby.","Tear down the factory and let the United\
           Nations turn the remnants into a Yeti sanctuary that will bring high paying jobs to human locals."]
    ,//                                           scenario 16
    ["Invest in high strength hydrochloric acid barrels for the office so that the tourists may be discretely dissolved\
         into a gelatinous goo without attracting local pests. And leave the yacht rock on, clearly it’s motivating staff \
         to get their work done faster so they can leave the office!","Negotiate with the branch manager about maybe having\
          a rotating playlist chart for the office so that all employees may feel represented in their workplace.","Fire the\
          manager and implore law enforcement to investigate his conduct."]
    ,//                                           scenario 17
    ["<div style='font-size:12px;'>This man is a disgusting, conniving, cruel, empathetic maniac. Fire Dave Davis. Like, actually fire him.\
         Pay <span class='chromatic_text'>Satan</span> to fire him in his <span class='chromatic_text'>pit of fire bbq restaurant</span> and order it to go on doordash. You can’t let\
          such a conning scumbag get close to you or your loved ones. Because if you keep your eye off of him\
          for one SECOND then he’s going to take everything that you built.","You’ve had it up to here with Dave\
           Davis’ antics and he needs to go. Use your interdimensional quantum technology in order to banish him\
            to the first dimension for being such a flat and shallow narcissist. Maybe there he can finally find\
             dipshits that tolerate him.","Let him off easy today. Go to his home and office again and flood all\
              the toilets with pipe busting Mexican food. Maybe now he can finally take the hint that we all hate ‘em, right guys?</div>"]
    ,//                                           scenario 18
    ["Send them to the moon first. They’ll be so enamored by the view that they’ll give up the lawsuit and join us","Tell\
         the U.S. government that there's oil on the moon in order to get enough funding to sue and hire a hitman\
          against the whistleblower.","Abandon our short sighted goals of colonizing the moon and make a more long\
           term and realistic plan to colonize it instead. We’ll also prioritize moving scientists and other bright\
            minds to study the moon first instead of shareholders seeking the ultimate tax loophole."]
];

const choice_value = [ 
    [-1,1,3]
    ,//1
    [0,1,3]
    ,//2
    [3,0,-1]
    ,//3
    [3,1,-1]
    ,//4
    [1,0,3]
    ,//5
    [1,0,3]
    ,//6
    [-1,3,1]
    ,//7
    [3,1,0]
    ,//8
    [3,1,-1]
    ,//9
    [3,1,-1]
    ,//10
    [1,3,0]
    ,//11
    [1,3,-1]
    ,//12
    [3,1,-1]
    ,//13
    [1,3,-1]
    ,//14
    [1,3,-1]
    ,//15
    [3,1,-1]
    ,//16
    [3,1,0]
    ,//17
    [1,3,-2]
    ,//18

    //maximum 59 points
];
const maximum_evil = 50;


const  OG_scenario = ["\
    \
    <span class='email-headline'>Subject: Workers are planning a strike</span> Rumors of a strike among the [COMPANY NAME] factory worker’s union are circulating. Granting the union their wishes may help boost company morale as well as the overall health, wellbeing,\
    and happiness of all you workers, but at a slight, near imperceptible cost to your shareholders dividends!"
    ,// scenario 1 
    "<span class='email-headline'>Subject: FDA cease and desist</span>The FDA has issued a formal cease and desist to [COMPANY NAME] in regards to your newest product,  high strength barbiturates designed to taste and resemble gummy snacks a child might eat. \
    They have ordered the complete and total recall on all of these products, which will affect [COMPANY NAME]’s profit margins greatly." 
    , //2
    "<span class='email-headline'>Subject: Fruit dictatorship</span>The CIA has contracted your company to help destabilize a paramilitary group rebelling against the foreign dictator installed via a joint operation between the US government and the fruit company responsible for providing the majority of [COMPANY NAME]’s produce."
    , //3 
    "<span class='email-headline'>Subject: Bridge matters</span>You’ve been contracted to build a bridge across a valley that connects Viltown with Townville. We’ve already scouted the cheapest possible area to build a bridge, but we’ll need to cut down a huge part of the state’s national park! What should we do?"
    ,//4
    "<span class='email-headline'>Subject: Why are these people mad?!?</span>  A crowd of protesters have pooled outside your company building because  you're destroying the ocean! They hate that you blocked the entire global conveyer belt in order to improve the air conditioning aboard your double decker submarine yacht! This is pretty bad for everyone since the conveyer belt is responsible for warming up all of Europe and for bringing rain to Australia and India. We don’t understand why they’re mad though. We paid off the right groups to make sure we’re not breaking the law, but they’re still angry! What should we do?"
    ,//5
    "<span class='email-headline'>Subject: About the Whole ‘Robot Army’ Thing…</span>You illegally reinforce your company buildings with armed robot militias in order to guard your company from a large ravenous army of criminals. An army composed of big ol’ meanie heads online that make fun of you and your stockholders! The government wants you to get rid of the guards because they take too many oil baths and electric shock massages which hurt the energy grid."
    ,//6
    "<span class='email-headline'>Subject: The chocolate puppy scandal</span>Activists have made a documentary revealing that your company’s chocolates have been outsourced to  <span class='chromatic_text'> cheap puppy prison camps!</span> They reported that our facilities have an alarmingly high death rate because the dogs sometimes eat the yummy cocoa beans they pick with their mouths. What should we do?"
    ,//7
    "<span class='email-headline'>Subject: Managing the Concerned Dog Moms Situation</span>The American League of Concerned Dog Moms have made their displeasure with your newest product (cheap canned meats made by recycling the bodies of dogs, cats, and other such family pets put down at kill shelters and veterinary hospitals) known by staging a protest outside the factories responsible for processing the animals into delicious and debatably nutritious products for consumer enjoyment. Their actions are greatly affecting the productivity of these factories and by consequence the bottom line of your shareholders."
    ,//8
    "<span class='email-headline'>Subject: The consumers are getting suspicious</span>Some of the compounds comprising [COMPANY NAME] brand energy pills have been linked to the development of a new and hyper-malignant type of cancer with a near 100% mortality rate. While your company faces no legal repercussions due to your extensive connections with the FDA, concerns are being raised among consumers as to the safety of your product."
    ,//9
    "<span class='email-headline'>Subject: Oopsies</span>Putting the employee break room directly above the ventilation system of your toxic gas and poison factory has caused some unforeseen health complications leading to a litany of lawsuits from your subordinates and threats of investigation from both OSHA and the Department of Public Health. "
    ,//10
    "<span class='email-headline'>Subject:  Skill issue</span>Your employees are complaining about the hostile architecture you’ve placed around the workspace. You put it in to make the workspace more fun and dynamic, but employees keep saying that they don’t want to deal with   booby traps and bossfights before getting to work. They also hate the anti bathroom break architecture that you installed to stop them from taking breaks. What should you do?"
    ,//11
    "<span class='email-headline'>Subject: Souls are being compromised</span>We’ve made a breakthrough update to one of our social media apps in order to increase our app’s revenue by 0.03%. By using spectral vortex technology we’re able to drain 1% of our user’s soul for every hour they spend on our site! This rate of extraction increases by 500% if the content the user watches was produced by our <span class='chromatic_text'>lobotomized computer chimps</span>(yes chimps not chips) produced by congress. Unfortunately a ton of people are demanding that we return their loved one’s souls. They’re apparently very angry as a disproportionate amount of the souls extracted are elderly due to their frail souls. What do we do?"
    ,//12
    "<span class='email-headline'>Subject: TermiteGate.</span>[COMPANY NAME] is hemorrhaging profits due to an unresolved conflict amongst your R&D department’s top engineers. Half of the staff, after analyzing market trends, have noticed a desire among consumers for an envelope  preloaded with forsoman termites that one may mail to an enemy’s place of residence. The other half of the staff, raising ethical concerns and fears that they themselves may be targeted with <span class='chromatic_text'>[COMPANY NAME] Brand Termite Envelopes</span>, have attempted to bar the development of this project. They have instead suggested pivoting the company’s production towards the development of more animal shelters and food banks."
    ,//13
    "<span class='email-headline'>Subject: Mutants are real!!</span>A council meeting has been called in the city where [COMPANY NAME]’s most productive industrial sector is located in regards to how the company’s policy of dumping hazardous chemical waste into nearby lakes and streams may be affecting the quality of life of those living within a 200 mile radius of the production plants. Environmentalists are claiming that toxic chemicals are leaching into the local aquifer and the resulting mass poisoning of the city’s population has caused mutations amongst the townsfolk."
    ,//14
    "<span class='email-headline'>Subject: The Air Business</span>You decided to invest in the lucrative flavored air market after polluting the atmosphere so much. You decided to import air from the most logical and luscious place to get fresh clean air cleaned by nature already: the Himalayas. Unfortunately they don’t like the fact that we’re flattening part of Mount Everest in order to build our air sucking factory. There’s also propaganda online saying that our factories kill a ton of locals from pollution, but they’re falsely attributing it to Yetis instead of people!"
    ,//15
    "<span class='email-headline'>Subject: Honolulu’s branch manager situation</span>Low level lackeys at [COMPANY NAME]’s Honolulu office are making serious allegations against the branch manager in regards to the conduct of his personal life. They claim he lures tourists into his office for fun, and those tourists are often later seen in the company dumpsters with holes drilled into their heads, among other abnormalities. The dumpsters are starting to attract wildlife who are both rummaging through the garbage, attracted by the scent of decomposing tourists, and are menacing at employees. Staff has also been alleging that he subjects the office to his yacht rock playlist over the loud speaker, disrupting their workflow. This manager, however, has overseen the single greatest per capita profit increase in company history."
    , //16
    "<span class='email-headline'>Fwd: Stock Update</span>Hello, [CHAR NAME], [COMPANY NAME] stock has just increased by 5.80 today, netting a total profit of $5,000,000 for you and your stockholders. A slight improvement from the $4,555,555 dollars you made yesterday boss. At this rate we can hold market dominance for another 50 years. <br>Sincerely <br> Dave Davis, finance director at [COMPANY NAME]"
    , //17
    "<span class='email-headline'>Subject: Urgent: Leak About the Lunar Headquarters Plan</span>A whistleblower revealed that your company is planning to move its headquarters to the moon. No really, we’re moving the entire North American plate to the moon. That way we don’t have to worry about terraforming or building habitable structures to live in. So we gotta find a way to shut them up.",
    //18

    


    
]

var user_name = "";
let company_name = "";
let scenario = [];
var choices = [[]];
//myucode
$("#submit_name").on("click",function(){
    if(($("#name_input").val() != "") && ($("#company_input").val() != "")){
        user_name = $("#name_input").val() ;
        company_name = $("#company_input").val();
        $("#the_will").remove();
        scenario = replaceCompanyName(OG_scenario, company_name);
        scenario = replaceUserName(scenario, user_name);
        choices = replaceCompanyNameNested(OG_choices, company_name);
        choices = replaceUserNameNested(choices , user_name)
    }
});
//

function replaceCompanyName(arr, companyName) {
    return arr.map(str =>
        str.replace(/\[COMPANY NAME\]/g, companyName)
    );
}
function replaceUserName(arr, companyName) {
    return arr.map(str =>
        str.replace(/\[CHAR NAME\]/g, companyName)
    );
}

function replaceCompanyNameNested(arr, companyName) {
    return arr.map(innerArray =>
        innerArray.map(str =>
            str.replace(/\[COMPANY NAME\]/g, companyName),
        )
    );
}
function replaceUserNameNested(arr, companyName) {
    return arr.map(innerArray =>
        innerArray.map(str =>
            str.replace(/\[CHAR NAME\]/g, companyName)
        )
    );
}

function company_review(){

}


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

$("#replybutton").on("mouseenter", function() {
    $(this).css("filter", "brightness(0.5)");
});

$("#replybutton").on("mouseleave", function() {
    $(this).css("filter", "brightness(1)");
});
$("#replybutton").on("click", function() {
    
    setTimeout(function () {
        $response.css("z-index", 11);
        $email.css("z-index", 10);
        $response.css("opacity", 100);
        $response.css("pointer-events", "auto");
    
    }, 100);

});




var number_scenario = 0;
var evil_choice = 0;

function laptop_clicked(){
    update_office_screen();
    generate_email(choices[number_scenario],choice_value[number_scenario], scenario[number_scenario]);
    //$("#email_text").html(scenario[number_scenario]);
    $("#end_day_image").css("pointer-events", "none");
    $("#end_day_image").css("opacity", "0%");
    $(".draggable button").css("filter", "brightness(1)");
    evil_choice = 0;
    
}



// desktop shenanigans 

function generate_email(choices_array, choices_value_array, scenario_text){
    $(".desktop").css("opacity", 1);
    $(".desktop").css("pointer-events", "auto");  
    $email.css("opacity", 100);
    $email.css("pointer-events", "auto");
    $("#evil-meter-container").css("z-index",11)  
    //arrays are used to generate or replace text in designated div's
    let new_choices = "<span class='choices'> First choice: </span>" + choices_array[0];
    new_choices += "<br><span class='choices'>Second choice: </span>" + choices_array[1];
    new_choices += "<br><span class='choices'>Third choice: </span>" + choices_array[2];
    $("#choice_window_text").html(new_choices)
    $("#email_text").html(scenario[number_scenario]);
    
};



$("#choice_1").on("click", function(){
    $(".draggable button").css("filter", "brightness(1)");
    $(this).css("filter", "brightness(0.5)");
    evil_choice = choice_value[number_scenario][0];
    // setEvilMeter(evil_score);
    $("#end_day_image").css("pointer-events", "auto");
    $("#end_day_image").css("opacity", "100%");
    
});
$("#choice_2").on("click", function(){
    $(".draggable button").css("filter", "brightness(1)");
    $(this).css("filter", "brightness(0.5)");
    
    
    evil_choice = choice_value[number_scenario][1];
    // setEvilMeter(evil_score);
    $("#end_day_image").css("pointer-events", "auto");
    $("#end_day_image").css("opacity", "100%");
    
});
$("#choice_3").on("click", function(){
    $(".draggable button").css("filter", "brightness(1)");
    $(this).css("filter", "brightness(0.5)");
    
    evil_choice = choice_value[number_scenario][2];
    //setEvilMeter(evil_score);
    
    $("#end_day_image").css("pointer-events", "auto");
    $("#end_day_image").css("opacity", "100%");
});

let oneThirdTriggered = false;
let twoThirdTriggered = false;
const oneThird = OG_scenario.length / 3;
const twoThird = (2 * OG_scenario.length) / 3;

$("#end_day_image").on("click", function(){
    //fade screen
    evil_score += evil_choice;
    setEvilMeter(evil_score);
    evil_choice = 0;
    $email.css("opacity", 0);
    $email.css("pointer-events", "none");
    
    $response.css("opacity", 0);
    $response.css("pointer-events", "none");

    if( !oneThirdTriggered && number_scenario >= oneThird){
        oneThirdTriggered = true;
        if((maximum_evil-2)/3 <= evil_score){
            $("#happy").css("opacity", 100);
            happy_cheer.play();
            
        }
        else{
            $("#angry").css("opacity", 100);
            angry_gr.play();

        }
        return;
    }
    if( !twoThirdTriggered && number_scenario >= twoThird){
        twoThirdTriggered = true;

        if((2*(maximum_evil-2))/3 <= evil_score){
            $("#happy").css("opacity", 100);
            happy_cheer.play();
            
        }
        else{
            $("#angry").css("opacity", 100);
            angry_gr.play();
    
        }
        return;
    }
    number_scenario++;

    if(number_scenario >= OG_scenario.length){//ending time
        if(evil_score < (maximum_evil)/4 ){
            $(".super_secret_ending_dont_peek_i_can_see_you_in_the_html_stop_reading_this").css("z-index", 999999);
            $("#good").css("opacity","100%");
        }
        else if(evil_score < ((maximum_evil)/2) + (maximum_evil)/3){
            $(".super_secret_ending_dont_peek_i_can_see_you_in_the_html_stop_reading_this").css("z-index", 999999);
            $("#neutral").css("opacity","100%");
        }
        else{
            $(".super_secret_ending_dont_peek_i_can_see_you_in_the_html_stop_reading_this").css("z-index", 999999);
            $("#merp").css("opacity","100%");
        }
        
        $(".desktop").css("opacity", 0);
        $(".desktop").css("pointer-events", "none");  
    }


    $("#angry").css("opacity", 0);
    $("#happy").css("opacity", 0);
    $(".desktop").css("opacity", 0);
    $(".desktop").css("pointer-events", "none");  
    
});

//$laptop.on("dblclick", function(){laptop_clicked();});

$("#end_day_image").on("mouseenter", function() {
    $(this).css("filter", "brightness(0.5)");
});

$("#end_day_image").on("mouseleave", function() {
    $(this).css("filter", "brightness(1)");
});


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
$response.on("doubleclick", function(){
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
/*
$("#background_ac_slider").on("input", function () {
    setVolume("ac_noise", $(this).val());
});
*/
//preload audio
let bg_music = new Audio("./audio_assets/EvilCEO.wav");
bg_music.loop = true;
bg_music.preload = "auto";
bg_music.load;

var happy_cheer = new Audio("./audio_assets/fnafyay.mp3");
var angry_gr = new Audio("./audio_assets/angry-roblox.mp3");

/*
let ac_noise = new Audio("need to download a ac noise to play");
ac_noise.loop = true;
ac_noise.preload = "auto";
ac_noise.load;
*/





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
    fill.style.height = Math.min(Math.max(value, 0), maximum_evil) + "%";
    //$("#evil-meter-label").text(Math.min(Math.max(value, 0), 100) + "%")
}

// Example usage:
//let evilValue = 0; // can be any integer 0–100
setEvilMeter(evil_score);

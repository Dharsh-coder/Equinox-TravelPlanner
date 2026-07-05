const createButton = document.getElementById("createJourney");
let selectedMood = "";

let selectedGroup = "";
let selectedStay = "";
let selectedTransport = "";
let selectedInterests = [];
const interestCards = document.querySelectorAll(".interest-btn");
interestCards.forEach((card) => {

    card.addEventListener("click", () => {

        card.classList.toggle("selected");

        const interest = card.dataset.interest;

        if(card.classList.contains("selected")){

            selectedInterests.push(interest);

        }else{

            selectedInterests =
            selectedInterests.filter(item => item !== interest);

        }

        console.log(selectedInterests);

    });

});
const transportCards = document.querySelectorAll(".travel-card");
transportCards.forEach((card)=> {

    card.addEventListener("click", () => {

        transportCards.forEach((c) => c.classList.remove("selected"));

        card.classList.add("selected");

        selectedTransport = card.dataset.transport;

        console.log(selectedTransport);

    });

});

const StayCards = document.querySelectorAll(".stay-card");
StayCards.forEach((card) => {

    card.addEventListener("click", () => {

        StayCards.forEach((c) => c.classList.remove("selected"));

        card.classList.add("selected");

        selectedStay = card.dataset.stay;

        console.log(selectedStay);

    });

});


const groupCards = document.querySelectorAll(".group-card");

groupCards.forEach((card) => {

    card.addEventListener("click", () => {

        groupCards.forEach((c) => c.classList.remove("selected"));

        card.classList.add("selected");

        selectedGroup = card.dataset.group;

        console.log(selectedGroup);

    });

});

const moods =
document.querySelectorAll(".mood-option");

moods.forEach(function(mood){

    mood.addEventListener("click",function(){

        moods.forEach(function(item){

            item.classList.remove("selected");

        });

        this.classList.add("selected");

        selectedMood = this.dataset.mood;

console.log(selectedMood);

    });

});

createButton.addEventListener("click", async function () {

    const destination = document.getElementById("destination").value;
    const currentLocation = document.getElementById("current-location").value;
    const travelDate = document.getElementById("travel-date").value;
    const days = document.getElementById("days").value;
    const budget = document.getElementById("budget").value;
    const travellers = document.getElementById("travellers").value;
    const preferences = document.getElementById("preferences").value;
    

    const prompt = `
You are an expert travel planner.

Return ONLY valid JSON.

Do NOT write explanations.
Do NOT write markdown.
Do NOT write \`\`\`json.

Keep every answer short and practical.

{
  "heroTitle":"",
  "heroSubtitle":"",

  "hotel":"",
  "hotelPrice":"",
  "hotelDistance":"",

  "transport":"",
  "transportReason":"",
  "transportDuration":"",

  "temperature":"",
  "weather":"",
  "rainChance":"",
  "weatherAdvice":"",

  "packing":[
    "",
    "",
    "",
    "",
    ""
  ],

  "itinerary": [
  {
    "day": 1,
    "title": "",
    "activities": [
      {
        "time": "",
        "title": "",
        "description": ""
      }
    ]
  }
]
}
Current Location: ${currentLocation}

Destination: ${destination}

Travel Date: ${travelDate}

Days: ${days}

Budget: ₹${budget}

Travellers: ${travellers}

Travel Group: ${selectedGroup}

Accommodation: ${selectedStay}

Transport Preference: ${selectedTransport}

Travel Mood: ${selectedMood}

Travel Interests: ${selectedInterests.join(", ")}

Additional Preferences: ${preferences}
`;


    localStorage.setItem("destination", destination);
    localStorage.setItem("currentLocation", currentLocation);
    localStorage.setItem("travelDate", travelDate);
    localStorage.setItem("days", days);
    localStorage.setItem("budget", budget);
    localStorage.setItem("travellers", travellers);
    localStorage.setItem("travelMood", selectedMood);
    localStorage.setItem("preferences", preferences);
    localStorage.setItem("travelGroup", selectedGroup);
    localStorage.setItem("stayPreference", selectedStay);
    localStorage.setItem("transportPreference", selectedTransport);
    localStorage.setItem("travelInterests",JSON.stringify(selectedInterests));

    localStorage.setItem("prompt", prompt);

    console.log(destination);



    window.location.href = "loading.html";

});



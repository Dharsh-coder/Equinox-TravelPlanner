const trip =
JSON.parse(localStorage.getItem("tripData"));

console.log(trip);
const destination = localStorage.getItem("destination");
const currentLocation = localStorage.getItem("currentLocation");
const travelDate = localStorage.getItem("travelDate");
const days = localStorage.getItem("days");
const budget = localStorage.getItem("budget");
const travellers = localStorage.getItem("travellers");



document.getElementById("heroDestination").textContent =
trip.heroTitle;

document.getElementById("heroSubtitle").textContent =
trip.heroSubtitle;

document.getElementById("heroDays").textContent =
`📅 ${days} Days`;

document.getElementById("heroTravellers").textContent =
`👥 ${travellers} Traveller${travellers > 1 ? "s" : ""}`;

document.getElementById("heroBudget").textContent =
`💰 ₹${budget}`;

document.getElementById("hotelName").textContent =
trip.hotel;

document.getElementById("hotelDistance").textContent =
"📍 " + trip.hotelDistance;

document.getElementById("hotelPrice").textContent =
"💰 " + trip.hotelPrice;



document.getElementById("transportType").textContent =
trip.transport;



document.getElementById("transportReason").textContent =
trip.transportReason;

document.getElementById("transportTime").textContent =
trip.transportDuration;

document.getElementById("weatherTemp").textContent =
trip.temperature;

document.getElementById("weatherCondition").textContent =
trip.weather;

document.getElementById("rainChance").textContent =
"💧 " + trip.rainChance;

document.getElementById("weatherAdvice").textContent =
"🧥 " + trip.weatherAdvice;

const packingContainer =
document.getElementById("packingList");

packingContainer.innerHTML = "";

trip.packing.forEach(function(item){

    packingContainer.innerHTML +=
    `<p>✓ ${item}</p>`;

});




function displayItinerary(trip) {

    const container = document.getElementById("itineraryContainer");

    container.innerHTML = "";

    trip.itinerary.forEach(function(day) {
        const dayCard = document.createElement("div");

dayCard.className = "day-card";
dayCard.innerHTML = `
    <div class="day-header">

        <span class="day-number">
            DAY ${day.day}
        </span>

        <h3>
            ${day.title}
        </h3>

    </div>

    <div class="day-content" id="dayContent${day.day}">

</div>
`;
container.appendChild(dayCard);
const dayContent =
document.getElementById(`dayContent${day.day}`);



day.activities.forEach(function(activity){
    const activityCard =
document.createElement("div");

activityCard.className = "activity";
activityCard.innerHTML = `

<div class="activity-time">

${activity.time}

</div>

<div class="activity-content">

<h4>

${activity.title}

</h4>

<p>

${activity.description}

</p>

</div>

`;
dayContent.appendChild(activityCard);

});

});

}




displayItinerary(trip);



document
.getElementById("planAgainBtn")
.addEventListener("click", function(){

    window.location.href = "planner.html";

});

document
.getElementById("downloadBtn")
.addEventListener("click", function(){

    window.print();

});
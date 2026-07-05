const steps = [

    "✈ Finding the best transportation...",

    "🏨 Searching for perfect hotels...",

    "🌤 Checking live weather conditions...",

    "🎒 Preparing your packing checklist...",

    "🗺 Generating your personalized itinerary..."

];

const stepsContainer = document.getElementById("steps");
const prompt = localStorage.getItem("prompt");

let index = 0;

const interval = setInterval(async function () {

    if (index >= steps.length) {

    clearInterval(interval);

    try {

        const aiResponse = await askGemini(prompt);

        const trip = JSON.parse(aiResponse);

        localStorage.setItem(
            "tripData",
            JSON.stringify(trip)
        );

        window.location.href = "itinerary.html";

    }

    catch(error){

        console.error(error);

        alert("Unable to generate itinerary. Please try again.");

        window.location.href = "planner.html";

    }

    return;

}

    const p=document.createElement("p");

    p.textContent=steps[index];

    stepsContainer.appendChild(p);

    index++;

},700);
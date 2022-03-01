// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function(){

    let takeoffButton = document.getElementById("takeoff");
    let landingButton = document.getElementById("landing");
    let abortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");
    let rocket = document.getElementById("rocket");

    takeoffButton.addEventListener('click', function(){
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation === true){
            document.getElementById("flightStatus").innerText = "Shuttle in flight.";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerText = "10,000";
        }
    })

    landingButton.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerText = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "";
        document.getElementById("spaceShuttleHeight").innerText = "0";
    })

    abortButton.addEventListener('click', function(){
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation){
            document.getElementById("flightStatus").innerText = "Mission aborted.";
            document.getElementById("shuttleBackground").style.backgroundColor = "";
            document.getElementById("spaceShuttleHeight").innerText = "0";
        }
    })

    upButton.addEventListener('click', function(){
        rocket.height += parseInt("10px")
    })

})
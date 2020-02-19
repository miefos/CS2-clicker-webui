
// Change "test" to any username you'd like to start a new game
var username = "test";

var socket = io.connect("https://tictactoe.info/", {transports: ['websocket']});
setupSocket();


function setupSocket() {

    // This function is called whenever a new game state is received from the server
    socket.on('gameState', function (jsonGameState) {
        console.log(jsonGameState);
        const gameState = JSON.parse(jsonGameState);

        // TODO: Display the game state on your GUI
        // You must display: current gold, and the name, number owned, and cost for each type of equipment
        document.getElementById("currentGold").innerHTML = "<h3>Current Gold: </h3>" + gameState["gold"];
        document.getElementById("shovel").innerHTML = "<h4>Shovel: </h4>" +
            "<b>--- Cost: </b>" + gameState["equipment"]["shovel"]["cost"] + "<br />" +
            "<b>--- Owned: </b>" + gameState["equipment"]["shovel"]["numberOwned"];
        document.getElementById("excavator").innerHTML = "<h4>Excavator: </h4>" +
            "<b>--- Cost: </b>" + gameState["equipment"]["excavator"]["cost"] + "<br />" +
            "<b>--- Owned: </b>" + gameState["equipment"]["excavator"]["numberOwned"];
        document.getElementById("mine").innerHTML = "<h4>Mine: </h4>" +
            "<b>--- Cost: </b>" + gameState["equipment"]["mine"]["cost"] + "<br />" +
            "<b>--- Owned: </b>" + gameState["equipment"]["mine"]["numberOwned"];
    });
}


function initializeGame() {
    socket.emit("register", username);

    // TODO: Add any initialization code you'd like to setup your GUI
    // This function is called once when the page loads

}


// Call this function whenever the user clicks your gold button
function clickGold() {
    socket.emit("clickGold");
}


// Call this function whenever the user clicks to purchase equipment
// The parameter is the id of the equipment type to purchase
function buyEquipment(equipmentID) {
    socket.emit("buy", equipmentID);
}

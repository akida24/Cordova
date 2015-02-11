
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler <- indica quando Cordova è completamente caricato.
    
    // addEventListener <-- permette di impostare delle funzioni che verranno chiamate al verificarsi dell'evento specificato, sull'oggetto specificato(target dell'evento).
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready'); 
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening'); //prende il primo elemento del DOM con la classe "listening"
        var receivedElement = parentElement.querySelector('.received'); //prende il primo elemento del DOM con la classe "received"

        listeningElement.setAttribute('style', 'display:none;'); 
        receivedElement.setAttribute('style', 'display:block;');
        //quando l'evento deviceIsReady è avvenuto, non fa altro che andare a disattivare il paragrafo <p class="event listening">Connecting to Device</p> e dattivare <p class="event received">Device is Ready</p>, quindi al posto della scritta "connecting di device, appare Device is Ready

        console.log('Received Event: ' + id);
    }
};

app.initialize();



    

/*
// Touch start functionality for the buttons
function touchstarthandler(event)
{
    var button= event.target;
    button.className ="pressed";
}

// Touch end functionality for the buttond
function touchendhandler(event)
{
    var button= event.target;
    button.className ="";
}*/

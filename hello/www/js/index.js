/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;
let db;
if(indexedDB != undefined) {
    let DBRequest = indexedDB.open('quotesDB', 1);
    DBRequest.onupgradeneeded = function(e) {
        let result = DBRequest.result;
        if( !result.objectStoreNames.contains('quotes') ) {
            result.createObjectStore('quotes', {keyPath: 'id', authIncrement: true});
        }
    }

    DBRequest.onerror = function(e) {
        console.log('Error DB');
    }

    db = DBRequest;
}

module.exports = db;

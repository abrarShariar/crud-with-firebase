const quoteDB = firebase.database().ref().child('user_quotes');
const nameInput = document.getElementById('editName');
const quoteInput = document.getElementById('newQuote');
var key = "";

window.onload = function(){
    if(window.location.search.indexOf("name=") > -1){
          var nameParam = window.location.search.substring(1);
          setEditForm(nameParam);
    }else{
        console.log("Name Not Found");
    }
};

function setEditForm(param){
    //clean param
    var index = param.indexOf('=');
    key = param.substring(index+1);
    //clean uri
    key = key.replace(/[^a-z0-9]/gi,"");
    //set name in form
    nameInput.value = key;
    //get child of key
    firebase.database().ref('/user_quotes/' + key).once('value').then(function(snap){
        //console.log(snap.val().quote);
        quoteInput.value = snap.val().quote;
    });
}

//event handler to onsubmit event of update form
function updateFormSubmit(){
      var editName = document.forms['updateForm']['editName'].value;
      editName = editName.replace(/[^a-z0-9]/gi,"");
      var editQuote = document.forms['updateForm']['newQuote'].value;
      editQuote = editQuote.replace(/[^a-z0-9]/gi," ");

      //remove previous data
      quoteDB.child(key).remove();
      //update to firebase
      var updates = {};
      updates['/user_quotes/' + editName + '/quote/'] = editQuote;
      firebase.database().ref().update(updates);
      location.assign("/#read");
}

const quoteDB = firebase.database().ref().child('user_quotes');
const nameInput = document.getElementById('editName');
const quoteInput = document.getElementById('editInput');

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
    var key = param.substring(index+1);
    //clean uri
    key = key.replace(/[^a-z0-9]/gi,"");
    //set name in form
    nameInput.value = key;
    //get child of key
    var quote = userQuoteDB.child(key);
    console.log(quote);
}





/*
//update existing data in firebase
var key = "abrar";
var newQuote = "I love RockStar";
//prepare data
var data = {
    name : key,
    quote : newQuote,
  };

var updates = {};
updates['/user_quotes/' + data.name + '/quote/'] = data.quote;
database.update(updates);

//log changes (debug it)
 userQuoteDB.child('abrar').on('value',snap => {
         console.log(snap.val().quote);
});
*/

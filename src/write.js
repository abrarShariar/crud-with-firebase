//database reference
const database = firebase.database().ref();
const userQuoteDB = database.child('user_quotes');

//form onsubmit's event handler
var quote = "";
var username = "";
function formSubmit(){
  //GET input fields and clean
      var quoteInput = document.forms['quoteForm']['quote'].value
      quoteInput = quoteInput.replace(/[^a-z0-9]/gi," ");
      var nameInput = document.forms['quoteForm']['username'].value;
      nameInput = nameInput.replace(/[^a-z0-9]/gi," ");

      var data = {
          name : nameInput,
          quote : quoteInput
      };

      var updates = {};
      updates['/user_quotes/' + data.name + "/quote/"] = data.quote;
      database.update(updates);
}

//UPDATE / DELETE
const quotePanel = document.getElementById('quote_panel');

function getPanelDOM(name,quote){
  var panelDOM = "<div class='panel panel-primary'><div class='panel-heading'>" + name + "</div>" +
                            "<div class='panel-body'> Quote: " + quote +
                            "<br><button id='" + name +"' type='button' class='btn btn-info' onclick='updateData(this.id)'>Update</button>" +
                            "<button id='"+ name +"' type='button' class='btn btn-danger' onclick='deleteData(this.id)'>Delete</button>" +
                             "</div></div>";
  return panelDOM;
}

//update method (based on key passed)
function updateData(key){
      
}
//delete method (based on key passed)
function deleteData(key){


}

userQuoteDB.on('value',snap => {
      var data = snap.val();
      for(var item in data){
          var info = snap.child(item).val();
          var node = document.createElement("DIV");
          node.innerHTML = getPanelDOM(item,info.quote);
          quotePanel.appendChild(node);
      }
});

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
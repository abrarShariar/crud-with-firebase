//UPDATE / DELETE
const quotePanel = document.getElementById('quote_panel');

function getPanelDOM(name,quote){
  var panelDOM = "<div class='panel panel-primary'><div class='panel-heading'>" + name + "</div>" +
                            "<div class='panel-body'> Quote: <strong>" + quote +
                            "</strong><br><button id='" + name +"' type='button' class='btn btn-info' onclick='updateData(this.id)'>Update</button>" +
                            "<button id='"+ name +"' type='button' class='btn btn-danger' onclick='deleteData(this.id)'>Delete</button>" +
                             "</div></div>";
  return panelDOM;
}

//update method (based on key passed)
function updateData(key){
      window.location = "./edit.html"+ "?name=" + key;
}
//delete method (based on key passed)
function deleteData(key){
    userQuoteDB.child(key).remove(function(error){
        if(error){
            console.log('Synchronization failed');
        } else{
            console.log('Synchronization succeeded');
        }
    });
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


//listen for child remove event
userQuoteDB.on('child_removed',snap => {
      location.reload();
});
//listen for child changed event
userQuoteDB.on('child_changed',snap => {
      location.reload();
});

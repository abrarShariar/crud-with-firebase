/*
  READ operations using firebase
*/
const quoteBox = document.getElementById('quoteBox');
//sync data (JSON) chnages (callback triggers every time data changes)
userQuoteDB.on('value',snap => {
    var data =  snap.val();
    quoteBox.innerText = JSON.stringify(snap.val(),null,3);
    //console.log(data);
    //console.log(snap.child('abrar').val());
    //retrive data as NAME : QUOTE
    for(var item in data){
      var info = snap.child(item).val();
      //console.log(item + " : " + info.quote);
    }
});

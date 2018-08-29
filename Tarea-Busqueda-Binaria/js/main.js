function addObjeto(button){
  var value = button.parentNode.childNodes[1].value;
  add(value);
  console.log(data);
}

function searchObjeto(button){
  var value = button.parentNode.childNodes[1].value;
  p=-1;
  data = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'figs', 'grapes'];
  tempArr = data;
  find(tempArr,value);


}

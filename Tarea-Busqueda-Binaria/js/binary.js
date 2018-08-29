var data = ['apple', 'banana', 'cherry', 'dates', 'eggs', 'figs', 'grapes'];

function add(val){
  data.push(val);
}
var p = -1;
function find(hArr,search){

  if(hArr.length<p || p==0){
    console.log("No se encontro");
    return 0;
  }

  p = hArr.length/2;
  p = Math.floor(p);

  if(hArr[p]<search){
    hArr = hArr.splice(p)
    find(hArr,search);

  }else if(hArr[p]>search){

    hArr.splice(p);
    find(hArr,search);

  }else if(hArr[p]==search){

    console.log("Se encontro");

  }

}

function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list li');
  for(let i = 0; i < list.length; i++){
    list[i].innerHTML = parseInt(list[i].innerHTML) + n;
  }
}

function deepestChild(){
  let grand = document.querySelector('div#grand-node');
  let next = grand.children[0];

  while (next) {
    grand = next;
    next = grand.children[0];
  }
  return grand;
}
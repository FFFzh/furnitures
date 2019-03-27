var $ = function(id){
  return document.getElementById(id);
};
var $t = function(tag, cot){
  cot = cot || document;
  return cot.getElementsByTagName(tag);
};
$t('a')[0].onmouseover = function(){
  $t('div', this.parentNode)[0].style.display = 'block';
}
$t('a')[0].onmouseout = function(){
  $t('div', this.parentNode)[0].style.display = 'none';
}   
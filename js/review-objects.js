var fullname = {first:'Ana', last:'Uyehara'};
console.log(fullname.first,fullname.last);

var thefullname = fullname.first +' '+ fullname.last;
console.log(thefullname);

var tempstr = '';
var thefullname =  tempstr.concat(fullname.first,' ',fullname.last);
console.log(thefullname);
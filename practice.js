let pie=3;
console.log(pie);
 
 const pi=3.14;
 console.log(pi);

 let array=[];
 array= [1,8,5,4,9,0];
 console.log(array);
 console.log(array.sort());
  array.push(7);
 console.log(array);
 console.log(array.sort());
array.push(12);
console.log(array);
console.log(array.sort());

let array2=['sakshi',1,0,'ak'];
console.log(array2);
console.log(array2.sort());

let string=['p','r','a','k','s','h','a'];
console.log(string);
console.log(string.sort());
let st='Akanksha Verma';
console.log(st);
console.log(st[5]);

let life={
	feature:['happy','sad','tension','enjoyment'],
	color:'colorful'
         };

console.log(life.color);
console.log(life.feature);

function add(a,b) {
	return (a+b);
}
console.log (add(array[1],array[2]));

function multiply(a,b) {
	if (a==0 || b==0){return 0;}
	else {return a*b};
}

console.log(multiply(5,0));
console.log(multiply(5,5));

let stri=['sorry'];
for(i=0;i<5;i++)
	{console.log(i+' '+stri);}


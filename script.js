let b=prompt('year',1985);
let a=prompt('city','London');
let c=prompt('sport','golf');

if (b===null) {
   alert('You do not enter your birthday');
} else
if (b.trim()==='') {
   alert('You do not enter your birthday');
} else
if (b<1935) {
   alert ('Incorrect data of birthday');
} else
if (b>2022) {
   alert ('Incorrect data of birthday');
} else
if (a===null) {
   alert ('You do not enter your City');
} else
if (a.trim()==='') {
   alert ('You do not enter your City');
} else
if (c===null) {
   alert ('You do not enter your sport');
} else
if (c.trim()==='') {
   alert ('You do not enter your sport');
} else {


const cityData={
   London: 'You are %s years old \n You live in the capital of England',
   Washington:'You are %s years old \n You live in the capital of USA',
   Kyev:'You are %s years old \n You live in the capital of Ukraine',
   default:'You are %s years old \n You live in %a',
}
const sportData={
   football:'Cool! Do you want to be like Messi?',
   basketball:'Cool! Do you want to be like James?',
   golf:'Cool! Do you want to be like Woods?',
   default:'You choose %v as your favorite sport.'
}
let message1=a==='London' ? cityData.London.split('%s').join(2023-b) :
             a==='Washington' ? cityData.Washington.split('%s').join(2023-b):
             a==='Kyev' ? cityData.Kyev.split('%s').join(2023-b): 
             cityData.default.split('%s').join(2023-b).split('%a').join(a);

let message2=c==='football' ? sportData.football:
             c==='basketball' ? sportData.basketball:
             c==='golf' ? sportData.golf : 
             sportData.default.split('%v').join(c);

alert (message1+'\n'+message2);
}



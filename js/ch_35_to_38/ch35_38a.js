
var inputValue=prompt("Enter some string","cloUd naTive computinG");
alert(toCapitalCase(inputValue));
function toCapitalCase(inputSrting){
    var toCapitalFirstLetter = inputValue.toLowerCase();
    toCapitalFirstLetter = inputValue.charAt(0).toUpperCase()+toCapitalFirstLetter.slice(1,toCapitalFirstLetter.length);
    for(var i = 0; i<inputValue.length; i++){
        if(inputValue.charAt(i)===" "){
            toCapitalFirstLetter = toCapitalFirstLetter.slice(0,i+1) + toCapitalFirstLetter.charAt(i+1).toUpperCase() + toCapitalFirstLetter.slice(i+2,inputValue.length);
        }
    }
    return toCapitalFirstLetter;
}
/*## JS chapter 35 to 38
Java-script assignments chapter 35 to 38

1. input value from user in String ```var inputValue="cloUd naTive computinG"```
2. Convert every first letter of the content in Capitalize case. ```inputValue="Cloud Native Computing"```
```use Function```
3. print value in console.log() ```console.log(inputValue) | check result in browser console```

--------------------------------------
#### Second Assignment
1. User input value in Number through prompt ```Example value=5```
2. Factorialize a Number ```use Function```
3. print value in console.log() ``` console.log(value); the result is 120```

-------------------

#### Understand this logic

var value= multiply(4,3,6);

console.log("value", value);   // ```The result is ?```

function add(a, b){
	var z= a+b;
	return z;
};

function multiply(a, b, c){
	var z= a* add(b, c);
	return z;
};

console.log("course", course);   // ```The result is ?```
console.log("z", z);   // ```The result is ?```

var course="cloud native computing";*/
var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';
var textUpperCased = dinosaur.toUpperCase();
console.log(textUpperCased);
var textCharsAfter = text.replace('Velociraptor', textUpperCased);
console.log(textCharsAfter);
/*console.log(textCharsAfter.length / 2);*/
var halfText = textCharsAfter.substr(0, textCharsAfter.length / 2);
console.log(halfText);
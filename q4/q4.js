
// function countSyllable(word) {
//     word = word.toLowerCase();                                     //word.downcase!
//     if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
//       word = word.replace(/(?:[^laeiouy]es|ed|ing|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
//       word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
//       return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
//   }

function isMonoSyllabic(word){
if (word.substr(0,word.length-3).length==1)
    return true
else
    return false

}


function ingExtractor(sentence){
var words = sentence.match(/\b(\w+)\b/g)
var result=[]
for (var word of words){
    var tmp = word.toLowerCase()
    if (/ing/.test(tmp) && !isMonoSyllabic(tmp)){
        result.push(word)
    }
}
return result
}


console.log(ingExtractor("coming bringing Letting sing"))
console.log(ingExtractor("going Ping, king sHrink dOing"))
console.log(ingExtractor("zing went ring, ding wing SINk"))


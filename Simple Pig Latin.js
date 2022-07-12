function pigIt(str){
    //first we separate each word 
    let words = str.split(' ')
    let latinStr = []
    let regularExp = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    words.forEach(word =>{
      //then check if that word contains any special char
      if(!(regularExp.test(word))){
        //here the word is splitted into individual characters
        var wordArray = word.split('')
        //eliminate the 1st char and store it in firstLetter
        let firstLetter = wordArray.shift()
        //push into the array the 1st letter and the "ay" str
        wordArray.push(firstLetter,"a","y")
      } 
      //if it was an special char just push it as it is, if not, push the modified str
      wordArray === undefined? latinStr.push(word) : latinStr.push(wordArray.join(''))
    })
    return latinStr.join(' ')
    }

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay


/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
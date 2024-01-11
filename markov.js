/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    let text = this.words
    let obj = {}
    for(let i=0 ; i< text.length; i++ ){
      let next = text[i+1]
      let word = String(text[i])
      
      if(!(word in obj)){
        if(word===text[text.length-1]){
          obj[word] = [null]
        }else{obj[word] = [next]} 
      }
      else{
        obj[word].push(next)
      } 
    }
    this.obj = obj
  }


  /** return random text from chains */

  static random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  makeText(numWords = 20) {
    // TODO
   
    let keys = Object.keys(this.obj)
    let randKey = MarkovMachine.random(keys)
    let words=[]
    // console.log(randKey)
    for(let i=0; i<numWords; i++){
      if(randKey!==null){
        words.push(randKey)
        randKey = MarkovMachine.random(keys)
      }
      else{
        return words.join(" ")
      }
    }return words.join(" ")
  }
}

let mm = new MarkovMachine("the cat in the hat")

mm.makeText()


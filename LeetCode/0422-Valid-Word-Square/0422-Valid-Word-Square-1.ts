function validWordSquare(words: string[]): boolean {

  if (words[0].length !== words.length) {
    return false;
}

for (let i = 0; i < words.length; i++) {
    if(words[i].length > words.length){
        return false;
    }

    let vert = "";

    for (let j = 0; j < words[i].length; j++) {
        vert += (words[j][i])
    }

    if (words[i] !== vert) {
        return false;
    }

}
return true;


};



export default validWordSquare;

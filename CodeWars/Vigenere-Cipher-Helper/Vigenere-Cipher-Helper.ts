function VigenèreCipher(key: string, abc: string) {
  this.encode = function (str) {
    let result = "";
    for (let i in str) {
      let c = str[parseInt(i)];
      let k = key[parseInt(i) % key.length];
      if (abc.indexOf(c) >= 0) {
        result += abc[(abc.indexOf(c) + abc.indexOf(k)) % abc.length];
      } else {
        result += c;
      }
    }
    return result;
  };

  this.decode = function (str) {
    let result = "";
    for (let i in str) {
      let d = str[parseInt(i)];
      let k = key[parseInt(i) % key.length];
      if (abc.indexOf(d) >= 0) {
        let idx = (abc.indexOf(d) + abc.length - abc.indexOf(k)) % abc.length;
        let c = abc[idx];
        result += c;
      } else {
        result += d;
      }
    }
    return result;
  };
}

export default VigenèreCipher;

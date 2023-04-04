function processData(input) {
  let halflength = Math.floor(input.length / 2);
  input.sort((a, b) => {
    return a - b;
  });
  let front = input.slice(0, halflength);
  let back = input.slice(halflength, halflength + halflength);

  let center = input[input.length - 1];
  front.push(center);

  return front.concat(
    back.sort((a, b) => {
      return b - a;
    })
  );
}

module.exports = processData;




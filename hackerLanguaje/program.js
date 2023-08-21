const alphabet = {
  a: "4",
  b: "l3",
  c: "[",
  d: ")",
  e: "3",
  f: "|=",
  g: "&",
  h: "#",
  i: "1",
  j: ",_l",
  k: ">|",
  l: "1",
  m: "/\\/\\",
  n: "^/",
  o: "0",
  p: "|*",
  q: "(_,)",
  r: "l2",
  s: "5",
  t: "7",
  u: "|_|",
  v: "\\/",
  w: "\\/\\/",
  x: "><",
  y: "`/",
  z: "2",
};

const phrase = "Laura martin rodiguez";
const transforming = (phrase) => {
  phrase = phrase.toLowerCase();
  const arr = phrase.split("");
  for (letters in arr) {
    if (arr[letters] in alphabet) {
      arr[letters] = alphabet[arr[letters]];
    }
  }
  console.log(arr.join(""));
};

transforming(phrase);

const letterCombinations = require("./0017-Letter-Combinations-Of-Phone-Number");

test("0017-Letter-Combinations-Of-Phone-Number", () => {
  expect(letterCombinations("23")).toStrictEqual(checkOne);
  expect(letterCombinations("5678")).toStrictEqual(checkTwo);
  expect(letterCombinations("2468")).toStrictEqual(checkThree)
});

// Test Data
let checkOne = ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"];
let checkTwo = [
  "jmpt",
  "jmpu",
  "jmpv",
  "jmqt",
  "jmqu",
  "jmqv",
  "jmrt",
  "jmru",
  "jmrv",
  "jmst",
  "jmsu",
  "jmsv",
  "jnpt",
  "jnpu",
  "jnpv",
  "jnqt",
  "jnqu",
  "jnqv",
  "jnrt",
  "jnru",
  "jnrv",
  "jnst",
  "jnsu",
  "jnsv",
  "jopt",
  "jopu",
  "jopv",
  "joqt",
  "joqu",
  "joqv",
  "jort",
  "joru",
  "jorv",
  "jost",
  "josu",
  "josv",
  "kmpt",
  "kmpu",
  "kmpv",
  "kmqt",
  "kmqu",
  "kmqv",
  "kmrt",
  "kmru",
  "kmrv",
  "kmst",
  "kmsu",
  "kmsv",
  "knpt",
  "knpu",
  "knpv",
  "knqt",
  "knqu",
  "knqv",
  "knrt",
  "knru",
  "knrv",
  "knst",
  "knsu",
  "knsv",
  "kopt",
  "kopu",
  "kopv",
  "koqt",
  "koqu",
  "koqv",
  "kort",
  "koru",
  "korv",
  "kost",
  "kosu",
  "kosv",
  "lmpt",
  "lmpu",
  "lmpv",
  "lmqt",
  "lmqu",
  "lmqv",
  "lmrt",
  "lmru",
  "lmrv",
  "lmst",
  "lmsu",
  "lmsv",
  "lnpt",
  "lnpu",
  "lnpv",
  "lnqt",
  "lnqu",
  "lnqv",
  "lnrt",
  "lnru",
  "lnrv",
  "lnst",
  "lnsu",
  "lnsv",
  "lopt",
  "lopu",
  "lopv",
  "loqt",
  "loqu",
  "loqv",
  "lort",
  "loru",
  "lorv",
  "lost",
  "losu",
  "losv",
];
let checkThree = [
  "agmt",
  "agmu",
  "agmv",
  "agnt",
  "agnu",
  "agnv",
  "agot",
  "agou",
  "agov",
  "ahmt",
  "ahmu",
  "ahmv",
  "ahnt",
  "ahnu",
  "ahnv",
  "ahot",
  "ahou",
  "ahov",
  "aimt",
  "aimu",
  "aimv",
  "aint",
  "ainu",
  "ainv",
  "aiot",
  "aiou",
  "aiov",
  "bgmt",
  "bgmu",
  "bgmv",
  "bgnt",
  "bgnu",
  "bgnv",
  "bgot",
  "bgou",
  "bgov",
  "bhmt",
  "bhmu",
  "bhmv",
  "bhnt",
  "bhnu",
  "bhnv",
  "bhot",
  "bhou",
  "bhov",
  "bimt",
  "bimu",
  "bimv",
  "bint",
  "binu",
  "binv",
  "biot",
  "biou",
  "biov",
  "cgmt",
  "cgmu",
  "cgmv",
  "cgnt",
  "cgnu",
  "cgnv",
  "cgot",
  "cgou",
  "cgov",
  "chmt",
  "chmu",
  "chmv",
  "chnt",
  "chnu",
  "chnv",
  "chot",
  "chou",
  "chov",
  "cimt",
  "cimu",
  "cimv",
  "cint",
  "cinu",
  "cinv",
  "ciot",
  "ciou",
  "ciov",
];

import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

//Reduce

function extractValue(arr, key) {
  return arr.reduce(function(accum, nextValue) {
    accum.push(nextValue[key]);
    return accum;
  }, []);
}

//vowelCount

function vowelCount(str) {
  let vowel = "aeiou";
  return str.split("").reduce(function(accum, next) {
    let lowCase = next.toLowerCase();
    if (vowel.indexOf(lowCase) !== -1) {
      if (accum[lowCase]) {
        accum[lowCase]++;
      } else {
        accum[lowCase] = 1;
      }
    }
    return accum;
  }, {});
}

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function(acc, next, idx) {
    acc[idx][key] = value;
    return acc;
  }, arr);
}

function partition(arr, cb) {
  return arr.reduce(
    function(acc, next) {
      if (cb(next)) {
        acc[0].push(next);
      } else {
        acc[1].push(next);
      }
      return acc;
    },
    [[], []]
  );
}

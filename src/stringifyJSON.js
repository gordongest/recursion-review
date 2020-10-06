// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  result = '';

  if (typeof obj === 'number') {
    result += obj;
  } else if (obj === null) {
    result += 'null';
  } else if (typeof obj === 'boolean') {
    result += obj;
  } else if (typeof obj === 'string') {
    result += '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    result += '[';
    for (let i = 0; i < obj.length; i++) {
      if (i < obj.length - 1) {
        result += stringifyJSON(obj[i]) + ',';
      } else {
        result += stringifyJSON(obj[i]);
      }
    }
    result += ']';
  } else if (typeof obj === 'object') {
    let last = Object.keys(obj)[Object.keys(obj).length - 1];
    result += '{';
    for (let key in obj) {
      if (key === 'undefined') {
        continue;
      } else if (key === 'functions') {
        continue;
      }
      //if not last element in object, add ','
      if (key !== last) {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      } else {
        result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      }
    }
    result += '}';
  }

  return result;
};

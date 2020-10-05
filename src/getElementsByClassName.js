// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {


  // console.log(document.childNodes);

  let results = [];

  // recursion function
  // this function looks at each element in the HTML document and checks whether it has the desired class name and any children
  // if so, it then looks at those child nodes, asks again, etc

  let recursiveSearch = (collection, iterator) => {
    for (let element of collection) {
      iterator(element, className);
      // console.log(element.hasChildNodes());
      if (element.hasChildNodes()) {
        recursiveSearch(element.childNodes, iterator);
      }
    }
  };

  // test function
  // checks the class name of the targeted element

  let testClassName = (item, testName) => {
    // console.log(item);
    if (item.classList !== undefined) {
      if (item.classList.contains(testName)) {
        results.push(item);
      }
    }
  };

  // console.log(results);

  recursiveSearch(document.childNodes, testClassName);

  // console.log(results);
  return results;
};
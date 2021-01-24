const searchData = (sentence, data) => {
  var wordList = sentence
    ?.split(".")
    ?.join("")
    ?.split(",")
    ?.join("")
    ?.split(" ");

  console.log(wordList);

  var tempData = [];

  data.forEach((element) => {
    var flag = false;
    var nt = element.length;
    var at = element.length;

    const titlesList = element?.title
      ?.split(".")
      ?.join("")
      ?.split(",")
      ?.join("")
      ?.split(" ");
    const authorsList = element?.authors
      ?.split(".")
      ?.join("")
      ?.split(",")
      ?.join("")
      ?.split(" ");
    // const authorsList = splitSent(element?.authors);
    if (!flag) {
      wordList.forEach((word) => {
        titlesList.forEach((title) => {
          if (word === title) {
            flag = true;
            return (tempData += [...tempData, element]);
          }
        });
      });
    }
    if (!flag) {
      wordList.forEach((word) => {
        authorsList.forEach((author) => {
          if (word === author) {
            flag = true;
            return (tempData += [...tempData, element]);
          }
        });
      });
    }

    // if (!flag) {
    //   wordList.forEach((word) => {
    //     var m = word.length;
    //     for (var i = 0; i < nt - m + 1; i++) {
    //       var j = 0;
    //       for (j = 0; j < m; j++) {
    //         if (word.charAt(j) !== element?.title.charAt(i + j)) {
    //           break;
    //         }
    //       }

    //       if (j === m) {
    //         tempData += [...tempData, element];
    //         return;
    //       }
    //     }
    //   });
    // }
    // if (!flag) {
    //   wordList.forEach((word) => {
    //     var m = word.length;
    //     for (var i = 0; i < at - m + 1; i++) {
    //       var j = 0;
    //       for (j = 0; j < m; j++) {
    //         if (word.charAt(j) !== element?.authors.charAt(i + j)) {
    //           break;
    //         }
    //       }

    //       if (j === m) {
    //         tempData += [...tempData, element];
    //         return;
    //       }
    //     }
    //   });
    // }

    console.log("SearchedData: ", tempData);
  });
};

export default searchData;

// const splitSent = (sent) => {
//   //   console.log("Inside split-sent", sent);
//   //   return await new Promise((resolve) =>
//   return sent?.split(".")?.join("")?.split(",")?.join("")?.split(" ");
//   //   );
// };

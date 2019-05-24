const fs = require("fs");

const mySoultion = () => {
  fs.readFile("./source.txt", (err, data) => {
    console.time("mySolution");
    if (err) {
      console.log(err);
    }
    const source = data.toString();
    let floor = 0;
    let char = 1;
    let basement = false;
    let basementReached = 0;
    for (const item of source) {
      if (item === "(") {
        floor++;
      } else if (item === ")") {
        floor--;
      }
      if (floor < 0 && basement === false) {
        basement = true;
        basementReached = char;
      }
      char++;
    }
    console.log("mySolution floor", floor);
    console.log("mySolution first basement enter", basementReached);
    console.timeEnd("mySolution");
  });
};

const teacherSolution1 = () => {
  fs.readFile("./source.txt", (err, data) => {
    console.time("teachersSolution1");
    if (err) {
      console.log(err);
    }
    const source = data.toString();
    const sourceArray = source.split("");
    const answer = sourceArray.reduce((acc, currentValue, currentIndex) => {
      if (currentValue === "(") {
        return (acc += 1);
      } else if (currentValue === ")") {
        return (acc -= 1);
      }
    }, 0);
    console.log("teachersSolution floor", answer);
    console.timeEnd("teachersSolution1");
  });
};

const teacherSolution2 = () => {
  fs.readFile("./source.txt", (err, data) => {
    console.time("teachersSolution2");
    if (err) {
      console.log(err);
    }
    const source = data.toString();
    const sourceArray = source.split("");
    let accumulator = 0;
    let counter = 0;
    const answer = sourceArray.some(currentValue => {
      // some() method iterates through the array until the callback function returns true and it stops
      if (currentValue === "(") {
        accumulator += 1;
      } else if (currentValue === ")") {
        accumulator -= 1;
      }
      counter += 1;
      return accumulator < 0; // with the return we state which condition breaks the loop
    });
    console.log("teachersSolution first basement enter", counter);
    console.timeEnd("teachersSolution2");
  });
};

mySoultion();
teacherSolution1();
teacherSolution2();

// it is faster if we split the string into an array of chars and we iterate the keys of the array than going through the complete string everytime to get to the char each iteration

1//
let submissions = [{ name: "Jane", score: 95, date: "2020-01-24", passed: true},
                    { name: "Joe", score: 77, date: "2018-05-14", passed: true},
                    { name: "Jack", score: 59, date: "2019-07-05", passed: false},
                    { name: "Jill", score: 88, date: "2020-04-22", passed: true}];


//2//                   
function addSubmission(array, newName, newScore, newDate){
     let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
     }

     newSubmission.score >= 60 ? newSubmission.passed = true : newSubmission.passed = false;

     array.push(newSubmission);
     console.log(array);
}
addSubmission(submissions, "Sally", 40, "2020-01-01");


//3//
function deleteSubmissionByIndex(array,index){
   array.splice (index,1);
   console.log(submissions); 
   }
   
deleteSubmissionByIndex(submissions, 2);


//4//
function deleteSubmissionByName(array, name) {
   const index = submissions.findIndex((item) => item.name === name)
   const results = array.splice(index,1);
   console.log(results);
}

deleteSubmissionByName(submissions, "Joe");


//5//
function editSubmission(array, index, newScore) {
   array[index].score = newScore;
   if (array[index].score >= 60) {
      array[index].passed = true;
      console.log(array);
   }
   else {
      array[index].passed = false;
      console.log(array);
   }
}

editSubmission(submissions, 2, 90);


//6//
function findSubmissionByName(array, name) {
   const result = submissions.find(names => names.name === "Jack")
   console.log(name);
}

findSubmissionByName(submissions, "Jack");


//7//
function findLowestScore(array) {
   let lowestScore = submissions[0];

   for(let x = 0; x < submissions.length; x++) {
      if (submissions[x].score < lowestScore.score) {
         lowestScore = submissions[x];
      }
   }
   return lowestScore;
}

console.log(findLowestScore(submissions));


//8//
function findAverageScore(array) {
   let totalScore = 0;
   for(const score of array) {
      total = totalScore + score.score;
   }
   return total / array.length;
}

console.log(findAverageScore(submissions));


//9//
function filterPassing(array) {
   return array.filter(item => item.passed === true);
}

console.log(filterPassing(submissions));


//10//
function filter90AndAbove(array) {
   return array.filter(item => item.score >=90);
}

console.log(filter90AndAbove(submissions));

  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
const nums = [0, 1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => acc + curr);

// Function to explicitly specify the initial value of zero.
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// Expanding the above function
const nums1 = [0, 1, 2, 3, 4];
let sum1 = nums1.reduce((acc, curr) =>{
  console.log(
    "Accumulator:",acc,
    "Current Value:", curr,
    "Total:", acc + curr
    );
   return acc + curr;
}, 0); // Initial Value
console.log(sum1);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  },
  {
    name: 'Mark',
    profession: 'Manager',
    yrsExperience: 10
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience); // total years of experience for the entire team


// Grouping by a property, and totaling it too
// Group team members by profession and find the total experience for each profession.
// {Developer: 12, Designer: 4} <-- this is what we want!
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]) {
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession); 

// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

const yo = window.console.log;

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const thereExitstsAPersonAtLeast19YearsOld = people.some(
  x => x.year <= new Date().getFullYear() - 19,
);
yo(thereExitstsAPersonAtLeast19YearsOld);

// Array.prototype.every() // is everyone 19 or older?
const allPeopleAreAtLeast19YearsOld = people.every(x => x.year <= new Date().getFullYear() - 19);
yo(allPeopleAreAtLeast19YearsOld);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const targetComment = comments.find(x => x.id === 823423);
yo(targetComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const targetIndex = comments.findIndex(x => x.id === 823423);
yo(targetIndex);

const newComments = [
  ...comments.slice(0, targetIndex),
  ...comments.slice(targetIndex + 1),
];
yo(newComments);

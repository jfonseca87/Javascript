const algo = [
  {
    id: 1,
    name: "asdasdas",
  },
  {
    id: 2,
    name: "asdasdas",
  },
  {
    id: 3,
    name: "asdasdas",
  },
  {
    id: 4,
    name: "asdasdas",
  },
];
// const algo2 = algo.map(record => {
//     return {...record}
// });
const algo2 = JSON.parse(JSON.stringify(algo));
algo2[0].id = 99;

const date = new Date(2022, 1, 17);
let currentDate = date;

currentDate.setDate(currentDate.getDate() + 5);

// console.log(date);
// console.log(currentDate);
// console.log(typeof currentDate);

const comments = [
  { authorId: 1, replyTo: 1 },
  { authorId: 2, replyTo: 1 },
  { authorId: 3, replyTo: 1 },
  { authorId: 1, replyTo: 1 },
  { authorId: 1, replyTo: 1 },
  { authorId: 2, replyTo: 1 },
  { authorId: 1, replyTo: 2 },
  { authorId: 2, replyTo: 2 },
];

function filterComments() {
  let asd = comments
    .filter((x) => x.replyTo === 1)
    .map((x) => x.authorId)
    .sort()
    .reduce((result, cv, i, array) => {
      if (cv !== array[i - 1]) result.push(cv);
      return result;
    }, []);
 //  console.log(asd);
}

function calculateName(names, currentName, currentNumber = 0) {
  const existingName = names.some((x) => x === currentName);

  if (!existingName) {
    return currentName;
  }

  currentNumber += 1;
  const fileExtension = currentName.split(".").pop();
  const nameArray = currentName.replace(`.${fileExtension}`, "").split("_");
  currentName = `${nameArray[0]}_${currentNumber}.${fileExtension}`;
  return calculateName(names, currentName, currentNumber);
}

// filterComments();
var asd = calculateName(
  [
    "asd.jpg",
    "asd_1.jpg",
    "book.jpg",
    "file.pdf",
    "asd_2.jpg",
    "asd_3.jpg",
    "asd_4.jpg",
    "asd_5.jpg",
    "asd_6.jpg",
    "asd_7.jpg",
    "asd_8.jpg",
    "asd_9.jpg",
    "asd_10.jpg",
    "asd_12.jpg",
    "asd_13.jpg",
    "asd_14.jpg",
    "asd_15.jpg",
    "asd_16.jpg",
    "asd_17.jpg",
    "asd_18.jpg",
    "asd_19.jpg",
    "asd_20.jpg",
    "asd_21.jpg",
    "asd_22.jpg",
    "asd_23.jpg",
    "asd_24.jpg",
    "asd_25.jpg",
    "asd_26.jpg",
    "asd_27.jpg",
    "asd_28.jpg",
    "asd_29.jpg",
    "asd_30.jpg",
    "asd_31.jpg",
    "asd_32.jpg",
    "asd_33.jpg",
    "asd_34.jpg",
    "asd_35.jpg",
    "asd_36.jpg",
    "file_1.pdf",
  ],
  "asd.jpg"
);
console.log(asd);

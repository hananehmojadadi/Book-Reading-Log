// reader information
let readerName = "Hananeh";
let currentMonth = "July";

console.log("Reader: " + readerName);
console.log("Month: " + currentMonth);

// list of books
let bookTitles = ["The Power of Now", "Big Magic", "Start With Why"];
let totalPages = [240, 280, 320];
let pagesRead = [120, 280, 80];

// studing books
function calculateProgress(pagesRead, totalPages) {
  return Math.round((pagesRead / totalPages) * 100);
}


function getReadingStatus(progressPercent) {
  if (progressPercent === 100) {
    return "Finished";
  } else if (progressPercent >= 50) {
    return "In Progress";
  } else {
    return "Just Started";
  }
}


function printBookSummary(title, pagesRead, totalPages) {
  let progress = calculateProgress(pagesRead, totalPages);
  let status = getReadingStatus(progress);
  console.log(`"${title}": ${pagesRead}/${totalPages} pages — ${status}`);
}

console.log(" Hananeh’s Book Summaries:");
for (let i = 0; i < bookTitles.length; i++) {
  printBookSummary(bookTitles[i], pagesRead[i], totalPages[i]);
}


function totalPagesRead(pagesReadArray) {
  let total = 0;
  for (let i = 0; i < pagesReadArray.length; i++) {
    total += pagesReadArray[i];
  }
  return total;
}

function findBookWithMostPagesLeft(titlesArray, pagesReadArray, totalPagesArray) {
  let maxLeft = 0;
  let bookTitle = "";
  for (let i = 0; i < titlesArray.length; i++) {
    let pagesLeft = totalPagesArray[i] - pagesReadArray[i];
    if (pagesLeft > maxLeft) {
      maxLeft = pagesLeft;
      bookTitle = titlesArray[i];
    }
  }
  return bookTitle;
}


function printReadingSummary(readerName, month, pagesReadArray) {
  let total = totalPagesRead(pagesReadArray);
  console.log(`${readerName}'s total reading in ${month}: ${total} pages.`);
}


printReadingSummary(readerName, currentMonth, pagesRead);

let mostPagesLeft = findBookWithMostPagesLeft(bookTitles, pagesRead, totalPages);
console.log(` Book with most pages left to finish: "${mostPagesLeft}"`);
// code your solution here
const records = [
  {year: "2015", result: "W"},
  {year: "2014", result: 'N/A'},
  {year: "2013", result: "L"},
];


function superbowlWin(records){
 const recordsFound = records.find(record => record.result === "W");
  if (recordsFound){
    return recordsFound.year;
  } else {
    return undefined
  }
}

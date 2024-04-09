function compute_penalty(record, closeTime) {
  let result = 0, recordArr = record.split(" ")
  for (let i = 0; i < recordArr.length; i++) {
    if (i < closeTime) {
      if (recordArr[i] === "Y") result += 1
    } else {
      if (recordArr[i] === "N") result += 1
    }
  }
  return result
}

console.log(compute_penalty("N N Y N", 0))
console.log(compute_penalty("N N Y N", 4))
console.log(compute_penalty("Y N Y N", 0))
console.log(compute_penalty("Y Y Y Y", 2))
console.log(compute_penalty("N N N N", 4))

function find_best_removal_time(record) {
  let min = Infinity, desiredCloseTime
  for (let closeTime = 0; closeTime <= record.length; closeTime++) {
    let result = compute_penalty(record, closeTime)
    if (result < min) {
      min = result
      desiredCloseTime = closeTime
    }
  }
  return desiredCloseTime
}

find_best_removal_time("N N Y Y")

/**
 * @param {string} corruptedRecord
 */
function get_best_removal_times(corruptedRecord) {
  let corruptedRecordArr = corruptedRecord.split(" ")
  let stack = [], result = []
  for (let i = 0; i < corruptedRecordArr.length; i++) {
    if (corruptedRecordArr[i] === "BEGIN") stack = []
    else if (corruptedRecordArr[i] === "END") {
      result.push(find_best_removal_time(stack.join(" ")))
    }
    else stack.push(corruptedRecordArr[i].trim())
  }
  return result
}

console.log(get_best_removal_times("BEGIN BEGIN \nBEGIN Y Y BEGIN N N\n END Y Y BEGIN"))
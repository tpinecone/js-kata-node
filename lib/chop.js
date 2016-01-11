module.exports = function chop(int, array_of_ints, start_index, end_index) {
  if (end_index == undefined) {
    end_index = array_of_ints.length;
  }
  if (start_index == undefined) {
    start_index = 0;
  }
  var index = Math.floor((end_index + start_index) / 2);
  if(array_of_ints[index] == int) { // found the index
    return index;
  } else if((end_index - start_index) <= 1) { // we don't have any more values to look at
    return -1;
  } else if(array_of_ints[index] > int) { // too high, look at the lower half
    return chop(int, array_of_ints, 0, index);
  } else { // too low, look at the upper half
    return chop(int, array_of_ints, index + 1, end_index);
  }
}
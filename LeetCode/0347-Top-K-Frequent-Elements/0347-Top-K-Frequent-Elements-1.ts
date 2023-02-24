function topKFrequent(nums: number[], k: number): number[] {
  // an object to hold each number, and the number of times it occurs.
  let counter = new Map<number, number>();

  // loop the array of numbers.  if the counter object does not have a
  // key equal to the current number, add one and a counter as its value
  for (let i = 0; i < nums.length; i++) {
    counter[nums[i]] = (counter[nums[i]] || 0) + 1;
  }
  // we need to make an array of arrays to hold the key/value pairs so that we can sort.
  let returnable = new Array<[string, number]>();
  // push all the key/value pairs into the new array.
  for (const key in counter) {
    returnable.push([key, counter[key]]);
  }

  // No we can return the array with some modifications:
  return (
    returnable
      // sort the array by the values in each sub array
      .sort((a, b) => b[1] - a[1])
      // slice out the number of elements requested (k)
      .slice(0, k)
      // map over those elements and parse the keys (strings) into ints.
      .map((item) => Number(item[0]))
      // sort what is left into ascending order.
      .sort()
  );
}

export default topKFrequent;


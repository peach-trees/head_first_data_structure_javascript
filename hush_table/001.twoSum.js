/**
 * ** 两数之和 **
 * 给定一个整数数组 nums 和一个目标值 target
 * 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  if (nums.length < 2) return null;

  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const _num = target - nums[i];
    if (map.has(_num)) {
      return [map.get(_num), i];
    }
    map.set(nums[i], i);
  }
};

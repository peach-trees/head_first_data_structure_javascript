function twoSum (nums, target) {
    if (nums.length < 2) {
        return null
    }

    const checkMap = new Map()
    let ret = new Array()
    for (let i = 0; i < nums.length; i++) {
        if (checkMap.has(target - nums[i])) {
            ret.push(checkMap.get(target - nums[i]))
            ret.push(i)
            checkMap.delete(target - nums[i])
        } else {
            checkMap.set(nums[i], i)
        } // else>>
    } // for>
    return ret
}

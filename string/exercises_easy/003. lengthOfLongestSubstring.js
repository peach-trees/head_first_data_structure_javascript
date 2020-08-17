function lengthOfLongestSubstring(s) {
  if (s.length < 2) {
    return s.length
  }

  let ret = 0
  let left = 0
  let tempStr = ''
  for (let i = 0; i < s.length; i++) {
    if (tempStr.indexOf(s[i]) === -1) {
      tempStr = s.slice(left, i + 1)
      ret = Math.max(ret, tempStr.length)
    } else {
      left += s.slice(left, i).indexOf(s[i]) + 1
    } // if>>
  } // for>
  return ret
}
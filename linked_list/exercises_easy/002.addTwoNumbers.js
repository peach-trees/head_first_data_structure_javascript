const Node = require('../linked_list').Node

function addTwoNumbers(l1, l2) {
  if (l1 === null || l2 === null) {
    return null
  } //if>

  const sentry = new Node(0)
  let cur = sentry
  let carry = 0
  while (l1 !== null || l2 !== null || carry > 0) {
    let curSum = carry
    if (l1 !== null) {
      curSum += l1.value
    } //if>>
    if (l2 != null) {
      curSum += l2.value
    } //if>>

    cur.next = new Node(Math.floor(curSum % 10))
    cur = cur.next
    carry = curSum >= 10 ? 1 : 0
    if (l1 !== null) {
      l1 = l1.next
    } //if>>
    if (l2 !== null) {
      l2 = l2.next
    } //if>>
  } //while>

  return sentry.next
}
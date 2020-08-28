const { Node } = require("../linked_list");

const addTwoNumbers = (l1, l2) => {
  if (l1 === null || l2 === null) return null;

  const head = new Node(0);
  let [cur, carry] = [head, 0];

  while (l1 || l2 || carry) {
    let curSum = carry;
    if (!!l1) {
      curSum += l1.value;
      l1 = l1.next;
    }
    if (!!l2) {
      curSum += l2.value;
      l2 = l2.next;
    }

    cur.next = new Node(curSum % 10);
    cur = cur.next;
    carry = curSum >= 10 ? 1 : 0;
  }

  return head.next;
};

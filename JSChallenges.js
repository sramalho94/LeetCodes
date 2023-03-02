// 557. Reverse Words in a String III
var reverseWords = function (s) {
  let answer = []
  let revWord = ''
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      answer.push(revWord.split('').reverse().join(''))
      revWord = ''
    } else {
      revWord += s[i]
    }
  }
  answer.push(revWord.split('').reverse().join(''))
  return answer.join(' ')
}

// 7 Reverse Integer
var reverse = function (x) {
  let reverse = 0
  const isNeg = x < 0
  x = Math.abs(x)
  while (x > 0) {
    reverse = reverse * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  if (reverse > 2 ** 31 - 1) {
    return 0
  }
  return isNeg ? -reverse : reverse
}

// 2496. Maximum Value of a String in an Array
var maximumValue = function (strs) {
  let val = 0

  for (const str of strs) {
    let test_val = 0
    if (/\d/.test(str) && /^[^A-Za-z]*$/.test(str)) {
      test_val = parseInt(str)
      if (test_val > val) {
        val = test_val
      }
    } else {
      test_val = str.length
      if (test_val > val) {
        val = test_val
      }
    }
  }
  return val
}

// 141. Linked List Cycle
var hasCycle = function (head) {
  slow = head
  fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}

// 142. Linked List Cycle II

var detectCycle = function (head) {
  // Step 1: Use Floyd's algorithm to detect the cycle and find the meeting point
  let slow = head
  let fast = head

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      break
    }
  }

  if (!fast || !fast.next) {
    return null // No cycle
  }

  // Step 2: Reset one of the pointers to the head and move both pointers at the same rate
  slow = head

  while (slow !== fast) {
    slow = slow.next
    fast = fast.next
  }

  return slow // This is the starting node of the cycle
}

// 66. Plus One
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[digits.length - 1] += 1
    }
    if (digits[i] > 9) {
      digits[i] -= 10
      if (i - 1 < 0) {
        digits.unshift(1)
      } else {
        digits[i - 1] += 1
      }
    }
  }
  return digits
}
// 88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {
  let i = 0
  let j = 0
  while (i < m + n) {
    if (nums2[j] === undefined) {
      return nums1
    } else if (nums1[i] === 0 && i >= m + j) {
      nums1.splice(i, 0, nums2[j])
      nums1.pop()
      i++
      j++
    } else if (nums1[i] <= nums2[j]) {
      i++
    } else {
      nums1.splice(i, 0, nums2[j])
      nums1.pop()
      i++
      j++
    }
  }
  return nums1
}
// 28. Find the Index of the First Occurence in a String
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0
  }
  let startIndex = -1
  let pointer2 = 0
  if (needle.length > haystack.length) {
    return startIndex
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[pointer2]) {
      if (pointer2 === 0) {
        startIndex = i
      }
      pointer2++
    } else {
      i -= pointer2
      pointer2 = 0
      startIndex = -1
    }
    if (pointer2 === needle.length) {
      return startIndex
    }
  }
  return -1
}

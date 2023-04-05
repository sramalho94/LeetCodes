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

// Weekly Interview Challenge
var maxArea = function (height) {
  let maxArea = 0
  let left = 0,
    right = height.length - 1

  while (left < right) {
    const width = right - left
    const minHeight = Math.min(height[left], height[right])
    const area = width * minHeight
    maxArea = Math.max(maxArea, area)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return maxArea
}
// 144. Binary Tree Preorder Traversal
var preorderTraversal = function (root) {
  let answer = []

  const helperFunct = (root) => {
    if (root) {
      answer.push(root.val)

      helperFunct(root.left)

      helperFunct(root.right)
    }
  }
  helperFunct(root)
  return answer
}
// 17. Letter Combinations of a Phone Number
var letterCombinations = function (digits) {
  const hashTable = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }

  let answer = []

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i]

    if (i === 0) {
      let letters = hashTable[digit]
      for (let j = 0; j < letters.length; j++) {
        answer.push(letters[j])
      }
    } else {
      let letters = hashTable[digit]
      const newAnswer = []
      for (let j = 0; j < letters.length; j++) {
        for (let letter of answer) {
          newAnswer.push(letter + letters[j])
        }
      }

      answer = newAnswer
    }
  }

  return answer
}

// 2574. Left and Right Sum Differences
var leftRigthDifference = function (nums) {
  const leftSum = [0]
  const rightSum = [0]
  const answer = []
  let lSum = 0
  let rSum = 0
  for (let i = 0; i < nums.length - 1; i++) {
    lSum += nums[i]
    leftSum.push(lSum)
  }
  for (let j = nums.length - 1; j > 0; j--) {
    rSum += nums[j]
    rightSum.unshift(rSum)
  }

  for (let i = 0; i < rightSum.length; i++) {
    answer.push(Math.abs(leftSum[i] - rightSum[i]))
  }
  return answer
}

// 53. Maximum Subarray
var maxSubArray = function (nums) {
  maxEndingHere = nums[0]
  maxSoFar = nums[0]

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i])
    maxSoFar = Math.max(maxSoFar, maxEndingHere)
  }

  return maxSoFar
}

// 78. Subsets
var subsets = function (nums) {
  let answer = [[]]
  for (let i = 0; i < nums.length; i++) {
    let currentLength = answer.length
    for (let j = 0; j < currentLength; j++) {
      let newSubset = [...answer[j], nums[i]]
      answer.push(newSubset)
    }
  }
  return answer
}

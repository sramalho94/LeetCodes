// 1470. Shuffle the Array
function shuffle(nums: number[], n: number): number[] {
  let answer: number[] = []
  let length: number = nums.length
  let x: number[] = nums.slice(0, n)
  let y: number[] = nums.slice(n, nums.length)
  for (let i: number = 0; i < x.length; i++) {
    answer.push(x[i])
    answer.push(y[i])
  }
  return answer
}
// 2011. Final Value of Variable After Performing Operations
function shuffle1(nums: number[], n: number): number[] {
  let answer: number[] = []
  let length: number = nums.length
  let x: number[] = nums.slice(0, n)
  let y: number[] = nums.slice(n, nums.length)
  for (let i: number = 0; i < x.length; i++) {
    answer.push(x[i])
    answer.push(y[i])
  }
  return answer
}

// 1512. Number of Good Pairs
function numIdenticalPairs(nums: number[]): number {
  if (nums.length <= 1) {
    return nums.length
  }
  let answer: number = 0
  let hashTable: object = {}
  for (let i: number = 0; i < nums.length; i++) {
    if (!hashTable[nums[i]]) {
      hashTable[nums[i]] = 1
    } else {
      answer += hashTable[nums[i]]
      hashTable[nums[i]]++
    }
  }
  return answer
}

// 2413. Smallest Even Multiple
function smallestEvenMultiple(n: number): number {
  if (n % 2 === 0) {
    return n
  } else {
    return n * 2
  }
}

// 1281. Subtract the Product and Sum of Digits of an Integer
function subtractProductAndSum(n: number): number {
  let holder: string = n.toString()
  let sum: number = 0
  let product: number = 1
  for (let i: number = 0; i < holder.length; i++) {
    sum += parseInt(holder[i])
    product *= parseInt(holder[i])
  }
  return product - sum
}
// 1374. Generate a String With Characters That Have Odd Counts
function generateTheString(n: number): string {
  let answer: string = ''
  if (n % 2 !== 0) {
    for (let i: number = 0; i < n; i++) {
      answer += 'o'
    }
  } else {
    for (let i: number = 0; i < n; i++) {
      if (i === n - 1) {
        answer += 'h'
      } else {
        answer += 'o'
      }
    }
  }
  return answer
}
// 2119. A Number After a Double Reversal
function isSameAfterReversals(num: number): boolean {
  let holder: string = num.toString()
  if (holder[holder.length - 1] === '0' && holder.length > 1) {
    return false
  }

  return true
}

// 1829. Maximum XOR for Each Query
function getMaximumXor(nums: number[], maximumBit: number): number[] {
  let k: number = 2 ** maximumBit - 1
  let xOr: number = 0
  for (let num of nums) {
    xOr ^= num
  }
  let answer: number[] = []

  for (let i = nums.length - 1; i >= 0; i--) {
    answer.push(xOr ^ k)
    xOr ^= nums[i]
  }

  return answer
}

// 198. House Robber
function rob(nums: number[]): number {
  let prevHouse: number = 0
  let currentHouse: number = 0
  for (let i: number = 0; i < nums.length; i++) {
    let temp = currentHouse
    currentHouse = Math.max(prevHouse + nums[i], currentHouse)
    prevHouse = temp
  }
  return currentHouse
}
// 58. Length of Last Word
function lengthOfLastWord(s: string): number {
  let answer: number = 0
  for (let i: number = s.length - 1; i >= 0; i--) {
    if (s[i] !== ' ') {
      while (s[i] !== ' ' && i >= 0) {
        answer++
        i--
      }
    }
  }
  return answer
}
// 122. Best Time to Buy and Sell Stock II
function maxProfit2(prices: number[]): number {
  let profit: number = 0
  for (let i: number = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i]
    }
  }
  return profit
}
// 1431. Kids With the Greatest Number of Candies
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  return candies.map((candy) => candy + extraCandies >= Math.max(...candies))
}
// 605. Can Place Flowers
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let flowersLeft: number = n
  for (let i: number = 0; i < flowerbed.length; i++) {
    if (i < 1) {
      if (flowerbed[i] !== 1 && flowerbed[i + 1] !== 1 && flowersLeft > 0) {
        flowerbed[i] = 1
        flowersLeft--
      }
    } else if (i === flowerbed.length - 1) {
      if (flowerbed[i] !== 1 && flowerbed[i - 1] !== 1 && flowersLeft > 0) {
        flowerbed[i] = 1
        flowersLeft--
      }
    } else if (
      flowerbed[i] !== 1 &&
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1 &&
      flowersLeft > 0
    ) {
      flowerbed[i] = 1
      flowersLeft--
    }
  }
  return flowersLeft === 0
}
// 345. Reverse Vowels of a String
function reverseVowels(s: string): string {
  let start: number = 0
  let end: number = s.length - 1
  const test: string[] = s.split('')
  let vowels: string[] = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']

  while (start < end) {
    if (vowels.includes(test[start]) && vowels.includes(test[end])) {
      ;[test[start], test[end]] = [test[end], test[start]]
      start++
      end--
    } else if (vowels.includes(test[start]) && !vowels.includes(test[end])) {
      end--
    } else if (!vowels.includes(test[start]) && vowels.includes(test[end])) {
      start++
    } else if (!vowels.includes(test[start]) && !vowels.includes(test[end])) {
      start++
      end--
    }
  }
  return test.join('')
}
// 151. Reverse Words in a String
function reverseWords2(s: string): string {
  let answer: string = ''
  let holder: string[] = s.trim().split(/\s+/)
  let start: number = 0
  let end: number = holder.length - 1
  while (start < end) {
    ;[holder[start], holder[end]] = [holder[end], holder[start]]
    start++
    end--
  }
  return holder.join(' ')
}

// 283. Move Zeroes
function moveZeroes(nums: number[]): void {
  let lastNonZero: any = 0
  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZero++] = nums[i]
    }
  }
  for (let i = lastNonZero; i < nums.length; i++) {
    nums[i] = 0
  }
}
// 1071. Greatest Common Divisor of Strings
function gcdOfStrings(str1: string, str2: string) {
  if (str1 + str2 !== str2 + str1) {
    return ''
  } else if (str1 === str2) {
    return str1
  } else if (str1.length > str2.length) {
    return gcdOfStrings(str1.slice(str2.length), str2)
  } else if (str2.length > str1.length) {
    return gcdOfStrings(str2.slice(str1.length), str1)
  }
}
// 392. Is Subsequence
function isSubsequence(s: string, t: string): boolean {
  let pointer: number = 0
  for (let i = 0; i < t.length; i++) {
    if (s[pointer] === t[i]) {
      pointer++
    }
  }
  return pointer === s.length
}
// 238. Product of Array Except Self
function productExceptSelf(nums: number[]): number[] {
  let left: number[] = new Array(nums.length)
  let right: number[] = new Array(nums.length)
  let answer: number[] = new Array(nums.length)

  left[0] = 1
  right[nums.length - 1] = 1

  for (let i: number = 1; i < nums.length; i++) {
    left[i] = nums[i - 1] * left[i - 1]
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1]
  }

  for (let i = 0; i < nums.length; i++) {
    answer[i] = left[i] * right[i]
  }

  return answer
}

// 334. Increasing Triplet Subsequence
function increasingTriplet(nums: number[]): boolean {
  let first: number = Number.MAX_VALUE
  let second: number = Number.MAX_VALUE

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] < first) {
      first = nums[i]
    } else if (nums[i] > first && nums[i] < second) {
      second = nums[i]
    } else if (nums[i] > second) {
      return true
    }
  }

  return false
}
// 643. Maximum Average Subarray I
function findMaxAverage(nums: number[], k: number): number {
  let maxSum: number = 0
  let currentSum: number = 0

  for (let i = 0; i < k; i++) {
    maxSum += nums[i]
  }
  currentSum = maxSum

  for (let i = k; i < nums.length; i++) {
    currentSum = currentSum - nums[i - k] + nums[i]
    maxSum = Math.max(maxSum, currentSum)
  }

  return maxSum / k
}

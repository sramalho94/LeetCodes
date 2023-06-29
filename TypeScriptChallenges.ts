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
// 1207. Unique Number of Occurrences
function uniqueOccurrences(arr: number[]): boolean {
  let hashTable = {}
  let test: Set<number> = new Set()
  let count: number = 0

  for (let i: number = 0; i < arr.length; i++) {
    if (!hashTable[arr[i]]) {
      hashTable[arr[i]] = 1
      count++
    } else {
      hashTable[arr[i]]++
    }
  }
  for (let key in hashTable) {
    test.add(hashTable[key])
  }
  return test.size === count
}
// 2215. Find the Difference of Two Arrays
function findDifference(nums1: number[], nums2: number[]): number[][] {
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)

  let answer1: number[] = []
  let answer2: number[] = []

  for (let num of set1) {
    if (!set2.has(num)) {
      answer1.push(num)
    }
  }

  for (let num of set2) {
    if (!set1.has(num)) {
      answer2.push(num)
    }
  }

  return [answer1, answer2]
}
// 1732. Find the Highest Altitude
function largestAltitude(gain: number[]): number {
  let maxHeight: number = 0
  let currentHeight: number = 0
  for (let i: number = 0; i < gain.length; i++) {
    currentHeight = currentHeight + gain[i]

    maxHeight = Math.max(maxHeight, currentHeight)
  }
  return maxHeight
}
// 1365. How Many Numbers Are Smaller Than the Current Number
function smallerNumbersThanCurrent(nums: number[]): number[] {
  let answer: number[] = []

  for (let i: number = 0; i < nums.length; i++) {
    let count = 0
    for (let j: number = 0; j < nums.length; j++) {
      if (i !== j && nums[j] < nums[i]) {
        count++
      }
    }
    answer.push(count)
    count = 0
  }

  return answer
}
// 1913. Maximum Product Difference Between Two Pairs

function maxProductDifference(nums: number[]): number {
  let high: number = Number.MIN_VALUE
  let secHigh: number = Number.MIN_VALUE
  let low: number = Number.MAX_VALUE
  let secLow: number = Number.MAX_VALUE

  for (let i: number = 0; i < nums.length; i++) {
    if (nums[i] > high) {
      console.log(`new high ${nums[i]}`)
      secHigh = high
      high = nums[i]
    } else if (nums[i] > secHigh) {
      secHigh = nums[i]
      console.log(`new secHigh ${nums[i]}`)
    }

    if (nums[i] < low) {
      secLow = low
      low = nums[i]
    } else if (nums[i] < secLow) {
      secLow = nums[i]
    }
  }

  return high * secHigh - low * secLow
}
// 389. Find the Difference
function findTheDifference(s: string, t: string): string {
  let letterRecord = {}
  for (let i: number = 0; i < s.length; i++) {
    if (letterRecord[s[i]] === undefined) {
      letterRecord[s[i]] = 1
    } else {
      letterRecord[s[i]]++
    }
  }
  for (let i: number = 0; i < t.length; i++) {
    if (!letterRecord[t[i]]) {
      return t[i]
    } else {
      letterRecord[t[i]]--
    }
  }
}

// 412. Fizz Buzz
function fizzBuzz(n: number): string[] {
  let answer: string[] = []
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answer.push('FizzBuzz')
    } else if (i % 3 === 0) {
      answer.push('Fizz')
    } else if (i % 5 === 0) {
      answer.push('Buzz')
    } else {
      answer.push(i.toString())
    }
  }
  return answer
}

// 771. Jewels and Stones
function numJewelsInStones(jewels: string, stones: string): number {
  let jewelRec = {}
  let answer: number = 0
  for (let i = 0; i < jewels.length; i++) {
    if (jewelRec[jewels[i]] === undefined) {
      jewelRec[jewels[i]] = 1
    }
  }
  for (let i = 0; i < stones.length; i++) {
    if (jewelRec[stones[i]] !== undefined) {
      answer++
    }
  }
  return answer
}
// 2114. Maximum Number of Words Found in Sentences
function mostWordsFound(sentences: string[]): number {
  let maxWordCount: number = -Infinity
  for (const sentence of sentences) {
    const localWordCount = sentence.split(' ').length
    maxWordCount = Math.max(maxWordCount, localWordCount)
  }
  return maxWordCount
}
// 1859. Sorting the Sentence
function sortSentence(s: string): string {
  let answer: string[] = []
  let wordOrder: { [key: number]: string } = {}
  const words = s.split(' ')
  for (const word of words) {
    const position = word.length - 1
    const fixedWord = word.slice(0, position)
    wordOrder[word[position]] = fixedWord
  }
  for (let i = 1; i <= words.length; i++) {
    answer.push(wordOrder[i])
  }
  return answer.join(' ')
}

// 389. Find the Difference
function findTheDifference(s: string, t: string): string {
  let letterRecord = {}
  for (let i: number = 0; i < s.length; i++) {
    if (letterRecord[s[i]] === undefined) {
      letterRecord[s[i]] = 1
    } else {
      letterRecord[s[i]]++
    }
  }
  for (let i: number = 0; i < t.length; i++) {
    if (!letterRecord[t[i]]) {
      return t[i]
    } else {
      letterRecord[t[i]]--
    }
  }
}
// 2697. Lexicographically Smallest Palindrome
function makeSmallestPalindrome(s: string): string {
  let start = 0
  let end = s.length - 1
  let sArr: string[] = s.split('')
  let charRecord: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  while (start < end) {
    if (sArr[start] !== sArr[end]) {
      if (charRecord[sArr[start]] < charRecord[sArr[end]]) {
        sArr[end] = sArr[start]
      } else {
        sArr[start] = sArr[end]
      }
    }
    start++
    end--
  }

  return sArr.join('')
}

// 1832. Check if the Sentence Is Pangram
function checkIfPangram(sentence: string): boolean {
  const charArray: string[] = sentence.split('')
  const uniqueChars: Set<string> = new Set(charArray)
  return uniqueChars.size >= 26
}

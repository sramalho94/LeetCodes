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

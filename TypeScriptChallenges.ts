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

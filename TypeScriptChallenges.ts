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

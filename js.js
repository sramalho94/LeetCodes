const arithGeo = (nums) => {
  const epsilon = 1e-10
  let difference = nums[1] - nums[0]
  let divisor = nums[1] / nums[0]
  let arithmetic = true
  let geometric = true
  if (nums.length < 2) {
    return -1
  }
  for (let i = 0; i < nums.length - 1; i++) {
    if (difference !== nums[i + 1] - nums[i]) {
      arithmetic = false
    }
    if (Math.abs(divisor - nums[i + 1] / nums[i]) > epsilon) {
      geometric = false
    }
    if (!arithmetic && !geometric) {
      return -1
    }
  }
  return arithmetic ? 'Arithmetic' : 'Geometric'
}

console.log(arithGeo([7, 0.7, 0.07, 0.007, 0.0007]))

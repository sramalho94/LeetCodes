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
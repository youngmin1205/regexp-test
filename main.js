let str = `
647-1111-1111
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

//const regexp = new RegExp('the', 'gi')
//const regexp = /the/gi
//console.log(str.match(regexp))

//메소드
//const regexp = /fox/gi
//console.log(regexp.test(str))
// str = str.replace(regexp, 'AAA')
// console.log(str)

//플래그
// const regexp = /the/gi
// console.log(str.match(/the/gi))
//console.log(str.match(/\.$/gim))

//패턴
// console.log(
//   str.match(/^t/gm)
//   )
// console.log(
//   str.match(/https?/g)
//   )
// console.log(
//   str.match(/d{2}/)
//   )
// console.log(
//   str.match(/[fox]/g)
//   )
  console.log(
    str.match(/\w/g)
    )
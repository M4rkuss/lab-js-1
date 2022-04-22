//1) Статистика о строке
// function fn (str) {
//   let arrWords = []
//   let countOfDigits = str.split("").filter(item => "123456789".includes(item)).length
//   let countOfSymbols = str.split("").filter(item => "!@#$%^&*()_-+=/';:[]{}<>`~№|,.${}?".includes(item)).length  // знаю, что плохой метод, но хотя бы рабочий :)
//   let arr = str.split("")
//   for (let i = 0; i < arr.length; i++){
//     if (isNaN(Number(arr[i]))) {
//       arrWords.push(arr[i])
//     }
//   }
//   arr.join()
//   console.log(`Ваша строка: ${str}`)
//   console.log(`Всего символов: ${str.length}`)
//   console.log(`Всего цифр: ${countOfDigits}`)
//   console.log(`Всего букв: ${arrWords.length}`)
//   console.log(`Всего символов: ${countOfSymbols}`)
//
// }
// fn("Hello123")


//2) Замена символов (upper->lower, lower->upper, numbers -> _)
// function change (str) {
//   let arr = str.split("")
//   for (let i = 0; i < arr.length; i++){
//     if (arr[i] >= "A" && arr[i] <= "Z") {
//       arr[i] = arr[i].toLowerCase()
//     }
//     else if (arr[i] >= "a" && arr[i] <= "z") {
//       arr[i] = arr[i].toUpperCase()
//     }
//     else arr[i] = arr[i].replace(arr[i], '_')
//   }
//   arr = arr.join()
//   console.log(arr)
// }
// change("ABC1234adfs")


//3) to camelCase
// function toCamelCase (str) {
//   let upperWord
//   let strArr = str.split("")
//   let indexOfTire = strArr.indexOf("-")
//   for (let i = 0; i < strArr.length; i++) {
//     upperWord = strArr[indexOfTire + 1].toUpperCase()
//   }
//   strArr[indexOfTire + 1] = upperWord
//   strArr.splice(indexOfTire, 1)
//   console.log(strArr.join(""))
// }
// toCamelCase("font-size")


//4) Принимаем словосочетание, превращаем в аббревиатуру
// function toAbbreviation (str) {
//   let arr = str.split(' ')
//   let arrOfWords = []
//   for (let i = 0; i < arr.length; i++) {
//     arrOfWords.push(arr[i][0].toUpperCase())
//   }
//   console.log(arrOfWords.join(""))
// }
//
// toAbbreviation('cascading style sheets')


//5) Объединяем строки
// function fn () {
//   let str = ""
//   for (let i = 0; i < arguments.length; i++) {
//     str += arguments[i]
//   }
//   return str;
// }
//
// console.log(fn("apple", "hello", "Hi"))


//6) Информация о ЮРЛ
function aboutUrl (str) {
  let arr = str.split("/").join(" ").split(":").join(" ").split(" ")
  let last = []
  for (let i = 4; i < arr.length; i++) {
    last.push(arr[i])
  }
  console.log(`Ваш ЮРЛ: ${str}`)
  console.log(`Протокол: ${arr[0]}`)
  console.log(`Домен: ${arr[3]}`)
  console.log(`Путь: ${last.join("/")}`)
}

aboutUrl("https://itstep.org/ua/about")
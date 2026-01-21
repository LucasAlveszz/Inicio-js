```js
let value = 5
let value2 = "5"

if (typeof value === "number") {
    let result = (value % 2 ? "odd" : "even")
    console.log(result)
}
else if (typeof value === "string") {
    console.log("Parity check is not possible for string type")
}
else if (typeof value === "object") {
    console.log("Parity check is not possible for object type")
}
else {
    console.log("Parity check is not possible for boolean type")
}

if (value === value2) {
    console.log("The values are strictly equal")
}
else {
    console.log("The values are different (value or type)")
}

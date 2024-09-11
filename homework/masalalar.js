// 1 - masala
// {
//   console.log(`1 - masala`);

//   function removeChar(str) {
//     //You got this!
//     let newArray = [];
//     let strArr = str.split("");
//     son = +strArr.length;
//     for (let i = 0; i < strArr.length; i++) {
//       const element = strArr[i];
//       if (element !== strArr[0] && element !== strArr[2]) {
//         newArray.push(element);
//       }
//     }
//     return newArray;
//   }
// }
// 2 - masala
{
  console.log(`2 - masala`);
  function repeatStr(n, s) {
    let str = "";
    for (let i = 0; i < n; i++) {
      str += s;
    }
    return str;
  }
  console.log(repeatStr(2, "we"));
}
// 3 - masala
{
  console.log(`3 - masala`);
  function squareDigits(num) {
    let yigindi = "";
    array = String(num).split("");
    for (let i = 0; i < array.length; i++) {
      const element = Number(array[i]);
      yigindi += `${element ** 2}`;
    }
    return yigindi;
  }
  console.log(squareDigits(43));
}
// 4 - masala
{
  console.log(`4 - masala`);
  function highAndLow(numbers) {
    // ..
    array = String(numbers).split(" ");
    let katta = +array[1];
    let kichik = +array[1];

    for (let i = 0; i < array.length; i++) {
      const element = +array[i];
      if (katta < element) {
        katta = element;
      } else if (kichik > element) {
        kichik = element;
      }

      return katta, kichik, array;
    }
  }
  console.log(highAndLow("1 2 3 4 5 6 7 -1 4"));
}
// 5 - masala
{
  console.log(`5 - masala`);
  function minMax(arr) {
    let katta = arr[0];
    let kichik = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > katta) katta = arr[i];
      if (arr[i] < kichik) kichik = arr[i];
    }
    return [kichik, katta];
  }

  console.log(minMax([1, 3, 4, 56, 7, 0]));
}
// 6 - masala
{
  console.log(`6 - masala`);
  function reverse(string) {
    let array = [];
    let arr = string.split(" ");
    for (let i in arr) {
      array.unshift(arr[i]);
    }
    return array.join(" ");
  }
  console.log(reverse("salom dunyo"));
}
// 7 - masala
{
  console.log(`7 - masala`);
}
// 8 - masala
{
  console.log(`1 - masala`);
}
// 9 - masala
{
  console.log(`1 - masala`);
}
// 10 - masala
{
  console.log(`1 - masala`);
}

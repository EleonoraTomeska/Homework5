//Homework-5-

//Ex.1
//Start here
{
    let n = 5;
    let product = 1;
    do {
        product *= n
        n--;
    } while (n > 0);

    console.log("Factorial = " + product)
}
//Ends here

//Ex.2
//Start here
{
    let grades = [10, 10, 10, 9, 10];

    let x = 0;

    for (let item of grades) {
        x += item;
    }

    console.log("Average = " + x / grades.length);
}
//Ends here

//Ex.3
//Start here
{
    let names = ["Jocka", "Mark", "Nikola", "Test", "Test12"];

    for (let i = 0; i < names.length; i++) {
        let x = names[i].length;
        if (x % 2 === 0) {
            console.log(names[i]);
        }
    }
}
//Ends Here

//Ex.4
//Start here
{
    let nums = [1, 5, 3, 5, 4, 9, 1, 2, 7];

    let biggest = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > biggest) {
            biggest = nums[i];
        }
    }
    console.log(biggest);
}
//Ends here

//Ex.5
//Start here
{
    let numb = [2, 4, 5, 6];
    let deg = [];
    let x = 0;

    for (let i = 0; i < numb.length; i++) {
        x = numb[i] ** 2;
        deg.push(x)
    }
    console.log(deg)
}
//Ends here
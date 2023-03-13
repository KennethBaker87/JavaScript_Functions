console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count > 0){
        for (i = 1; i <= count; i++){
    
            if (i % 2 != 0){
            console.log(i)
            }
        }   
    }
    if (count < 0){
        for (i = -1; i >= count; i--){
            if (i % 2 != 0){
                console.log(i)
                }
        }
    }
}
printOdds(-30)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age){
    aboveSixteen = `Congrats ${userName}, you can drive!`
    belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`
    if (userName == null || age == null){
        console.log(`Sorry not enough information`)    
    }
    if (age >= 16){
        console.log(aboveSixteen)
    }
    else if (age < 16){
    console.log(belowSixteen)
    }
}
checkAge(`Kenny`,18 )

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function caretsianPlane(x, y){
    if(x > 0 && y > 0){
        console.log(`Quadrant I`)
    }
    else if (x < 0 && y > 0){
        console.log(`Quadrant II`)
    }
    else if (x < 0 && y < 0){
        console.log(`Quadrant III`)
    }
    else if (x > 0 && y < 0){
        console.log(`Quadrant (IV)`)
    }
    else if (x == 0 & y != 0){
        console.log(`x axis`)
    }
    else if ( x != 0 && y == 0){
        console.log(`y axis`)
    }
    else if(x == 0 && y == 0){
        console.log(`center`)
    }
}
caretsianPlane(3, -1)

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
function validTriangle(side1, side2, side3){
    let firstCheck = side1 + side2
    let secondCheck = side1 + side3
    let thirdCheck = side2 + side3
    if(side3 > firstCheck || side2 > secondCheck || side1 > thirdCheck){
        console.log(`invalid triangle`)
    } 
    else if (side1 == side2 && side1 == side3 && side2 == side3){
        console.log(`equilateral triangle`)
    }
    else if (side1 == side2 || side1 == side3 || side2 == side3){
        console.log (`isosceles triangle`)
    }
    else if (side1 != side2 && side1 != side3 && side2 != side3){
        console.log(`scalene triangle`)
    }
}
validTriangle(31, 1, 1)

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
function plan(planLimit, day, usage){
    let daysRemian = 30 - day
    let avgUse = Math.round((usage / day)*100)/100
    console.log(`${day} days used, ${daysRemian} days remaining`)
    console.log(`Average daily use: ${avgUse} GB/day`)
    
    


}
plan(100, 15, 56)
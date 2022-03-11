// Your code here
// ~The Payroll System~
//Attempt #2 
function createEmployeeRecord(array) {
    let employee = {
        // 1) populates a firstName field from the 0th element
        firstName: array[0],
        // 2) populates a familyName field from the 1th element
        familyName: array[1],
        // 3) populates a title field from the 2th element
        title: array[2],
        // 4) populates a payPerHour field from the 3th element
        payPerHour: array[3],
        // // 5) initializes a field, timeInEvents, to hold an empty Array
        timeInEvents: new Array,
        // // 6) initializes a field, timeOutEvents, to hold an empty Array
        timeOutEvents: new Array,

    }
//console.log(employee)

return employee
}


function createEmployeeRecords(array){
    // console.log(array)
    let newArr = []
    let arrLength = array.length - 1
   
    for(let i = 0; i < arrLength; i++) {
        // console.log(array[i])
        // console.log(array[i+1])
        newArr.push(createEmployeeRecord(array[i]))
        newArr.push(createEmployeeRecord(array[i+=1]))

     }
        
    // console.log(newArr)
    return newArr
    
}

function createTimeInEvent(employee, dateStamp){
    let theDay = dateStamp.slice(0, 10)

    let theHours = parseInt(dateStamp.slice(11, 16))

    // console.log(dateStamp)
    // console.log(theDay)
    // console.log(theHours)

    let timeStamp = {
        type: "TimeIn",
        date: theDay,
        hour: theHours

    }
    
    // console.log(timeStamp)
    employee.timeInEvents.push(timeStamp)
    //console.log(employee)
    return employee

}

function createTimeOutEvent(employee, dateStamp){
    // console.log(dateStamp)
    let theDay = dateStamp.slice(0, 10)
    let theHours = parseInt(dateStamp.slice(11, 16))

    // console.log(theDay)
    // console.log(theHours)

    let timeStamp = {
        type: "TimeOut",
        date: theDay,
        hour: theHours

    }
    
    // console.log(timeStamp)
    employee.timeOutEvents.push(timeStamp)
    //console.log(employee)
    return employee

}

function hoursWorkedOnDate(employee, givenDate){
    // console.log(givenDate)
    // console.log(employee.timeInEvents)    
    // console.log(employee.timeOutEvents)
    let hoursWorkedOnDate

    let hoursOut = employee.timeOutEvents.find( (element) => element.date ===  givenDate).hour
    let hoursIn = employee.timeInEvents.find( (element) => element.date ===  givenDate).hour

    hoursWorkedOnDate = hoursOut - hoursIn
    
    let hoursWorked = hoursWorkedOnDate.toString()
    let hours = parseInt(hoursWorked.replace("00", ""))
    // console.log(hours, givenDate)
    return hours
}


function wagesEarnedOnDate(employee, givenDate){
    return hoursWorkedOnDate(employee, givenDate) * employee.payPerHour

}



// MAKE UNIVERSAL - FOR MORE TEST OPTIONS

function allWagesFor(employee){
    // console.log(employee)

    let mappingDates = employee.timeInEvents.map((element) => element.date)
    let sumDates = mappingDates.reduce((sum, date) => {
        // console.log(wagesEarnedOnDate(employee, date))
        return sum + wagesEarnedOnDate(employee, date)
    
    }, 0)

    return sumDates
}

function calculatePayroll(array){
    console.log(array)
    return array.reduce((sum, element) => {
        return sum + allWagesFor(element)
        
    }, 0)
   

    // array.forEach(employee => {
    //     // console.log(employee)
    //     // console.log(element.timeInEvents)  
    //     // console.log(element.timeOutEvents)
    //     totalPay += allWagesFor(employee)

    // })      
    // console.log(totalPay)
    // return totalPay

}

// Attempt #1
// VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV
// // Your code here
// // ~The Payroll System~
// function createEmployeeRecord(array) {
//     let employee = {
//         // 1) populates a firstName field from the 0th element
//         firstName: array[0],
//         // 2) populates a familyName field from the 1th element
//         familyName: array[1],
//         // 3) populates a title field from the 2th element
//         title: array[2],
//         // 4) populates a payPerHour field from the 3th element
//         payPerHour: array[3],
//         // // 5) initializes a field, timeInEvents, to hold an empty Array
//         timeInEvents: new Array,
//         // // 6) initializes a field, timeOutEvents, to hold an empty Array
//         timeOutEvents: new Array,

//     }
// //console.log(employee)

// return employee
// }


// function createEmployeeRecords(array){
//     // console.log(array)
//     let newArr = []
//     let arrLength = array.length - 1
   
//     for(let i = 0; i < arrLength; i++) {
//         // console.log(array[i])
//         // console.log(array[i+1])
//         newArr.push(createEmployeeRecord(array[i]))
//         newArr.push(createEmployeeRecord(array[i+=1]))

//      }
        
//     // console.log(newArr)
//     return newArr
    
// }

// function createTimeInEvent(employee, dateStamp){
//     let theDay = dateStamp.slice(0, 10)

//     let theHours = parseInt(dateStamp.slice(11, 16))

//     // console.log(dateStamp)
//     // console.log(theDay)
//     // console.log(theHours)

//     let timeStamp = {
//         type: "TimeIn",
//         date: theDay,
//         hour: theHours

//     }
    
//     // console.log(timeStamp)
//     employee.timeInEvents.push(timeStamp)
//     //console.log(employee)
//     return employee

// }

// function createTimeOutEvent(employee, dateStamp){
//     // console.log(dateStamp)
//     let theDay = dateStamp.slice(0, 10)
//     let theHours = parseInt(dateStamp.slice(11, 16))

//     // console.log(theDay)
//     // console.log(theHours)

//     let timeStamp = {
//         type: "TimeOut",
//         date: theDay,
//         hour: theHours

//     }
    
//     // console.log(timeStamp)
//     employee.timeOutEvents.push(timeStamp)
//     //console.log(employee)
//     return employee

// }

// function hoursWorkedOnDate(employee, givenDate){
//     // console.log(givenDate)
//     // console.log(employee.timeInEvents)    
//     // console.log(employee.timeOutEvents)
//     let hoursWorkedOnDate

//     let hoursOut = employee.timeOutEvents.find( (element) => element.date ===  givenDate).hour
//     let hoursIn = employee.timeInEvents.find( (element) => element.date ===  givenDate).hour


//     // for(const elementOut of employee.timeOutEvents){
//     //     // console.log(elementOut.date)
//     //     if(elementOut.date === givenDate){
//     //         let hourOut = elementOut.hour
//     //         hoursWorkedOnDate = hourOut
//     //         // console.log(hourOut)
//     //         // console.log(hoursWorkedOnDate)
//     //     }
//     //     for(const elementIn of employee.timeInEvents){
//     //         // console.log(elementIn.date)
//     //         if(elementIn.date === givenDate){
//     //             let hourIn = elementIn.hour
//     //             hoursWorkedOnDate = hoursWorkedOnDate - hourIn                
//     //             // console.log(hourIn)
//     //         }
       
//     //     }
       
//     // }

    
//     hoursWorkedOnDate = hoursOut - hoursIn
    
//     let hoursWorked = hoursWorkedOnDate.toString()
//     let hours = parseInt(hoursWorked.replace("00", ""))
//     // console.log(hours, givenDate)
//     return hours
// }


// function wagesEarnedOnDate(employee, givenDate){
//     // console.log(employee.payPerHour)
//     // console.log(givenDate)
//     // let hoursWorkedOnDate

//     // for(const elementOut of employee.timeOutEvents){
//     //     // console.log(elementOut.date)
//     //     if(elementOut.date === givenDate){
//     //         let hourOut = elementOut.hour
//     //         hoursWorkedOnDate = hourOut
//     //         // console.log(hourOut)
//     //         // console.log(hoursWorkedOnDate)
//     //     }
//     //     for(const elementIn of employee.timeInEvents){
//     //         // console.log(elementIn.date)
//     //         if(elementIn.date === givenDate){
//     //             let hourIn = elementIn.hour
//     //             hoursWorkedOnDate = hoursWorkedOnDate - hourIn                
//     //             // console.log(hourIn)
//     //         }
       
//     //     }
       
//     // }


//     // let hoursWorked = hoursWorkedOnDate.toString()
//     // let hours = parseInt(hoursWorked.replace("00", ""))
   
//     // hours = hours * employee.payPerHour
//     // // console.log(hours)
    
//     // return hours
//     return hoursWorkedOnDate(employee, givenDate) * employee.payPerHour

// }



// // MAKE UNIVERSAL - FOR MORE TEST OPTIONS

// function allWagesFor(employee){
//     // console.log(employee)

//     let mappingDates = employee.timeInEvents.map((element) => element.date)
//     let sumDates = mappingDates.reduce((sum, date) => {
//         // console.log(wagesEarnedOnDate(employee, date))
//         return sum + wagesEarnedOnDate(employee, date)
    
//     }, 0)

//     // console.log(sumDates)
//     // console.log(mappingDates)





//     // employee.timeInEvents.map(function (element){
//     //     console.log(element.date)
        
//     // })    
//     // employee.timeOutEvents.map(function (element){
//     //     console.log(element.date)
        
//     // }) 
    
//     // console.log(mapping)
//     // console.log(employee.timeOutEvents[0].date)
//     // console.log(employee.timeInEvents[0].date)
//     // console.log(employee.timeOutEvents[1].date)
//     // console.log(employee.timeInEvents[1].date)

//     // let allWages
//     // let allWages1
//     // let dayWorkedIn
//     // let dayWorkedOut
//     // let dayWorkedIn1
//     // let dayWorkedOut1
//     // let allWork
//     // let allWork1
    

//     // for (let index = 0; index < employee.timeInEvents.length - 1; index++) {
//     //     const elementIn = employee.timeInEvents[index];
//     //     dayWorkedIn = elementIn
//     // }
//     // for (let index = 0; index < employee.timeOutEvents.length - 1; index++) {
//     //     const elementOut = employee.timeOutEvents[index];
//     //     dayWorkedOut = elementOut

//     // }

//     // // console.log(dayWorkedIn.date)
//     // // console.log(dayWorkedOut.date)
//     // // console.log(dayWorkedIn.hour)
//     // // console.log(dayWorkedOut.hour)
//     // // wagesEarnedOnDate(employee, dayWorkedIn.date, )
//     // if(dayWorkedIn.date === dayWorkedOut.date){
//     //     allWork = dayWorkedOut.hour - dayWorkedIn.hour

//     // }
    
//     // let allWage = allWork.toString()
//     // allWages = parseInt(allWage.replace("00", ""))
//     // allWages = allWages * employee.payPerHour


//     // for (let index = 0; index < employee.timeInEvents.length; index++) {
//     //     const elementIn = employee.timeInEvents[index];
//     //     dayWorkedIn1 = elementIn
//     // }
//     // for (let index = 0; index < employee.timeOutEvents.length; index++) {
//     //     const elementOut = employee.timeOutEvents[index];
//     //     dayWorkedOut1 = elementOut

//     // }

//     // // console.log(dayWorkedIn.date)
//     // // console.log(dayWorkedOut.date)
//     // // console.log(dayWorkedIn.hour)
//     // // console.log(dayWorkedOut.hour)
//     // if(dayWorkedIn1.date === dayWorkedOut1.date){
//     //     allWork1 = dayWorkedOut1.hour - dayWorkedIn1.hour

//     // }
    
//     // let allWage1 = allWork1.toString()
//     // allWages1 = parseInt(allWage1.replace("00", ""))
//     // allWages1 = allWages1 * employee.payPerHour
//     // // console.log(allWages1)
//     // // console.log(allWages + allWages1)

//     // let allEmployeeWages = allWages + allWages1
//     return sumDates
// }

// function calculatePayroll(array){
//     let arrPay = []
//     let workIn
//     let workOut
//     let workIn1
//     let workOut1
//     let workPay
//     let workPay1

//     let totalPay = 0
//     let element1
//     let element2
//     let dayOfWorkIn
//     let dayOfWorkOut
//     console.log(array)
//     return array.reduce((sum, element) => {
//         return sum + allWagesFor(element)
        
//     }, 0)
   

//     // array.forEach(employee => {
//     //     // console.log(employee)
//     //     // console.log(element.timeInEvents)  
//     //     // console.log(element.timeOutEvents)
//     //     totalPay += allWagesFor(employee)

        

        
//         // console.log(employee.timeInEvents)
//         // console.log(employee.timeOutEvents)


//         // for (let index = 0; index < employee.timeInEvents.length; index++) {
//         //     element1 = employee.timeInEvents[index]
//         //     // console.log(element1)

//         //     dayOfWorkIn = element1.date
//         //     console.log(wagesEarnedOnDate(employee, element1.date))            
//         //     // console.log(dayOfWorkIn)


//         // }
//         // console.log("-----------------------------------------------------")

//         // for (let index = 0; index < employee.timeOutEvents.length; index++) {

//         //     element2 = employee.timeOutEvents[index]            
//         //     // console.log(element2)


//         //     dayOfWorkOut = element2.date            

//         // }


//         // console.log(element1.date)
//         // console.log(element2.date)
//         // if(element1.date === element2.date)(

//         // )




        
        


//         // for (let i = 0; i < element.timeInEvents.length - 1; i++) {
//         //     workIn = element.timeInEvents[i]
            
//         // }            

//         // // console.log(workIn.date)
       

//         // for (let i = 0; i < element.timeOutEvents.length - 1 ; i++) {
//         //     workOut = element.timeOutEvents[i]
//         // }
//         // // console.log(workIn)
//         // // console.log(workOut)
//         // // console.log(workIn.date)
//         // // console.log(workOut.date)
//         // if(workIn.date === workOut.date){
//         //     workPay = workOut.hour - workIn.hour

//         // }
//         // // console.log(workPay)


//         // for (let i = 0; i < element.timeInEvents.length; i++) {
//         //     workIn1 = element.timeInEvents[i]
//         // }
//         // for (let i = 0; i < element.timeOutEvents.length; i++) {
//         //     workOut1 = element.timeOutEvents[i]
//         // }

//         // if(workIn1.date === workOut1.date){
//         //     workPay1 = workOut1.hour - workIn1.hour

//         // }
        

//         // // console.log(workPay)
//         // // console.log(workPay1)
//         // let allPay = workPay + workPay1
//         // // console.log(allPay)

//         // let allPay1 = allPay.toString()
//         // allPay1 = parseInt(allPay1.replace("00", ""))
//         // allPay1 = allPay1 * 110
//         // allPay1 = allPay1.toString()
//         // // console.log(allPay1)
//         // //DIFINITELY THE WRONG WAY

//     // })
//     // console.log(totalPay)
//     // return totalPay

// }



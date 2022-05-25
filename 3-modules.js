

//modules - are basically encapsulated code - share minimum amount of code
//each file is a module 
//kind of like what we did in C++
//except everything is stored in objects and no concept of header files

require('./7-external_functions')


const data  = require('./4-data')
const compute_interest = require('./5-utils')
const generic_data = require('./6-alternate_export')
console.log(generic_data)
c = compute_interest(data.principal,data.time,data.interest)
console.log(c)


// Write your solution in this file!
const employee = { 
    name: "Max",
    streetAddress: "5 Main St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, ...{[key]:value}}
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmp = { ...employee};

    delete newEmp[key];

    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}

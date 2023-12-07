export interface InsertEmployeeRequest {
    username: String,
    password: String,
    salary: Int32Array,
    dob: String,
    accountType: String,
    employeeType: String,
    lastName: String,
    firstName: String,
    sex: String,
    number: String,
    address: String,
    startedDate: String,
    ssn: String,
    storeId: Int16Array
}

export interface UpdateEmployeeRequest {
    username: String,
    newPassword: String,
    newSalary: Int32Array,
    newDob: String,
    newAccountType: String,
    newEmployeeType: String,
    newLastName: String,
    newFirstName: String,
    newSex: String,
    oldNumber: String,
    newNumber: String,
    newAddress: String,
    newStartedDate: String,
    newSsn: String,
    newStoreId: Int16Array
}

export interface TopNCustomersRequest {
    startDate: String,
    endDate: String,
    noOfCustomers: Int16Array
}

export interface TopNProductiveEmployeesRequest {
    startDate: String,
    endDate: String,
    noOfEmployees: Int16Array
}
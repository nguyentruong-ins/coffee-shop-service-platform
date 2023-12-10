import { ApiProperty } from "@nestjs/swagger"

export class InsertEmployeeRequest {
    @ApiProperty()
    username: string;
    @ApiProperty()
    salary: number;
    @ApiProperty()
    dob: string;
    @ApiProperty()
    account_type: string;
    @ApiProperty()
    employee_type: string;
    @ApiProperty()
    last_name: string;
    @ApiProperty()
    first_name: string;
    @ApiProperty()
    sex: string;
    @ApiProperty()
    number: string;
    @ApiProperty()
    address: string;
    @ApiProperty()
    started_date: string;
    @ApiProperty()
    ssn: string;
    @ApiProperty()
    store_id: number
}

export class UpdateEmployeeRequest {
    @ApiProperty()
    username: string;
    @ApiProperty()
    newPassword: string;
    @ApiProperty()
    newSalary: number;
    @ApiProperty()
    newDob: string;
    @ApiProperty()
    newAccountType: string;
    @ApiProperty()
    newEmployeeType: string;
    @ApiProperty()
    newLastName: string;
    @ApiProperty()
    newFirstName: string;
    @ApiProperty()
    newSex: string;
    @ApiProperty()
    oldNumber: string;
    @ApiProperty()
    newNumber: string;
    @ApiProperty()
    newNumbers: Array<string>;
    @ApiProperty()
    newAddress: string;
    @ApiProperty()
    newStartedDate: string;
    @ApiProperty()
    newSsn: string;
    @ApiProperty()
    newStoreId: number
}

export class TopNCustomersRequest {
    @ApiProperty()
    from_date: string;
    @ApiProperty()
    to_date: string;
    @ApiProperty()
    top: number
}

export class TopNProductiveEmployeesRequest {
    @ApiProperty()
    from_date: string;
    @ApiProperty()
    to_date: string;
    @ApiProperty()
    top: number
}

export class DeleteEmployeeRequest {
    @ApiProperty()
    username: string
}

export class GetBestSellerRequest {
    @ApiProperty()
    from_date: string
    @ApiProperty()
    to_date: string
}
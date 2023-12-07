import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { InsertEmployeeRequest, TopNCustomersRequest, TopNProductiveEmployeesRequest, UpdateEmployeeRequest } from "./dto";

@Injectable({})
export class AdminService {
    constructor(private prismaService: PrismaService) {}

    async insertEmployee(request: InsertEmployeeRequest) {
        try {
            const result: number = await this.prismaService.$executeRawUnsafe(
                `
                EXEC InsertNewEmployeeAccount 
                @username = '${request.username}', 
                @password = '${request.password}',
                @salary = ${request.salary},
                @dob = '${request.dob}',
                @employee_type = '${request.employeeType}',
                @account_type = '${request.accountType}',
                @number = '${request.number}',
                @first_name = '${request.firstName}',
                @last_name = '${request.lastName}',
                @sex = '${request.sex}',
                @started_date = '${request.startedDate}',
                @ssn = '${request.ssn}',
                @address = '${request.address}',
                @store_id = ${request.storeId};
                `
            )
            console.log(result)
        }
        catch(err) {
            throw new HttpException(
                err.meta.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async updateEmployee(request: UpdateEmployeeRequest) {
        try {
            var array = new Array()
            request.newPassword !== undefined ? array.push('\@new_password = ' + '\'' + request.newPassword + '\'') : {}
            request.newSalary !== undefined ? array.push('\@new_salary = ' + request.newSalary) : {}
            request.newDob !== undefined ? array.push('\@new_dob = ' + '\'' + request.newDob + '\'') : {}
            request.newAccountType !== undefined ? array.push('\@new_account_type = ' + '\'' + request.newAccountType + '\'') : {}
            request.newEmployeeType !== undefined ? array.push('\@new_employee_type = ' + '\'' + request.newEmployeeType + '\'') : {}
            request.newLastName !== undefined ? array.push('\@new_last_name= ' + '\'' + request.newLastName + '\'') : {}
            request.newFirstName !== undefined ? array.push('\@new_first_name = ' + '\'' + request.newFirstName + '\'') : {}
            request.newSex !== undefined ? array.push('\@new_sex= ' + '\'' + request.newSex + '\'') : {}
            request.oldNumber !== undefined ? array.push('\@old_number = ' + '\'' + request.oldNumber + '\'') : {}
            request.newAddress !== undefined ? array.push('\@new_address = ' + '\'' + request.newAddress + '\'') : {}
            request.newStartedDate !== undefined ? array.push('\@new_started_date = ' + '\'' + request.newStartedDate + '\'') : {}
            request.newSsn !== undefined ? array.push('\@new_ssn= ' + '\'' + request.newSsn + '\'') : {}
            request.newStoreId !== undefined ? array.push('\@new_store_id = ' + request.newStoreId) : {}
            
            var updateString = array.join(',') + ';'
       
            const result: number = await this.prismaService.$executeRawUnsafe(`EXEC UpdateEmployeeAccount @username = 'nguyen.truong', ${updateString}`)
            
        } catch(err) {
            throw new HttpException(
                err.meta.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async deleteEmployee(username: String) {
        try {
            const result: number = await this.prismaService.$executeRawUnsafe(`EXEC RemoveEmployeeAccount '${username}';`)
        }
        catch(err) {
            throw new HttpException(
                err.meta.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async topVipCustormers(request: TopNCustomersRequest) {
        try {
            const result = await this.prismaService.$queryRawUnsafe(`EXEC GetTopCustomersWithLargestOrders '${request.startDate}', '${request.endDate}', ${request.noOfCustomers};`)
            console.log(result)
            return result
        }
        catch(err) {
            throw new HttpException(
                err.meta.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async topProductiveEmployee(request: TopNProductiveEmployeesRequest) {
        try {
            const result = await this.prismaService.$queryRawUnsafe(`EXEC GetTopSellingEmployees '${request.startDate}', '${request.endDate}', ${request.noOfEmployees};`)
            console.log(result)
            return result
        }
        catch(err) {
            throw new HttpException(
                err.meta.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }
}
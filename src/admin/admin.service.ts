import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { InsertEmployeeRequest, TopNCustomersRequest, TopNProductiveEmployeesRequest, UpdateEmployeeRequest } from "./dto";

@Injectable({})
export class AdminService {
    constructor(private prismaService: PrismaService) {}

    async insertEmployee(request: InsertEmployeeRequest) {
        try {
            request.dob.replaceAll('-','/')

            const result: number = await this.prismaService.$executeRawUnsafe(
                `
                EXEC InsertNewEmployeeAccount 
                @username = '${request.username}', 
                @password = '${request.password}',
                @salary = ${request.salary},
                @dob = '${request.dob}',
                @employee_type = '${request.employee_type}',
                @account_type = '${request.account_type}',
                @number = '${request.number}',
                @first_name = '${request.first_name}',
                @last_name = '${request.last_name}',
                @sex = '${request.sex}',
                @started_date = '${request.started_date}',
                @ssn = '${request.ssn}',
                @address = '${request.address}',
                @store_id = ${request.store_id};
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
            request.newDob.replaceAll('-','/')

            var array = new Array()
            request.newPassword !== undefined ? array.push('\@new_password = ' + '\'' + request.newPassword + '\'') : {}
            request.newSalary !== undefined ? array.push('\@new_salary = ' + request.newSalary) : {}
            request.newDob !== undefined ? array.push('\@new_dob = ' + '\'' + request.newDob + '\'') : {}
            request.newAccountType !== undefined ? array.push('\@new_account_type = ' + '\'' + request.newAccountType + '\'') : {}
            request.newEmployeeType !== undefined ? array.push('\@new_employee_type = ' + '\'' + request.newEmployeeType + '\'') : {}
            request.newLastName !== undefined ? array.push('\@new_last_name= ' + '\'' + request.newLastName + '\'') : {}
            request.newFirstName !== undefined ? array.push('\@new_first_name = ' + '\'' + request.newFirstName + '\'') : {}
            request.newSex !== undefined ? array.push('\@new_sex= ' + '\'' + request.newSex + '\'') : {}
            // request.oldNumber !== undefined ? array.push('\@old_number = ' + '\'' + request.oldNumber + '\'') : {}
            request.newAddress !== undefined ? array.push('\@new_address = ' + '\'' + request.newAddress + '\'') : {}
            request.newStartedDate !== undefined ? array.push('\@new_started_date = ' + '\'' + request.newStartedDate + '\'') : {}
            request.newSsn !== undefined ? array.push('\@new_ssn= ' + '\'' + request.newSsn + '\'') : {}
            request.newStoreId !== undefined ? array.push('\@new_store_id = ' + request.newStoreId) : {}
            
            var updateString = array.join(',') + ';'
            
            const result: number = await this.prismaService.$executeRawUnsafe(`EXEC UpdateEmployeeAccount @username = 'nguyen.truong', ${updateString}`)
            
            const result1: number = await this.prismaService.$executeRawUnsafe(`
            DELETE FROM employee_numbers WHERE employee_username = '${request.username}';
            `) 
            
            for (const number in request.newNumbers) {
                await this.prismaService.$executeRawUnsafe(`INSERT INTO employee_numbers VALUES ('${request.username}', ${request.newNumbers[number]});`)
            }

            console.log(request.newNumbers)

            // for ()

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
            const result = await this.prismaService.$queryRawUnsafe(`EXEC GetTopCustomersWithLargestOrders '${request.from_date}', '${request.to_date}', ${request.top};`)
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
            const result = await this.prismaService.$queryRawUnsafe(`EXEC GetTopSellingEmployees '${request.from_date}', '${request.to_date}', ${request.top};`)
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

    async getEmployees() {
        try {
            const result = await this.prismaService.employee_accounts.findMany()

            for (const employee in result) {
                const test = await this.prismaService.employee_numbers.findMany(
                    { 
                        select: {
                            number: true
                        }, 
                        where: { employee_username: result[employee].username }
                    }
                )

                const numbers = []

                console.log(test)
                for (const numId in test) {
                    const newNum = (test[numId]['number'])
                    numbers.push(newNum)
                }

                result[employee]['numbers'] = numbers
            }
            return {result: result}
        } catch(err) {
            throw new HttpException(
                err.meta.message,   
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async getEmployeeDetail(username: string) {
        try {
            const result = await this.prismaService.employee_accounts.findUnique({ where: { username: username } })

            const employee_numbers = await this.prismaService.employee_numbers.findMany({
                select: { number: true },
                where: { employee_username: username }
            })

            result['numbers'] = []

            for (const i in employee_numbers) {
                result['numbers'].push(employee_numbers[i]['number'])
            }

            return result
        } catch (err) {
            throw new HttpException(
                err.meta.message,   
                HttpStatus.BAD_REQUEST
            )
        }
    }
}
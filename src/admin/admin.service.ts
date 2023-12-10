import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { GetBestSellerRequest, InsertEmployeeRequest, TopNCustomersRequest, TopNSellingShifts, UpdateEmployeeRequest } from "./dto";

@Injectable({})
export class AdminService {
    constructor(private prismaService: PrismaService) {}

    async insertEmployee(request: InsertEmployeeRequest) {
        try {
            request.dob.replaceAll('-','/')

            await this.prismaService.$executeRawUnsafe(
                `
                EXEC InsertNewEmployeeAccount 
                @username = '${request.username}', 
                @password = '${request.username}',
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
            return {
                statusCode: 200,
                message: ""
            }
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
            
            await this.prismaService.$executeRawUnsafe(`EXEC UpdateEmployeeAccount @username = '${request.username}', ${updateString}`)
            
            await this.prismaService.$executeRawUnsafe(`
            DELETE FROM employee_numbers WHERE employee_username = '${request.username}';
            `) 
            
            for (const number in request.newNumbers) {
                await this.prismaService.$executeRawUnsafe(`INSERT INTO employee_numbers VALUES ('${request.username}', '${request.newNumbers[number]}');`)
            }

            return {
                statusCode: 200,
                message: ""
            }

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
            return {
                statusCode: 200,
                message: ""
            }
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
            return {
                statusCode: 200,
                message: result
            }
        }
        catch(err) {
            throw new HttpException(
                err.meta.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async topSellingShifts(request: TopNSellingShifts) {
        try {
            const result = await this.prismaService.$queryRawUnsafe(`EXEC GetTopSellingShifts '${request.from_date}', '${request.to_date}', ${request.top};`)
            return {
                statusCode: 200,
                message: result
            }
        }
        catch(err) {
            throw new HttpException(
                err.meta.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async getEmployeesInShift(shiftId: number) {
        try {
            const result = await this.prismaService.$queryRawUnsafe(`EXEC GetEmployeesByShiftId ${shiftId};`)
            return {
                statusCode: 200,
                message: result
            }
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

                for (const numId in test) {
                    const newNum = (test[numId]['number'])
                    numbers.push(newNum)
                }

                result[employee]['numbers'] = numbers
            }
            return {
                statusCode: 200,
                message: result
            }
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
            
            if (result == null) {
                throw new HttpException("Cannot find username", 400)
            }

            else {
                // const result = await this.prismaService.$queryRawUnsafe(`SELECT * FROM employee_accounts WHERE username='${username}'`)
    
                const password = await this.prismaService.accounts.findFirst({
                    select: { password: true},
                    where: {username: username}
                })

                result['password'] = password.password

                const employee_numbers = await this.prismaService.employee_numbers.findMany({
                    select: { number: true },
                    where: { employee_username: username }
                })
    
                result['numbers'] = []
    
                for (const i in employee_numbers) {
                    result['numbers'].push(employee_numbers[i]['number'])
                }
    
                return {
                    statusCode: 200,
                    message: result
                }
            }
        } catch (err) {
            throw new HttpException(
                (err.meta == undefined) ? err.response : err.meta.message,   
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async getStores() {
        try {
            // Get current date
            const date = new Date()

            const currentMonth = date.getMonth()

            // Convert current date to start and end day of the month
            const firstDate = new Date(date.getFullYear(), currentMonth, 2)
            const lastDate = new Date(date.getFullYear(), currentMonth+1, 1)

            // Get stores
            var stores = await this.prismaService.stores.findMany()

            // Execute the calculate function to calculate total revenue
            for (const i in stores) {
                const totalRevenue = await this.prismaService.$queryRawUnsafe(`
                    DECLARE @result MONEY;
                    SET @result = dbo.GetTotalRevenue(${stores[i].id}, '${firstDate.toISOString()}', '${lastDate.toISOString()}');
                    SELECT @result AS TotalRevenue;
                `)
    
                // Update the month_revenue
                await this.prismaService.$executeRawUnsafe(`
                    UPDATE stores SET month_revenue = ${totalRevenue[0].TotalRevenue} WHERE id = ${stores[i].id}
                `)
            }

            // Assign total revenue to the store
            stores = await this.prismaService.stores.findMany()

            return {
                statusCode: 200,
                message: stores
            }
        } catch(err) {
            throw new HttpException(
                (err.meta == undefined) ? err.response : err.meta.message,   
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async getBestSeller(request: GetBestSellerRequest) {
        try {
            const bestSellerResponse = await this.prismaService.$queryRawUnsafe(`
                SELECT * FROM GetBestSellers('${request.from_date}', '${request.to_date}');
            `)
            
            return {
                statusCode: 200,
                message: bestSellerResponse
            }
        } catch(err) {
            throw new HttpException(
                (err.meta == undefined) ? err.response : err.meta.message,   
                HttpStatus.BAD_REQUEST
            )
        }
    }
}
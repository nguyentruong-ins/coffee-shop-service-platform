import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { DeleteEmployeeRequest, InsertEmployeeRequest, TopNCustomersRequest, TopNProductiveEmployeesRequest, UpdateEmployeeRequest } from "./dto";

@Controller('/api/admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @Post('/add-employee')
    insertEmployee(@Body() request: InsertEmployeeRequest) {
        return this.adminService.insertEmployee(request)
    }

    @Post('/update-employee')
    updateEmployee(@Body() request: UpdateEmployeeRequest) {
        return this.adminService.updateEmployee(request)
    }

    @Post('/delete-employee')
    deleteEmployee(@Body() request: DeleteEmployeeRequest) {
        return this.adminService.deleteEmployee(request.username)
    }

    @Post('/top-n-vip-customers')
    getTopNVipCusotmers(@Body() request: TopNCustomersRequest) {
        return this.adminService.topVipCustormers(request)
    }

    @Post('/top-n-productive-employees')
    getTopNProductiveEmployees(@Body() request: TopNProductiveEmployeesRequest) {
        return this.adminService.topProductiveEmployee(request)
    }

    @Get('/employees')
    getEmployees() {
        return this.adminService.getEmployees()
    }

    @Post('/employee')
    getEmployeeDetail(@Body("username") username: string) {
        return this.adminService.getEmployeeDetail(username)
    }
}
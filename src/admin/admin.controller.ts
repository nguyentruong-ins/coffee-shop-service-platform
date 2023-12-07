import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { InsertEmployeeRequest, TopNCustomersRequest, TopNProductiveEmployeesRequest, UpdateEmployeeRequest } from "./dto";

@Controller('/api/admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @Post('/insert-employee')
    insertEmployee(@Body() request: InsertEmployeeRequest) {
        return this.adminService.insertEmployee(request)
    }

    @Post('/update-employee')
    updateEmployee(@Body() request: UpdateEmployeeRequest) {
        return this.adminService.updateEmployee(request)
    }

    @Post('/delete-employee')
    deleteEmployee(@Body("username") username: String) {
        return this.adminService.deleteEmployee(username)
    }

    @Post('/top-n-vip-customers')
    getTopNVipCusotmers(@Body() request: TopNCustomersRequest) {
        return this.adminService.topVipCustormers(request)
    }

    @Post('/top-n-productive-employees')
    getTopNProductiveEmployees(@Body() request: TopNProductiveEmployeesRequest) {
        return this.adminService.topProductiveEmployee(request)
    }
}
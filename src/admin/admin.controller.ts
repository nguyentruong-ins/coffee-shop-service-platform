import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { DeleteEmployeeRequest, GetBestSellerRequest, InsertEmployeeRequest, TopNCustomersRequest, TopNProductiveEmployeesRequest, UpdateEmployeeRequest } from "./dto";

@Controller('/api/admin')
export class AdminController {
    constructor(private adminService: AdminService) {}

    @Post('/add-employee')
    @HttpCode(200)
    insertEmployee(@Body() request: InsertEmployeeRequest) {
        return this.adminService.insertEmployee(request)
    }

    @Post('/update-employee')
    @HttpCode(200)
    updateEmployee(@Body() request: UpdateEmployeeRequest) {
        return this.adminService.updateEmployee(request)
    }

    @Post('/delete-employee')
    @HttpCode(200)
    deleteEmployee(@Body() request: DeleteEmployeeRequest) {
        return this.adminService.deleteEmployee(request.username)
    }

    @Post('/top-n-vip-customers')
    @HttpCode(200)
    getTopNVipCusotmers(@Body() request: TopNCustomersRequest) {
        return this.adminService.topVipCustormers(request)
    }

    @Post('/top-n-productive-employees')
    @HttpCode(200)
    getTopNProductiveEmployees(@Body() request: TopNProductiveEmployeesRequest) {
        return this.adminService.topProductiveEmployee(request)
    }

    @Get('/employees')
    @HttpCode(200)
    getEmployees() {
        return this.adminService.getEmployees()
    }

    @Post('/employee')
    @HttpCode(200)
    getEmployeeDetail(@Body("username") username: string) {
        return this.adminService.getEmployeeDetail(username)
    }

    @Get('/stores')
    @HttpCode(200)
    getStores() {
        return this.adminService.getStores()
    }

    @Post('/best-seller')
    @HttpCode(200)
    getBestSeller(@Body() request: GetBestSellerRequest) {
        return this.adminService.getBestSeller(request)
    }
}
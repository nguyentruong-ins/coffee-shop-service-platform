import { Body, Controller, Get, Post } from "@nestjs/common";
import exp from "constants";
import { EmployeeService } from "./employee.service";
import { AddVoucherRequest, InsertItemRequest, InsertOrderRequest, OrderInfoRequest, RemoveItemRequest } from "./dto";

@Controller('/api/employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService) {}

    @Post('/create-order')
    createOrder(@Body() request: InsertOrderRequest) {
        return this.employeeService.createOrder(request)
    }

    @Post('/add-item') 
    addItem(@Body() request: InsertItemRequest) {
        return this.employeeService.addItem(request)
    }

    @Post('/remove-item')
    removeItem(@Body() request: RemoveItemRequest) {
        return this.employeeService.removeItem(request)
    }

    @Post('/order')
    getOrderInfo(@Body() request: OrderInfoRequest) {
        return this.employeeService.getOrder(request.order_id)
    }

    @Post('/add-voucher')
    addVoucher(@Body() request: AddVoucherRequest) {
        return this.employeeService.addVoucher(request)
    }
}
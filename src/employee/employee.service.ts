import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AddVoucherRequest, InsertItemRequest, InsertOrderRequest, RemoveItemRequest } from "./dto";

@Injectable({})
export class EmployeeService {
    constructor(private prismaService: PrismaService) {}

    async createOrder(request: InsertOrderRequest) {
        try {
            await this.prismaService.$executeRawUnsafe(`INSERT INTO orders (total_amount) VALUES (0);`)
            
            const result = await this.prismaService.$queryRawUnsafe(`SELECT TOP (1) * FROM orders ORDER BY ordered_at DESC;`) as any

            await this.prismaService.directly_orders.create({
                data: {
                    order_id: result[0].id,
                    customer_id: request.customer_id,
                    change: 0,
                    customer_payment: 0,
                    export_emp_username: request.employee_username
                }
            })

            return {
                statusCode: 200,
                message: result[0]
            }
        }
        catch(err) {
            throw new HttpException(
                err.meta.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async addItem(request: InsertItemRequest) {
        try {
            const item = await this.prismaService.items.findFirstOrThrow({
                where: { id: request.item_id}
            })

            await this.prismaService.$executeRawUnsafe(`
                INSERT INTO order_items VALUES (${request.order_id}, ${request.item_id}, ${item.base_price}, ${request.quantity});
            `)

        }
        catch(err) {
            throw new HttpException(
                err.meta.message,
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async removeItem(request: RemoveItemRequest) {
        try {
            const item = await this.prismaService.items.findFirstOrThrow({
                where: { id: request.item_id}
            })

            const order_item = await this.prismaService.order_items.findFirst({
                where: {
                    order_id: request.order_id,
                    item_id: request.item_id
                }
            })
            
            if (order_item == undefined) {
                await this.prismaService.$executeRawUnsafe(`
                    INSERT INTO order_items VALUES (${request.order_id}, ${request.item_id}, ${item.base_price}, 1);
                `)
                return {
                    statusCode: 400,
                    message: "No item in order"
                }
            }
            else {
                if (order_item.quantity == 1) {
                    const result = await this.prismaService.$executeRawUnsafe(`
                        DELETE FROM order_items
                        WHERE order_id = ${request.order_id} AND item_id = ${request.item_id};
                    `)
                }
                else {
                    await this.prismaService.$executeRawUnsafe(`
                        UPDATE order_items 
                        SET quantity = ${order_item.quantity - 1}
                        WHERE order_id = ${request.order_id} AND item_id = ${request.item_id};
                    `)
                }
            }
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

    async getOrder(order_id: number) {
        try {
            const order = await this.prismaService.orders.findFirstOrThrow({
                where: {
                    id: order_id
                }
            })
            return {
                statusCode: 200,
                message: order
            }
        }
        catch(err) {
            if (err.meta == null || err.meta == undefined) {
                throw new HttpException(
                    err.message,
                    HttpStatus.BAD_REQUEST
                )
            }
            else{
                throw new HttpException(
                    err.meta.message,
                    HttpStatus.BAD_REQUEST
                )
            }
        }
    }

    async addVoucher(request: AddVoucherRequest) {
        try {
            await this.prismaService.$executeRawUnsafe(`
                INSERT INTO order_vouchers VALUES (${request.order_id}, ${request.voucher_id})
            `)
            return {
                statusCode: 200,
                message: ""
            }
        }
        catch(err) {
            if (err.meta == null || err.meta == undefined) {
                throw new HttpException(
                    err.message,
                    HttpStatus.BAD_REQUEST
                )
            }
            else{
                throw new HttpException(
                    err.meta.message,
                    HttpStatus.BAD_REQUEST
                )
            }
        }
    }
}
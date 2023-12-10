export class InsertItemRequest {
    item_id: number;
    order_id: number;
    quantity: number
}

export class InsertOrderRequest {
    customer_id: number;
    employee_username: string
}

export class RemoveItemRequest {
    item_id: number;
    order_id: number;
}

export class OrderInfoRequest {
    order_id: number
}

export class AddVoucherRequest {
    order_id: number;
    voucher_id: number;
}
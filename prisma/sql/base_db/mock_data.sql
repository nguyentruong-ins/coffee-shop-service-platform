-- 026_insert_ingredients.sql
insert into ingredients

values
	('milk');
insert into ingredients

values
	('sugar');
insert into ingredients

values
	('flour');
insert into ingredients

values
	('vanilla extract');
insert into ingredients

values
	('cocoa powder');
insert into ingredients

values
	('eggs');
insert into ingredients

values
	('butter');
insert into ingredients

values
	('whipped cream');
insert into ingredients

values
	('strawberries');
insert into ingredients

values
	('lemon juice');
insert into ingredients

values
	('mint leaves');
insert into ingredients

values
	('chocolate chips');
insert into ingredients

values
	('condensed milk');
insert into ingredients

values
	('coffee');
insert into ingredients

values
	('rum');
insert into ingredients

values
	('caramel sauce');
insert into ingredients

values
	('nutella');
insert into ingredients

values
	('coconut flakes');
insert into ingredients

values
	('ice cream');
insert into ingredients

values
	('raspberries');

-- 027_insert_categories.sql
INSERT INTO categories
values
	('smoothie');
INSERT INTO categories
values
	('coffee');
INSERT INTO categories
values
	('juice');
INSERT INTO categories
values
	('tea');
INSERT INTO categories
values
	('desert');

-- 028_insert_items.sql
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Capuchino', '...', '...', 45000, 2);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Lover Coffee', '...', '...', 50000, 2);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Magical Coffee', '...', '...', 45000, 2);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Egg Coffee', '...', '...', 45000, 2);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Hot Ice Coffee', '...', '...', 45000, 2);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Weasel Coffee', '...', '...', 45000, 2);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Chocolate Coffee', '...', '...', 45000, 2);

INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Chocolate Matba', '...', '...', 45000, 1);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Happy Liquid', '...', '...', 45000, 1);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Coolest Smoothie', '...', '...', 45000, 1);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Its Green Inside Smoothie', '...', '...', 45000, 1);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Banana Smoothie', '...', '...', 45000, 1);

INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Detox Juice', '...', '...', 45000, 3);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Dragon Fruit Juice', '...', '...', 45000, 3);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Grape Juice', '...', '...', 45000, 3);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Orange Juice', '...', '...', 45000, 3);

INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Lemon Peach Tea', '...', '...', 45000, 4);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Victory Tea', '...', '...', 45000, 4);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Lucky Tea', '...', '...', 45000, 4);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Chrysanthemum', '...', '...', 45000, 4);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Honey Tea', '...', '...', 45000, 4);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Bubble Tea', '...', '...', 45000, 4);

INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Berry Pudding', '...', '...', 50000, 5);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Fruit Yogurt', '...', '...', 50000, 5);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Lovely Donut', '...', '...', 50000, 5);
INSERT INTO items
	(item_name, description, instruction, base_price, category_id)
values
	('Macarons', '...', '...', 50000, 5);


-- 029_insert_into_menus.sql
INSERT INTO menus
	(menu_name, period, started_at)
values
	('Normal Menu', 0, convert(datetime, '01/01/2000', 103))

-- 030_insert_into_accounts.sql
INSERT INTO accounts
	(username, password)
VALUES
	('employee1', 'password1');
INSERT INTO accounts
	(username, password)
VALUES
	('employee2', 'password2');
INSERT INTO accounts
	(username, password)
VALUES
	('employee3', 'password3');
INSERT INTO accounts
	(username, password)
VALUES
	('employee4', 'password4');
INSERT INTO accounts
	(username, password)
VALUES
	('employee5', 'password5');
INSERT INTO accounts
	(username, password)
VALUES
	('employee6', 'password6');
INSERT INTO accounts
	(username, password)
VALUES
	('employee7', 'password7');
INSERT INTO accounts
	(username, password)
VALUES
	('employee8', 'password8');
INSERT INTO accounts
	(username, password)
VALUES
	('employee9', 'password9');
INSERT INTO accounts
	(username, password)
VALUES
	('employee10', 'password10');
INSERT INTO accounts
	(username, password)
VALUES
	('employee11', 'password11');
INSERT INTO accounts
	(username, password)
VALUES
	('employee12', 'password12');
INSERT INTO accounts
	(username, password)
VALUES
	('employee13', 'password13');
INSERT INTO accounts
	(username, password)
VALUES
	('employee14', 'password14');
INSERT INTO accounts
	(username, password)
VALUES
	('employee15', 'password15');
INSERT INTO accounts
	(username, password)
VALUES
	('employee16', 'password16');
INSERT INTO accounts
	(username, password)
VALUES
	('employee17', 'password17');
INSERT INTO accounts
	(username, password)
VALUES
	('employee18', 'password18');
INSERT INTO accounts
	(username, password)
VALUES
	('employee19', 'password19');
INSERT INTO accounts
	(username, password)
VALUES
	('employee20', 'password20');

INSERT INTO accounts
	(username, password)
VALUES
	('customer1', 'password1');
INSERT INTO accounts
	(username, password)
VALUES
	('customer2', 'password2');
INSERT INTO accounts
	(username, password)
VALUES
	('customer3', 'password3');
INSERT INTO accounts
	(username, password)
VALUES
	('customer4', 'password4');
INSERT INTO accounts
	(username, password)
VALUES
	('customer5', 'password5');
INSERT INTO accounts
	(username, password)
VALUES
	('customer6', 'password6');
INSERT INTO accounts
	(username, password)
VALUES
	('customer7', 'password7');
INSERT INTO accounts
	(username, password)
VALUES
	('customer8', 'password8');
INSERT INTO accounts
	(username, password)
VALUES
	('customer9', 'password9');
INSERT INTO accounts
	(username, password)
VALUES
	('customer10', 'password10');

-- 031_insert_into_memberships.sql
INSERT INTO memberships
	(description, membership_type, discount_percent)
values
	('...', 'BRONZE', 5);
INSERT INTO memberships
	(description, membership_type, discount_percent)
values
	('...', 'SILVER', 7);
INSERT INTO memberships
	(description, membership_type, discount_percent)
values
	('...', 'GOLD', 10);
INSERT INTO memberships
	(description, membership_type, discount_percent)
values
	('...', 'DIAMOND', 15);
INSERT INTO memberships
	(description, membership_type, discount_percent)
values
	('...', 'VIP', 25);

-- 032_insert_into_customers.sql
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('FEMALE', 'Adan', 'McConway', '5957591109', 3);
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('FEMALE', 'Janina', 'McLewd', '4651383549', 2);
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('FEMALE', 'Fiorenze', 'Boij', '6717187461', 3);
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('MALE', 'Christoforo', 'Floyde', '2875947838', 3);
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('MALE', 'Celka', 'Fidgett', '2565452069', 1);
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('OTHER', 'Lyman', 'Winsome', '3431531803', 4);
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('FEMALE', 'Morgen', 'Goodey', '9345745078', 1);
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('FEMALE', 'Vicki', 'Braitling', '1896472820', 5);
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('OTHER', 'Miguelita', 'Grimme', '6006341027', 2);
insert into customers
	(sex, first_name, last_name, phone_number, membership_id)
values
	('MALE', 'Madlen', 'Craiker', '7165935688', 1);

-- 033_insert_into_customer_accounts.sql
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
values
	('customer1', 0, 'ACTIVE', convert(datetime, '21/11/2023', 103), 1);
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
values
	('customer2', 100, 'INACTIVE', convert(datetime, '01/01/2017', 103), 2);
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
values
	('customer3', 20, 'ACTIVE', convert(datetime, '1/11/2023', 103), 3);
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
values
	('customer4', 50, 'ACTIVE', convert(datetime, '20/11/2023', 103), 4);
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
VALUES
	('customer5', 75, 'ACTIVE', convert(datetime, '15/10/2023', 103), 5);
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
VALUES
	('customer6', 10, 'ACTIVE', convert(datetime, '05/11/2023', 103), 6);
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
VALUES
	('customer7', 30, 'INACTIVE', convert(datetime, '28/09/2022', 103), 7);
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
VALUES
	('customer8', 90, 'ACTIVE', convert(datetime, '10/12/2023', 103), 8);
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
VALUES
	('customer9', 15, 'ACTIVE', convert(datetime, '03/11/2023', 103), 9);
INSERT INTO customer_accounts
	(username, total_points, account_status, latest_ordered_at, customer_id)
VALUES
	('customer10', 50, 'INACTIVE', convert(datetime, '12/07/2021', 103), 10);

-- 034_insert_into_stores.sql
ALTER TABLE stores 
NOCHECK CONSTRAINT fk_manager_employee
INSERT INTO stores
	(manager_username, store_name, address, store_number, opened_time, closed_time, opened_date, month_revenue, no_employees)
values
	('employee1', 'Store 1', '123 Main St', '0910101020', '8:00', '22:00', '1-01-2021', 0, 5);
INSERT INTO stores
	(manager_username, store_name, address, store_number, opened_time, closed_time, opened_date, month_revenue, no_employees)
values
	('employee6', 'Store 2', '456 Elm St', '0910101021', '8:00', '22:00', '2-01-2021', 0, 5);
INSERT INTO stores
	(manager_username, store_name, address, store_number, opened_time, closed_time, opened_date, month_revenue, no_employees)
VALUES
	('employee11', 'Store 3', '789 Oak St', '0910101022', '7:30', '21:00', '3-01-2021', 0, 4);
INSERT INTO stores
	(manager_username, store_name, address, store_number, opened_time, closed_time, opened_date, month_revenue, no_employees)
VALUES
	('employee15', 'Store 4', '321 Maple Ave', '0910101023', '7:30', '21:30', '4-01-2021', 0, 3);
INSERT INTO stores
	(manager_username, store_name, address, store_number, opened_time, closed_time, opened_date, month_revenue, no_employees)
VALUES
	('employee19', 'Store 5', '654 Pine St', '0910101024', '7:00', '21:00', '5-01-2021', 0, 3);

-- 035_insert_into_employee_accounts.sql
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
values
	('employee1', 12000000, '123 Main St', convert(datetime, '20/10/1986', 103), 'MANAGER', 'Vitoria', 'Rainsden', 'MALE', '1-30-2021', '111111111', 'FULLTIME', 1);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
values
	('employee2', 10000000, '456 Elm St', convert(datetime, '15/7/1992', 103), 'EMPLOYEE', 'Cindi', 'Liddon', 'MALE', '1-30-2021', '111111112', 'FULLTIME', 1);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
values
	('employee3', 8000000, '789 Oak St', convert(datetime, '24/10/2002', 103), 'SHIPPER', 'Lisetta', 'Americi', 'FEMALE', '3-30-2021', '111111113', 'PARTTIME', 1);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
values
	('employee4', 10000000, '321 Maple Ave', convert(datetime, '10/11/2000', 103), 'EMPLOYEE', 'Cindi', 'Rainsden', 'MALE', '4-30-2021', '111111114', 'FULLTIME', 1);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
values
	('employee5', 8000000, '654 Pine St', convert(datetime, '12/11/2002', 103), 'EMPLOEE', 'Husein', 'Hosier', 'FEMALE', '5-30-2021', '111111115', 'PARTTIME', 1);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
values
	('employee6', 14000000, '987 Oak St', convert(datetime, '7/4/2000', 103), 'MANAGER', 'Saunderson', 'Rainsden', 'MALE', '6-30-2021', '222222222', 'FULLTIME', 2);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee7', 8000000, '123 Main St', CONVERT(DATETIME, '12/05/1990', 103), 'EMPLOYEE', 'John', 'Smith', 'MALE', '2-15-2021', '222222223', 'FULLTIME', 2);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee8', 7000000, '456 Elm St', CONVERT(DATETIME, '03/08/1993', 103), 'EMPLOYEE', 'Emily', 'Johnson', 'FEMALE', '3-20-2021', '222222224', 'PARTTIME', 2);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee9', 9000000, '789 Oak St', CONVERT(DATETIME, '05/12/1995', 103), 'SHIPPER', 'David', 'Williams', 'MALE', '4-10-2021', '222222225', 'FULLTIME', 2);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee10', 6000000, '321 Maple Ave', CONVERT(DATETIME, '09/03/1998', 103), 'EMPLOYEE', 'Emma', 'Brown', 'FEMALE', '5-05-2021', '222222226', 'PARTTIME', 2);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee11', 15000000, '654 Pine St', CONVERT(DATETIME, '22/11/2000', 103), 'MANAGER', 'Daniel', 'Jones', 'MALE', '6-25-2021', '333333333', 'FULLTIME', 3);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee12', 8000000, '789 Oak St', CONVERT(DATETIME, '01/05/1991', 103), 'SHIPPER', 'Olivia', 'Taylor', 'FEMALE', '7-10-2021', '333333334', 'PARTTIME', 3);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee13', 10000000, '123 Main St', CONVERT(DATETIME, '15/4/1994', 103), 'EMPLOYEE', 'Michael', 'Anderson', 'MALE', '8-20-2021', '333333335', 'FULLTIME', 3);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee14', 7000000, '456 Elm St', CONVERT(DATETIME, '28/7/1997', 103), 'EMPLOYEE', 'Sophia', 'Martinez', 'FEMALE', '9-05-2021', '333333336', 'PARTTIME', 3);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee15', 11000000, '789 Oak St', CONVERT(DATETIME, '10/10/1999', 103), 'MANAGER', 'Matthew', 'Garcia', 'MALE', '10-15-2021', '444444444', 'FULLTIME', 4);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee16', 6000000, '321 Maple Ave', CONVERT(DATETIME, '01/12/1992', 103), 'SHIPPER', 'James', 'Lee', 'MALE', '11-01-2021', '444444445', 'PARTTIME', 4);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee17', 8000000, '123 Main St', CONVERT(DATETIME, '25/04/1993', 103), 'EMPLOYEE', 'Ava', 'Lopez', 'FEMALE', '12-10-2021', '444444446', 'FULLTIME', 4);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee18', 7000000, '456 Elm St', CONVERT(DATETIME, '18/08/1995', 103), 'SHIPPER', 'Jacob', 'Hernandez', 'MALE', '01-15-2022', '555555555', 'PARTTIME', 5);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee19', 13000000, '789 Oak St', CONVERT(DATETIME, '11/03/1998', 103), 'MANAGER', 'Mia', 'Gonzalez', 'FEMALE', '02-28-2022', '555555556', 'FULLTIME', 5);
INSERT INTO employee_accounts
	(username, salary, address, dob, account_type, first_name, last_name, sex, started_date, ssn, employee_type, store_id)
VALUES
	('employee20', 6000000, '321 Maple Ave', CONVERT(DATETIME, '16/03/2001', 103), 'EMPLOYEE', 'Liam', 'Rodriguez', 'MALE', '03-10-2022', '555555557', 'PARTTIME', 5);
ALTER TABLE stores 
CHECK CONSTRAINT fk_manager_employee

-- 036_insert_vouchers.sql
INSERT INTO vouchers
	(description, voucher_name, started_at, status, promotional_amount, total_applied_amount, period)
values
	('...', 'Monthly voucher', '11-01-2023', 0, 20000, 100000, 30);

-- 037_insert_orders.sql
-- user_1
INSERT INTO orders
	(total_amount, discount_amount_by_voucher, discount_amount_by_membership, ordered_at)
values
	(200000, 20000, 20000, '11-10-2023 07:00');
INSERT INTO orders
	(total_amount, discount_amount_by_voucher, discount_amount_by_membership, ordered_at)
values
	(50000, 0, 5000, '11-15-2023 08:00');
INSERT INTO orders
	(total_amount, discount_amount_by_voucher, discount_amount_by_membership, ordered_at)
values
	(90000, 0, 9000, '11-16-2023 09:00');

-- user_2
INSERT INTO orders
	(total_amount, discount_amount_by_voucher, discount_amount_by_membership, ordered_at)
values
	(500000, 20000, 125000, '11-17-2023 10:00');
INSERT INTO orders
	(total_amount, discount_amount_by_voucher, discount_amount_by_membership, ordered_at)
values
	(200000, 20000, 50000, '11-18-2023 11:00');

-- user_3
INSERT INTO orders
	(total_amount, discount_amount_by_voucher, discount_amount_by_membership, ordered_at)
values
	(300000, 0, 30000, '11-09-2023 12:00');
INSERT INTO orders
	(total_amount, discount_amount_by_voucher, discount_amount_by_membership, ordered_at)
values
	(200000, 0, 20000, '11-10-2023 13:00');

-- user_4
INSERT INTO orders
	(total_amount, discount_amount_by_voucher, discount_amount_by_membership, ordered_at)
values
	(300000, 0, 30000, '11-08-2023 14:00');
INSERT INTO orders
	(total_amount, discount_amount_by_voucher, discount_amount_by_membership, ordered_at)
values
	(200000, 0, 20000, '11-10-2023 17:00');

-- 038_insert_online_orders.sql
INSERT INTO online_orders
	(order_id, status, shipping_fee, shipping_address, predicted_arrived_time, customer_account_username, export_employee_username, shipping_employee_username, discount_amount_by_point)
VALUES
	(1, 'DONE', 0, '...', '11-10-2023 10:00', 'customer1', 'employee5', 'employee3', 0);
INSERT INTO online_orders
	(order_id, status, shipping_fee, shipping_address, predicted_arrived_time, customer_account_username, export_employee_username, shipping_employee_username, discount_amount_by_point)
VALUES
	(4, 'DONE', 0, '...', '11-17-2023 14:00', 'customer2', 'employee5', 'employee3', 0);
INSERT INTO online_orders
	(order_id, status, shipping_fee, shipping_address, predicted_arrived_time, customer_account_username, export_employee_username, shipping_employee_username, discount_amount_by_point)
VALUES
	(5, 'DONE', 0, '...', '11-18-2023 13:00', 'customer2', 'employee5', 'employee3', 0);
INSERT INTO online_orders
	(order_id, status, shipping_fee, shipping_address, predicted_arrived_time, customer_account_username, export_employee_username, shipping_employee_username, discount_amount_by_point)
VALUES
	(7, 'DONE', 0, '...', '11-10-2023 10:00', 'customer3', 'employee4', 'employee6', 0);

-- 039_insert_directly_orders.sql
INSERT INTO directly_orders
	(order_id, change, customer_payment, customer_id, export_emp_username)
VALUES
	(2, 40000, 200000, 1, 'employee5');
INSERT INTO directly_orders
	(order_id, change, customer_payment, customer_id, export_emp_username)
VALUES
	(3, 0, 50000, 1, 'employee5');
INSERT INTO directly_orders
	(order_id, change, customer_payment, customer_id, export_emp_username)
VALUES
	(6, 100000, 400000, 3, 'employee4');
INSERT INTO directly_orders
	(order_id, change, customer_payment, customer_id, export_emp_username)
VALUES
	(8, 0, 300000, 4, 'employee4');
INSERT INTO directly_orders
	(order_id, change, customer_payment, customer_id, export_emp_username)
VALUES
	(9, 0, 200000, 4, 'employee4');

-- 040_insert_order_items.sql
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(1, 2, 50000, 4);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(2, 2, 50000, 1);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(3, 18, 45000, 1);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(3, 19, 45000, 1);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(4, 17, 45000, 3);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(4, 19, 45000, 3);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(4, 11, 45000, 3);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(4, 9, 45000, 1);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(4, 2, 50000, 1);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(5, 2, 50000, 4);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(6, 2, 50000, 3);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(6, 23, 50000, 3);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(7, 23, 50000, 2);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(7, 2, 50000, 2);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(8, 2, 50000, 3);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(8, 23, 50000, 1);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(8, 24, 50000, 1);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(8, 25, 50000, 1);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(9, 23, 50000, 2);
INSERT INTO order_items
	(order_id, item_id, actual_price, quantity)
VALUES
	(9, 2, 50000, 2);


-- Mockup data for procedure 2 that return top employees in sales
-- Mock-up data for Months table
INSERT INTO Months
	(month, year)
VALUES
	(1, 2023),
	(2, 2023),
	(3, 2023),
	(4, 2023),
	(5, 2023),
	(6, 2023),
	(7, 2023),
	(8, 2023),
	(9, 2023),
	(10, 2023),
	(11, 2023),
	(12, 2023);

-- Mock-up data for Shifts table
INSERT INTO shifts
	("month", "year", started_at, ended_at, "day")
VALUES
	(11, 2023, '05:00:00', '11:00:00', 8),
	(11, 2023, '11:00:00', '17:00:00', 8),
	(11, 2023, '17:00:00', '23:00:00', 8),
	(11, 2023, '05:00:00', '11:00:00', 9),
	(11, 2023, '11:00:00', '17:00:00', 9),
	(11, 2023, '17:00:00', '23:00:00', 9),
	(11, 2023, '05:00:00', '11:00:00', 10),
	(11, 2023, '11:00:00', '17:00:00', 10),
	(11, 2023, '17:00:00', '23:00:00', 10),
	(11, 2023, '05:00:00', '11:00:00', 15),
	(11, 2023, '11:00:00', '17:00:00', 15),
	(11, 2023, '17:00:00', '23:00:00', 15),
	(11, 2023, '05:00:00', '11:00:00', 16),
	(11, 2023, '11:00:00', '17:00:00', 16),
	(11, 2023, '17:00:00', '23:00:00', 16),
	(11, 2023, '05:00:00', '11:00:00', 17),
	(11, 2023, '11:00:00', '17:00:00', 17),
	(11, 2023, '17:00:00', '23:00:00', 17),
	(11, 2023, '05:00:00', '11:00:00', 18),
	(11, 2023, '11:00:00', '17:00:00', 18),
	(11, 2023, '17:00:00', '23:00:00', 18);

INSERT INTO employee_shifts
	(username, shift_id, "month", "year")
VALUES
	-- 08/11
	('employee1', 1, 11, 2023),
	('employee2', 1, 11, 2023),
	('employee3', 2, 11, 2023),
	('employee4', 2, 11, 2023),
	('employee5', 3, 11, 2023),
	('employee6', 3, 11, 2023),

	-- 09/11
	('employee1', 4, 11, 2023),
	('employee2', 4, 11, 2023),
	('employee3', 5, 11, 2023),
	('employee4', 5, 11, 2023),
	('employee5', 6, 11, 2023),
	('employee6', 6, 11, 2023),

	-- 10/11
	('employee1', 7, 11, 2023),
	('employee2', 7, 11, 2023),
	('employee3', 8, 11, 2023),
	('employee4', 8, 11, 2023),
	('employee5', 9, 11, 2023),
	('employee6', 9, 11, 2023),

	-- 15/11
	('employee1', 10, 11, 2023),
	('employee2', 10, 11, 2023),
	('employee3', 11, 11, 2023),
	('employee4', 11, 11, 2023),
	('employee5', 12, 11, 2023),
	('employee6', 12, 11, 2023),

	-- 16/11
	('employee1', 13, 11, 2023),
	('employee2', 13, 11, 2023),
	('employee3', 14, 11, 2023),
	('employee4', 14, 11, 2023),
	('employee5', 15, 11, 2023),
	('employee6', 15, 11, 2023),

	-- 17/11
	('employee1', 16, 11, 2023),
	('employee2', 16, 11, 2023),
	('employee3', 17, 11, 2023),
	('employee4', 17, 11, 2023),
	('employee5', 18, 11, 2023),
	('employee6', 18, 11, 2023),

	-- 18/11
	('employee1', 19, 11, 2023),
	('employee2', 19, 11, 2023),
	('employee3', 20, 11, 2023),
	('employee4', 20, 11, 2023),
	('employee5', 21, 11, 2023),
	('employee6', 21, 11, 2023)
    ;


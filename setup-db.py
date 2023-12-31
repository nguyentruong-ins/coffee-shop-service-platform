import pyodbc
SERVER = 'localhost'
DATABASE = 'master'
USERNAME = 'sa'
PASSWORD = 'yourStrong(!)Password'

connectionString = f'DRIVER={{ODBC Driver 18 for SQL Server}};SERVER={SERVER};DATABASE={DATABASE};UID={USERNAME};PWD={PASSWORD};Encrypt=Optional;Authentication=SqlPassword'
conn = pyodbc.connect(connectionString, autocommit=True)

cursor = conn.cursor()

with open("./prisma/sql/base_db/reset_database.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/base_db/initiate_tables.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/base_db/mock_data.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

# 1.2.1
with open("./prisma/sql/1.2.1/proc_insert_new_employee.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/1.2.1/proc_update_employee.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/1.2.1/proc_delete_employee.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

# 1.2.2
with open("./prisma/sql/1.2.2/trigger_discount_amount_by_membership.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/1.2.2/trigger_discount_amount_by_voucher.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/1.2.2/trigger_no_employee.sql", "r", encoding='utf-8-sig') as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/1.2.2/trigger_total_amount.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

# 1.2.3
with open("./prisma/sql/1.2.3/proc_top_customers.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/1.2.3/proc_top_shifts.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/1.2.3/proc_employee_in_shift.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

# 1.2.4
with open("./prisma/sql/1.2.4/func_best_sellers.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)

with open("./prisma/sql/1.2.4/func_store_revenue.sql", "r") as f:
    SQL_QUERY = f.read()
    cursor.execute(SQL_QUERY)
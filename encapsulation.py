class BankExample:
    def __init__(self, acc_num, min_bal, pin):
        self.min_bal = min_bal
        self.acc_num = acc_num
        self.__pin = pin 
    def show(self):
        print(f"Account: {self.acc_num}, Balance: {self.min_bal}")
    def deposit(self, acc_num, d_money):
        if self.acc_num == acc_num:
            if d_money > 0:
                self.min_bal += d_money
                print(f"Deposit successful! Added {d_money}. New Balance: {self.min_bal}")
            else:
                print("Deposit amount must be greater than 0")
        else:
            print("Incorrect account number")
    def withdraw(self, w_money, p_num):
        if self.__pin == p_num:
            if w_money <= self.min_bal:
                self.min_bal -= w_money
                print(f"Withdraw successful! Withdrawn {w_money}. New Balance: {self.min_bal}")
            else:
                print("Insufficient balance")
        else:
            print("Incorrect PIN")
    def check_bal(self, pin):
        if self.__pin == pin:
            print(f"Your balance is: {self.min_bal}")
        else:
            print("Incorrect PIN")
abc = BankExample("123123123123", 10000, 1822)
d_money = int(input("Enter amount to deposit:-- "))
acc_num = input("Enter account number to deposit amount:-- ")
abc.deposit(acc_num, d_money)
w_money = int(input("Enter amount to withdraw:--"))
pin_numberforwithdraw = int(input("Enter PIN to withdraw amount:--"))
abc.withdraw(w_money, pin_numberforwithdraw)
pin_numberforbalcheck = int(input("Enter PIN to check balance:--"))
abc.check_bal(pin_numberforbalcheck)

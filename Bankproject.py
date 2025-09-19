class SBIBank:
    def __init__(self,user_name,main_bal,pin=1234):
        self.name=user_name
        self.__main=main_bal
        self.__pin=pin
        self.account_active_status=True
        # self.__isatmcardholder=False
        # self.__isatm_freezing=False
        # self.__ischeckbook=False
    def __verify_pin(self,pin):
        self.__verify_pin==pin
        return self.__pin==pin
    def __updatemainbalbydeposit(self,amount):
        main_bal+=self.__main
        print(f"your {amount}is credited to you account",{self.__main})
    def __updatemainbalbywithdraw(self,amount):
        main_bal-=self.__main
        print(f"your{amount}is debited in your account",{self.__main})
    def __show_mainbal(self):
        print(f"{self.__main}is your main balance")
    def __raisecheckbook(self):
        self.__ischeckbook=True
        return f"checkbook Approved"
    def __raiseatmcard(self):
        self.__isatmcard=True
        return f"atmcard Approved"   
    def __raiseatmfreezing(self):
        self.__isatmfreezing=True
        return f"Atm_Freezing Approved"
    def withdraw(self,pin,amount):
        if self.__verify_pin(pin):
            if self.__main>amount:
                self.__main-=amount
                print(f"{amount} is debited to your account.amount:--",{self.__main})
            else:
                print("Insufficient balance in your account amount:--",{self.__main})
        else:
            print("Wrong pin")
    def deposit(self,pin,amount):
        if self.__verify_pin==pin:
            if self.__main>amount:
                self.__main+=amount
                print(f"{amount} is credited to your account.",{self.__main})
            # else:
            #     print("your accont is not active status")
        else:
            print("Wrong pin")
    def checkbal(self,pin):
        if self.account_active_status:
            if self.__verify_pin(pin):
                print(f"{self.__main}is your account balance")
            else:
                print("wrong pin")
    def request_for_checkbook(self):
        statusofcheckboook=self.__raisecheckbook()
        print("Chechbook Approved")
    def request_for_atmcard(self):
        statusofAtmcard=self.__raiseatmcard()
        print("Your Atmcard has Approved")
    def request_for_atm_freezing(self):
        statusofatmfreezing=self.__raiseatmfreezing()
        print("Your accountFreezing is Approved")
class savingAccount(SBIBank):
    def __init__(self,name,main):
        self.loanlimit=200000
        super().__init__(name,main)
    def personalLoanRaise(self,amount):
        if amount>self.loanlimit:
            print("your are exceeded your personal loan limit")
        else:
            print("your are quoting in your loan limit..loan granted soon")

class BussinessAccount(SBIBank):
    def __init__(self,name,main):
        self.loanlimit=3000000
        super().__init__(name,main)
    def BussinessLoanRaise(self,amount):
        if amount>self.loanlimit:
            print("your are exceeded your loan limit")
        else:
            print("your bussiness loan request is approved loan limit..loan granted soon")

sa=savingAccount("likki",50000)
ba=BussinessAccount("likki",300000)
amount=int(input("Enter your amount:"))
pin=int(input("Enter your pin:"))
sa.personalLoanRaise(amount)
ba.BussinessLoanRaise(amount)
sa.request_for_checkbook()
sa.request_for_atmcard()
sa. request_for_atm_freezing()
sa.withdraw(amount,pin)
sa.deposit(amount,pin)
sa.checkbal(pin)




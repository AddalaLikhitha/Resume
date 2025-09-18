class AtmMachine:
    def __init__(self,name,mainbal,pin):
        self.name=name
        self.__mainbal=mainbal
        self.__pin=pin
    def __verify_pin(self,incomingpin):
        return self.__pin==incomingpin
    def _update_mainbal_by_deposit(self,deposit_amount):
        self.__mainbal += deposit_amount
    # def _update_mainbal_by_withdraw(self,withdraw_amount):
    #     self.__mainbal -= withdraw_amount
    def _check_Atm_ammount(self,ea,type):
        if "withdraw"==type:
            if self.atmamount<ea:
                return False
            else:
                return True
    def _update_mainbal_by_withdraw(self,incomingwithdrawamount):
        if self.__mainbal>=incomingwithdrawamount:
            self.__mainbal-=incomingwithdrawamount
            print(f"{incomingwithdrawamount}is debited your account{self.__mainbal}")
        else:
            print("insufficent balance in your account")

    def deposit(self,ep,ea):
        if self.__verify_pin(ep):
            self._update_mainbal_by_deposit(ea)
            print(f"{ea}amount is credited to your main bal{self.__mainbal}")
        else:
            print("Wrong pin")
    def withdraw(self,ep,ea):
            if self.__verify_pin(ep):
                if self.__mainbal>ea:
                    print(f"{ea} is debited to your account.")
                else:
                    print("you account has insufficient funds. ")
            else:
                print("you entered wrong pin.")


atm=AtmMachine("likki",48000,1822)
enterpin=int(input("Enter a Pin:--"))
enterdeposit=int(input("Enter deposit amount:--"))
enterwithdraw=int(input("Enter withdraw amount:--"))
atm.deposit(enterpin,enterdeposit)
atm.withdraw(enterpin,enterwithdraw)





    
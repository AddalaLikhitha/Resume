class resturant():
    resturant_name="zomato"
    def __init__(self,name,menu):
        self.name=name
        self.menu=menu
    def show_menu(self):
        for i,p in self.menu.items():
            print(f"item is--{i} price--{p}")
        
    def orderFood(self,i,q):
        self.item=i
        self.quantity=q
        if i in self.menu:
            total=self.menu[i]*q
            print(f"you item{q} {i} bill:{total}")
        else:
            print("item is not available")
dominous_menu={
    "veg-pizza":200,
    "nonveg-pizza":300,
    "pizza-mania":150
}
kfc_menu={
    "crispy-chicken":499,
    "burger":200
}
dominos=resturant("Dominos",dominous_menu)
kfc=resturant("Kfc",kfc_menu)
dominos.show_menu()
dominos.orderFood("nonveg-pizza",1)
kfc.show_menu()
kfc.orderFood("burger",2)


class driver():
    def __init__(self,n,model,p_k_r):
        self.drive_name=n
        self.car_model=model
        self.per_k_r=p_k_r
    def showdetails(self):
        print(f"Driver:{self.drive_name},carmodel:{self.car_model},rate{self.per_k_r}")
    def calculatefare(self,distance):
        fare=distance*self.per_k_r
        print(f"distance {distance},fare{fare}")
driver1=driver("devi","od",10)
driver2=driver("likhi","bmw",20)
driver3=driver("pallavi","suzukhi",30)

driver1.showdetails()
driver1.calculatefare(10)
driver2.showdetails()
driver2.calculatefare(9)
driver3.showdetails()
driver3.calculatefare(8)


class product():
    def __init__(self,n,price,stock):
        self.p_name=n
        self.price=price
        self.stock=stock
    def showdetails(self):
        print(f"product:{self.p_name} ,price:{self.price},stock:{self.stock}")
    def buyproduct(self,qty):
        if self.stock>=qty:
            self.stock-=qty
            total=self.stock*qty
            print(f"reduces stock: {self.stock} cost:{total}")
        else:
            print("Out of stock")
product1=product("hp",45000,10)
product2=product("IQ",27000,20)
product3=product("nykee",2000,3)

product1.showdetails()
product1.buyproduct(2)
product2.showdetails()
product2.buyproduct(1)
product3.showdetails()
product3.buyproduct(0)










        
        
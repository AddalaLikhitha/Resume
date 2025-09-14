class order():
    def __init__(self,id,items,amount):
        self.id=id
        self.items=items
        self.amount=amount
    def show_order(self):
        tax=50
        total=self.amount+tax
        print(f"{self.id} {self.items} {self.amount}")
        print(f"your total amount is {total}")
class showDelivery(order):
    def __init__(self,i,item,a):
        self.i=i
        self.item=item
        self.a=a
        super().__init__(i,item,a)
    def show_delivery(self):
        print("Delivery status: Out for delivery ")
menu={
    "chicken":150,
    "mutton":200
}
my_order=showDelivery(1,"chicken", menu["chicken"] + menu["mutton"])
my_order.show_order()      
my_order.show_delivery() 


class product():
    def __init__(self,name,price,category):
        self.name=name
        self.price=price
        self.category=category
    def show_product(self):
        platform="amazon"
        details=self.category+platform
        print(f"{self.name}  {self.price}   {self.category}")

class discountProduct(product):
    def __init__(self,name,price,category):
        # self.n=n
        # self.p=p
        # self.c=c
        super().__init__(name,price,category)
    def show_discount(self,discount_percentage):
        super().show_product()
        # final_price=final_price
        final_price=self.price-(self.price * discount_percentage/100)
        print(final_price)
        # total=discountdetails+final_price

disproduct=discountProduct("HP",25000,"laptop")
disproduct.show_discount(20)

class ride():
    def __init__(self,id,pickup,drop):
        self.r_id=id
        self.pickup=pickup
        self.drop=drop
    def show_ride(self):
        distance=12
        # total=ride_details+distance
        print(f"ride details are {self.r_id}  {self.pickup}  {self.drop} {distance} km")
class driver(ride):
    def show_driver(self):
        super().show_ride()
        print("Driver status: on the way")

driver_status=driver(1,"kphb","hitechcity")
driver_status.show_driver()
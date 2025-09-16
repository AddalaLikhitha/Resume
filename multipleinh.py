class person():
    def __init__(self,name,contact):
        self.name=name
        self.contact=contact
class driver():
    def __init__(self,l_no,rating):
        self.licence_no=l_no
        self.rating=rating
class uberDriver(person,driver):
    def __init__(self,name,contact,l_no,rating,car):
        self.car=car
        person.__init__(self,name,contact)
        driver.__init__(self,l_no,rating)
    def show(self):
        print(f"Name:{self.name} ")
        print(f"Contact:{self.contact}")
        print(f"Licence_no: {self.licence_no} ")
        print(f"Rating:{self.rating}")
        print(f"Car:{self.car}")

d1=uberDriver("Rahul","9876543210","DLX12345",4.9,"Hyundai i20")
d1.show()

class person():
    def __init__(self,name,contact):
        self.name=name
        self.contact=contact
class employee():
    def __init__(self,emp_id,salary):
        self.emp_id=emp_id
        self.salary=salary
class DeliveryPartner(person,employee):
    def __init__(self,name,contact,emp_id,salary,vehicle):
        self.vehicle=vehicle
        person.__init__(self,name,contact)
        employee.__init__(self,emp_id,salary)
    def showDetails(self):
        print(f"Name:{self.name}")
        print(f"Contact:{self.contact}")
        print(f"EMP_id{self.emp_id}")
        print(f"Salary:{self.salary}")
        print(f"{self.vehicle}")
object=DeliveryPartner("Anil","9876543210","BKP101",12000,"Scooter")
object.showDetails()



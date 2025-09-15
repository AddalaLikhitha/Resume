import requests
apiurl="https://jsonplaceholder.typicode.com/users"
response=requests.get(apiurl)
class user():
    def __init__(self,id,name,email):
        self.id=id
        self.name=name
        self.email=email
    def showUser(self):
        print(f"User{self.id}->{self.name}({self.email})")
    def getEmailDomain(self):
        return self.email.split('@')[1]
users=[]
if response.status_code==200:
     data=response.json()
     for i in data[:5]:
        object=user(i["id"],i["name"],i["email"])
        users.append(object)
        object.getEmailDomain()
        object.showUser()

import requests
apiurl="https://jsonplaceholder.typicode.com/posts"
response=requests.get(apiurl)
class post():
    def __init__(self,userId,id,title,body):
        self.userId=userId
        self.id=id
        self.title=title
        self.body=body
    def showsummary(self):
        print(f"{self.id}->{self.title[:20]}.....")
    def getWordcount(self):
        count=len(self.body.split())
        print(f"words: {count}")
if response.status_code==200:
     data=response.json()
     for i in data[:3]:
        obj=post(i["userId"],i["id"],i["title"],i["body"])
        obj.getWordcount()
        obj.showsummary()

import requests
apiurl="https://dummyjson.com/products"
response=requests.get(apiurl)
class product():
    def __init__(self,id,title,price,stock):
        self.id=id
        self.title=title
        self.price=price
        self.stock=stock
    def showdetails(self):
        print(f"product:{self.id},price:({self.price}),stock:{self.stock}")
    def buyproduct(self,qty):
        if self.stock>=qty:
            self.stock-=qty
            total=self.stock*qty
            print(f"reduces stock: {self.stock} cost:{total}")
        else:
            print("Out of stock")
products=[]
if response.status_code==200:
    data=response.json()
    for i in data["products"][:5]:
        obj=product(i["id"],i["title"],i["price"],i["stock"])
        products.append(obj)
        obj.buyproduct(2)
        obj.showdetails()







        




         



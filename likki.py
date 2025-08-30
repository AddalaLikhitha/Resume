import requests
apiurl="https://jsonplaceholder.typicode.com/posts"
response=requests.get(apiurl)
# print(response.text)
# print(response.status_code)
# # print(response.json())
if response.status_code==200:
     data=response.json()
     total_posts=len(data)
     print("total returned posts:",total_posts)

for i in data:
      if i["id"]==15:
        print(i["title"])

count=0
for i in data:
    if i["userId"]==3:
        count+=1
        # print("userId:",i["userId"])
print("total posts by userid==3:",count)

for i in data:
    if i["id"]==50:
        print(i["title"],i["body"])

for i in data:
    if i["userId"]==7:
        print(i["id"])

import requests
apiurl="https://jsonplaceholder.typicode.com/users"
response=requests.get(apiurl)
if response.status_code==200:
  data=response.json()
  total_users=len(data)
  print("total number of users:",total_users)

for i in data:
  if i["id"]==5:
    print(i["name"],i["email"])

for i in data:
  if i["username"]=="Bret":
    print(i)

for i in data:
  if i["address"]["city"]=="South Christy":
    print(i["name"])

for i in data:
  if "Group" in i["company"]["name"]:
    print(i["id"])

import requests
apiurl="https://jsonplaceholder.typicode.com/todos"
response=requests.get(apiurl)
if response.status_code==200:
  data=response.json()
  total_todos=len(data)
  print("total number of todos returned:",total_todos)

for i in data:
  if i["id"]==42:
    print(i["title"])

for i in data:
  if i[ "userId"]==3:
    print("todos belong to that user",i)

for i in data:
  if i["completed"]== False:
    print(i["id"])



count = 0
for i in data:
    if i["userId"] == 5 and i["completed"] == True:
        count += 1
print("completed todos for userId=5:", count)




    



    

     

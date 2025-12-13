from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.
def empform(request):
    return render(request,"empform.html")

@api_view(["POST"])
def create_emp(request):
    emps=request.data
    print(emps)
    return Response({"msg":"emp created successfully","data":emps})

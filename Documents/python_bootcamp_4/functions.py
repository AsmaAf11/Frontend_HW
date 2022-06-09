from unittest import result


def r():
    print("hello")

r()


def say_hello(name:str,age:int=20):
    print("hello"+name+"you are"+str(age)+"years old")

say_hello("Asma",22)

def multiply_numbers(x:int, y:int) -> int:
    '''
        this is a function that takes two parameters and return the multiplication
    '''
    return x*y

result = multiply_numbers(5,6)
print(result)

def add(a, b):
    return a + b

def multiply(a, b):
    return a * b

if __name__ == "__main__":
    print("Calculator")
    num1 = float(input("Enter first number: "))
    num2 = float(input("Enter second number: "))
    operation = input("Choose operation (+ or *): ")
    if operation == "+":
        result = add(num1, num2)
    elif operation == "*":
        result = multiply(num1, num2)
    else: 
        print("Invalid operation")
        exit()
    print(f"Result: {result}")
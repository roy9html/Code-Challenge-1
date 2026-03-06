# Pizza Order Cost Calculator
# This program asks the user for pizza order details and calculates the total cost.

# Get the order details from the user.
pizza_size = input("Enter pizza size (small or large): ").strip().lower()
number_of_toppings = int(input("Enter the number of toppings: "))
delivery_distance = float(input("Enter delivery distance in miles: "))

# Determine the base price based on pizza size.
if pizza_size == "small":
    base_price = 8
elif pizza_size == "large":
    base_price = 12
else:
    print("Invalid pizza size. Please enter 'small' or 'large'.")
    raise SystemExit

# Calculate the toppings cost.
toppings_cost = number_of_toppings * 1

# Calculate the delivery fee.
if delivery_distance == 0:
    delivery_fee = 0
elif delivery_distance <= 5:
    delivery_fee = 2
else:
    delivery_fee = 2 + (delivery_distance - 5)

# Calculate the total order cost.
total_cost = base_price + toppings_cost + delivery_fee

# Display the final cost using an f-string.
print(f"The total cost of your pizza order is ${total_cost:.2f}.")
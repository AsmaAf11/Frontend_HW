#conditions
product_price1:float=50.99
product_price2:float=99.99


if product_price1>product_price2:
    print("the price is too high")
elif product_price2>product_price1:
    print("the price is not too high")

else:
    print("its not high")
print("statement ended")

traffic_light="green"
is_no_car_infront:bool=True

if traffic_light =="green"and is_no_car_infront:
    print("you can drive")
elif  traffic_light =="red"and not is_no_car_infront:
    print("pleaase stop")

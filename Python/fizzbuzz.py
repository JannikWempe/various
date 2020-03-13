# 142
# for i in range(1,101):
#  if i%3==0 and i%5==0:
#   print("FizzBuzz")
#  elif i%3==0:
#   print("Fizz")
#  elif i%5==0:
#   print("Buzz")
#  else:
#   print(i)

# # 114
# for i in range(101):
#  print("FizzBuzz" if i%3==0 and i%5==0 else ("Fizz" if i%3==0 else ("Buzz" if i%5==0 else i)))

# # 103
# for i in range(101):print("FizzBuzz" if i%15==0 else ("Fizz" if i%3==0 else ("Buzz" if i%5==0 else i)))

# # 100
# a="Fizz"
# b="Buzz"
# for i in range(101):print(a+b if i%15<1 else (a if i%3<1 else (b if i%5<1 else i)))

# # 98
# a="Fizz"
# b="Buzz"
# while i <101:print(a+b if i%15<1 else (a if i%3<1 else (b if i%5<1 else i)));i+=1

# 60
i=1
while i<101:print("Fizz"*(i%3<1)+"Buzz"*(i%5<1)or i);i+=1

print((200-62)/100)

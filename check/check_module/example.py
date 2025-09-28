import checkmod
domain = "hi.bob"
checkmod.checkForURL(domain)
if checkmod.isExist == True:
    print("hi.bob does exist!")
else:
    print("hi.bob doesnt exist!")
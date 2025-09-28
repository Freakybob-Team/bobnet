import urllib.request, json 
with urllib.request.urlopen("https://freakybob-team.github.io/bobnet/json/sites.json") as url:
    data = json.loads(url.read().decode())
isExist = None
print("Check for BobNet.")
print("Check if a BobNet domain exists!")
domain = input("What domain would you like to check (ex: hi.bob)? ")
if domain in data['sitename']:
    print(domain + " exists in BobNet's database!")
    isExist = True
else:
    print(domain + " doesn't exist in BobNet's database!")
    isExist = False
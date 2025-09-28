# Check (Module) for BobNet
# For use in applications.
# 2025 Freakybob Team. Licensed under GPL-3.0.
# (you must declare domain in your app! isExist is designed to show if a URL exists)
import urllib.request, json 
def checkForURL(domain):
    global isExist
    with urllib.request.urlopen("https://freakybob-team.github.io/bobnet/json/sites.json") as url:
        data = json.loads(url.read().decode())
    isExist = None
    if domain in data['sitename']:
        isExist = True
    else:
        isExist = False
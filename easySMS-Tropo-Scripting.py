#----------
# Easy SMS Send Example Written in Python and Runs on Tropo Scripting Platform
# Initate this this using your Tropo API key assigned to this app like this:
# http://api.tropo.com/1.0/sessions?action=create&token=myAPIkey&myString=hello+world&myNumber=14075551212
# (replace myAPIkey with the one assigned to your app)
# (replace myNumber with the target number you want to receive the SMS)
#----------

message(myString, {
  "to":myNumber, 
  "network":"SMS", 
  "callerID":"+15162347664"})
  
# ^^^ Make sure you set callerID to the phone number assigned to your Tropo App!!!
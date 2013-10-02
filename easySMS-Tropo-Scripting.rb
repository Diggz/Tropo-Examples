#----------
# Easy SMS Send Example Written in Python and Runs on Tropo Scripting Platform
# 
# Create a new Tropo Scripting App, copy/paste this code and assign a U.S. or Candian phone number
# Send an SMS using the Tropo API key assigned to this app like this:
# http://api.tropo.com/1.0/sessions?action=create&token=myAPIkey&myString=hello+world&myNumber=14075551212
#  -- replace myAPIkey with the one assigned to your app --
#  -- replace myNumber with the target number you want to receive the SMS --
#----------

message($myString, {
  :to => $myNumber, 
  :network => "SMS", 
  :callerID => "+18722338226"})
  
# ^^^ Make sure you replace callerID to the phone number assigned to your Tropo App!!!

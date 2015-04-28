#----------
# Slack SMS Example Written in Ruby and Runs on Tropo Scripting Platform
# Rember to change the callerID in to match your Tropo app's phone number
#----------

# Fetch phone numbers in a comma delimited string
phones = $myNumbers

# Start the SMS sending!
numbers = phones.split(",")
numbers.each do |number|

   message($myString+" from "+$user_name+": "+$text, {
	:to => number,
	:network => "SMS",
	:callerID => "+14155551212"
	})

end

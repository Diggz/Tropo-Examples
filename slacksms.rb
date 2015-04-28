#----------
# Slack SMS Example Written in Ruby and Runs on Tropo Scripting Platform
# Remember to change the callerID in to match your Tropo app's phone number
#----------

# Fetch phone numbers in a comma delimited string
phones = $myNumbers

# Start the SMS sending!
numbers = phones.split(",")
numbers.each do |number|

   message($myString+" "+$user_name+": "+$text, {
	:to => number,
	:network => "SMS",
	:callerID => "+14155551212"
	})

end

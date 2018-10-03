# ruby code snippits

## BEGIN USAGE - always executed first
	# puts "this is the first thing in the file"
	# BEGIN { puts "this will be run when the script starts"}
	# >>this will be run when the script starts
	# >>this is the first thing in the file

## END USAGE - always executed last
	# END {puts "this is the END puts"}
	# puts "This is the last command, after the puts"
	# >>This is the last command, after the puts
	# >>this is the END puts

##alias usage - make alias to function. why?
	# def print_a
	# 	puts "A"
	# end
	# alias print_b print_a # newname / oldname
	# print_b	

# begin / ensure / rescue
	# begin
	# 	puts "begin makes a block of code that is executed in order"
	# 	pu #intentional error to call rescue
	# rescue # catches errors in a loop or block
	# 	puts "uh oh! an error occurred!"
	# ensure # code runs regardless of error
	# 	puts "I will always run"
	# end

# break - exit a loop
	# while true
	# 	puts "I am running"
	# 	break
	# end
	# puts "now we are outside of the while loop"

# case statement - a switch statement
	# case capacity
	# when 0
	#   "You ran out of gas."
	# when 1..20
	#   "The tank is almost empty. Quickly, find a gas station!"
	# when /\AL/ # you can also use REGEX in these!
	#   "Medium risk"
	# when 71..100
	#   "The tank is almost full."
	# else
	#   "Error: capacity has an invalid value (#{capacity})"
	# end

# and vs &&
# There is some nuance to this, but basically, 
# only use && unless you know what you are doing

# classes are the 'recipe' for objects
# instances of a class are called objects

# defined? is a class / method / etc defined?
	# def feet
	# end
	# puts defined? feet
	# >> method	

# do - make a block that might take a parameter
	# do
	# puts "this is a do block"
	# end

# module
	# a collection of constants and instance methods (functions).
	# module Mod # always start with a cap letter
		#some constants and instance methods
		# def instance_method(test)
		# end
	# end

# bell character!
	# puts "\a"

	# puts "\vo"
	# puts "\to\bvv\b\b\bt"
	# (0..10).each do 
	# print "*"
	# 	end

# progress bar printer (number only)
	# 1.upto(100) do |i|
	#   printf("\rPercentage: %d%", i)
	#   sleep(0.1)
	# end
	# puts

# progress bar (with actual bar)
	# 1.upto(100) do |i|
	#   printf("\r%d  %s",i,"*"*i)
	#   sleep(0.1)
	# end
	# puts


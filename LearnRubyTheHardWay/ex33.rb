
def increment_and_print(range_max, increment)
	i = 0
	numbers = []

	for i in (0..range_max)
		puts "At the top i is #{i}"
		numbers.push(i)

		# i += increment
		puts "Numbers now:", numbers
		puts "At the bottom i is #{i}"
	end
	# while i < range_max
	# 	puts "At the top i is #{i}"
	# 	numbers.push(i)

	# 	i += increment
	# 	puts "Numbers now:", numbers
	# 	puts "At the bottom i is #{i}"
	# end

	puts "The numbers: "

	numbers.each {|num| puts num}
end

increment_and_print(10,2)

# What I learned
# I had to look up syntax for defining a function (def and end)
# I replaced the while loop with a range operator and a for loop. 
# idk which one I prefer, probably the for, since it will always finish
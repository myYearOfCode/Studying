people = 30
cars = 40
trucks = 15

if cars > people
	puts "We should take the cars."
elsif cars < people
	puts "We should not take the cars."
else 
	puts "We can't decide."
end

if trucks > cars
	puts "That's too many trucks."
elsif trucks < cars
	puts "Maybe we could take the trucks."
else
	puts "We still can't decide."
end

if people > trucks
	puts "Alright, let's just take the trucks."
else 
	puts "Fine, let's stay home then."
end

#  What I learned
# indentation is not what I expected on the if elsif else end loop. 
# I think I was surprised by the end, but without brackets it is needed.
# I think I'm going to spell elsif wrong a lot.
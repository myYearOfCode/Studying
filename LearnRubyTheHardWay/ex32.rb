the_count = [1,2,3,4,5]
fruits = ['apples','oranges','pears','apricots']
change = [1,'pennies',2,'dimes',3,'quarters']


# This is a traditional for loop in most other languages
# This is not preferred in ruby
for number in the_count
	puts "This id count #{number}"
end

# this is it rewritten in the preferred way
the_count.each do |num|
	puts "this id count #{num}"
end

# This is the preferred ruby way
fruits.each do |fruit|
	puts "A fruit of type: #{fruit}"
end

# this is a different syntax on the preferred way
# stylistically ok, just different.
change.each {|i| puts "I got #{i}" }

# we can also build lists, start with and empty one
elements = []

# then use the range operator to do 0 to 5 counts
(0..5).each do |i|
	puts "adding #{i} to the list."
	# push i to the end of the list
	elements.push(i)
end

# now we can print the elements as well
elements.each {|i| puts "Element was: #{i}"}

# What I learned.
# I didn't know ruby hates normal for loops
# the syntax on ruby-like for loops is unusual.
# I don't know if I have seen the range operator yet in ruby. 
# range with 2 periods is inclusive of the end 
# range with 3 periods is exclusive of the end.
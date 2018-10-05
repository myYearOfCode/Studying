# HASHMAPS!!! THE HASHMAPS ARE HERE!!!

# oh, they are just talking about hashes, key:value pairs meaning a dict in python. hmmmm

# python lists are called arrays in ruby
# python dicts are called hashmaps in ruby

# stuff = {'name' => 'Zed', 'age' => 39, 'height' => 4 + 5 - 2}

# These arrows are the same as the : in python. I wish it was just one char, not two.

# you can also do this. it is confusing because it looks like you are accessing a list index
# stuff[1] = 'wow'
# puts stuff
# >> {'name' => 'Zed', 'age' => 39, 'height' => 4 + 5 - 2, 1 => 'wow'}

# stuff.delete(1) # deletes the 1 key:val pair
# puts stuff
# >> {'name' => 'Zed', 'age' => 39, 'height' => 4 + 5 - 2}

# make the state hashmap
states = {
	'Oregon' => 'OR',
	'Florida' => 'FL',
	'California' => 'CA',
	'New York' => 'NY',
	'Michigan' => 'MI'
}

# make the city hashmap
cities = {
	'CA' => 'San Francisco',
	'MI' => 'Detroit',
	'FL' => 'Jacksonville'
}

# add some more cities
cities['NY'] = 'New York'
cities['OR'] = 'Portland'

# puts some city names
puts '-' * 10
puts "NY State has: #{cities['NY']}"
puts "OR State has: #{cities['OR']}"


# puts some states
puts '-' * 10
puts "Michigan's abbreviation is: #{states['Michigan']}"
puts "Florida's abbreviation is: #{states['Florida']}"


# do it by using the state then cities dict
puts '-' * 10
puts "Michigan has: #{cities[states["Michigan"]]}"
puts "Florida has: #{cities[states['Florida']]}"

# puts every state abbreviation
puts '-' * 10
states.each do |state, abbrev|
	puts "#{state} is abbreviated #{abbrev}"
end

# puts every city in every state
puts '-' * 10
cities.each do |abbrev, city|
	puts "#{abbrev} has the city #{city}"
end

# now do both at the same time
puts '-' * 10
states.each do |state, abbrev|
	city = cities[abbrev]
	puts "#{state} is abbreviated #{abbrev} and has city #{city}"
end

puts '-' * 10
# by default ruby says "nil" when something isn't in there
state = states['Texas']

if !state
	puts "Sorry, no Texas."
end

# default values using ||= with the nil result
city = cities['TX']
city ||= 'Does Not Exist' #this means, if city is null, then assign "Does Not Exist" to it.
puts "The city for the state 'TX' is #{city}"

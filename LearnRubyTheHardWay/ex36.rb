# LEARN RUBY THE HARD WAY EX36

# THOUGHTS
# make a six room dungeon
# 1 make a transporter
# 	step on
# 	leave	
# 2 some treasure
# 	collect some
# 		dont be greedy or die
# 	leave
# 3 a monster
# 	tickle
# 	fight
# 	flee
# 4 and a pit
# 	jump across
# 	climb down
# 	turn around
# 5 one room is boring
# 	after pit?
# 6 the lobby has some stuff
# 	3 doors

# make function to print options 




def lobby()
	puts "You are in a room with three doors."
	print_options(["left door","middle door","right door"])
	choice = $stdin.gets.chomp
	if choice == "1"
		monster_room
	elsif choice == "2"
		pit_room
	elsif choice == "3"
		transporter_room
	else
		puts "Try a number, I don't speak your language."
	end
end

def monster_room
	puts "monster"
	bear_friend = false
	puts "There is a massive Bear in this room. you see a treasure chest behind him, but he is not going to let you get to it."
	while true
		print_options(["tickle","fight","run away", "open chest"])
		choice = $stdin.gets.chomp
		if choice == "1"
			puts "It looks like the bear likes that!"
			bear_friend = true
		elsif choice == "2"
			die("I don't know how to tell you this, but you didn't stand a chance against that bear. He took your arms off and ate them like chicken wings.")
		elsif choice == "3"
			puts "RUNNING AWAY!!!!"
			lobby
		elsif choice == "4" && bear_friend == true
			puts "you open the chest and find more gold than even scrooge mcDuck could ever want."
			puts "Money isn't everything, but it's enough for me to be able to say YOU WIN!!!"
			exit(0)
		elsif choice == "4" && bear_friend != true	
			puts "uh oh, that bear looks pretty hungry..."
			die("the bear eats you. eventually. after pulling your arms and legs off.")
		else
			puts "Try a number, I don't speak your language."
		end
	end	
end

def pit_room()
	puts "There is a gaping pit in this room. The walls fall away and it is too deep to see the bottom."
	while true
		print_options(["jump the gap","climb wall","turn around", "get a running start"])
		choice = $stdin.gets.chomp
		if choice == "1"
			puts "You dig deep and give it your biggest leap!"
			die("You fall into the pit a few feet in, with your fingers scraping the far edge. So close!")
		elsif choice == "2"
			puts "Before you can even get your feet off of the ground, you simply can't get a good grip. Maybe this is a lost cause."
		elsif choice == "3"
			puts "Momma used to say: 'Ain't nobody ever died for not trying to jump over a pit.'"
			lobby
		elsif choice == "4" 
			puts "Standing with your back against the door, you ready yourself, take a big breath and LEAP!"
			puts "It amazes me to say, but you made it! Your feet just barely land on the edge of the other side and you rush into the next door."
			boring_room
		else
			puts "Try a number, I don't speak your language."
		end
	end	
end

def boring_room
	puts "this is a boring room."
	puts "there is nothing here!"
	puts "your only choice is to turn around. It's not like you can sleep here."
end

def transporter_room
	while true
		puts "You are standing in a room that has a pedestal and a single pushbutton"
		print_options(["stand on pedestal","stand on pedestal and push button","push button", "turn around"])
		choice = $stdin.gets.chomp
		if choice == "1"
			puts "Well, the view is nicer, but not much is happening"
		elsif choice == "2"
			puts "A low humming noise starts to build. Your skin tingles a little bit, and then..."
			boring_room
		elsif choice == "3"
			puts "A low humming noise increases to a dull roar, and then a sound like a raygun fires. Silence"
		elsif choice == "4" 
			puts "I wonder if you are really meant for the dungeon exploring life."
			lobby
		else
			puts "Try a number, I don't speak your language."
		end
	end
end

def die(reason)
	puts "You died! #{reason}"
	exit(0)
end



def print_options(options_array)
	counter=1
	puts "You have a choice:"
	options_array.each do |option| 
		puts "#{counter}. #{option}"
		counter +=1
	end
	puts "What do you choose?"
	print "> "
end

lobby

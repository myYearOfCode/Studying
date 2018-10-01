# ordinal numbering starts at 1
# cardinal numbering starts at 0
 def gold_room
 	puts "This room is full of gold. How much do you take?"

 	print "> "
 	choice = $stdin.gets.chomp

	if (choice =~ (/[0-9]+/) && !(choice =~ (/[^0-9]+/)))
 	# if (choice==="0" || choice==="1")
 		how_much = choice.to_i
 		puts how_much
 	else
 		dead("Man, learn to type a number.")
 	end


	if how_much < 50
		puts "Nice, you're not greedy, you win!"
		exit(0)
	else 
		dead("You greedy bastard!")
	end
end

def bear_room
	puts "There is a bear here."
	puts "The bear has a bunch of honey."
	puts "The fat bear if in front of another door."
	puts "How are you going to move the bear?"
	bear_moved = false

	while true
		print "> "
		choice = $stdin.gets.chomp

		if choice == "take honey"
			dead("The bear looks at you then slaps your face off.")
		elsif choice == "taunt bear" && !bear_moved
			puts "The bear has moved from the door. You can go through it now."
			bear_moved = true
		elsif choice == "taunt bear" && bear_moved
			dead("The bear gets pissed off and chews your leg off.")
		elsif choice = "open door" && bear_moved
			gold_room
		else
			puts "I have no idea what that means."
		end
	end
end

def cthulu_room
	puts "Here you see the great evil Cthulu."
	puts "He, it, whatever stares at you and you go insane."
	puts "Do you flee for your life or eat your head?"

	print "> "
	choice = $stdin.gets.chomp

	if choice.include? "flee"
		start
	elsif choice.include? "head"
		dead("Well that was tasty!")
	else
		cthulu_room
	end
end

def dead(why)
	puts why, "Good job!"
	exit(0)
end

def start
	puts "You are in a dark room."
	puts "There is a door to your right and left."
	puts "Which one do you take?"

	print "> "
	choice = $stdin.gets.chomp

	if choice == "left"
		bear_room
	elsif choice == "right"
		cthulu_room
	else
		dead("You stumble around the room until you starve.")
	end
end

start

# What I learned
# regex in ruby!
# I used a !() to invert a logic check for the first time.
# My typing is slowly getting faster, especially on alphas.
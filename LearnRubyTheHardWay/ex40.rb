# ex40

# modules are like a grouping of tools. they contain functions, and those functions 
# are accessed using dot notation. vars are accessed with :: notation.

# classes are definitions for objects. objects in ruby are the actual instances 
# themselves.

# this is how you instantiate a classes
	# thing = MyStuff.new()
	# thing.apple()
	# puts thing.tangerine

# in a class, @ creates a variable that is part of the object. $ creates a global variable.

class Song #note the caps

	def initialize(lyrics)
		@lyrics = lyrics
	end

	def sing_me_a_song()
		@lyrics.each {|line| puts line}
	end
end

happy_bday = Song.new(["Happy birthday to you",
	"I don't want to get sued",
	"So I'll stop right there"])

bulls_on_parade = Song.new(["They rally around the family",
	"With pockets full of shells"])

happy_bday.sing_me_a_song()

bulls_on_parade.sing_me_a_song()
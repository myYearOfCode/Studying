formatter = "%{first} %{second} %{third} %{fourth}"
# formatter is a string that accepts a dict. idk if that is what they are called in ruby though
# this is passing a dict with named numbers to the formatter in order to be printed
puts formatter % {first: 1, second: 2, third: 3, fourth: 4}
# this is passing a dict with named strings to the formatter in order to be printed
puts formatter % {first: "one", second: "two", third: "three", fourth: "four"}
# this is passing a dict with named booleans to the formatter in order to be printed
puts formatter % {first: true, second: false, third: true, fourth: false}
# this is passing a dict with named recursive formatter strings (not evaluated) to the formatter in order to be printed
puts formatter % {first: formatter, second: formatter, third: formatter, fourth: formatter}

puts formatter % {
	first: "I had this thing.",
	second: "That you could type up right.",
	third: "But it didn't sing.",
	fourth: "So I said goodnight."
}
puts "I'm going to write some things to your file"
line1 = $stdin.gets.chomp

file = ARGV.first

target = open(file, 'w')
target.write(" #{line1}\n#{line1}\n#{line1}#{line1}")
target.close
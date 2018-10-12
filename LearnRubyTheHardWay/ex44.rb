# ex44.rb
# object inheritance.
# there are three types of object inheritance in ruby. The author says that you should 
# try to avoid all three! Inheritance can be reduced or removed with composition. I 
# do not know what that means.

# Implicit inheritance from parent to child. 
# when you create a new object with 
	class Parent

	  def implicit()
	    puts "PARENT implicit()"
	  end
	end

	class Child < Parent
	end
# The Child class has all of the functions that the Parent class does.

# Explicit inheritance.
# This is when you overwrite the parent class with a class of the same name in the child.
	class Parent

	  def override()
	    puts "PARENT override()"
	  end
	end

	class Child < Parent
	  def override()
	    puts "CHILD override()"
	  end
	end

# Alter before or after with super()

class Parent
  def altered()
    puts "PARENT altered()"
  end
end

class Child < Parent
  def altered()
    puts "CHILD, BEFORE PARENT altered()"
    above will run the child function when run
    super()
    above will run the parent function when run
    puts "CHILD, AFTER PARENT altered()"
  	above will run the child function when run
  end

end	

# composition and mixins are both ways to deal with the same thing, without havign to trace (potentially) down the inheritance chain until you find out whate definition of a function you are executing.
# I should look into both composition and mixins again
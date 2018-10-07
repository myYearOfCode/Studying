## Animal is-a object look at the extra credit
class Animal
end

## dog is a animal
class Dog < Animal

  def initialize(name)
    ## dog has a name
    @name = name
  end
end

## cat is a animal
class Cat < Animal

  def initialize(name)
    ## cat has a name
    @name = name
  end
end

## person is a object
class Person

  def initialize(name)
    ## person has-a name
    @name = name

    ## Person has-a pet of some kind
    @pet = nil
  end

  attr_accessor :pet
end

## employee is a person
class Employee < Person

  def initialize(name, salary)
    ## ?? hmm what is this strange magic?
    super(name)
    ## salary has an amount
    @salary = salary
  end

end

## fish is an object
class Fish
end

## salmon is a fish
class Salmon < Fish
end

## halibut is a fish
class Halibut < Fish
end


## rover is-a Dog
rover = Dog.new("Rover")

## satan is a cat
satan = Cat.new("Satan")

## mary is a person
mary = Person.new("Mary")

## mary has a pet cat named satan
mary.pet = satan

## frank is an employee
frank = Employee.new("Frank", 120000)

## frank has a pet dog named rover
frank.pet = rover

## flipper is a fish
flipper = Fish.new()

## crouse is a salmon
crouse = Salmon.new()

## harry is a halibut
harry = Halibut.new()
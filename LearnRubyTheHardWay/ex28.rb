puts (true && true) #t
puts (false && true) #f
puts (1 == 1 && 2 == 1) #f
puts ("test" == "test") #t
puts (1 == 1 || 2 != 1) #t
puts (true && 1 == 1) #t
puts (false && 0 != 0) #f
puts (true || 1 == 1) #t
puts ("test" == "testing") #f
puts (1 != 0 && 2 == 1) #f
puts ("test" != "testing") #t
puts ("test" == 1) #f
puts (!(true && false)) #t
puts (!(1 == 1 && 0 != 1)) #f
puts (!(10 == 1 || 1000 == 1000)) #f
puts (!(1 != 10 || 3 == 4)) #f
puts (!("testing" == "testing" && "Zed" == "Cool Guy")) #t
puts (1 == 1 && (!("testing" == 1 || 1 == 0))) #t
puts ("chunky" == "bacon" && (!(3 == 4 || 3 == 3))) #f
puts (3 == 3 && (!("testing" == "testing" || "Ruby" == "Fun"))) #f

 #  Nailed it! 100%
 #  I know this isn't rocket science, but I'm happy to have gotten it totally right on the first try.
 #  What I learned. try to be like the program when evaluating these. if you have an && and you know one value is false, you are done.
 
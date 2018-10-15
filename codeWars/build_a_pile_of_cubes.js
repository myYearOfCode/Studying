//https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript

// Your task is to construct a building which will be a pile of n cubes. The 
// cube at the bottom will have a volume of n^3, the cube above will have volume 
// of (n-1)^3 and so on until the top which will have a volume of 1^3.

// You are given the total volume m of the building. Being given m can you find 
// the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb) will be an 
// integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... 
// + 1^3 = m if such a n exists or -1 if there is no such n.

var cubeHash={}
function findNb(m) {
    
    for (let n = 0; findVol(n) <= m; n++){
      if (findVol(n) == m ) return n
    }
    return (-1);
}

function findVol(n) {
  let volume = 0
  for (let i = n; i > 0; i--) { //iterate down and add up
    volume += cubeLookup(i)
  }
  return volume
}

function cubeLookup(n) { //get and set cached values
  if (n in cubeHash) { //check for cached value
    return cubeHash[n]
  } else { //make it and cache it
   cubeHash[n] = Math.pow(n,3)
   delete cubeHash[n-3]
   return cubeHash[n]
   }
}
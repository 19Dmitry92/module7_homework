let smth = "name"
const f = {}
    f.name = "Earth"
    f.galaxy = "Milky Way"
function out(){
    if(Object.hasOwn(f, smth)) {    // проверка на совпадение по объекту f
    return true
} else {
  return false
} 
} out()
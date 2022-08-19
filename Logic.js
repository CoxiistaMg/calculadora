var number_lock = false
var sin_lock = true
var point_lock = true
var max_point = 1
var display = ''
var current_place = 0
var calculus = ''
const translates = {'x': '*','÷': '/' }

function clear(e){
  number_lock = false 
  sin_lock = true
  point_lock = true
  max_point = 1
  display = ''
  calculus = ''
  current_place = 0
}

function get_number(e){
  if (!number_lock){
    display += e
    calculus += e
    sin_lock = false
    point_lock = false
  }}

function get_sin(e){
   if (!sin_lock){
    
    display += e
    if (e in translates){
       e = translates[e]
    }
    calculus += e
    number_lock = false
    sin_lock = true
    point_lock = true
    max_point = 1
   }
}

function get_point(e){
  if (!point_lock && max_point){
    display += e
    calculus += e
    sin_lock = true
    max_point = 0
  }
}

function add_place(e){
  if (sin_lock && max_point){
    current_place += 1
    display += e
    calculus += e
  }
}

function remove_place(e){
  if (!sin_lock && current_place){
    current_place -= 1
    display += e
    calculus += e
    number_lock = true
    max_point = 0
  }
}

function finish(e){
  if (!current_place && !sin_lock){
    display = eval(calculus)
    calculus = display
    number_lock = true
    max_point = 0
}
}
const Map = {
  '+': get_sin,
  '÷': get_sin,
  'x': get_sin,
  '-': get_sin,
  '0': get_number,
  '1': get_number,
  '2': get_number,
  '3': get_number,
  '4': get_number,
  '5': get_number,
  '6': get_number,
  '7': get_number,
  '8': get_number,
  '9': get_number,
  '(': add_place,
  ')': remove_place,
  'finish': finish,
  'clear': clear,
  '.': get_point
}
document.getElementById('display').value = display
function calculadora(e){
  Map[e](e)
  document.getElementById('display').value = display}


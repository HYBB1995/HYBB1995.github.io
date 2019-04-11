
var total=0;

function ejer1 (){
    var t=0;
    if (((document.getElementById("p1_r1").value) == "prevenir") || ((document.getElementById("p1_r1").value) == "cerrar"))   
        t += 5;
    if (((document.getElementById("p1_r2").value) == "detectar") || ((document.getElementById("p1_r2").value) == "usando")) 
        t += 5;
    return (t); 
   }

function ejer2 (){
  if (document.getElementById("p2_a").checked)
      return (10);
      else return (0);
        }

function ejer3 (){
  if (document.getElementById("p3_c").checked)
      return (10);
      else return (0);
        }
                
function ejer4(){
  q=0;
  if (document.getElementById("m1").checked)
     q += 5;
  if (document.getElementById("m2").checked)
     q += 5;
  return (q);
}

function ensamble(){
total = 0;

total += ejer1();
total += ejer2();
total += ejer3();
total += ejer4();

document.getElementById("resultado").value = total;

if ((total >= 40) && (total = 50))
    document.getElementById("nota").value = 'EXCELENTE';
if ((total >= 0) && (total < 30))
    document.getElementById("nota").value = 'MALO';
if ((total >=30) && (total < 40))
    document.getElementById("nota").value = 'BUENO';


}
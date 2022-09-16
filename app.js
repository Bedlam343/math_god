function dropdown (){
  document.getElementById("myDropdown").classList.toggle("show");
  
   if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

  
function calculate(){
  var a = $("#a").val()
  var b = $("#b").val()
  var aPlusB3 = (Number(a) + Number(b)) * (Number(a) + Number(b)) * (Number(a) + Number(b)); 
  document.getElementById("a+b^3").innerHTML = aPlusB3; 
  
  var aMinusB3 = (Number(a) - Number(b)) * (Number(a) - Number(b)) * (Number(a) - Number(b));
  document.getElementById("a-b^3").innerHTML = aMinusB3;
  
  var AcubeBcube = (Number(a) + Number(b)) * ((a * a) + (Number(b) * b) - Number(b) * a );
  document.getElementById("a3+b3").innerHTML = AcubeBcube; 
  
  var aCubeMinusbCube = (Number(a) - Number(b) * (a * a) + (Number(b) * b) + (Number(a) * b));
  document.getElementById("a3-b3").innerHTML = aCubeMinusbCube;
  }

function sphere(){
  var r = $("#r").val()
  
  var areaofSphere = 4 * (3.142) * (r * r);
  document.getElementById("sArea").innerHTML = areaofSphere; 
}

function rectangle (){
  var l = $("#L").val()
  var w = $("#W").val()
  
  var rectArea = l * w; 
  document.getElementById("AreaR").innerHTML = rectArea; 
  
  var rectPerimeter = (2 * l) + (2 * w); 
  document.getElementById("PerimeterR").innerHTML = rectPerimeter;
}

function square() {
  var s = $("#s").val()
  
  var squareArea = s * s;
  document.getElementById("squareA").innerHTML = squareArea;
  
  var squarePeri = Number(s) + Number(s) + Number(s) + Number(s);
  document.getElementById("squareP").innerHTML = squarePeri;
}

function trArea (){
  var b = $("#b2").val()
  var h = $("#h").val()
  
  var areaOfTR = 0.5 * b * h;
  document.getElementById("TraingleArea").innerHTML = areaOfTR; 
}

function periTR (){
  var s1 = $("#s1").val()
  var s2 = $("#s2").val()
  var s3 = $("#s3").val()
  
  var PerimeterTR = Number(s1) + Number(s2) + Number(s3);
  
  // EQUIVALENT OF RETURNING A SINGLE VALUE FROM A FUNCTION IN C++ 
  document.getElementById("PeriTR").innerHTML = PerimeterTR; 
  // RETURN PerimeterTR; 
}

function Cuboid (){
  var l = $("#lCuboid").val()
  var w = $("#wCuboid").val()
  var h = $("#hCuboid").val()
  
  var areaCuboid = (2 * l * w) + (2 * l * h) + (2 * h * w);
  document.getElementById("AreaCuboid").innerHTML = areaCuboid; 
  
  var PerimeterCuboid = 4 * (2 + 2 * w + Number(h));
  document.getElementById("PeriCuboid").innerHTML = PerimeterCuboid;
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


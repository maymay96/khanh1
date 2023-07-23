function calculateRectangle() {
 
    var length = parseFloat(document.getElementById('length').value);
    var width = parseFloat(document.getElementById('width').value);
    var area = length * width;
    var perimeter = 2 * (length + width);
  
    
     document.getElementById('area-result').textContent =
      "The Area is: " + area.toFixed(2);
    
     document.getElementById('perimeter-result').textContent =
      "The Perimeter is: " + perimeter.toFixed(2);
  
     return false;
}
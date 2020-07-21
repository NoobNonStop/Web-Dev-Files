
function staircase(n) {
    var space = " ";
    var hash = "#";
    var newline = '\n';
    var stringpri = "";
    
        for (var j = 0; j < n; j++) {
            var string = "";
            for (var k = 0; k < n - j - 1; k++) {
                 string = string + " "; 
                }
            for (var k = 0; k = j + 1 ; k++) {
                string = string + "#";
            }
        
          /*   for (var k = 0; k < n - j - 1; k++) {
                string = string + " ";
            }
            
            console.log(string) */
            string = string + '\n';
            stringpri = stringpri + string;
            
        }
        console.log(stringpri)
   }





staircase(5);



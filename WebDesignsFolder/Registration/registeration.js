function onayla(){
	
    var x=document.forms['form1'][0].value;
    var y=document.forms['form1'][1].value;
    var z=document.forms['form1'][2].value;
    var t=document.forms['form1'][3].value;
    var h=document.forms['form1'][4].value;

    
     if ( (x==null) && (y==null) && (z==null) && (t==null) && (h==null))
     
     {
         alert("Please Fill In All Fields !!!");
         
         return true;
     }
   else{
        // Popup Al
    var modal = document.getElementById('disPopId');
    
    // Kipi açan düğmeyi al
    var btn = document.getElementById("submitid");
    
    // Kipi kapatan <span> öğesini edinin
    var span = document.getElementsByClassName("close")[0];
    
    // Kullanıcı düğmeyi tıklattığında
    btn.onclick = function() {
        modal.style.display = "block";
    }
    
    // Kullanıcı <span> (x) düğmesini tıkladığında, popup
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // Kullanıcı modelden başka herhangi bir yeri tıklattıysa, onu kapatın.
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }	 
       return false;
    }
}
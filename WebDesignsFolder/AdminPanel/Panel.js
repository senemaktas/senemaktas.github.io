// Login panel js part ---------------------------------

var pencere;

function giris(){

var kullaniciAdi='admin';
var parola='123';

var adi=document.getElementById('kullaniciAdi').value;
var paro=document.getElementById('parola').value;

if((kullaniciAdi == adi) && (parola == paro)){
    
alert('you are forwarding ..');		
 pencere = window.open("PanelAdmin.html" );
 window.close();
} 		 

else{

   alert('Please enter the information completely and correctly...');

} }

// Admin panel js part ------------------------------------------

$(document).ready(function () {  
    $.ajax({  
    type: "GET",  
    url: "http://www.milliyet.com.tr/rss/rssNew/gundemRss.xml",  
    dataType: "xml",  
    success: Haberler  
});  
});  

function Haberler(veri){

if($("satir").dblclick)

function yenile(){
}
}
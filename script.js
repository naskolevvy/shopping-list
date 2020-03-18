function shopping(){
			
    var name = document.getElementById("name").value;
    var item = document.getElementById("item").value;
    var origin = document.getElementById("origin").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "add_shopping_list.php", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send("name="+encodeURIComponent(name)+"&item="+encodeURIComponent(item)+"&origin="+encodeURIComponent(origin)+"&quantity="+encodeURIComponent(quantity)+"&price="+encodeURIComponent(price));
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //document.getElementById("list").innerHTML = this.responseText;
            getData();
        }
    };
    document.getElementById("shopping_form").reset();		
}
function delete_shopping(el){
    
    var xhttp = new XMLHttpRequest();
    var id = $(el).attr("data-id");
    console.log(id);
    xhttp.open("POST", "delete_shopping.php", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send("id="+id);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            getData();
        }
    };
}
function getData(){
    $.ajax({ //create an ajax request to display the shopping
        type: "GET",
        url: "display_shopping_list.php",
        dataType: "html", //expect html to be returned                
        success: function (response) {
            $("#shopping").html(response);
        }
    });
} 
$(document).ready(function () {
    getData();
});

function sideMenu() {
    
    if(document.getElementById("side_menu").style.width == ""){
        document.getElementById("side_menu").style.width = "250px";
    
    }else if(document.getElementById("side_menu").style.width == "250px"){
        document.getElementById("side_menu").style.width = "0px";
    }else{
        document.getElementById("side_menu").style.width = "250px";
    }
}
window.addEventListener("resize", function(event) {
if(document.body.clientWidth > 750){
console.log(document.body.clientWidth);
document.getElementById("side_menu").style.width = "90%";
}else{
document.getElementById("side_menu").style.width = "0px";
}
})
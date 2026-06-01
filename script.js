window.addEventListener("load", function() {
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("navbar").innerHTML = data;
      })
})
window.addEventListener("load", function() {     
    const params = new URLSearchParams(window.location.search);
    const category = params.get("category");
    if (category) {
        filteritems(category);
    }
})
function filteritems(category) {
    let items = document.querySelectorAll('.card');
    items.forEach((item) => {
            if (item.classList.contains(category)) {
                console.log(category);
                item.classList.remove('hide');
            }
            else {
                item.classList.add('hide');
            }   
    });
}
function booktable(){
    const date= document.getElementById('date').value;
    const time= document.getElementById('time').value;
     if (!date || !time) {
        document.getElementById('tablebook').innerHTML = "⚠️ Please select both date and time.";
        return;
    }
    document.getElementById('tablebook').innerHTML= `<div class="msg"><p class="greet">Congratulations!!!</p><p class="successmsg" >✅Your Table booking is successful for ${date} at ${time}.</p><br><br>
         <button onclick="window.location.href='index.html'" class="gohomebtn">Go to Home</button></div>`;
}
function searchitem(){
    let food = document.getElementById('searchfood').value.toLowerCase();
    if(food.includes("burger")) {
        window.location.href="menu.html?category=burger";
    }
    else if(food.includes("pizza")) {
        window.location.href="menu.html?category=pizza";
    }
    else if(food.includes("pasta")) {
        window.location.href="menu.html?category=pasta";
    }
    else if(food.includes("dessert")||food.includes("cake")||food.includes("donut")||food.includes("icecream")||food.includes("waffle")) {
        window.location.href="menu.html?category=desserts";
    }
    else if(food.includes("drink")||food.includes("milkshake")||food.includes("smoothie")||food.includes("lemonade")||food.includes("mojito")||food.includes("chocolate")) {
        window.location.href="menu.html?category=drinks";
    }
    else {
        alert("Food Item Not Found");
    }
} 
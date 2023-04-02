let menu =["rau xào","thịt luộc", "gà rán"];
localStorage.setItem("The_Menu", JSON.stringify(menu))
// let food = localStorage.getItem("Menu");
// food = JSON.parse(food);
// console.log(food)
function myFunction() {
    var a = document.getElementById("myText").value;
    if (a == "C") {
        let food = prompt("Mời bạn nhập món ăn :");
        let The_Menu = JSON.parse(localStorage.getItem("The_Menu"));
        The_Menu.push(food)
        localStorage.setItem("The_Menu",JSON.stringify(The_Menu));
        console.log(The_Menu);
    } else if (a =="R") {
        let The_Menu= JSON.parse(localStorage.getItem("The_Menu"));
        let food = The_Menu.join();
        alert(food);
    } else if (a == "U"){
        let The_Menu= JSON.parse(localStorage.getItem("The_Menu"));
        let updateFood = prompt("Mời bạn nhập món ăn muốn thay đổi");
        let foodPosition = The_Menu.indexOf(updateFood);
        console.log(foodPosition);
        let food = prompt("Mời bạn nhập món ăn :");
        The_Menu.splice(foodPosition, 1 , food);
        localStorage.setItem("The_Menu",JSON.stringify(The_Menu));
    } else if (a == "D") {
        let The_Menu= JSON.parse(localStorage.getItem("The_Menu"));
        let updateFood = prompt("Mời bạn nhập món ăn muốn xóa");
        let foodPosition = The_Menu.indexOf(updateFood);
        console.log(foodPosition);
        The_Menu.splice(foodPosition, 1);
        localStorage.setItem("The_Menu",JSON.stringify(The_Menu));
    }
}


// var buttonXemThem = document.getElementById("xemthem");
// var pokemonList = document.querySelectorAll(".information");

// var showAll = false;
// var displayLimit = 3; // Giới hạn số lượng Pokemon hiển thị
// var displayCount = 0; // Số lượng Pokemon đã hiển thị

// buttonXemThem.addEventListener("click", function() {
//     showAll = !showAll;
//     updatePokemonVisibility();
// });

// function updatePokemonVisibility() {
//     displayCount = 0; // Đặt lại số lượng Pokemon đã hiển thị

//     for (var i = 0; i < pokemonList.length; i++) {
//         if (showAll || displayCount < displayLimit) {
//             pokemonList[i].classList.toggle("show", true);
//             displayCount++;
//         } else {
//             pokemonList[i].classList.toggle("show", false);
//         }
//     }

//     // Thay đổi nội dung nút dựa trên trạng thái hiển thị Pokemon
//     if (showAll || displayCount === pokemonList.length) {
//         buttonXemThem.innerHTML = "Thu gọn";
//     } else {
//         buttonXemThem.innerHTML = "Xem thêm";
//     }
// }

var buttonXemThem = document.getElementById("xemthem");
var pokemonList = document.querySelectorAll(".information");

var showAll = false;
var displayLimit = 3; // Giới hạn số lượng Pokemon hiển thị
var displayCount = 0; // Số lượng Pokemon đã hiển thị

buttonXemThem.addEventListener("click", function() {
    showAll = !showAll;
    updatePokemonVisibility();
});

function updatePokemonVisibility() {
    displayCount = 0; // Đặt lại số lượng Pokemon đã hiển thị

    for (var i = 0; i < pokemonList.length; i++) {
        if (showAll || displayCount < displayLimit) {
            pokemonList[i].classList.toggle("show", true);
            displayCount++;
        } else {
            pokemonList[i].classList.toggle("show", false);
        }
    }

    // Thay đổi nội dung nút dựa trên trạng thái hiển thị Pokemon
    if (showAll || displayCount === pokemonList.length) {
        buttonXemThem.innerHTML = "Thu gọn";
    } else {
        buttonXemThem.innerHTML = "Xem thêm";
    }
}

// Hiển thị 3 Pokemon sẵn
updatePokemonVisibility();
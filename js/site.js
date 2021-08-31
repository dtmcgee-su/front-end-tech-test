const dropdownBtn = document.querySelector('.dropdown');
// console.log(dropdownBtn);

const dropdownItems = document.querySelector('#dropdown-items');
// console.log(dropdownItems);


// If the dropdown menu is clicked, display the dropdown items
// If menu dropdown is open and menu is clicked, hide the menu
dropdownBtn.addEventListener("click", (e) => {

    // console.log('the click worked!');
    if (dropdownItems.style.display == 'none') {
        dropdownItems.style.display = 'flex';
    }
    else if (dropdownItems.style.display = 'flex') {
        dropdownItems.style.display = 'none';
    }

});


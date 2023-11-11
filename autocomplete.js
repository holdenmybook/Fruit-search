let searchInput = document.getElementById("searchInput");
let autocompleteDropdown = document.getElementById("autocomplete-dropdown");
let items = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

searchInput.addEventListener("input", function() {
    let input = searchInput.value.toLowerCase();
    
    // Clear previous dropdown options
    autocompleteDropdown.innerHTML = '';
    
    if (input.length === 0) {
        autocompleteDropdown.style.display = 'none';
        return;
    }
    
    let filteredItems = items.filter(item => item.toLowerCase().includes(input));
    
    if (filteredItems.length > 0) {
        autocompleteDropdown.style.display = 'block';
        filteredItems.forEach(item => {
            let option = document.createElement("li");
            option.textContent = item;
            option.addEventListener("click", function() {
                searchInput.value = item;
                autocompleteDropdown.style.display = 'none';
            });
            autocompleteDropdown.appendChild(option);
        });
    } else {
        autocompleteDropdown.style.display = 'none';
    }
});

document.addEventListener("click", function(event) {
    if (!autocompleteDropdown.contains(event.target)) {
        autocompleteDropdown.style.display = 'none';
    }
});

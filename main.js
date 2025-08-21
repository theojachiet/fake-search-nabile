const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector('.google-search-btn');

searchInput.addEventListener("keydown", function(event){
 if(event.code === "Enter") {
        search();
    }	
});

searchButton.addEventListener('click', search);

function search() {
    window.open('./results.html');
}
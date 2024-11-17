const filterButton = document.querySelectorAll(".filter-button button")
const filterableCards = document.querySelectorAll(".filter-images .card")

const filterCard = (e) => {
    document.querySelector(".filter-button .active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {

        if(card.dataset.name === e.target.dataset.filter || e.target.dataset.filter === "all"){
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

filterButton.forEach(button => button.addEventListener("click", filterCard));
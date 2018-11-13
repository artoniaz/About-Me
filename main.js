document.addEventListener("DOMContentLoaded", function () {

    // const headerButton = $(".headerText").find("button");
    let hobbyImg = document.querySelectorAll(".hobbyImg"); //każdy obrazek, na którym ma być event


    for (let el of hobbyImg){ //na wszystkich obrazkach

        el.addEventListener("click", function () {
            let hobbyDescribtion = this.querySelector("p"); //zmienna przechowująca THIS paragraf
            hobbyDescribtion.classList.toggle("visible"); //pokazuj i znikaj THIS paragraf
        });
        el.addEventListener("mouseleave", function () {
            let hobbyDescribtion = this.querySelector("p"); //znikaj THIS paragraf
            hobbyDescribtion.classList.remove("visible");
        })
        //event pozwala dowoli pokazywać i zamykać grafikę, o ile użytkownik jest myszką w obrębie obrazka
    }
    

});
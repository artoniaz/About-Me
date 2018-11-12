document.addEventListener("DOMContentLoaded", function () {

    const headerButton = $(".headerText").find("button");
    const hobbyImg = $(".hobbyImg");
    let display = false;

    hobbyImg.on("click", function () {
        let hobbyDescription = this.querySelector("p");
        if (display === false) {
            hobbyDescription.style.display = "block";
            display = true;
        } else if (display === true){
            hobbyDescription.style.display = "none";
            display = false;
        }
    });

    hobbyImg.on("mouseenter", function () {
        let hobbyDescription = this.querySelector("p");
        hobbyDescription.style.display = "block";
    });

    hobbyImg.on("mouseleave", function () {
        let hobbyDescription = this.querySelector("p");
        hobbyDescription.style.display = "none";
    });



});
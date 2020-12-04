function horizontalTabs() {
    //define the containers
    let buttons = document.getElementById("button_container");
    let button_item = buttons.querySelectorAll(".button");
    let contents = document.getElementById("content_container");
    let content_item = contents.querySelectorAll(".block_content");
    //add class to first item in each object
    button_item[0].classList.add("active");
    content_item[0].classList.add("active");

    //https://gomakethings.com/getting-all-sibling-elements-when-a-link-or-button-is-clicked-with-vanilla-js/

    //listen for the click on the button container
    buttons.addEventListener("click", (e) => {
        //if the target has a .button class, then add the .active class
        if (e.target.classList.contains("button") === true) {
            e.target.classList.add("active");
        }

        //for each button...
        for (let i = 0; i < button_item.length; i++) {
            let button = button_item[i];

            //if the button is clicked, loop through the content
            for (let x = 0; x < content_item.length; x++) {
                let content = content_item[x];
                let contentId = content_item[x].dataset.id;
                let buttonId = button_item[i].dataset.id;

                //if the button is clicked AND the IDs match, add active class
                if (button === e.target && contentId === buttonId) {
                    //log the matching IDs
                    // console.log(contentId + buttonId);
                    content.classList.add("active");
                }

                //if the button was not clicked, remove active class
                if (button !== e.target) {
                    button.classList.remove("active");

                    //and if the IDs match, remove active class
                    if (contentId === buttonId) {
                        content.classList.remove("active");
                    }
                }
            }
        }
    });
}

window.onload = () => {
    horizontalTabs();
};

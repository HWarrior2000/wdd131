// i am very happy with this. 
//the fuction called creates a list of all the links (a) found in the (ul) it then iterates over all of them using the function defined in the forEach loop to toggle the class of hide on each item in the list.
function toggleMenu() {
    const menuList = document.querySelectorAll('ul a');

    menuList.forEach(function(item) {
        item.classList.toggle("hide");
    });
}

// this is bacicaly doing the same as the toggleMenu junction but it will specifically check the innerWidth and depending on that it will add or remove the hide class from the object menu items.
// not only is this important for when the page may be recised but it is critical that this is run on first opening of the page as it is posible that the site will be opened in large mode. If this happens the button to toggle the menu will not be available and there will be no way to show the menu. 
function handleResize() {
    const menuList = document.querySelectorAll('ul a');

    if (window.innerWidth > 1000) {
        menuList.forEach(function(item) {
            item.classList.remove("hide");
        });
    } 
    else {
        menuList.forEach(function(item) {
            item.classList.add("hide");
        });
    }
}

function viewerTemplate(pic, alt){
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}" class="viewer-img">
        </div>`
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const image = event.target;
    console.log(image);
	// get the src attribute from that element and 'split' it on the "-"
    const source = image.src.split("-");
    console.log(source);
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newImage = source[0] + "-full.jpeg";
    console.log(newImage);
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.querySelector("body").insertAdjacentHTML("afterbegin", viewerTemplate(newImage, "hello"));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

function closeViewer() {
    document.querySelector(".viewer").remove();
    console.log("it did something");
}

handleResize();
document.querySelector("#menuButton").addEventListener("click", toggleMenu);
window.addEventListener("resize", handleResize);
document.querySelector(".gallery").addEventListener("click", viewHandler);
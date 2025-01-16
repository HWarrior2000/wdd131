const newParagraph = document.createElement("p");
newParagraph.textContent = "Added with Javascript!";
document.body.append(newParagraph);
const newImage = document.createElement('img');
newImage.src = "https://picsum.photos/200/300";
newImage.alt = "Random image from picsum.";
document.querySelector("section").prepend(newImage);
const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.append(newDiv);

const newSection = document.createElement('section');
newSection.innerHTML = '<h2>DOM Basics</h2><p>This was added through Javascript</p>';
document.body.append(newSection);
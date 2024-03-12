//  fetch(`https://poetrydb.org/random`)
//     .then(response => response.json())
//     .then(data => {
//         if (data.status === 404) {
//             document.getElementById('poemDisplay').innerHTML = `<p>Poem not found!</p>`;
//         } else {
//             const poemLines = data[0].lines.slice(0,10);
//             const poemHTML = poemLines.map(line => `<p>${line}</p>`).join('');
//             // document.getElementById('POTD').innerHTML = poemHTML;
//             console.log(poemLines[0])
//         }
//     })

// Getting all poet Name ======================================
// Getting all poet Name ======================================
function getAllPoets() {
  console.log("getAllPoets Function Executed!")
  fetch("https://poetrydb.org/author")
    .then((response) => response.json())
    .then((data) => {
      storeInSearchList(data);
    })
    .catch((error) => {
      console.error("Error fetching poet names:", error);
    });
}
function storeInSearchList(data) {
  console.log("storeInSearchList Function Executed!")
  document.getElementById('poemName').value='';
  let searchListHtml = "";
  Object.values(data).forEach(poetName => {
    searchListHtml += poetName.map(name => `<option value="${name}"></option>`).join('');
  });
  let poet = document.getElementById('poet');
  poet.innerHTML=searchListHtml;
  poet.style.display="none"

}
// Getting all poet Name ======================================
// Getting all poet Name ======================================

// Search By Function----------------------------------------------------------
// Search By Function----------------------------------------------------------
const PoemElem = document.getElementById("poemName");
function runOnChange() {
  const selectElement = document.getElementById("SB");
  const selectedPoem = selectElement.value;
  if(selectedPoem=="Author"){
    console.log("runget Executed!")
    getAllPoets();
}
  console.log("Selected poem:", selectedPoem);
  PoemElem.placeholder = `Enter ${selectedPoem} name`;
}
// Search By Function----------------------------------------------------------
// Search By Function----------------------------------------------------------

document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const poemName = PoemElem.value.trim();
    if (poemName === "") {
      alert("Please enter a poem name.");
      return;
    }
    const selectElement = document.getElementById("SB");
    const selectedPoem = selectElement.value;

    // Run On Poem-------------------  
    if (selectedPoem == "Poem") {
      selectedPoemFunction(poemName);
    } 
    // Run Author Option----------------------
    else if (selectedPoem == "Author") {

      console.log("Search by Author worked!");
      const authorName = PoemElem.value.trim();

      fetch(`https://poetrydb.org/author/${encodeURIComponent(authorName)}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 404) {
            console.log("Author not found!");
          } else {
            console.log("Author:", authorName);
            displayPoems(data);
          }
        })
        .catch((error) => {
          console.error("Error fetching author's poems:", error);
        });
    } else if (selectedPoem == "Line") {
    }
  });

function selectedPoemFunction(poemName){
    console.log("Search by Poem Worked!");
      fetch(`https://poetrydb.org/title/${poemName}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.status === 404) {
            document.getElementById("poemDisplay").innerHTML = `<p>Poem not found!</p>`;
          } else {
            const poemLines = data[0].lines;
            const poemHTML = poemLines.map((line) => `<p>${line}</p>`).join("");
            document.getElementById("poemDisplay").style.display="block";
            document.getElementById("poemDisplay").innerHTML = poemHTML;
          }
        })
        .catch((error) => console.error("Error fetching poem:", error));
}

function displayPoems(data) {
  const firstTenItems = data.slice(0, 10);
  // console.log(firstTenItems);
  displayPoemName(firstTenItems)
 
}

function displayPoemName(firstTenItems) {
  let showPoemHtml = firstTenItems.map((title) => `<p class="display-poet-p">${title.title}</p>`).join("");
  // console.log(showPoemHtml);
  
  document.getElementById("poemDisplay").style.display = "none";
  document.getElementById('displayPoemName').style.display = "flex";
  document.getElementById('displayPoemName').innerHTML = showPoemHtml;
  
  // Select all paragraphs with class "display-poet-p"
  let paragraphs = document.querySelectorAll('.display-poet-p');
  
  paragraphs.forEach(paragraph => {
    paragraph.addEventListener('click', () => {
      console.log("p clicked!");
      selectedPoemFunction( paragraph.textContent);
      // Access the text content of the clicked <p> element
      const content = paragraph.textContent;
      console.log('Clicked paragraph content:', content);
    });
  });
}


// Adding Class for some Animations-----------------
const admin = document.getElementById('admin');
const accountDetails = document.getElementById('accountDetails');
const menuInput = document.getElementById('accountBtn');

admin.addEventListener('click', () => {
    accountDetails.classList.toggle('visible');
    // accountDetails
    console.log("Hello papa")
});

menuInput.addEventListener('click', () => {
    document.getElementById('menu-input').classList.toggle('visible');
});

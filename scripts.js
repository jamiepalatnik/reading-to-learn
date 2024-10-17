// Credits: JavaScript generated by CS50 duck. Checked, tested, and extended by me.


// Initially hide the Copy List button
document.querySelector("#copy-list").style.display = "none";

// Function to check to show Copy List button
function toggleCopyButton() {
    let bookList = document.querySelector("#book-list");
    let copyButton = document.querySelector("#copy-list");

    if (bookList.innerText.trim() !== "") {
        copyButton.style.display = "block";
    } else {
        copyButton.style.display = "none";
    }
}

// Handle form submission
document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;

    const li = document.createElement('li');
    li.textContent = `${title} by ${author}`;

    document.getElementById('book-list').appendChild(li);
    toggleCopyButton();

    document.getElementById('book-form').reset();
});

// Copy text to clipboard when Copy List button is clicked
document.querySelector("#copy-list").addEventListener("click", function() {
    // Select the text
    let textToCopy = document.querySelector("#book-list").innerText;

    // Create a temporary textarea element
    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);

    // Select the text in the textarea
    tempTextArea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(tempTextArea);
});

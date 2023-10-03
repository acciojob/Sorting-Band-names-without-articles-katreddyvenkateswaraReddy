//your code here
// Function to remove articles from a band name
function removeArticles(bandName) {
  const articles = ['a', 'an', 'the'];
  const words = bandName.split(' ');

  // Filter out articles and join the remaining words
  const filteredWords = words.filter(word => !articles.includes(word.toLowerCase()));
  return filteredWords.join(' ');
}

// Array of band names
let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Remove articles and sort lexicographically
bandNames = bandNames.map(removeArticles).sort();

// Create an HTML list
const ulElement = document.getElementById('band');
ulElement.innerHTML = ''; // Clear any existing content

for (const bandName of bandNames) {
  const liElement = document.createElement('li');
  liElement.textContent = bandName;
  ulElement.appendChild(liElement);
}

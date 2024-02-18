const recommendatonEntries = [];

function addEntry() {
  const entryText = document.getElementById('entry').value;
  if (entryText.trim() !== '') {
    recommendatonEntries.push(entryText);
    displayEntries();
    document.getElementById('entry').value = '';
    showConfirmationDialog(); // Show confirmation dialog
  }
}

function displayEntries() {
  const entriesDiv = document.getElementById('entries');
  entriesDiv.innerHTML = ''; // Clear existing entries

  for (let i = 0; i < recommendatonEntries.length; i++) {
    const entry = document.createElement('p');
    entry.textContent = recommendatonEntries[i];
    entriesDiv.appendChild(entry);
  }
}

function showConfirmationDialog() {
  const confirmationMessage = 'Recommendation added successfully!';
  alert(confirmationMessage);
}

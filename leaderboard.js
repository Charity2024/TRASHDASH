// Sample data for the leaderboard (this could come from a database)
const leaderboardData = [
  { name: "Alice", score: 1200 },
  { name: "Bob", score: 1100 },
  { name: "Charlie", score: 950 },
  { name: "Daisy", score: 900 },
  { name: "Eve", score: 850 }
];

// Function to load and display leaderboard data
function loadLeaderboard() {
  const tableBody = document.querySelector("#leaderboard-table tbody");
  tableBody.innerHTML = ''; // Clear any existing data

  // Sort the data by score in descending order
  leaderboardData.sort((a, b) => b.score - a.score);

  // Dynamically insert rows into the table
  leaderboardData.forEach((player, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${index + 1}</td>
          <td>${player.name}</td>
          <td>${player.score}</td>
      `;
      tableBody.appendChild(row);
  });
}

// Load leaderboard when the page loads
window.onload = loadLeaderboard;
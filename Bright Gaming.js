document.addEventListener("DOMContentLoaded", function() {
    const games = [
        "Game 1: Adventure Quest",
        "Game 2: Space Explorer",
        "Game 3: Puzzle Master",
        "Game 4: Racing Rivals",
        "Game 5: Battle Heroes",
        "Game 6: Zombie Survivor",
        "Game 7: Fantasy Kingdom",
        "Game 8: Detective Story",
        "Game 9: Treasure Hunt",
        "Game 10: Magic Realm"
    ];

    const demos = [
        { name: "Demo 1: Adventure Quest", action: () => alert("Adventure Quest demo played!") },
        { name: "Demo 2: Space Explorer", action: () => alert("Space Explorer demo played!") },
        { name: "Demo 3: Puzzle Master", action: () => alert("Puzzle Master demo played!") },
        { name: "Demo 4: Racing Rivals", action: () => alert("Racing Rivals demo played!") },
        { name: "Demo 5: Battle Heroes", action: () => alert("Battle Heroes demo played!") }
    ];

    const gamesList = document.getElementById('games');
    const demosList = document.getElementById('demos');

    if (gamesList) {
        games.forEach(game => {
            const listItem = document.createElement('li');
            listItem.textContent = game;
            gamesList.appendChild(listItem);
        });
    }

    if (demosList) {
        demos.forEach(demo => {
            const demoItem = document.createElement('div');
            demoItem.textContent = demo.name;
            demoItem.classList.add('demo-item');
            demoItem.addEventListener('click', demo.action);
            demosList.appendChild(demoItem);
        });
    }

    const subscribeButton = document.getElementById('subscribeButton');
    if (subscribeButton) {
        subscribeButton.addEventListener('click', function() {
            window.location.href = "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YOUR_BUTTON_ID";
        });
    }
});


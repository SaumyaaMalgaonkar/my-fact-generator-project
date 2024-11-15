// app.js
document.getElementById('revealFacts').addEventListener('click', function() {
    const facts = [
        "Enjoys sports, indicating a physically active lifestyle.",
        "Passionate about studies, acting, and dubbing, showcasing a well-rounded personality.",
        "Values sleep, highlighting the importance of rest and recovery."
    ];

    const factsList = document.getElementById('factsList');
    factsList.innerHTML = ''; // Clear any existing facts

    facts.forEach(fact => {
        const listItem = document.createElement('li');
        listItem.textContent = fact;
        factsList.appendChild(listItem);
    });
});

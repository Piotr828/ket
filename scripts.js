const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
link.rel = 'stylesheet';
document.head.appendChild(link);

const simulators = [
    {
        title: "Sfera Blocha",
        description: "Interaktywna wizualizacja stanów kwantowych na sferze Blocha. Manipuluj kubitem i obserwuj zmiany prawdopodobieństw.",
        url: "./bloch/index.html",
        icon: "public"
    },
    {
        title: "Gra Bella",
        description: "Symulacja klasycznej gry Bella pokazująca nielokalność splątania kwantowego.",
        url: "./bell/index.html",
        icon: "lock"
    }
];

function renderSimulators() {
    const grid = document.getElementById('simulators-grid');
    
    simulators.forEach(sim => {
        const card = document.createElement('a');
        card.href = sim.url;
        card.className = 'card';
        
        card.innerHTML = `
            <div class="card-icon">
                <span class="material-icons" style="font-size: inherit;">${sim.icon}</span>
            </div>
            <h2 class="card-title">${sim.title}</h2>
            <p class="card-desc">${sim.description}</p>
        `;
        
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', renderSimulators);

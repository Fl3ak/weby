type Client= {
    id: number;
    bio: string;
    email: string;
    phone: string;
    score: string;
    avatar: string;
    rating: string;
    country: string;
    has_pet: boolean;
    latitude: string;
    last_name: string;
    longtitude: string;
    birth_date: string;
    first_name: string;
    favourite_color: string;
};

function renderCards(people: Client[]): void {
    const container = document.getElementById("clients-container");
    if (!container) return;

    container.innerHTML = "";

    people.forEach((client) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <img src="${client.avatar}" alt="${client.first_name} ${client.last_name}"
        width="120" height="120" class="avatar" loading="lazy"/>
        <div class="details">
        <h2>${client.first_name} ${client.last_name}</h2>
        <p>${client.bio}</p>
        <p><strong>Birth Date:</strong> ${client.birth_date}</p>
        <p><strong>Has Pet:</strong> ${client.has_pet ? "Yes" : "No"}</p>
        <p><strong>Score:</strong> ${client.score}</p>
        </div>
        `;

        container.appendChild(card);
    });
}

async function loadData() {
    const response = await fetch("https://retoolapi.dev/Cvx3fW/api");
    const data: Client[] = await response.json();
    const filterData = data.filter((client) => client.id > 30);
    renderCards(data);
}
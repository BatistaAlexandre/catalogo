document.addEventListener("DOMContentLoaded", function() {
    getCandidatesData();
});

let candidates = [];

function showCandidates(candidates) {
    const candidatesList = document.getElementById('candidates-list');
    candidatesList.innerHTML = '';
    candidates.forEach(candidate => {
        const card = document.createElement('div');
        card.classList.add('candidate-card');
        card.innerHTML = `
            <h3>${candidate.name}</h3>
            <p>${candidate.summary}</p>
            <button onclick="openModal('${candidate.name}', '${candidate.summary}', '${candidate.video}')">Ver perfil</button>
        `;
        candidatesList.appendChild(card);
    });
}

function filterCandidates(category) {
    let filteredCandidates;
    if (category === 'All') {
        filteredCandidates = candidates;
    } else {
        filteredCandidates = candidates.filter(candidate => candidate.category === category);
    }
    showCandidates(filteredCandidates);
}

function openModal(name, summary, video) {
    const modal = document.getElementById('candidate-modal');
    const candidateName = document.getElementById('candidate-name');
    const candidateSummary = document.getElementById('candidate-summary');
    const candidateVideo = document.getElementById('candidate-video');

    modal.style.display = "block";
    candidateName.innerHTML = name;
    candidateSummary.innerHTML = summary;
    candidateVideo.innerHTML = `<iframe width="560" height="315" src="${video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}

function closeModal() {
    const modal = document.getElementById('candidate-modal');
    modal.style.display = "none";
}

function getCandidatesData() {
    const spreadsheetId = "2PACX-1vSkcUoUsVbpUDeMFzsvt-NOPwTDADdiQi-vNKrmoGDZ8KU8QMF5rRy2Qd4YMQTZemBOMKLPUmTR0AC0";
    const url = `https://spreadsheets.google.com/feeds/list/${spreadsheetId}/od6/public/values?alt=json`;

    $.ajax({
        url: url,
        success: function(data) {
            const rows = data.feed.entry;
            candidates = rows.map(row => ({
                name: row.gsx$name.$t,
                category: row.gsx$category.$t,
                summary: row.gsx$summary.$t,
                video: row.gsx$video.$t
            }));
            showCandidates(candidates);
        },
        error: function() {
            console.log("Erro ao obter os dados da planilha");
        }
    });
}

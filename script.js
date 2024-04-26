const candidates = [
    { 
        "name": "João",
        "category": "Sales",
        "summary": "Experienced salesperson with 5 years of experience.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_1",
        "status": "Pending" 
      },
      { 
        "name": "Maria",
        "category": "ADM",
        "summary": "Detail-oriented administrator with 3 years of experience.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_2",
        "status": "Pending" 
      },
      { 
        "name": "Pedro",
        "category": "Social Media",
        "summary": "Creative social media manager with a strong background in digital marketing.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_3",
        "status": "Pending" 
      },
      { 
        "name": "Ana",
        "category": "Marketing",
        "summary": "Strategic marketing professional with expertise in brand management.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_4",
        "status": "Pending" 
      },
      { 
        "name": "Luísa",
        "category": "Finance",
        "summary": "Detail-oriented financial analyst with 4 years of experience.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_5",
        "status": "Pending" 
      },
      { 
        "name": "Carlos",
        "category": "IT",
        "summary": "Skilled IT specialist with a focus on cybersecurity.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_6",
        "status": "Pending" 
      },
      { 
        "name": "Marta",
        "category": "HR",
        "summary": "HR professional with extensive experience in talent acquisition and management.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_7",
        "status": "Pending" 
      },
      { 
        "name": "Ricardo",
        "category": "Sales",
        "summary": "Sales manager with a proven track record of boosting revenue.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_8",
        "status": "Pending" 
      },
      { 
        "name": "Sofia",
        "category": "Customer Service",
        "summary": "Customer service specialist with excellent communication skills.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_9",
        "status": "Pending" 
      },
      { 
        "name": "Gustavo",
        "category": "Finance",
        "summary": "Financial planner with a passion for helping clients achieve their financial goals.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_10",
        "status": "Pending" 
      },
      { 
        "name": "Patrícia",
        "category": "Marketing",
        "summary": "Digital marketing strategist specializing in social media campaigns.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_11",
        "status": "Pending" 
      },
      { 
        "name": "Fernando",
        "category": "IT",
        "summary": "Experienced software developer with a focus on web technologies.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_12",
        "status": "Pending" 
      },
      { 
        "name": "Isabel",
        "category": "Social Media",
        "summary": "Social media specialist with expertise in influencer marketing.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_13",
        "status": "Pending" 
      },
      { 
        "name": "Hugo",
        "category": "Sales",
        "summary": "Sales representative with a passion for building lasting client relationships.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_14",
        "status": "Pending" 
      },
      { 
        "name": "Catarina",
        "category": "Finance",
        "summary": "Financial analyst with a strong analytical background and attention to detail.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_15",
        "status": "Pending" 
      },
      { 
        "name": "Mariana",
        "category": "Customer Service",
        "summary": "Experienced customer service manager dedicated to improving customer satisfaction.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_16",
        "status": "Pending" 
      },
      { 
        "name": "António",
        "category": "IT",
        "summary": "Skilled IT technician experienced in troubleshooting and network administration.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_17",
        "status": "Pending" 
      },
      { 
        "name": "Rita",
        "category": "Marketing",
        "summary": "Marketing coordinator with a strong background in market research and analysis.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_18",
        "status": "Pending" 
      },
      { 
        "name": "Daniel",
        "category": "Social Media",
        "summary": "Social media manager with a focus on content creation and engagement strategies.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_19",
        "status": "Pending" 
      },
      { 
        "name": "Vasco",
        "category": "HR",
        "summary": "HR specialist with expertise in employee relations and organizational development.",
        "video": "https://www.youtube.com/embed/VIDEO_ID_20",
        "status": "Pending" 
      }];

let rejectedCandidates = [];
let interviewCandidates = [];

document.addEventListener("DOMContentLoaded", function() {
    showCandidates(candidates);
});

function showCandidates(candidates) {
    const candidatesList = document.getElementById('candidates-list');
    candidatesList.innerHTML = '';
    candidates.forEach(candidate => {
        const card = document.createElement('div');
        card.classList.add('candidate-card');
        card.innerHTML = `
            <h3>${candidate.name}</h3>
            <p>${candidate.summary}</p>
            <button onclick="openModal('${candidate.name}', '${candidate.summary}', '${candidate.video}', '${candidate.status}')">Ver perfil</button>
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

function openModal(name, summary, video, status) {
    const modal = document.getElementById('candidate-modal');
    const candidateName = document.getElementById('candidate-name');
    const candidateSummary = document.getElementById('candidate-summary');
    const candidateVideo = document.getElementById('candidate-video');
    const likeBtn = document.getElementById('like-btn');
    const dislikeBtn = document.getElementById('dislike-btn');

    modal.style.display = "block";
    candidateName.innerHTML = name;
    candidateSummary.innerHTML = summary;
    candidateVideo.innerHTML = `<iframe width="560" height="315" src="${video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

    if (status === "Pending") {
        likeBtn.style.display = "inline-block";
        dislikeBtn.style.display = "inline-block";
    } else {
        likeBtn.style.display = "none";
        dislikeBtn.style.display = "none";
    }

    likeBtn.onclick = function() {
        likeCandidate(name);
    };

    dislikeBtn.onclick = function() {
        dislikeCandidate(name);
    };
}

function closeModal() {
    const modal = document.getElementById('candidate-modal');
    modal.style.display = "none";
}

function likeCandidate(name) {
    const candidate = candidates.find(candidate => candidate.name === name);
    candidate.status = "Interview";
    interviewCandidates.push(candidate);
    const interviewList = document.getElementById('interview-candidates');
    const rejectedList = document.getElementById('rejected-candidates');

    const item = document.createElement('li');
    item.textContent = name;
    interviewList.appendChild(item);

    // Remove candidate from candidates list
    candidates.splice(candidates.indexOf(candidate), 1);

    closeModal();
    showCandidates(candidates);
}

function dislikeCandidate(name) {
    const candidate = candidates.find(candidate => candidate.name === name);
    candidate.status = "Rejected";
    rejectedCandidates.push(candidate);
    const rejectedList = document.getElementById('rejected-candidates');
    const interviewList = document.getElementById('interview-candidates');

    const item = document.createElement('li');
    item.textContent = name;
    rejectedList.appendChild(item);

    // Remove candidate from candidates list
    candidates.splice(candidates.indexOf(candidate), 1);

    closeModal();
    showCandidates(candidates);
}

function showRejectedCandidates() {
    showCandidates(rejectedCandidates);
}

function showInterviewCandidates() {
    showCandidates(interviewCandidates);
}

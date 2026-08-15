// ================================
// TECHSPARK 2026 EVENTS
// ================================

const events = [

{
    id: 1,
    name: "Quiz",
    subtitle: "Technical Quiz",
    members: "Team of 4",
    fee: "FREE",
    duration: "30 Minutes",
    difficulty: "Medium",

    description:
    "A technical quiz designed to test participants' knowledge, logical thinking, programming fundamentals and computer science concepts.",

    rules: [
        "Exactly 4 members per team.",
        "Mobile phones are not allowed during the competition.",
        "Participants must follow the instructions given by the coordinators.",
        "Judges' decision will be final."
    ]
},

{
    id: 2,
    name: "PPT",
    subtitle: "PPT Presentation",
    members: "Team of 2",
    fee: "FREE",
    duration: "10 Minutes",
    difficulty: "Easy",

    description:
    "Present your ideas through an engaging PowerPoint presentation and demonstrate your technical knowledge, creativity and communication skills.",

    rules: [
        "Maximum 2 members per team.",
        "Participants must bring their presentation file.",
        "Presentation time will be limited.",
        "Judges' decision will be final."
    ]
},

{
    id: 3,
    name: "Blind Coding",
    subtitle: "Blind Coding",
    members: "Individual",
    fee: "FREE",
    duration: "45 Minutes",
    difficulty: "Hard",

    description:
    "A programming challenge that tests coding logic, syntax knowledge and problem-solving ability without relying on normal code execution.",

    rules: [
        "Individual participation only.",
        "Participants must follow the coding restrictions announced by coordinators.",
        "The challenge must be completed within the allotted time.",
        "Judges' decision will be final."
    ]
},

{
    id: 4,
    name: "Find the Code Using Story",
    subtitle: "Find the Code Using Story",
    members: "Individual",
    fee: "FREE",
    duration: "30 Minutes",
    difficulty: "Medium",

    description:
    "Follow the clues hidden within a story, identify the programming logic and discover the code through observation, reasoning and problem-solving.",

    rules: [
        "Individual participation only.",
        "Participants must solve the challenge within the given time.",
        "External assistance is not permitted.",
        "Judges' decision will be final."
    ]
},

{
    id: 5,
    name: "Hackathon",
    subtitle: "Software Development",
    members: "Team of 3",
    fee: "₹300 / Team",
    duration: "3 Hours",
    difficulty: "Hard",

    description:
    "Build an innovative software solution for the given problem statement and demonstrate your team's technical skills, creativity and problem-solving ability.",

    rules: [
        "Exactly 3 members per team.",
        "Entry Fee ₹300 per team.",
        "A laptop is compulsory.",
        "A working solution or prototype must be demonstrated."
    ]
}

];


// ================================
// LEARN MORE
// ================================

const modal = document.getElementById("eventModal");
const closeBtn = document.getElementById("closeModal");

document.querySelectorAll(".learn-btn").forEach((button, index) => {

    button.addEventListener("click", (e) => {

        e.preventDefault();

        const event = events[index];

        document.getElementById("modalTitle").textContent = event.name;
        document.getElementById("modalSubtitle").textContent = event.subtitle;
        document.getElementById("modalMembers").textContent = event.members;
        document.getElementById("modalFee").textContent = event.fee;
        document.getElementById("modalDuration").textContent = event.duration;
        document.getElementById("modalDifficulty").textContent = event.difficulty;
        document.getElementById("modalDescription").textContent = event.description;

        const rules = document.getElementById("modalRules");

        rules.innerHTML = "";

        event.rules.forEach(rule => {

            const li = document.createElement("li");

            li.textContent = rule;

            rules.appendChild(li);

        });

        modal.style.display = "flex";

    });

});


if (closeBtn && modal) {

    closeBtn.onclick = () => {

        modal.style.display = "none";

    };

    window.addEventListener("click", (e) => {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    });

}
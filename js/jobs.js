let jobarray = [
  {
    id: 1,
    name: "Mobile First Corp",
    position: "React Native Developer",
    info: "Remote • Full-time • $130,000 - $175,000",
    badge: "NOT APPLIED",
    description:
      "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    id: 2,
    name: "WebFlow Agency",
    position: "Web Designer & Developer",
    info: "Los Angeles, CA • Part-time • $80,000 - $120,000",
    badge: "NOT APPLIED",
    description:
      "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  },
  {
    id: 3,
    name: "DataViz Solutions",
    position: "Data Visualization Specialist",
    info: "Boston, MA • Full-time • $125,000 - $165,000",
    badge: "NOT APPLIED",
    description:
      "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    id: 4,
    name: "StartupXYZ",
    position: "Full Stack Engineer",
    info: "Remote • Full-time • $120,000 - $160,000",
    badge: "NOT APPLIED",
    description:
      "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
  },
  {
    id: 5,
    name: "CloudFirst Inc",
    position: "Backend Developer",
    info: "Seattle, WA • Full-time • $140,000 - $190,000",
    badge: "NOT APPLIED",
    description:
      "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    id: 6,
    name: "Innovation Labs",
    position: "UI/UX Engineer",
    info: "Austin, TX • Full-time • $110,000 - $150,000",
    badge: "NOT APPLIED",
    description:
      "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  },
  {
    id: 7,
    name: "MegaCorp Solutions",
    position: "JavaScript Developer",
    info: "New York, NY • Full-time • $130,000 - $170,00",
    badge: "NOT APPLIED",
    description:
      "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    id: 8,
    name: "TechCorp Industries",
    position: "Senior Frontend Developer",
    info: "San Francisco, CA • Full-time • $130,000 - $175,000",
    badge: "NOT APPLIED",
    description:
      "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
  },
];

function render_job_html_peraless(jobarray) {
  // Grab container
  const container = document.getElementById("job-container");

  // Loop through jobs
  for (let job of jobarray) {
    // Create card element
    let card = document.createElement("div");
    card.className =
      "card bg-white border border-gray-200 rounded-xl p-10 max-w-10/12 mx-auto mb-4 cardlessperaless";
    card.id = `card-${job.id}`;
    card.setAttribute("data-job-id", job.id);
    card.innerHTML = `
        <div class="flex justify-between">
          <div>
            <h3 class="text-[#002C5C] text-xl font-bold mb-1">${job.name}</h3>
            <p class="text-[#64748B]">${job.position}</p>
          </div>
          <div class="w-10 h-10 border border-gray-200 rounded-full flex justify-center items-center cursor-pointer delete_btn">
            <i class="fa-regular fa-trash-can"></i>
          </div>
        </div>
        <p class="text-[#64748B] my-3">${job.info}</p>
        <div class="badge badge-soft badge-primary py-4 text-[#002C5C] rounded-sm my-3">
          ${job.badge}
        </div>
        <p class="text-[#323B49]">${job.description}</p>
        <div class="flex gap-3 mt-4">
          <button class="btn btn-outline btn-accent interview-btn">INTERVIEW</button>
          <button class="btn btn-outline btn-error reject-btn">REJECTED</button>
        </div>
      `;
    card.querySelector(".interview-btn").addEventListener("click", function () {
      if (!card.classList.contains("interview")) {
        card.classList.add("interview");
        if(card.classList.contains("rejected")){
                 card.classList.remove("rejected");
        }
      }
      update_card_label(card, 'INTERVIEW');
      update_interview_container(1);
    });
    card.querySelector(".reject-btn").addEventListener("click", function () {
      if (!card.classList.contains("rejected")) {
        card.classList.add("rejected");
        if(card.classList.contains("interview")){
                 card.classList.remove("interview");
        }
      }
       update_card_label(card, 'REJECTED');
      update_ireject_container(1);
    });
        card.querySelector(".delete_btn").addEventListener('click', function(){
            delete_A_card(card);
    })
    // Append to container
    container.appendChild(card);
  }
}
// console.log(jobarray);
document.addEventListener("DOMContentLoaded", function () {
  render_job_html_peraless(jobarray);

  //button interview
  const showInterviewBtn = document.getElementById("show_interview");
  const noJobSec = document.getElementsByClassName("nojob_sec")[0];
  showInterviewBtn.addEventListener("click", function () {
    const cards = document.querySelectorAll(".card");
    let found = 0;
    cards.forEach((card) => {
      if (card.classList.contains("interview")) {
        card.style.display = "block";
        found++;
      } else {
        card.style.display = "none"; // hide others
      }
    });
    if (found === 0) {
      noJobSec.style.display = "flex";
    } else {
      noJobSec.style.display = "none";
    }
    document.querySelector("button.selected").classList.remove("selected");
    this.classList.add("selected");
  });

  //button all
  const show_all = document.getElementById("show_all");
  show_all.addEventListener("click", function () {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.style.display = "block";
    });
    noJobSec.style.display = "none";
       document.querySelector("button.selected").classList.remove("selected");
        this.classList.add("selected");
  });

  //button rejected
  const showRejected = document.getElementById("show_rejected");
  showRejected.addEventListener("click", function () {
    const cards = document.querySelectorAll(".card");
    let found = 0;
    cards.forEach((card) => {
      if (card.classList.contains("rejected")) {
        card.style.display = "block";
        found++;
      } else {
        card.style.display = "none"; // hide others
      }
    });
    if (found === 0) {
      noJobSec.style.display = "flex";
    } else {
      noJobSec.style.display = "none";
    }
    document.querySelector("button.selected").classList.remove("selected");
    this.classList.add("selected");
  });

  //button interview action
});

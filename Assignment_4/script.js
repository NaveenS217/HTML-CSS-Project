// JSON Data (Generated using ChatGPT)
const mlData = [
  {
    title: "Supervised Learning",
    description: "A type of ML where the model learns from labeled data to make predictions.",
    examples: ["Linear Regression", "Decision Tree", "Support Vector Machine"],
    applications: ["Spam Detection", "Credit Scoring", "Medical Diagnosis"]
  },
  {
    title: "Unsupervised Learning",
    description: "A method where the model identifies patterns in unlabeled data.",
    examples: ["K-Means Clustering", "PCA", "Autoencoders"],
    applications: ["Customer Segmentation", "Anomaly Detection", "Feature Reduction"]
  },
  {
    title: "Reinforcement Learning",
    description: "A learning approach where an agent learns to make decisions by interacting with an environment.",
    examples: ["Q-Learning", "Deep-Q Network", "Policy Gradient Methods"],
    applications: ["Game Playing", "Robotics", "Self-Driving Cars"]
  }
];

// Generate Cards Dynamically
const container = document.getElementById("card-container");

mlData.forEach(item => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h2>${item.title}</h2>
        <p>${item.description}</p>

        <div class="section-title">EXAMPLES</div>
        <div class="tag-list">
            ${item.examples.map(ex => `<span class="tag">${ex}</span>`).join("")}
        </div>

        <div class="section-title">APPLICATIONS</div>
        <div class="tag-list">
            ${item.applications.map(app => `<span class="tag">${app}</span>`).join("")}
        </div>
    `;

    container.appendChild(card);
});

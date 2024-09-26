// Elements
const jobListingsLink = document.getElementById('job-listings-link');
const mainContent = document.getElementById('main-content');

// Sample job listings (you can replace this with dynamic data)
const jobs = [
    { id: 1, title: 'Software Developer' },
    { id: 2, title: 'UI/UX Designer' },
    { id: 3, title: 'Project Manager' },
];

// Event Listener for 'Job Listings' link
jobListingsLink.addEventListener('click', () => {
    displayJobListings();
});

// Function to display job listings
function displayJobListings() {
    mainContent.innerHTML = `
        <h1>Available Job Roles</h1>
        <ul class="jobs-list" id="jobs-list">
            ${jobs.map(job => `<li onclick="selectJob(${job.id})">${job.title}</li>`).join('')}
        </ul>
        <div id="upload-section" style="display: none;">
            <h2>Upload Your Resume</h2>
            <input type="file" id="resume-upload" />
            <button onclick="submitResume()">Submit</button>
        </div>
    `;
}

// Function to handle job selection and display the upload section
function selectJob(jobId) {
    const uploadSection = document.getElementById('upload-section');
    uploadSection.style.display = 'block'; // Show the upload section
}

// Function to handle resume submission
function submitResume() {
    const resumeUpload = document.getElementById('resume-upload');
    if (resumeUpload.files.length > 0) {
        alert('Resume uploaded successfully!');
    } else {
        alert('Please select a file before submitting.');
    }
}

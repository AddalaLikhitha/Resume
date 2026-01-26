// ================= COMMON =================
let registerBtn = document.getElementById("registerBtn");
let loginBtn = document.getElementById("loginBtn");
let addJobBtn = document.getElementById("addJobBtn");
let jobTable = document.getElementById("jobTable");
let applyForm = document.getElementById("applyForm");
let appliedTable = document.getElementById("appliedTable");
let adminApplied = document.getElementById("adminApplied");
let adminJobTable = document.getElementById("adminJobTable");

// ================= REGISTER =================
if (registerBtn) {
    registerBtn.onclick = () => {
        let user = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registered Successfully");
        location.href = "index.html";
    };
}

// ================= LOGIN =================
if (loginBtn) {
    loginBtn.onclick = () => {
        let role = document.getElementById("loginRole").value;
        let email = document.getElementById("loginEmail").value;
        let pass = document.getElementById("loginPassword").value;

        if (role === "admin") {
            if (email === "admin@gmail.com" && pass === "admin123") {
                location.href = "admin.html";
            } else {
                alert("Invalid Admin Credentials");
            }
        } else {
            let user = JSON.parse(localStorage.getItem("user"));
            if (user && user.email === email && user.password === pass) {
                localStorage.setItem("loggedUser", email);
                location.href = "jobs.html";
            } else {
                alert("Invalid User Credentials");
            }
        }
    };
}

// ================= ADD JOB (ADMIN) =================
if (addJobBtn) {
    addJobBtn.onclick = () => {
        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        jobs.push({
            title: jobTitle.value,
            company: companyName.value,
            location: jobLocation.value,
            package: jobPackage.value,
            skills: jobSkills.value,
            desc: jobDesc.value
        });

        localStorage.setItem("jobs", JSON.stringify(jobs));
        alert("Job Added Successfully");
        location.reload();
    };
}

// ================= SHOW JOBS (USER) =================
if (jobTable) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.forEach((j, i) => {
        jobTable.innerHTML += `
        <tr>
            <td>${j.title}</td>
            <td>${j.company}</td>
            <td>${j.location}</td>
            <td>${j.package}</td>
            <td><button onclick="applyJob(${i})">Apply</button></td>
        </tr>`;
    });
}

function applyJob(i) {
    localStorage.setItem("jobIndex", i);
    location.href = "applyform.html";
}

// ================= APPLY FORM =================
if (applyForm) {
    applyForm.onsubmit = e => {
        e.preventDefault();

        let jobs = JSON.parse(localStorage.getItem("jobs"));
        let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
        let job = jobs[localStorage.getItem("jobIndex")];

        let reader = new FileReader();
        reader.onload = () => {
            applied.push({
                userEmail: localStorage.getItem("loggedUser"),
                name: fullName.value,
                email: email.value,
                mobile: mobile.value,
                qualification: qualification.value,
                skills: skills.value,
                jobTitle: job.title,
                company: job.company,
                resume: reader.result,
                appliedOn: new Date().toLocaleDateString()
            });

            localStorage.setItem("appliedJobs", JSON.stringify(applied));
            alert("Applied Successfully");
            location.href = "jobs.html";
        };
        reader.readAsDataURL(resume.files[0]);
    };
}

// ================= USER VIEW APPLIED =================
if (appliedTable) {
    let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    let logged = localStorage.getItem("loggedUser");

    applied.filter(a => a.userEmail === logged)
        .forEach((a, i) => {
            appliedTable.innerHTML += `
            <tr>
                <td>${a.jobTitle}</td>
                <td>${a.company}</td>
                <td>${a.appliedOn}</td>
                <td><a href="${a.resume}" target="_blank" download="resume.pdf">View Resume</a></td>
                <td><button onclick="deleteApplied(${i})">Delete</button></td>
            </tr>`;
        });
}

function deleteApplied(i) {
    let applied = JSON.parse(localStorage.getItem("appliedJobs"));
    applied.splice(i, 1);
    localStorage.setItem("appliedJobs", JSON.stringify(applied));
    location.reload();
}

// ================= ADMIN VIEW APPLIED =================
if (adminApplied) {
    let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    applied.forEach((a, i) => {
        adminApplied.innerHTML += `
        <tr>
            <td>${a.name}</td>
            <td>${a.email}</td>
            <td>${a.mobile}</td>
            <td>${a.qualification}</td>
            <td>${a.skills || "-"}</td>
            <td>${a.jobTitle}</td>
            <td><a href="${a.resume}" download="${a.name}_Resume.pdf">Download Resume</a></td>
            <td><button onclick="adminDeleteApplied(${i})">Delete</button></td>
        </tr>`;
    });
}

function adminDeleteApplied(i) {
    let applied = JSON.parse(localStorage.getItem("appliedJobs"));
    applied.splice(i, 1);
    localStorage.setItem("appliedJobs", JSON.stringify(applied));
    location.reload();
}

// ================= ADMIN JOB LIST =================
if (adminJobTable) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.forEach((j, i) => {
        adminJobTable.innerHTML += `
        <tr>
            <td>${j.title}</td>
            <td>${j.company}</td>
            <td>${j.location}</td>
            <td>${j.package}</td>
            <td>${j.skills}</td>
            <td><button onclick="deleteJob(${i})">Delete</button></td>
        </tr>`;
    });
}

function deleteJob(i) {
    let jobs = JSON.parse(localStorage.getItem("jobs"));
    jobs.splice(i, 1);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    location.reload();
}

// ================= NAV =================
function logout() {
    localStorage.removeItem("loggedUser");
    location.href = "index.html";
} 


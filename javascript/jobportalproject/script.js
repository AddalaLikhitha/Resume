// ================= REGISTER =================
let registerBtn = document.getElementById("registerBtn");
if (registerBtn) {
    registerBtn.onclick = () => {
        let user = {
            name: name.value,
            email: email.value,
            password: password.value
        };
        localStorage.setItem("user", JSON.stringify(user));
        alert("Registered Successfully");
        location.href = "index.html";
    };
}

// ================= LOGIN =================
let loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
    loginBtn.onclick = () => {
        let role = loginRole.value;
        let email = loginEmail.value;
        let pass = loginPassword.value;

        if (role === "admin") {
            if (email === "admin@gmail.com" && pass === "admin123") {
                location.href = "admin.html";
            } else {
                alert("Invalid Admin");
            }
        } else {
            let user = JSON.parse(localStorage.getItem("user"));
            if (user && email === user.email && pass === user.password) {
                localStorage.setItem("currentUser", JSON.stringify(user));
                location.href = "jobs.html";
            } else {
                alert("Invalid User");
            }
        }
    };
}

// ================= ADD JOB (ADMIN) =================
let addJobBtn = document.getElementById("addJobBtn");
if (addJobBtn) {
    addJobBtn.onclick = () => {
        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        jobs.push({
            title: jobTitle.value,
            company: companyName.value,
            location: jobLocation.value,
            skills: jobSkills.value
        });

        localStorage.setItem("jobs", JSON.stringify(jobs));
        alert("Job Added Successfully");
        location.reload();
    };
}
// ================= DELETE JOB (ADMIN) =================
function deleteAdminJob(index) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    if (confirm("Are you sure you want to delete this job?")) {
        jobs.splice(index, 1);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        location.reload();
    }
}
// ================= SHOW JOBS (USER) =================
let jobTable = document.getElementById("jobTable");

if (jobTable) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    jobs.forEach((j, i) => {
        jobTable.innerHTML += `
        <tr>
            <td>${j.title}</td>
            <td>${j.company}</td>
            <td>${j.location}</td>
            <td>${j.skills}</td>
            <td>
                <button onclick="openApplyForm(${i})">Apply</button>
            </td>
        </tr>
        `;
    });
}

// ================= OPEN APPLY FORM =================
function openApplyForm(i) {
    localStorage.setItem("selectedJobIndex", i);
    location.href = "apply.html";
}

// ================= APPLY FORM PAGE =================
let applyForm = document.getElementById("applyForm");

if (applyForm) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    let index = localStorage.getItem("selectedJobIndex");
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Please login first");
        location.href = "index.html";
    }

    document.getElementById("jobTitle").value = jobs[index].title;
    document.getElementById("company").value = jobs[index].company;
    document.getElementById("userName").value = currentUser.name;
    document.getElementById("userEmail").value = currentUser.email;

    applyForm.onsubmit = function (e) {
        e.preventDefault();

        let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];

        applied.push({
            title: jobs[index].title,
            company: jobs[index].company,
            location: jobs[index].location,
            skills: jobs[index].skills,
            user: currentUser.name,
            email: currentUser.email,
            status: "Pending"
        });

        localStorage.setItem("appliedJobs", JSON.stringify(applied));
        alert("Job Applied Successfully");

        localStorage.removeItem("selectedJobIndex");
        location.href = "jobs.html";
    };
}

// ================= SHOW APPLIED JOBS (USER) =================
let appliedJobTable = document.getElementById("appliedJobTable");

if (appliedJobTable) {
    let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    applied.forEach((j, index) => {
        if (currentUser && j.email === currentUser.email) {
            appliedJobTable.innerHTML += `
            <tr>
                <td>${j.title}</td>
                <td>${j.company}</td>
                <td>${j.location}</td>
                <td>${j.skills}</td>
                <td>${j.status}</td>
                <td>
                    <button class="delete" onclick="deleteApplied(${index})">
                        Delete
                    </button>
                </td>
            </tr>`;
        }
    });
}
function deleteApplied(index) {
    let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    if (confirm("Are you sure you want to delete this job?")) {
        applied.splice(index, 1);
        localStorage.setItem("appliedJobs", JSON.stringify(applied));
        location.reload();
    }
}


// ================= ADMIN VIEW JOBS =================
let adminTable = document.getElementById("adminJobTable");
if (adminTable) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    jobs.forEach((j, i) => {
        adminTable.innerHTML += `
        <tr>
            <td>${j.title}</td>
            <td>${j.company}</td>
            <td>${j.location}</td>
            <td>${j.skills}</td>
            <td>
                <button onclick="deleteAdmin(${i})">Delete</button>
            </td>
        </tr>`;
    });
}

function deleteAdmin(i) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.splice(i, 1);
    localStorage.setItem("jobs", JSON.stringify(jobs));
    location.reload();
}

// ================= ADMIN VIEW APPLIED JOBS =================
let adminAppliedTable = document.getElementById("adminAppliedTable");
if (adminAppliedTable) {
    let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];

    applied.forEach((a, i) => {
        adminAppliedTable.innerHTML += `
        <tr>
            <td>${a.title}</td>
            <td>${a.company}</td>
            <td>${a.user}</td>
            <td>${a.email}</td>
            <td>${a.status}</td>
            <td>
                <button onclick="updateStatus(${i}, 'Accepted')">Accept</button>
                <button onclick="updateStatus(${i}, 'Rejected')">Reject</button>
            </td>
        </tr>`;
    });
}

function updateStatus(i, status) {
    let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    applied[i].status = status;
    localStorage.setItem("appliedJobs", JSON.stringify(applied));
    alert("Application " + status);
    location.reload();
}

// ================= NAVIGATION =================
function viewApplied() {
    location.href = "applied.html";
}

function goBack() {
    location.href = "jobs.html";
}

function logout() {
    localStorage.removeItem("currentUser");
    location.href = "index.html";
}

// // ================= REGISTER =================

// let registerBtn = document.getElementById("registerBtn");
// if (registerBtn) {
//     registerBtn.onclick = () => {
//         let user = {
//             name: name.value,
//             email: email.value,
//             password: password.value
//         };
//         localStorage.setItem("user", JSON.stringify(user));
//         alert("Registered Successfully");
//         location.href = "index.html";
//     };
// }

// // ================= LOGIN =================
// let loginBtn = document.getElementById("loginBtn");
// if (loginBtn) {
//     loginBtn.onclick = () => {
//         let role = loginRole.value;
//         let email = loginEmail.value;
//         let pass = loginPassword.value;

//         if (role === "admin") {
//             if (email === "admin@gmail.com" && pass === "admin123") {
//                 location.href = "admin.html";
//             } else {
//                 alert("Invalid Admin");
//             }
//         } else {
//             let user = JSON.parse(localStorage.getItem("user"));
//             if (user && email === user.email && pass === user.password) {
//                 localStorage.setItem("currentUser", JSON.stringify(user)); // 👈 IMPORTANT
//                 location.href = "jobs.html";
//             } else {
//                 alert("Invalid User");
//             }
//         }
//     };
// }

// // ================= ADD JOB (ADMIN) =================
// let addJobBtn = document.getElementById("addJobBtn");
// if (addJobBtn) {
//     addJobBtn.onclick = () => {
//         let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
//         jobs.push({
//             title: jobTitle.value,
//             company: companyName.value,
//             location: jobLocation.value,
//             skills: jobSkills.value
//         });
//         localStorage.setItem("jobs", JSON.stringify(jobs));
//         alert("Job Added");
//         location.reload();
//     };
// }

// // ================= SHOW JOBS (USER) =================
// let jobTable = document.getElementById("jobTable");
// if (jobTable) {
//     let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
//     jobs.forEach((j, i) => {
//         jobTable.innerHTML += `
//         <tr>
//             <td>${j.title}</td>
//             <td>${j.company}</td>
//             <td>${j.location}</td>
//             <td>${j.skills}</td>
//             <td><button onclick="applyJob(${i})">Apply</button></td>
//         </tr>`;
//     });
// }

// // ================= APPLY JOB =================
// function applyJob(i) {
//     let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//     if (!currentUser) {
//         alert("Please login first");
//         return;
//     }

//     applied.push({
//         title: jobs[i].title,
//         company: jobs[i].company,
//         location: jobs[i].location,
//         skills: jobs[i].skills,
//         user: currentUser.name,
//         email: currentUser.email,
//         status: "Pending"
//     });

//     localStorage.setItem("appliedJobs", JSON.stringify(applied));
//     alert("Job Applied Successfully");
// }

// // ================= SHOW APPLIED JOBS (USER) =================
// let appliedJobTable = document.getElementById("appliedJobTable");
// if (appliedJobTable) {
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//     applied.forEach((j, i) => {
//         if (currentUser && j.email === currentUser.email) {
//             appliedJobTable.innerHTML += `
//             <tr>
//                 <td>${j.title}</td>
//                 <td>${j.company}</td>
//                 <td>${j.location}</td>
//                 <td>${j.skills}</td>
//                 <td>${j.status}</td>
//                 <td><button onclick="deleteApplied(${i})">Delete</button></td>
//             </tr>`;
//         }
//     });
// }

// function deleteApplied(i) {
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     applied.splice(i, 1);
//     localStorage.setItem("appliedJobs", JSON.stringify(applied));
//     location.reload();
// }

// // ================= ADMIN VIEW JOBS =================
// let adminTable = document.getElementById("adminJobTable");
// if (adminTable) {
//     let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
//     jobs.forEach((j, i) => {
//         adminTable.innerHTML += `
//         <tr>
//             <td>${j.title}</td>
//             <td>${j.company}</td>
//             <td>${j.location}</td>
//             <td>${j.skills}</td>
//             <td><button onclick="deleteAdmin(${i})">Delete</button></td>
//         </tr>`;
//     });
// }

// function deleteAdmin(i) {
//     let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
//     jobs.splice(i, 1);
//     localStorage.setItem("jobs", JSON.stringify(jobs));
//     location.reload();
// }

// // ================= ADMIN VIEW APPLIED JOBS =================
// let adminAppliedTable = document.getElementById("adminAppliedTable");
// if (adminAppliedTable) {
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     applied.forEach((a, i) => {
//         adminAppliedTable.innerHTML += `
//         <tr>
//             <td>${a.title}</td>
//             <td>${a.company}</td>
//             <td>${a.user}</td>
//             <td>${a.email}</td>
//             <td>${a.status}</td>
//             <td>
//                 <button onclick="acceptApplication(${i})">Accept</button>
//                 <button onclick="rejectApplication(${i})">Reject</button>
//             </td>
//         </tr>`;
//     });
// }

// function acceptApplication(i) {
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     applied[i].status = "Accepted";
//     localStorage.setItem("appliedJobs", JSON.stringify(applied));
//     alert("Application Accepted");
//     location.reload();
// }

// function rejectApplication(i) {
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     applied[i].status = "Rejected";
//     localStorage.setItem("appliedJobs", JSON.stringify(applied));
//     alert("Application Rejected");
//     location.reload();
// }

// // ================= NAVIGATION =================
// function viewApplied() {
//     location.href = "applied.html";
// }

// function goBack() {
//     location.href = "jobs.html";
// }

// function logout() {
//     localStorage.removeItem("currentUser");
//     location.href = "index.html";
// }
// ================= REGISTER =================
// let registerBtn = document.getElementById("registerBtn");
// if (registerBtn) {
//     registerBtn.onclick = () => {
//         let user = {
//             name: name.value,
//             email: email.value,
//             password: password.value
//         };
//         localStorage.setItem("user", JSON.stringify(user));
//         alert("Registered Successfully");
//         location.href = "index.html";
//     };
// }

// // ================= LOGIN =================
// let loginBtn = document.getElementById("loginBtn");
// if (loginBtn) {
//     loginBtn.onclick = () => {
//         let role = loginRole.value;
//         let email = loginEmail.value;
//         let pass = loginPassword.value;

//         if (role === "admin") {
//             if (email === "admin@gmail.com" && pass === "admin123") {
//                 location.href = "admin.html";
//             } else {
//                 alert("Invalid Admin");
//             }
//         } else {
//             let user = JSON.parse(localStorage.getItem("user"));
//             if (user && email === user.email && pass === user.password) {
//                 localStorage.setItem("currentUser", JSON.stringify(user)); // 👈 IMPORTANT
//                 location.href = "jobs.html";
//             } else {
//                 alert("Invalid User");
//             }
//         }
//     };
// }

// // ================= ADD JOB (ADMIN) =================
// let addJobBtn = document.getElementById("addJobBtn");
// if (addJobBtn) {
//     addJobBtn.onclick = () => {
//         let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

//         jobs.push({
//             title: jobTitle.value,
//             company: companyName.value,
//             location: jobLocation.value,
//             skills: jobSkills.value
//         });

//         localStorage.setItem("jobs", JSON.stringify(jobs));
//         alert("Job Added Successfully");
//         location.reload();
//     };
// }

// ================= SHOW JOBS (USER) =================
// let jobTable = document.getElementById("jobTable");
// if (jobTable) {
//     let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

//     jobs.forEach((j, i) => {
//         jobTable.innerHTML += `
//         <tr>
//             <td>${j.title}</td>
//             <td>${j.company}</td>
//             <td>${j.location}</td>
//             <td>${j.skills}</td>
//             <td><button onclick="openApplyForm(${i})">Apply</button></td>


//         </tr>`;
//     });
// }

// ================= SHOW JOBS (USER) =================
// let jobTable = document.getElementById("jobTable");

// if (jobTable) {
//     let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

//     jobs.forEach((j, i) => {
//         jobTable.innerHTML += `
//         <tr>
//             <td>${j.title}</td>
//             <td>${j.company}</td>
//             <td>${j.location}</td>
//             <td>${j.skills}</td>
//             <td>
//                 <button onclick="openApplyForm(${i})">Apply</button>
//             </td>
//         </tr>
//         `;
//     });
// }

// // ================= APPLY JOB =================
// function applyJob(i) {
//     let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//     if (!currentUser) {
//         alert("Please login first");
//         return;
//     }

//     applied.push({
//         title: jobs[i].title,
//         company: jobs[i].company,
//         location: jobs[i].location,
//         skills: jobs[i].skills,
//         user: currentUser.name,
//         email: currentUser.email,
//         status: "Pending"
//     });

//     localStorage.setItem("appliedJobs", JSON.stringify(applied));
//     alert("Job Applied Successfully");
// }

// // ================= SHOW APPLIED JOBS (USER) =================
// let appliedJobTable = document.getElementById("appliedJobTable");
// if (appliedJobTable) {
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     let currentUser = JSON.parse(localStorage.getItem("currentUser"));

//     applied.forEach((j, i) => {
//         if (currentUser && j.email === currentUser.email) {
//             appliedJobTable.innerHTML += `
//             <tr>
//                 <td>${j.title}</td>
//                 <td>${j.company}</td>
//                 <td>${j.location}</td>
//                 <td>${j.skills}</td>
//                 <td>${j.status}</td>
//                 <td>
//                     <button onclick="deleteApplied(${i})">Delete</button>
//                 </td>
//             </tr>`;
//         }
//     });
// }

// function deleteApplied(i) {
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     applied.splice(i, 1);
//     localStorage.setItem("appliedJobs", JSON.stringify(applied));
//     location.reload();
// }

// // ================= ADMIN VIEW JOBS =================
// let adminTable = document.getElementById("adminJobTable");
// if (adminTable) {
//     let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

//     jobs.forEach((j, i) => {
//         adminTable.innerHTML += `
//         <tr>
//             <td>${j.title}</td>
//             <td>${j.company}</td>
//             <td>${j.location}</td>
//             <td>${j.skills}</td>
//             <td>
//                 <button onclick="deleteAdmin(${i})">Delete</button>
//             </td>
//         </tr>`;
//     });
// }

// function deleteAdmin(i) {
//     let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
//     jobs.splice(i, 1);
//     localStorage.setItem("jobs", JSON.stringify(jobs));
//     location.reload();
// }

// // ================= ADMIN VIEW APPLIED JOBS =================
// let adminAppliedTable = document.getElementById("adminAppliedTable");
// if (adminAppliedTable) {
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];

//     applied.forEach((a, i) => {
//         adminAppliedTable.innerHTML += `
//         <tr>
//             <td>${a.title}</td>
//             <td>${a.company}</td>
//             <td>${a.user}</td>
//             <td>${a.email}</td>
//             <td>${a.status}</td>
//             <td>
//                 <button onclick="updateStatus(${i}, 'Accepted')">Accept</button>
//                 <button onclick="updateStatus(${i}, 'Rejected')">Reject</button>
//             </td>
//         </tr>`;
//     });
// }

// function updateStatus(i, status) {
//     let applied = JSON.parse(localStorage.getItem("appliedJobs")) || [];
//     applied[i].status = status;
//     localStorage.setItem("appliedJobs", JSON.stringify(applied));
//     alert("Application " + status);
//     location.reload();
// }

// // ================= NAVIGATION =================
// function viewApplied() {
//     location.href = "applied.html";
// }

// function goBack() {
//     location.href = "jobs.html";
// }

// function logout() {
//     localStorage.removeItem("currentUser");
//     location.href = "index.html";
// }

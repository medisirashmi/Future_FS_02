let leads = [];

function addLead() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let source = document.getElementById("source").value;
    let status = document.getElementById("status").value;

    if (name === "" || email === "" || source === "") {
        alert("Please fill all fields");
        return;
    }

    leads.push({
        name: name,
        email: email,
        source: source,
        status: status
    });

    displayLeads();

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("source").value = "";
}

function displayLeads() {

    let table = document.getElementById("leadTable");

    table.innerHTML = "";

    for (let i = 0; i < leads.length; i++) {

        table.innerHTML += `
        <tr>
            <td>${leads[i].name}</td>
            <td>${leads[i].email}</td>
            <td>${leads[i].source}</td>
            <td>${leads[i].status}</td>
            <td>
                <button onclick="deleteLead(${i})">Delete</button>
            </td>
        </tr>
        `;
    }
}

function deleteLead(index) {
    leads.splice(index, 1);
    displayLeads();
}

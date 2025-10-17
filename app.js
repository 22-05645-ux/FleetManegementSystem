// ------------------- USERS -------------------
let users = JSON.parse(localStorage.getItem("users")) || [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "user", password: "user123", role: "user" }
];
localStorage.setItem("users", JSON.stringify(users));

let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || null;

// ------------------- VEHICLE DATA -------------------
let vehicles = JSON.parse(localStorage.getItem("vehicles")) || [
  { plate: "NGX 4853", whereabouts: "Batangas City", history: [] },
  { plate: "NGX 4856", whereabouts: "Batangas City", history: [] },
  { plate: "NFZ 2848", whereabouts: "Batangas City", history: [] },
  { plate: "CBP 5511", whereabouts: "Batangas City", history: [] },
  { plate: "CBP 1336", whereabouts: "Batangas City", history: [] },
  { plate: "ZSG 105", whereabouts: "Batangas City", history: [] },
  { plate: "UOF 225", whereabouts: "Batangas City", history: [] },
  { plate: "NQX 657", whereabouts: "Batangas City", history: [] },
  { plate: "WQT 225", whereabouts: "Batangas City", history: [] },
  { plate: "MAM 7806", whereabouts: "Batangas City", history: [] },
  { plate: "NBO 6586", whereabouts: "Batangas City", history: [] }
];

const details = {
   "WQT 225": { model: "Mitsubishi L300 Exceed 2.5 FB", 
              yearModel: "2013", 
              Color: "Polar White", 
              FuelType: "Diesel", 
              Classification:"Private-(PVT)", 
              VehicleType: "Utility Vehicle FB", 
              Aircon: "Non-Aircon", 
              GrossWt:"3200", 
              NetWt: "1600", 
              ShippingWt: "1600", 
              NetCapacity: "1600", 
              EngineNo:"4D56AAH7453", 
              MVFILENO:"1336-00000382369", 
              CRNO: "178100495", 
              PistonDisplacement: "2477", 
              NoofCylinders: "4", 
              ChassisNo:"", 
              LTOclientId:"C-22-0070546", 
              tin: "000-003-934-488", 
              AccountNumber:"558267",
               AutoSweep: "R178408",
               EasyTrip: "5200-1890-1081",
              OR:"1368-000000116000",
             },
  "NGX 4853": { model: "Mitsubishi L300", 
               yearModel: "", 
               color: "White", 
               FuelType: "", 
               Classification:"", 
               VehicleType: "", 
               Aircon: "", 
               GrossWt:"", 
               NetWt: "", 
               ShippingWt: "", 
               NetCapacity: "", 
               EngineNo:"", 
               MVFILENO:"", 
               CRNO: "44654417-3", 
               PistonDisplacement: "", 
               NoofCylinders: "", 
               ChassisNo:"", 
               LTOclientId:"", 
               tin: "",
               AccountNumber: "2388348",
               AutoSweep: "F883794",
               EasyTrip: "5400-0010-2233",
               OR: "1902357332",
              },
  "NGX 4856": { model: "Mitsubishi L300", 
               yearModel: "", 
               color: "White", 
               FuelType: "", 
               Classification:"", 
               VehicleType: "", 
               Aircon: "", 
               GrossWt:"", 
               NetWt: "", 
               ShippingWt: "", 
               NetCapacity: "", 
               AccountNumber:"2402191",
               AutoSweep: "F897407",
               EasyTrip: "",
               OR:"2187876950",
              },
  "CBP 1336": { model: "ISUZU Rebuilt Dropside W/ PTG Truck", 
               yearModel: "2021", 
               color: "White", 
               FuelType: "Diesel", 
               Classification:"Private", 
               VehicleType: "Utility Vehicle|UV|DIE", 
               Aircon: "", 
               GrossWt:"4200", 
               NetWt: "2100", 
               ShippingWt: "2100", 
               NetCapacity: "2100", 
               EngineNo:"4HG1-858189", 
               MVFILENO:"0389-00000019723", 
               CRNO: "38358340-6 / 434598441", 
               PistonDisplacement: "4570", 
               NoofCylinders: "4", 
               ChassisNo:"NKR71E-7426960", 
               LTOclientId:"", 
               tin: "",
               AccountNumber:"2417423",
               AutoSweep: "F912083",
               EasyTrip: "5400-0013-9874",
               OR:"0404-000000095320",
              },
  "ZSG 105": { model: "Mitsubishi L300", 
              yearModel: "", 
              color: "White", 
              FuelType: "", 
              Classification:"", 
              VehicleType: "", 
              Aircon: "", 
              GrossWt:"", 
              NetWt: "", 
              ShippingWt: "", 
              NetCapacity: "", 
              EngineNo:"", 
              MVFILENO:"", 
              CRNO: "", 
              PistonDisplacement: "", 
              NoofCylinders: "", 
              ChassisNo:"", 
              LTOclientId:"", 
              tin: "",
              AccountNumber:"780819",
               AutoSweep: "R331861",
               EasyTrip: "5200-1506-1167",
             },
  "UOF 225": { model: "ISUZU SOBIDA", 
              yearModel: "", 
              color: "GREEN", 
              FuelType: "", 
              Classification:"", 
              VehicleType: "", 
              Aircon: "", 
              GrossWt:"", 
              NetWt: "", 
              ShippingWt: "", 
              NetCapacity: "", 
              EngineNo:"", 
              MVFILENO:"", 
              CRNO: "", 
              PistonDisplacement: "",
              NoofCylinders: "",
              ChassisNo:"", 
              LTOclientId:"",
              tin: "", 
              AccountNumber:"1247218",
               AutoSweep: "R761904",
               EasyTrip: "5200-1893-0261",
             },
  "NQX 657": { model: "ISUZU D-MAX", 
              yearModel: "2010", 
              color: "Canyon Red", 
              FuelType: "Diesel", 
              Classification:"Private-(PVT)",
              VehicleType: "Utility Vehicle Double Cab", 
              Aircon: "R134a", 
              GrossWt:"2650", 
              NetWt: "", 
              ShippingWt: "",
              NetCapacity: "", 
              EngineNo:"4JJ1HD1728", 
              MVFILENO:"", 
              CRNO: "", 
              PistonDisplacement: "",
              NoofCylinders: "",
              ChassisNo:"PABTFR85HA0004745", 
              LTOclientId:"22-900101-2440171", 
              tin: "000865491061", 
              AccountNumber:"763041",
              AutoSweep: "NQX657",
              EasyTrip: "5200-3355-7983",
              OR:"0404-000000106583",
             },
  "MAM 7806": { model: "TRUCK", 
               yearModel: "", 
               color: "GREEN", 
               FuelType: "",
               Classification:"", 
               VehicleType: "", 
               Aircon: "", 
               GrossWt:"", 
               NetWt: "", 
               ShippingWt: "", 
               NetCapacity: "", 
               EngineNo:"",
               MVFILENO:"", 
               CRNO: "40689765-4", 
               PistonDisplacement: "", 
               NoofCylinders: "", 
               ChassisNo:"", 
               LTOclientId:"", 
               tin: "", 
               AccountNumber:"2190558",
               AutoSweep: "F690216",
               EasyTrip: "5200-3587-1718",
               OR:"0404-000000095251",
              },
  "NBO 6586": { model: "EURO-IV", 
               yearBought: "", 
               LTOClientID: "C-22-0070546", 
               yearModel: "2018", 
               color: "Arc White", 
               FuelType: "Diesel",
               Classification:"Private-(PVT)", 
               VehicleType: "Utility Vehicle PASSENGER VAN", 
               Aircon: "Non-Aircon", 
               AccountNumber:"884984",
               AutoSweep: "R415774",
               EasyTrip: "5200-2566-4138",
              },
}; // keep your original details object untouched

const vehicleImages = {
  "NGX 4853": "https://alpinemotors.com.ph/wp-content/uploads/2021/05/L300.png",
  "NGX 4856": "https://alpinemotors.com.ph/wp-content/uploads/2021/05/L300.png",
  "NFZ 2848": "https://www.isuzu-gencars.com.ph/wp-content/uploads/2020/07/Isuzu-TRAVIZ-Utility-Van-222-scaled.jpg",
  "CBP 5511": "https://carused.jp/images/elf/flatbody.jpg",
  "CBP 1336": "https://carused.jp/images/elf/flatbody.jpg",
  "ZSG 105": "https://alpinemotors.com.ph/wp-content/uploads/2021/05/L300.png",
  "UOF 225": "https://www.isuzu-gencars.com.ph/wp-content/uploads/2020/07/Isuzu-TRAVIZ-Utility-Van-222-scaled.jpg",
  "NQX 657": "https://isuzuintecogroup.com/wp-content/uploads/2022/12/4x4-lsa-redspinel.png",
  "WQT 225": "https://alpinemotors.com.ph/wp-content/uploads/2021/05/L300.png",
  "MAM 7806": "https://carused.jp/images/elf/flatbody.jpg",
  "NBO 6586": "https://www.isuzu-gencars.com.ph/wp-content/uploads/2020/07/Isuzu-TRAVIZ-Utility-Van-222-scaled.jpg"
};

const app = document.getElementById("app");
let selectedVehicle = null;
let activeTab = "Details";

// ------------------- CLOCK -------------------
function updateClock() {
  const clock = document.getElementById("clock");
  if (clock) clock.textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// ------------------- LOGIN / LOGOUT -------------------
function renderLogin() {
  app.innerHTML = `
    <div class="login-container">
      <h2>Login</h2>
      <form onsubmit="handleLogin(event)">
        <input type="text" id="username" placeholder="Username" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p class="hint">Admin: admin123 | User: user123</p>
    </div>
  `;
}

function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    loggedInUser = user;
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    renderList();
  } else {
    alert("Invalid username or password!");
  }
}

function handleLogout() {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.removeItem("loggedInUser");
    loggedInUser = null;
    renderLogin();
  }
}

// ------------------- MAIN LIST -------------------
function renderList() {
  app.innerHTML = `
    <div class="top-bar">
      <div>Welcome, <strong>${loggedInUser.username}</strong> (${loggedInUser.role})</div>
      <div class="top-bar-actions">
        ${loggedInUser.role === "admin" ? `<button class="manage-btn" onclick="renderUserManagement()">User Management</button>` : ""}
        <button class="change-pass-btn" onclick="renderChangePassword()">Change Password</button>
        <button class="logout-btn" onclick="handleLogout()">Logout</button>
      </div>
    </div>
    <div class="grid"></div>
  `;

  const grid = app.querySelector(".grid");
  vehicles.forEach(v => {
    const imgUrl = vehicleImages[v.plate];
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${imgUrl}" alt="${v.plate}" />
      <h2>${v.plate}</h2>
      <p>Whereabouts: ${v.whereabouts}</p>
    `;
    card.onclick = () => {
      selectedVehicle = v.plate;
      activeTab = "Details";
      renderDetails();
    };
    grid.appendChild(card);
  });
}

// ------------------- VEHICLE DETAILS -------------------
function renderDetails() {
  const v = vehicles.find(x => x.plate === selectedVehicle);
  const d = details[selectedVehicle];
  const imgUrl = vehicleImages[v.plate];

  app.innerHTML = `
    <div class="top-bar">
      <div>Welcome, <strong>${loggedInUser.username}</strong> (${loggedInUser.role})</div>
      <div class="top-bar-actions">
        ${loggedInUser.role === "admin" ? `<button class="manage-btn" onclick="renderUserManagement()">User Management</button>` : ""}
        <button class="change-pass-btn" onclick="renderChangePassword()">Change Password</button>
        <button class="logout-btn" onclick="handleLogout()">Logout</button>
      </div>
    </div>
    <div class="details-container">
      <button class="back-btn" onclick="backToList()">← Back</button>
      <h1>${v.plate}</h1>
      <img src="${imgUrl}" class="details-image" alt="${v.plate}" />
      <div class="tab-buttons">
        ${["Details","Maintenance","Vehicle Request","Whereabouts","Fuel","Reports","History"]
          .map(tab => `<button onclick="setTab('${tab}')" class="${activeTab===tab?'active':''}">${tab}</button>`).join("")}
      </div>
      <div id="tabContent"></div>
    </div>
  `;
  renderTab(v, d);
}

// (Keep your original tab & history logic here — not changed)
// ------------------- TABS -------------------
function renderTab(v, d) {
  const tab = document.getElementById("tabContent");

  if (activeTab === "Details") {
  tab.innerHTML = `
    <table class="details-table">
      <tr>
        <th>Model:</th><td>${d.model || "-"}</td>
        <th>Year Model:</th><td>${d.yearModel || d.yearBought || "-"}</td>
      </tr>
      <tr>
        <th>Color:</th><td>${d.Color || d.color || "-"}</td>
        <th>Fuel Type:</th><td>${d.FuelType || "-"}</td>
      </tr>
      <tr>
        <th>Classification:</th><td>${d.Classification || "-"}</td>
        <th>Vehicle Type:</th><td>${d.VehicleType || "-"}</td>
      </tr>
      <tr>
        <th>Gross Weight:</th><td>${d.GrossWt || "-"}</td>
        <th>Net Weight:</th><td>${d.NetWt || "-"}</td>
      </tr>
      <tr>
        <th>Shipping Weight:</th><td>${d.ShippingWt || "-"}</td>
        <th>Net Capacity:</th><td>${d.NetCapacity || "-"}</td>
      </tr>
      <tr>
        <th>No. of Cylinders:</th><td>${d.NoofCylinders || "-"}</td>
        <th>Piston Displacement:</th><td>${d.PistonDisplacement || "-"}</td>
      </tr>
      <tr>
        <th>Engine No.:</th><td>${d.EngineNo || "-"}</td>
        <th>Chassis No.:</th><td>${d.ChassisNo || "-"}</td>
      </tr>
      <tr>
        <th>MV FILE NO.:</th><td>${d.MVFILENO || "-"}</td>
         <th>LTO Client ID:</th><td>${d.LTOclientId || d.LTOClientID || "-"}</td>
      </tr>
      <tr>
        <th>TIN:</th><td>${d.tin || "-"}</td>
        <th>Account Number:</th><td>${d.AccountNumber || "-"}</td>
      </tr>
      <tr>
        <th>AutoSweep No.:</th><td>${d.AutoSweep || "-"}</td>
        <th>Easy Trip No.:</th><td>${d.EasyTrip || "-"}</td>
      </tr>
      <tr>
      <th>OR No.:</th><td>${d.OR || "-"}</td>
       <th>CR No.:</th><td>${d.CRNO || "-"}</td>
      </tr>
    </table>
  `;
}

  else if (activeTab === "Maintenance") {
    tab.innerHTML = `
      <form onsubmit="submitMaintenance(event)">
        <input type="date" name="date" required />
        <input type="text" name="cv" placeholder="CV Number" required />
        <input type="text" name="reason" placeholder="Reason / Description" required />
        <input type="number" name="cost" placeholder="Cost / Amount" required />
        <button type="submit">Save</button>
      </form>
    `;
  } 
  else if (activeTab === "Vehicle Request") {
    tab.innerHTML = `
      <form onsubmit="submitVehicleRequest(event)">
        <input type="date" name="date" required />
        <input type="text" name="project" placeholder="Project" required />
        <input type="text" name="from" placeholder="Job Order #" required />
        <input type="text" name="to" placeholder="Location" required />
        <input type="text" name="driver" placeholder="Driver" required />
        <input type="text" name="purpose" placeholder="Purpose" required />
        <input type="text" name="request" placeholder="Requested By" required />
        <button type="submit">Save</button>
      </form>
    `;
  } 
  else if (activeTab === "Whereabouts") {
    tab.innerHTML = `
      <form onsubmit="submitWhereabouts(event)">
        <select name="place" required>
          <option value="">Select Location</option>
          <option>Batangas City</option>
          <option>Makati</option>
          <option>Company Use</option>
          <option>Repair Shop</option>
        </select>
        <input type="text" name="company" placeholder="If Company Use, specify destination" />
        <button type="submit">Save</button>
      </form>
    `;
  } 
  else if (activeTab === "Fuel") {
    tab.innerHTML = `
      <form onsubmit="submitFuel(event)">
        <input type="date" name="date" required />
        <input type="text" name="bearer" placeholder="Bearer" required />
        <input type="text" name="order" placeholder="PO #" required />
        <select name="gas" required>
          <option value="">Select Fuel Type</option>
          <option>Diesel</option>
          <option>Gasoline</option>
        </select>
        <input type="number" name="amount" placeholder="Amount" required />
        <input type="text" name="jo" placeholder="Job Order" required/>
        <button type="submit">Save</button>
      </form>
    `;
  } 
  else if (activeTab === "Reports") {
    tab.innerHTML = `
      <form onsubmit="submitReport(event)">
      <input type="file" name="report" required />
      <button type="submit">📤 Upload Report</button>
    </form>
    `;
  } 
  else if (activeTab === "History") {
    renderHistory(v, tab);
  }
}

  const place = f.get("place") === "Company Use" ? `Company Use - ${f.get("company")}` : f.get("place");
  const v = vehicles.find(x => x.plate === selectedVehicle);
  v.whereabouts = place;
  v.history.push({ type: "Whereabouts", date: new Date().toISOString().split("T")[0], place });
  saveAndRefresh("Details");
}

function submitFuel(e) {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const v = vehicles.find(x => x.plate === selectedVehicle);
  v.history.push({ type: "Fuel", ...d });
  saveAndRefresh("History");
}

function submitReport(e) {
  const fileInput = e.target.report.files[0];
  if (!fileInput) return alert("Please select a file first.");

  const fileURL = URL.createObjectURL(fileInput);
  const v = vehicles.find(x => x.plate === selectedVehicle);

  v.history.push({
    type: "Report",
    date: new Date().toISOString().split("T")[0],
    fileName: fileInput.name,
    fileURL: fileURL
  });

  saveAndRefresh("History");
}

// ------------------- CHANGE PASSWORD -------------------
function renderChangePassword() {
  app.innerHTML = `
    <div class="login-container">
      <h2>Change Password</h2>
      <form id="changeForm" onsubmit="handleChangePassword(event)">
        ${loggedInUser.role === "admin"
          ? `<input type="text" name="username" placeholder="Username to Change" required />`
          : `<input type="text" name="username" value="${loggedInUser.username}" readonly />`}
        <input type="password" name="oldPassword" placeholder="Old Password" required />
        <input type="password" name="newPassword" placeholder="New Password" required />
        <input type="password" name="confirmPassword" placeholder="Confirm New Password" required />
        <button type="submit">Update Password</button>
      </form>
      <button class="back-btn" onclick="backToList()">← Back</button>
    </div>
  `;
}

function handleChangePassword(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  let users = JSON.parse(localStorage.getItem("users"));

  const user = users.find(u => u.username === data.username);
  if (!user) return alert("User not found.");

  if (loggedInUser.role !== "admin" && user.username !== loggedInUser.username)
    return alert("Access denied.");

  if (user.password !== data.oldPassword)
    return alert("Old password incorrect.");

  if (data.newPassword !== data.confirmPassword)
    return alert("New passwords do not match.");

  user.password = data.newPassword;
  localStorage.setItem("users", JSON.stringify(users));
  alert("Password updated successfully!");
  renderList();
}

// ------------------- USER MANAGEMENT (ADMIN ONLY) -------------------
function renderUserManagement() {
  if (loggedInUser.role !== "admin") return alert("Access denied.");

  const users = JSON.parse(localStorage.getItem("users")) || [];
  app.innerHTML = `
    <div class="login-container">
      <h2>User Management</h2>
      <form id="addUserForm" onsubmit="handleAddUser(event)">
        <input type="text" name="username" placeholder="New Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <select name="role" required>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Add User</button>
      </form>
      <table class="user-table">
        <thead><tr><th>Username</th><th>Role</th><th>Actions</th></tr></thead>
        <tbody>
          ${users.map(u => `
            <tr>
              <td>${u.username}</td>
              <td>${u.role}</td>
              <td>
                ${u.username !== "admin" ? `
                  <button onclick="resetPassword('${u.username}')">Reset Password</button>
                  <button onclick="deleteUser('${u.username}')">Delete</button>` 
                : `<em>Protected</em>`}
              </td>
            </tr>
          `).join("")}
        </tbody>
      </table>
      <button class="back-btn" onclick="backToList()">← Back</button>
    </div>
  `;
}

function handleAddUser(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  let users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.find(u => u.username === data.username)) {
    alert("User already exists!");
    return;
  }
  users.push(data);
  localStorage.setItem("users", JSON.stringify(users));
  alert("User added successfully!");
  renderUserManagement();
}

function deleteUser(username) {
  if (!confirm(`Delete user "${username}"?`)) return;
  let users = JSON.parse(localStorage.getItem("users"));
  users = users.filter(u => u.username !== username);
  localStorage.setItem("users", JSON.stringify(users));
  renderUserManagement();
}

function resetPassword(username) {
  let users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(u => u.username === username);
  if (user) {
    user.password = "12345";
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Password for "${username}" reset to "12345".`);
  }
  renderUserManagement();
}

// ------------------- HELPERS -------------------
function backToList() { selectedVehicle = null; renderList(); }
function setTab(tab) { activeTab = tab; renderDetails(); }

// ------------------- INIT -------------------
if (loggedInUser) renderList();
else renderLogin();

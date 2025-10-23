// ===========================================================
// === CISC FLEET MANAGEMENT SYSTEM ===
// ===========================================================
// Includes: Initialization, Login, Role Handling, Dashboard, Vehicle Grid

// ------------------- USER DATA -------------------
let users = JSON.parse(localStorage.getItem("users")) || [
  { username: "admin", password: "admin123", role: "admin" },
  { username: "Cifra Batangas", password: "cisc123", role: "admin" },
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
  "MAM 7806": "elf-removebg-preview.png",
  "NBO 6586": "https://www.isuzu-gencars.com.ph/wp-content/uploads/2020/07/Isuzu-TRAVIZ-Utility-Van-222-scaled.jpg"
};

// sample vehicle details (unchanged)
const details = { "WQT 225": { model: "Mitsubishi L300 Exceed 2.5 FB", 
              yearModel: "2013", 
              Color: "Polar White", 
              FuelType: "Diesel", 
              Classification:"Private-(PVT)", 
              VehicleType: "Utility Vehicle FB",  
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
               AccountNumber:"2388347",
               AutoSweep: "F883794",
               EasyTrip: "5400-0023-1590",
              },
  "NFZ 2848": { model: "ISUZU Traviz", 
               yearModel: "", 
               color: "White", 
               FuelType: "", 
               Classification:"", 
               VehicleType: "",  
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
               AccountNumber:"782793",
               AutoSweep: "R333835",
               EasyTrip: "",
              },
  "CBP 5511": { model: "ISUZU Rebuilt PWRGATE DROPSIDE W/ PTG TRUCK", 
               yearModel: "2021", 
               color: "White", 
               FuelType: "Diesel", 
               Classification:"Private", 
               VehicleType: "Utility Vehicle UV DIE",  
               GrossWt:"4200", 
               NetWt: "2100", 
               ShippingWt: "2100", 
               NetCapacity: "2100", 
               EngineNo:"4HF1-665568", 
               MVFILENO:"0389-00000024137", 
               CRNO: "42203501-4 / 438854194", 
               PistonDisplacement: "4334", 
               NoofCylinders: "4", 
               ChassisNo:"NKR66E-7544106", 
               LTOclientId:"", 
               tin: "",
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
               AccountNumber:"884984",
               AutoSweep: "R415774",
               EasyTrip: "5200-2566-4138",
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
               tin: "", 
               OR: "",
              },
                };

// ------------------- VARIABLES -------------------
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

// ===========================================================
// === LOGIN SECTION ===
// ===========================================================

function renderLogin() {
  app.innerHTML = `
    <div class="login-container">
      <h2>Login</h2>
      <form onsubmit="handleLogin(event)">
        <input type="text" id="username" placeholder="Username" required />
        <input type="password" id="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
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

// ===========================================================
// === DASHBOARD / VEHICLE GRID SECTION ===
// ===========================================================

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

// ===========================================================
// === VEHICLE DETAILS SECTION ===
// ===========================================================

function renderDetails() {
  const v = vehicles.find(x => x.plate === selectedVehicle);
  const d = details[selectedVehicle];
  const imgUrl = vehicleImages[v.plate];

  app.innerHTML = `
    <div class="top-bar">
      <div>Welcome, <strong>${loggedInUser.username}</strong> (${loggedInUser.role})</div>
      <div class="top-bar-actions">
        ${loggedInUser.role === "admin"
          ? `<button class="manage-btn" onclick="renderUserManagement()">User Management</button>` : ""}
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
  renderTab(v);
}

// ===========================================================
// === TAB RENDERING ===
// ===========================================================

function renderTab(v) {
  const content = document.getElementById("tabContent");
  if (!content) return;

  switch (activeTab) {
    case "Details":
      const d = details[selectedVehicle];
  if (!d) {
    content.innerHTML = "<p>No vehicle details available.</p>";
    return;
  }                                           
      content.innerHTML = `
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
      break;

    case "Maintenance":
      content.innerHTML = `
        ${loggedInUser.role === "admin"
          ? `<form onsubmit="submitMaintenance(event)">
  <input type="date" name="date" required />
  <input type="text" name="cv" placeholder="CV Number" required />
  <input type="text" name="reason" placeholder="Reason / Description" required />
  <input type="number" name="cost" placeholder="Cost / Amount" required />
  <input type="file" name="report" accept=".pdf,.jpg,.png,.doc,.docx,.xls,.xlsx" />
  <button type="submit">Add Maintenance</button>
</form>` : `<p>Read-only access.</p>`}
      `;
      break;

    case "Vehicle Request":
      content.innerHTML = `
        ${loggedInUser.role === "admin"
          ? `<form onsubmit="submitRequest(event)">
             <input type="date" name="date" required />
        <input type="text" name="project" placeholder="Project" required />
        <input type="text" name="from" placeholder="Job Order #" required />
        <input type="text" name="to" placeholder="Location" required />
        <input type="text" name="driver" placeholder="Driver" required />
        <input type="text" name="purpose" placeholder="Purpose" required />
        <input type="text" name="request" placeholder="Requested By" required />
              <button type="submit">Add Request</button>
            </form>` : `<p>Read-only access.</p>`}
      `;
      break;

    case "Whereabouts":
      content.innerHTML = `
        ${loggedInUser.role === "admin"
          ? `<form onsubmit="submitWhereabouts(event)">
              <select name="place" required>
          <option value="">Select Location</option>
          <option>Batangas City</option>
          <option>Makati</option>
          <option>Company Use</option>
          <option>Repair Shop</option>
        </select>
        <input type="text" name="company" placeholder="If Company Use, specify destination" />
        <button type="submit">Save</button>
            </form>` : `<p>Read-only access.</p>`}
      `;
      break;

    case "Fuel":
      content.innerHTML = `
        ${loggedInUser.role === "admin"
          ? `<form onsubmit="submitFuel(event)">
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
              <button type="submit">Add Record</button>
            </form>` : `<p>Read-only access.</p>`}
      `;
      break;

    case "Reports":
  content.innerHTML = `<p></p>`;
  break;

    case "History":
      content.innerHTML = `
        <h3>Full Vehicle History</h3>
        ${renderFullHistory(v)}
      `;
      break;
  }
}

// ===========================================================
// === SIMPLE HISTORY (for other tabs) ===
// ===========================================================
function renderHistory(v, type) {
  const filtered = (v.history || []).filter(h => h.type === type);
  if (filtered.length === 0) return `<p>No ${type} records found.</p>`;
  return `
    <ul>
      ${filtered.map(h =>
        `<li>${h.date} – ${h.details || h.reason || h.place || h.report || ""}</li>`
      ).join("")}
    </ul>
  `;
}

// ===========================================================
// === ADVANCED FULL HISTORY (GROUPED + EXPORTABLE) ===
// ===========================================================
function renderFullHistory(v) {
  if (!v.history || !v.history.length) return `<p>No history yet.</p>`;

  const grouped = {};
  v.history.forEach((item, i) => {
    if (item.type === "Request") item.type = "Vehicle Request";
    if (item.type === "Reports") item.type = "Report";
    if (!grouped[item.type]) grouped[item.type] = [];
    grouped[item.type].push({ ...item, index: i });
  });
  
  let html = "";
  const types = Object.entries(grouped);
  types.forEach(([type, records], idx) => {
    records.sort((a, b) => new Date(b.date) - new Date(a.date));
    const initiallyHidden = idx === 0 ? "" : `style="display:none;"`;
    const arrow = idx === 0 ? "▼" : "▶";

    // 🧮 compute total for types that have cost or amount fields
    let total = 0;
    if (type === "Maintenance") {
      total = records.reduce((sum, r) => sum + (parseFloat(r.cost) || 0), 0);
    } else if (type === "Fuel") {
      total = records.reduce((sum, r) => sum + (parseFloat(r.amount) || 0), 0);
    }
    
    html += `
      <div class="history-section">
        <div class="history-header" onclick="toggleHistory('${type}')">${arrow} ${type}</div>
        <div class="history-body" id="history-${type}" ${initiallyHidden}>
          <button class="export-btn" onclick="exportCSV('${v.plate}', '${type}')">📥 Export ${type} CSV</button>
          <table class="history-group-table">
            <thead><tr>${generateHeaders(type)}<th>Actions</th></tr></thead>
            <tbody>${records.map(r => generateRow(type, r)).join("")}</tbody>
          </table>
          ${
            total > 0
              ? `<div class="total-row">💰 <strong>Total Amount:</strong> ₱${total.toLocaleString()}</div>`
              : ""
          }
        </div>
      </div>
    `;
  });
  return html;
}

function exportCSV(plate, type) {
  const v = vehicles.find(x => x.plate === plate);
  if (!v) return alert("Vehicle not found.");
  const filtered = v.history.filter(h => h.type === type);
  if (!filtered.length) return alert(`No ${type} records to export.`);

  const keys = Array.from(new Set(filtered.flatMap(Object.keys)));
  const rows = [keys.join(",")];
  filtered.forEach(entry => {
    const row = keys.map(k => `"${(entry[k] ?? "").toString().replace(/"/g, '""')}"`);
    rows.push(row.join(","));
  });
  const dateStr = new Date().toISOString().split("T")[0];
  const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${plate}_${type}_${dateStr}.csv`;
  link.click();
}

function generateHeaders(type) {
  switch (type) {
    case "Maintenance": return "<th>Date</th><th>CV No.</th><th>Reason / Description</th><th>Cost / Amount</th><th>File</th>";
    case "Fuel": return "<th>Date</th><th>Bearer</th><th>PO #</th><th>Fuel Type</th><th>Amount</th><th>Job Order</th>";
    case "Vehicle Request": return "<th>Date</th><th>Project</th><th>Job Order #</th><th>Location</th><th>Driver</th><th>Purpose</th><th>Requested By</th>";
    case "Whereabouts": return "<th>Date</th><th>Place</th>";
    case "Report": return "<th>Date</th><th>File</th>";
    default: return "<th>Date</th><th>Details</th>";
  }
}

function generateRow(type, r) {
  let cells = "";
  switch (type) {
    case "Maintenance":
      cells = `
      <td>${r.date}</td>
      <td>${r.cv || "-"}</td>
      <td>${r.reason || "-"}</td>
      <td>₱${r.cost || "-"}</td>
      <td><a href="${r.fileURL}" download="${r.fileName}" target="_blank"
      style="color:#1a7431; text-decoration:none; font-weight:bold;">
      ⬇️ ${r.fileName || "Download Report"}</a></td>`;
      break;
    case "Fuel":
      cells = `
      <td>${r.date}</td>
      <td>${r.bearer || "-"}</td>
      <td>${r.order || "-"}</td>
      <td>${r.gas || "-"}</td>
      <td>₱${r.amount || "-"}</td>
      <td>${r.jo || "-"}</td>`;
      break;
    case "Vehicle Request":
      cells = `
      <td>${r.date}</td>
      <td>${r.project || "-"}</td>
      <td>${r.from || "-"}</td>
      <td>${r.to || "-"}</td>
      <td>${r.driver || "-"}</td>
      <td>${r.purpose || "-"}</td>
      <td>${r.request || "-"}</td>`;
      break;
    case "Whereabouts":
      cells = `
      <td>${r.date}</td>
      <td>${r.place || "-"}</td>`;
      break;
    case "Report":
      cells = `<td>${r.date}</td>
               <td><a href="${r.fileURL}" download="${r.fileName}" target="_blank"
               style="color:#1a7431; text-decoration:none; font-weight:bold;">
               ⬇️ ${r.fileName || "Download Report"}</a></td>`;
      break;
    default:
      cells = `<td>${r.date}</td><td>${JSON.stringify(r)}</td>`;
  }
  const deleteButton =
    loggedInUser && loggedInUser.role === "admin"
      ? `<button class='del-btn' onclick="deleteRecord('${r.index}')">🗑️</button>`
      : `<button class='del-btn' disabled title="Only admin can delete" style="opacity:0.4; cursor:not-allowed;">🗑️</button>`;

    return `<tr>${cells}<td>${deleteButton}</td></tr>`;
}


function deleteRecord(index) {
  const v = vehicles.find(x => x.plate === selectedVehicle);
  if (!v) return alert("Vehicle not found.");
  if (confirm("Are you sure you want to delete this record?")) {
    v.history.splice(index, 1);
    saveAndRefresh("History");
  }
}

function toggleHistory(type) {
  const section = document.getElementById(`history-${type}`);
  if (!section) return;
  const isVisible = section.style.display !== "none";
  section.style.display = isVisible ? "none" : "block";
  section.previousElementSibling.textContent = (isVisible ? "▶" : "▼") + " " + type;
}
// ===========================================================
// === VEHICLE FORMS (ADMIN ONLY) ===
// ===========================================================

function submitMaintenance(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const v = vehicles.find(x => x.plate === selectedVehicle);
 const record = { 
    type: "Maintenance", 
    date: f.get("date") || new Date().toISOString().split("T")[0],
    cv: f.get("cv"), 
    reason: f.get("reason"),
    cost: f.get("cost")
  };
  const fileInput = e.target.report.files[0];
  if (fileInput) {
    const fileURL = URL.createObjectURL(fileInput);
    record.fileName = fileInput.name;
    record.fileURL = fileURL;
  }

  v.history.push(record);
  saveAndRefresh("Maintenance");
}

function submitRequest(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const v = vehicles.find(x => x.plate === selectedVehicle);
  v.history.push({ 
    type: "Request", 
    date: new Date().toISOString().split("T")[0],
    project: f.get("project"),
    from: f.get("from"),
    to: f.get("to"),
    driver: f.get("driver"),
    purpose: f.get("purpose"), 
    request: f.get("request") });
  saveAndRefresh("Vehicle Request");
}

function submitWhereabouts(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const v = vehicles.find(x => x.plate === selectedVehicle);
  v.whereabouts = f.get("place");
  v.history.push({ type: "Whereabouts", date: new Date().toISOString().split("T")[0],
                   place: f.get("place") });
  saveAndRefresh("Whereabouts");
}

function submitFuel(e) {
  e.preventDefault();
  const f = new FormData(e.target);
  const v = vehicles.find(x => x.plate === selectedVehicle);
  v.history.push({ 
    type: "Fuel", 
    date: f.get("date"), 
    bearer: f.get("bearer"),
    order: f.get("order"),
    gas: f.get("gas"),
    amount: f.get("amount"),
    jo: f.get("jo")
  });
  saveAndRefresh("Fuel");
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

// ===========================================================
// === CHANGE PASSWORD SECTION ===
// ===========================================================

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

// ===========================================================
// === USER MANAGEMENT SECTION (ADMIN ONLY) ===
// ===========================================================

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
                  <button onclick="resetPassword('${u.username}')">Reset</button>
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
  if (users.find(u => u.username === data.username)) return alert("User already exists!");
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

// ===========================================================
// === HELPER FUNCTIONS ===
// ===========================================================

function saveData() {
  localStorage.setItem("vehicles", JSON.stringify(vehicles));
}

function saveAndRefresh(tab) {
  saveData();
  setTab(tab);
}

function backToList() { selectedVehicle = null; renderList(); }
function setTab(tab) { activeTab = tab; renderDetails(); }

if (loggedInUser) renderList();
else renderLogin();



















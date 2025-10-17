// ------------------- DATA -------------------
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
  { plate: "NBO 6586", whereabouts: "Batangas City", history: [] },
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
               AccountNumber:"782793",
               AutoSweep: "R333835",
               EasyTrip: "",
              },
  "CBP 5511": { model: "REBUILT ISUZE PWRGATE DROPSIDE W/ PTG TRUCK", 
               yearModel: "2021", 
               color: "White", 
               FuelType: "Diesel", 
               Classification:"Private", 
               VehicleType: "Utility Vehicle UV DIE", 
               Aircon: "", 
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
};

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
  "NBO 6586": "https://www.isuzu-gencars.com.ph/wp-content/uploads/2020/07/Isuzu-TRAVIZ-Utility-Van-222-scaled.jpg",
};

const app = document.getElementById("app");
// ------------------- LOGIN SYSTEM -------------------
// ------------------- LOGIN SYSTEM -------------------
const users = [
  { username: "admin", password: "12345", role: "admin" },
  { username: "fleet", password: "cifra2025", role: "viewer" }
];


function renderLogin() {
  app.innerHTML = `
    <div class="login-container">
      <h2>Fleet Management System</h2>
      <p class="login-subtitle">Cifra Industrial Services Corporation</p>
      <form id="loginForm" onsubmit="handleLogin(event)">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Log In</button>
      </form>
      <p class="login-note">Authorized users only</p>
    </div>
  `;
}

function handleLogin(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const user = users.find(u => u.username === data.username && u.password === data.password);

  if (user) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", user.role);
    localStorage.setItem("username", user.username);
    renderList();
  } else {
    alert("Invalid username or password.");
  }
}


function handleLogout() {
  localStorage.removeItem("loggedIn");
  renderLogin();
}

let selectedVehicle = null;
let activeTab = "Details";

// ------------------- CLOCK -------------------
function updateClock() {
  document.getElementById("clock").textContent = new Date().toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// ------------------- STORAGE -------------------
function saveData() {
  localStorage.setItem("vehicles", JSON.stringify(vehicles));
}

// ------------------- RENDER VEHICLE LIST -------------------
function renderList() {
  app.innerHTML = `<div class="grid"></div>`;
  const grid = app.querySelector(".grid");

  vehicles.forEach(v => {
    const imgUrl = vehicleImages[v.plate];
    const d = details[v.plate];

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${imgUrl}" alt="${v.plate}" />
      <h2>${v.plate}</h2>
      <p>Whereabouts: ${v.whereabouts}</p>
    `;
    card.onclick = () => { selectedVehicle = v.plate; activeTab = "Details"; renderDetails(); };
    grid.appendChild(card);
  });
}

// ------------------- VEHICLE DETAILS -------------------
function renderDetails() {
  const v = vehicles.find(x => x.plate === selectedVehicle);
  const d = details[selectedVehicle];
  const imgUrl = vehicleImages[v.plate];
  app.innerHTML = `
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

if (localStorage.getItem("userRole") !== "admin") {
  const buttons = tab.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);
  tab.querySelectorAll("form input, form select").forEach(f => f.disabled = true);
}


// ------------------- HISTORY -------------------
function renderHistory(v, tab) {
  if (!v.history.length) {
    tab.innerHTML = `<p>No history yet.</p>`;
    return;
  }

  const grouped = {};
  v.history.forEach((item, i) => {
    if (!grouped[item.type]) grouped[item.type] = [];
    grouped[item.type].push({ ...item, index: i });
  });

  let html = "";

  for (const [type, records] of Object.entries(grouped)) {
    html += `
      <div class="history-section">
        <div class="history-header" onclick="toggleHistory('${type}')">▼ ${type}</div>
        <div class="history-body" id="history-${type}">
          <button class="export-btn" onclick="exportCSV('${v.plate}', '${type}')">📥 Export ${type} CSV</button>
          <table class="history-group-table">
            <thead><tr>${generateHeaders(type)}<th>Actions</th></tr></thead>
            <tbody>${records.map(r => generateRow(type, r)).join("")}</tbody>
          </table>
        </div>
      </div>
    `;
  }
  tab.innerHTML = html;
}

// ------------------- CSV EXPORT PER TYPE -------------------
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

// ------------------- TABLE HELPERS -------------------
function generateHeaders(type) {
  switch (type) {
    case "Maintenance": return "<th>Date</th><th>CV No.</th><th>Reason / Description</th><th>Cost / Amount</th>";
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
    case "Maintenance": cells = `<td>${r.date}</td><td>${r.cv}</td><td>${r.reason}</td><td>₱${r.cost}</td>`; break;
    case "Fuel": cells = `<td>${r.date}</td><td>${r.bearer}</td><td>${r.order}</td><td>${r.gas}</td><td>₱${r.amount}</td><td>${r.jo}</td>`; break;
    case "Vehicle Request": cells = `<td>${r.date}</td><td>${r.project}</td><td>${r.from}</td><td>${r.to}</td><td>${r.driver}</td><td>${r.purpose}</td><td>${r.request}</td>`; break;
    case "Whereabouts": cells = `<td>${r.date}</td><td>${r.place}</td>`; break;
    case "Report":
  cells = `<td>${r.date}</td>
           <td><a href="${r.fileURL}" download="${r.fileName}" target="_blank" 
           style="color:#1a7431; text-decoration:none; font-weight:bold;">
           ⬇️ ${r.fileName || "Download Report"}</a></td>`;
  break;

    default: cells = `<td>${r.date}</td><td>${JSON.stringify(r)}</td>`;
  }
  return `<tr>${cells}<td><button class='del-btn' onclick="deleteRecord('${r.index}')">🗑️</button></td></tr>`;
}

function deleteRecord(index) {
  const v = vehicles.find(x => x.plate === selectedVehicle);
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

// ------------------- FORMS -------------------
function submitMaintenance(e) {
  e.preventDefault();
  if (localStorage.getItem("userRole") !== "admin") {
  alert("Access denied. Only administrators can perform this action.");
  return;
}

  const d = Object.fromEntries(new FormData(e.target));
  const v = vehicles.find(x => x.plate === selectedVehicle);
  v.history.push({ type: "Maintenance", ...d });
  saveAndRefresh("History");
}

function submitVehicleRequest(e) {
  e.preventDefault();
  if (localStorage.getItem("userRole") !== "admin") {
  alert("Access denied. Only administrators can perform this action.");
  return;
}

  const d = Object.fromEntries(new FormData(e.target));
  const v = vehicles.find(x => x.plate === selectedVehicle);
  v.history.push({ type: "Vehicle Request", ...d });
  saveAndRefresh("History");
}

function submitWhereabouts(e) {
  e.preventDefault();
  if (localStorage.getItem("userRole") !== "admin") {
  alert("Access denied. Only administrators can perform this action.");
  return;
}

  const f = new FormData(e.target);
  const place = f.get("place") === "Company Use" ? `Company Use - ${f.get("company")}` : f.get("place");
  const v = vehicles.find(x => x.plate === selectedVehicle);
  v.whereabouts = place;
  v.history.push({ type: "Whereabouts", date: new Date().toISOString().split("T")[0], place });
  saveAndRefresh("Details");
}

function submitFuel(e) {
  e.preventDefault();
  if (localStorage.getItem("userRole") !== "admin") {
  alert("Access denied. Only administrators can perform this action.");
  return;
}

  const d = Object.fromEntries(new FormData(e.target));
  const v = vehicles.find(x => x.plate === selectedVehicle);
  v.history.push({ type: "Fuel", ...d });
  saveAndRefresh("History");
}

function submitReport(e) {
  e.preventDefault();
  if (localStorage.getItem("userRole") !== "admin") {
  alert("Access denied. Only administrators can perform this action.");
  return;
}

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

// ------------------- HELPERS -------------------
function backToList(){ selectedVehicle=null; renderList(); }
function setTab(tab){ activeTab=tab; renderDetails(); }
function saveAndRefresh(tab){ saveData(); setTab(tab); }

// ------------------- INIT -------------------
if (localStorage.getItem("loggedIn") === "true") {
  renderList();
} else {
  renderLogin();
}






































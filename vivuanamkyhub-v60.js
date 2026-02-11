// VIVUANAMKY HUB V60.0 - MODERN SUPREME (STABLE & FIXED TABS)
(function () {
  const validKeys = ["VIVUANAMKY-2026", "namkyontop"];
  const userKey = prompt("ENTER KEY");
  if (!validKeys.includes(userKey)) return alert("INVALID KEY");

  const hubId = "vnamky-supreme-v60";
  if (document.getElementById(hubId)) document.getElementById(hubId).remove();

  let nhayData = [
    "s ay",
    "sua e",
    "le e",
    "manh ma",
    "phe ak",
    "tk ga",
    "s vay",
    "sua cai",
    "le ma",
    "o kia",
    "tk ngu",
    "manh k",
    "slow ak",
    "speed dei",
    "phe ak",
    "phe v",
    "oc c",
    "cn di",
    "tat ak",
    "clm",
    "phe vat",
    "sua mau",
    "em rai",
    "manh cai",
    "le cai",
    "s do",
    "sua e",
    "le e",
    "manh di",
    "yeu v",
    "run ak",
    "keng ngay",
    "keng ma",
    "manh k",
    "sua k",
    "sua ak",
    "sua de",
    "manh chu",
    "manh nua",
    "s kia",
    "manh ma",
    "phe ak",
    "s kia",
    "manh chu",
    "tk ngu",
    "sua ak",
    "sua k",
    "son mau",
    "le mau",
    "hang cai",
    "le cai",
    "son k",
    "son ak",
    "manh ak",
    "s vay",
    "hang cai",
    "duoi ak",
    "tk ngu",
    "ccho",
    "sua mau",
    "le ma",
    "manh di",
    "co ti",
    "le ti",
    "clm",
    "phe ak",
    "cn di",
    "chat mau",
    "keng k",
    "keng ak",
    "keng ngay",
    "manh cai",
    "le nua",
    "sua nua",
    "chat mau",
    "s ay",
    "son cai",
    "le cai",
    "tk du",
    "du ak",
    "lo lo",
    "on k",
    "k ak",
    "phe v",
    "o o",
    "cham v",
    "lag ak",
    "ngu v",
    "kaka",
    "r x",
    "win ak",
    "vtr ak",
    "noti ak",
    "ez v",
    "ei ei",
    "s do",
    "chat k",
    "chat ak",
    "hang dei",
    "le cai",
    "son mau",
    "em rai",
    "le ma",
    "cham v",
    "slow v",
    "bai ak",
    "ei ku",
    "dit mm",
    "sua mau",
    "so ak",
    "rum ak",
    "oc c",
    "le k",
    "le ma",
    "cn di",
    "tat ak",
    "kem v",
    "sua mau",
    "le ti",
    "co ti",
    "mau nao",
    "em rai",
    "manh ma",
    "sua k",
    "son le",
    "hang de",
    "manh de",
    "yeu v",
    "cay ak",
    "clm",
    "kaka",
    "ngu cay",
    "met ak",
    "kmm",
    "sua len",
    "son len",
    "hang de",
    "ngu ak",
    "le ei",
    "sua cai",
    "le nao",
    "sua chu",
    "phe ak",
    "tk ga",
    "hang de",
    "manh nua",
    "son ma",
    "ngu ak",
    "tk oc",
    "chat mau",
  ];

  const flashUrl = "https://i.ibb.co/3mS0X9S/flash.gif";
  let state = {
    running: false,
    count: 0,
    task: "Idle",
    indexNhay: 0,
    currentMedia: null,
    flashBlob: null,
  };

  fetch(flashUrl)
    .then((r) => r.blob())
    .then((b) => {
      state.flashBlob = new File([b], "flash.gif", { type: "image/gif" });
    });

  const hub = document.createElement("div");
  hub.id = hubId;
  hub.style = `position:fixed;top:10%;right:5%;z-index:999999;width:720px;height:620px;display:flex;background:rgba(12,12,12,0.9);backdrop-filter:blur(25px);border:1px solid rgba(0,255,0,0.3);border-radius:25px;color:#fff;font-family:'Inter','Segoe UI',sans-serif;box-shadow:0 20px 60px rgba(0,0,0,0.8);cursor:move;overflow:hidden;animation: fadeIn 0.4s ease;`;

  hub.innerHTML = `
        <div id="side-v" style="width:200px;background:rgba(0,0,0,0.5);padding:30px 15px;display:flex;flex-direction:column;gap:10px;border-right:1px solid rgba(0,255,0,0.1);">
            <div style="font-weight:900;font-size:22px;color:#0f0;text-align:center;margin-bottom:35px;letter-spacing:1px;text-shadow:0 0 15px rgba(0,255,0,0.5);">NAMKY V60</div>
            <div class="nav-item active" data-tab="main">🏠 Main Treo</div>
            <div class="nav-item" data-tab="adv">🚀 Advanced</div>
            <div class="nav-item" data-tab="jb">🔓 Jailbreak</div>
            <div class="nav-item" data-tab="set">⚙️ Setting</div>
            <div id="info-box" style="margin-top:auto; background:rgba(0,255,0,0.07); padding:15px; border-radius:18px; border:1px solid rgba(0,255,0,0.15); font-size:11px;">
                <p style="margin:0 0 5px 0;display:flex;justify-content:space-between;">Task: <b id="st-task" style="color:#0f0">Idle</b></p>
                <p style="margin:0;display:flex;justify-content:space-between;">Sent: <b id="st-count" style="color:#0f0">0</b></p>
            </div>
        </div>
        <div id="body-v" style="flex:1;padding:30px;position:relative;overflow-y:auto;">
            <div id="close-v" style="position:absolute;top:20px;right:25px;cursor:pointer;font-size:20px;color:rgba(255,255,255,0.3);transition:0.3s;">✕</div>
            
            <div id="tab-main" class="tab-content">
                <h3 class="tab-head">MAIN FEATURES</h3>
                <div class="row"><span>Treo Nhây (Tuần tự)</span><label class="switch"><input type="checkbox" id="t-nhay"><span class="slider"></span></label></div>
                <div class="row"><span>Treo Văn Tùy Chỉnh</span><input id="i-van" class="g-inp" placeholder="Nội dung..."><label class="switch"><input type="checkbox" id="t-van"><span class="slider"></span></label></div>
                <div class="row"><span>Treo Media (RAM)</span><button id="b-media" class="g-btn" style="background:rgba(255,255,255,0.1);color:#fff;border:1px solid #555;">CHỌN FILE</button><label class="switch"><input type="checkbox" id="t-media"><span class="slider"></span></label></div>
                <div class="row"><span>Treo Flash (Strobe)</span><label class="switch"><input type="checkbox" id="t-flash"><span class="slider"></span></label></div>
                <div class="row"><span>Nhây Tag Liên Tục</span><input id="i-tag" class="g-inp" placeholder="Tên user..."><label class="switch"><input type="checkbox" id="t-tag"><span class="slider"></span></label></div>
                <div class="row"><span>Nạp File (.txt)</span><button id="b-txt" class="g-btn" style="background:rgba(0,255,0,0.15);color:#0f0;">CHỌN FILE</button><label class="switch"><input type="checkbox" id="t-txt"><span class="slider"></span></label></div>
            </div>

            <div id="tab-adv" class="tab-content" style="display:none;">
                <h3 class="tab-head">ADVANCED TOOLS</h3>
                <div class="row"><span>Spam Gọi (Call)</span><label class="switch"><input type="checkbox" id="t-call"><span class="slider"></span></label></div>
                <div class="row"><span>Icon Tùy Chỉnh</span><input id="i-icon" class="g-inp" placeholder="Nhập icon..." value="❤️"><label class="switch"><input type="checkbox" id="t-icon"><span class="slider"></span></label></div>
                <div class="row"><span>Raid (Spam Lớn)</span><input id="i-raid" class="g-inp" placeholder="Nội dung raid..."><button id="b-raid" class="g-btn">GỬI</button></div>
                <div class="row" style="padding:20px; flex-direction:column; gap:15px; align-items:flex-start;">
                    <span style="font-weight:600;">VẢ LAG (10.000 KÝ TỰ)</span>
                    <button id="b-lag" class="g-btn" style="width:100%; height:45px; font-size:14px;">THỰC THI VẢ LAG</button>
                </div>
            </div>

            <div id="tab-jb" class="tab-content" style="display:none;">
                <h3 class="tab-head">JAILBREAK SYSTEM</h3>
                <div class="row"><span>Anti-Delete (Chặn Gỡ)</span><label class="switch"><input type="checkbox" id="t-anti-del"><span class="slider"></span></label></div>
            </div>

            <div id="tab-set" class="tab-content" style="display:none;">
                <h3 class="tab-head">HUB SETTINGS</h3>
                <div class="row"><span>Tốc độ (ms)</span><input id="s-del" type="number" class="g-inp" value="1500" style="width:90px;"></div>
                <div class="row"><span>Emoji kèm</span><input id="s-emo" class="g-inp" value="🤣" style="width:90px;"></div>
                <div class="row"><span>Hậu tố (Suffix)</span><input id="s-suffix" class="g-inp" value="[VNAMKY]" style="width:90px;"></div>
                <div class="row"><span>Độ dài Anti-ban</span><input id="s-anti" type="number" class="g-inp" value="5" style="width:90px;"></div>
            </div>
        </div>`;

  document.body.appendChild(hub);

  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .nav-item { padding:14px 20px; border-radius:15px; cursor:pointer; font-size:13px; color:rgba(255,255,255,0.4); transition:0.3s; font-weight:500; }
    .nav-item:hover { color:#fff; background:rgba(255,255,255,0.05); }
    .nav-item.active { background:rgba(0,255,0,0.12); color:#0f0; font-weight:700; }
    .tab-head { font-size:14px; color:#0f0; margin-bottom:20px; padding-left:10px; border-left:3px solid #0f0; letter-spacing:1px; }
    .row { display:flex; justify-content:space-between; align-items:center; background:rgba(255,255,255,0.04); padding:12px 18px; border-radius:18px; margin-bottom:12px; border:1px solid rgba(255,255,255,0.02); }
    .g-inp { background:rgba(0,0,0,0.4); border:1px solid rgba(0,255,0,0.2); border-radius:10px; padding:8px 12px; color:#0f0; outline:none; width: 120px; }
    .g-btn { background:#0f0; border:none; border-radius:10px; padding:8px 20px; font-weight:800; cursor:pointer; color:#000; }
    .switch { position:relative; width:44px; height:22px; flex-shrink:0; }
    .switch input { opacity:0; width:0; height:0; }
    .slider { position:absolute; cursor:pointer; top:0; left:0; right:0; bottom:0; background:#333; transition:.4s; border-radius:34px; }
    .slider:before { position:absolute; content:""; height:16px; width:16px; left:3px; bottom:3px; background:#fff; transition:.4s; border-radius:50%; }
    input:checked + .slider { background:#0f0; }
    input:checked + .slider:before { transform:translateX(22px); }
  `;
  document.head.appendChild(style);

  // TAB LOGIC (FIXED)
  document.querySelectorAll(".nav-item").forEach((el) => {
    el.onclick = () => {
      document
        .querySelectorAll(".nav-item")
        .forEach((i) => i.classList.remove("active"));
      document
        .querySelectorAll(".tab-content")
        .forEach((t) => (t.style.display = "none"));
      el.classList.add("active");
      document.getElementById("tab-" + el.dataset.tab).style.display = "block";
    };
  });

  // TXT LOGIC
  const txtInput = document.createElement("input");
  txtInput.type = "file";
  txtInput.accept = ".txt";
  txtInput.style.display = "none";
  document.body.appendChild(txtInput);
  document.getElementById("b-txt").onclick = () => txtInput.click();
  txtInput.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const lines = ev.target.result
          .split(/\r?\n/)
          .filter((l) => l.trim() !== "");
        if (lines.length > 0) {
          nhayData = lines;
          alert(`Đã nạp ${lines.length} dòng! Bật công tắc để Spam.`);
        }
      };
      reader.readAsText(file);
    }
  };

  async function send(text, isRaw = false, fileData = null) {
    const box = document.querySelector('div[role="textbox"]');
    if (!box) return;
    box.focus();
    const dt = new DataTransfer();
    if (fileData) {
      dt.items.add(fileData);
    } else {
      document.execCommand("selectAll", false, null);
      document.execCommand("delete", false, null);
      const anti = Math.random()
        .toString(36)
        .substring(2, 2 + parseInt(document.getElementById("s-anti").value));
      const content = isRaw
        ? text
        : `${text} ${document.getElementById("s-emo").value} ${document.getElementById("s-suffix").value} [${anti}]`;
      dt.setData("text/plain", content);
    }
    box.dispatchEvent(
      new ClipboardEvent("paste", { clipboardData: dt, bubbles: true }),
    );
    box.dispatchEvent(new InputEvent("input", { bubbles: true }));
    await new Promise((r) => setTimeout(r, 150));
    box.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        bubbles: true,
      }),
    );
    state.count++;
    document.getElementById("st-count").innerText = state.count;
  }

  async function loop(mode) {
    while (state.running) {
      const delay = parseInt(document.getElementById("s-del").value) || 1500;
      switch (mode) {
        case "nhay":
          await send(nhayData[state.indexNhay++ % nhayData.length]);
          break;
        case "txt":
          await send(nhayData[state.indexNhay++ % nhayData.length]);
          break; // Spam từ file TXT
        case "van":
          await send(document.getElementById("i-van").value);
          break;
        case "tag":
          await send("@" + document.getElementById("i-tag").value);
          break;
        case "flash":
          if (state.flashBlob) await send("", true, state.flashBlob);
          break;
        case "media":
          if (state.currentMedia) await send("", true, state.currentMedia);
          break;
        case "call":
          const cBtn = document.querySelector(
            'div[aria-label="Bắt đầu gọi thoại"], div[aria-label="Bắt đầu gọi video"]',
          );
          if (cBtn) cBtn.click();
          break;
        case "icon":
          const customIcon = document.getElementById("i-icon").value || "❤️";
          const rows = document.querySelectorAll('div[role="row"]');
          const last = rows[rows.length - 1];
          if (last) {
            last.dispatchEvent(new MouseEvent("mouseover", { bubbles: true }));
            setTimeout(() => {
              // Giả lập thả icon tùy chỉnh bằng cách gửi icon vào textbox (do API reaction của FB phức tạp)
              send(customIcon, true);
            }, 100);
          }
          break;
      }
      await new Promise((r) => setTimeout(r, delay));
    }
  }

  const setupToggle = (id, mode) => {
    document.getElementById(id).onchange = (e) => {
      if (e.target.checked) {
        state.running = true;
        document.getElementById("st-task").innerText = mode.toUpperCase();
        loop(mode);
      } else {
        state.running = false;
        document.getElementById("st-task").innerText = "Idle";
      }
    };
  };

  ["nhay", "van", "tag", "flash", "media", "call", "icon", "txt"].forEach((m) =>
    setupToggle("t-" + m, m),
  );

  document.getElementById("b-raid").onclick = () => {
    const v = document.getElementById("i-raid").value || "RAID BY NAMKY";
    let r = "";
    for (let i = 0; i < 50; i++) r += v + "\n";
    r += "--- VNAMKY ---\n";
    for (let i = 0; i < 50; i++) r += v + "\n";
    send(r, true);
  };

  document.getElementById("b-lag").onclick = () => {
    let l = "";
    for (let i = 0; i < 10000; i++) l += Math.floor(Math.random() * 10);
    send(l, true);
  };

  document.getElementById("t-anti-del").onchange = function () {
    if (this.checked) {
      const orig = Element.prototype.remove;
      Element.prototype.remove = function () {
        if (!this.innerText?.includes("đã gỡ")) orig.apply(this, arguments);
      };
    } else location.reload();
  };

  const rInput = document.createElement("input");
  rInput.type = "file";
  rInput.style.display = "none";
  document.body.appendChild(rInput);
  document.getElementById("b-media").onclick = (e) => {
    e.stopPropagation();
    rInput.click();
  };
  rInput.onchange = (e) => {
    if (e.target.files[0]) {
      state.currentMedia = e.target.files[0];
      alert("Nạp Media OK");
    }
  };

  document.getElementById("close-v").onclick = () => {
    state.running = false;
    hub.remove();
  };

  let d = false,
    o = [0, 0];
  hub.onmousedown = (e) => {
    if (!["INPUT", "BUTTON"].includes(e.target.tagName)) {
      d = true;
      o = [hub.offsetLeft - e.clientX, hub.offsetTop - e.clientY];
    }
  };
  document.onmousemove = (e) => {
    if (d) {
      hub.style.left = e.clientX + o[0] + "px";
      hub.style.top = e.clientY + o[1] + "px";
    }
  };
  document.onmouseup = () => (d = false);
})();

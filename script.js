// VALORANT Protocol — Operative Registry

"use strict";

const AGENTS = [
  {
    num: "01", id: "VP-01", name: "Brimstone", realName: "Liam Byrne",
    image: "https://media.valorant-api.com/agents/9f0d8ba9-4140-b941-57d3-a7ad57c6b417/fullportrait.png",
    origin: "United States", role: "Controller", classification: "Human",
    abilities: ["Orbital technology", "incendiary equipment", "smoke"],
    specialty: "Leadership & tactical command",
    lore: "One of the founding members and the leader of the VALORANT Protocol. A veteran soldier and firefighter who became the team's primary commander.",
    personality: "Disciplined, protective, experienced",
    connections: "Strong leadership relationship with Viper and the other original Protocol members"
  },
  {
    num: "02", id: "VP-02", name: "Viper", realName: "Sabine Callas",
    image: "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494859/fullportrait.png",
    origin: "United States", role: "Controller", classification: "Human",
    abilities: ["Toxic chemicals", "poison gas", "chemical barriers"],
    specialty: "Chemistry & biotechnology",
    lore: "A brilliant scientist specializing in chemistry and toxicology. She became one of the earliest members of the VALORANT Protocol and has a complicated history with Omen.",
    personality: "Cold, intelligent, secretive",
    connections: "Closely connected to Omen and Brimstone"
  },
  {
    num: "03", id: "VP-03", name: "Omen", realName: "Unknown / Redacted",
    image: "https://media.valorant-api.com/agents/8e253930-4c05-31dd-1b6c-968525494517/fullportrait.png",
    origin: "Unknown", role: "Controller", classification: "Radiant / Anomalous",
    abilities: ["Teleportation", "shadows", "paranoia"],
    specialty: "Shadow manipulation",
    lore: "Omen is one of the biggest mysteries in the VALORANT universe. He remembers fragments of a previous existence and appears to have undergone a catastrophic transformation.",
    personality: "Mysterious, distrustful, obsessive",
    connections: "Strong connection to Viper, who appears to have played an important role in his past"
  },
  {
    num: "04", id: "VP-04", name: "Killjoy", realName: "Klara Böhringer",
    image: "https://media.valorant-api.com/agents/1e58de9c-4950-5125-93e9-a0aee9f98746/fullportrait.png",
    origin: "Germany", role: "Sentinel", classification: "Human",
    abilities: ["Robotics", "turrets", "nanotechnology"],
    specialty: "Engineering & robotics",
    lore: "A technological genius responsible for much of the VALORANT Protocol's advanced equipment. She became the lead of Kingdom's R&D division at a very young age.",
    personality: "Curious, confident, playful",
    connections: "Strong friendship with Raze"
  },
  {
    num: "05", id: "VP-05", name: "Cypher", realName: "Amir El Amari",
    image: "https://media.valorant-api.com/agents/117ed9e3-49f3-6512-3ccf-0cada7e3823b/fullportrait.png",
    origin: "Morocco", role: "Sentinel", classification: "Human",
    abilities: ["Surveillance", "cameras", "traps", "information gathering"],
    specialty: "Intelligence & espionage",
    lore: "A Moroccan information broker who built a vast network of contacts and surveillance technology. He constantly gathers information on both allies and enemies.",
    personality: "Secretive, analytical, cautious",
    connections: "His family and homeland are major parts of his motivations"
  },
  {
    num: "06", id: "VP-06", name: "Sova", realName: "Aleksandr \"Sasha\" Novikov",
    image: "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
    origin: "Russia", role: "Initiator", classification: "Human",
    abilities: ["Reconnaissance", "tracking", "archery"],
    specialty: "Hunting & reconnaissance",
    lore: "A highly skilled Russian hunter and tracker. Sova uses advanced technology combined with traditional archery to locate and eliminate targets.",
    personality: "Calm, honorable, patient",
    connections: "Has a strong bond with the other Protocol members and is particularly respected for his tracking skills"
  },
  {
    num: "07", id: "VP-07", name: "Sage", realName: "Wei Ling Ying",
    image: "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png",
    origin: "China", role: "Sentinel", classification: "Radiant",
    abilities: ["Healing", "resurrection", "barriers"],
    specialty: "Life energy & protection",
    lore: "A Radiant capable of manipulating life energy. Sage serves as one of the Protocol's primary healers and protectors.",
    personality: "Calm, compassionate, disciplined",
    connections: "Has important relationships with several early Protocol members"
  },
  {
    num: "08", id: "VP-19", name: "Neon", realName: "Tala Nicole Dimaapi Valdez",
    image: "https://media.valorant-api.com/agents/bb2a4828-46eb-8cd1-e765-15848195d751/fullportrait.png",
    origin: "Philippines", role: "Duelist", classification: "Radiant",
    abilities: ["Fast Lane", "Relay Bolt", "High Velocity", "Overdrive"],
    specialty: "Bio-electric speed & agility",
    lore: "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bio-electric radiance as fast as her body generates it. She strikes with pinpoint agility before targets can react.",
    personality: "Spirited, athletic, protective",
    connections: "Recruited by the Protocol's forward command to help power interdimensional field equipment"
  },
  {
    num: "09", id: "VP-09", name: "Phoenix", realName: "Jamie Adeyemi",
    image: "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
    origin: "United Kingdom", role: "Duelist", classification: "Radiant",
    abilities: ["Fire manipulation", "regeneration"],
    specialty: "Fire & combat",
    lore: "A confident British Radiant who can create and manipulate fire. His powers allow him to survive situations that would normally be fatal.",
    personality: "Confident, energetic, competitive",
    connections: "Has a playful rivalry/friendship with Jett"
  },
  {
    num: "10", id: "VP-10", name: "Jett", realName: "Sunwoo Han",
    image: "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
    origin: "South Korea", role: "Duelist", classification: "Radiant",
    abilities: ["Wind manipulation", "extreme mobility"],
    specialty: "Speed & agility",
    lore: "A Korean Radiant capable of manipulating wind. Her powers manifested after a mysterious incident in her homeland, after which she became associated with a dangerous event.",
    personality: "Fast-talking, confident, competitive",
    connections: "Has a close friendship/rivalry with Phoenix"
  },
  {
    num: "11", id: "VP-11", name: "Reyna", realName: "Zyanya Mandrogón",
    image: "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
    origin: "Mexico", role: "Duelist", classification: "Radiant",
    abilities: ["Life-force absorption", "healing", "soul manipulation"],
    specialty: "Radiant life energy",
    lore: "A powerful Mexican Radiant who can consume the life essence of enemies. Her abilities are deeply connected to her desire to protect her loved ones.",
    personality: "Ruthless, protective, intimidating",
    connections: "Her younger sister and the Radiant community are central to her story"
  },
  {
    num: "12", id: "VP-12", name: "Raze", realName: "Tayane Alves",
    image: "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/fullportrait.png",
    origin: "Brazil", role: "Duelist", classification: "Human",
    abilities: ["Explosives", "grenades", "robotics"],
    specialty: "Demolition & engineering",
    lore: "A Brazilian engineer and explosive specialist from Salvador, Bahia. She uses homemade weapons and explosive technology to dominate the battlefield.",
    personality: "Energetic, chaotic, cheerful",
    connections: "Very close relationship with Killjoy"
  },
  {
    num: "13", id: "VP-13", name: "Breach", realName: "Erik Torsten",
    image: "https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/fullportrait.png",
    origin: "Sweden", role: "Initiator", classification: "Human",
    abilities: ["Cybernetic arms", "seismic attacks"],
    specialty: "Destruction & breaching",
    lore: "A Swedish criminal and mercenary with powerful cybernetic arms. He has a history involving crime, theft, and high-risk operations.",
    personality: "Aggressive, confident, rebellious",
    connections: "Has a complicated relationship with his family and criminal past"
  },
  {
    num: "14", id: "VP-14", name: "Skye", realName: "Kirra Foster",
    image: "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png",
    origin: "Australia", role: "Initiator", classification: "Radiant",
    abilities: ["Animal constructs", "healing", "environmental abilities"],
    specialty: "Nature & reconnaissance",
    lore: "An Australian environmental protector who possesses powerful Radiant abilities connected to nature. She uses animal-like constructs to scout and support her team.",
    personality: "Brave, compassionate, determined",
    connections: "Strong connection to her homeland and its environment"
  },
  {
    num: "15", id: "VP-15", name: "Yoru", realName: "Ryo Kiritani",
    image: "https://media.valorant-api.com/agents/7f94d92c-4234-0a36-9646-3a87eb8b5c89/fullportrait.png",
    origin: "Japan", role: "Duelist", classification: "Radiant / Dimensional anomaly",
    abilities: ["Dimensional travel", "teleportation"],
    specialty: "Rift manipulation",
    lore: "A Japanese Radiant who can tear holes between dimensions. His powers are connected to an alternate dimension and the mysterious Yoru mask.",
    personality: "Arrogant, confident, independent",
    connections: "His investigation into his ancestors and the dimensional realm is central to his story"
  }
];

/* ---------- Accessibility & System Preferences ---------- */
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";
let prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;
window.matchMedia(REDUCED_MOTION_QUERY).addEventListener("change", (e) => {
  prefersReducedMotion = e.matches;
});

// Math utilities
const clamp = (min, max, value) => Math.min(max, Math.max(min, value));
const mapRange = (inMin, inMax, outMin, outMax, value) =>
  outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
const lerp = (from, to, t) => from + (to - from) * t;

const esc = (str) =>
  String(str ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[ch]));

// Agent card rendering
function buildAgentCard(agent, index) {
  const isMissing = agent.status === "Missing / Unrevealed";
  const tags = [...agent.abilities];
  if (agent.classification) tags.push(agent.classification);
  if (agent.status) tags.push(agent.status);

  const tagItems = tags.map((tag) => `<li>${esc(tag)}</li>`).join("");

  const media = agent.image
    ? `<img class="card-media__img" src="${agent.image}" alt="Portrait of ${esc(agent.name)}" loading="lazy" draggable="false">`
    : `<span class="card-media__fallback" aria-hidden="true">?</span>`;

  const detail = (label, value) => value
    ? `<p class="card-detail"><span class="card-detail__label">${label}</span>${esc(value)}</p>`
    : "";

  return `
    <article class="agent-card reveal${isMissing ? " agent-card--redacted" : ""}"
             data-role="${esc(agent.role)}"
             style="--i: ${index % 3}" aria-labelledby="agent-${esc(agent.num)}">
      <div class="card-media">${media}</div>
      <div class="card-body">
        <p class="card-counter"><strong>${esc(agent.num)}</strong> / ${AGENTS.length} · ${esc(agent.id)}</p>
        <h3 class="card-title" id="agent-${esc(agent.num)}">${esc(agent.name)}</h3>
        <p class="card-meta">
          ${esc(agent.realName)} · ${esc(agent.origin)} ·
          <span class="role-badge">${esc(agent.role)}</span>
        </p>
        <p class="card-desc">${esc(agent.lore)}</p>
        ${detail("Specialty", agent.specialty)}
        ${detail("Personality", agent.personality)}
        ${detail("Note", agent.importance)}
        ${detail("Connections", agent.connections)}
        <ul class="card-tags" aria-label="Abilities and classification for ${esc(agent.name)}">${tagItems}</ul>
      </div>
    </article>`;
}

function renderAgentGrid() {
  const grid = document.getElementById("card-grid");
  if (!grid) return;
  grid.innerHTML = AGENTS.map(buildAgentCard).join("");
}

// 3D card tilt effect
function initCardTilt() {
  if (prefersReducedMotion) return;

  const MAX_TILT = 7;

  document.querySelectorAll(".agent-card").forEach((card) => {
    let ticking = false;
    let lastEvent = null;

    card.addEventListener("pointermove", (e) => {
      if (e.pointerType !== "mouse") return;
      lastEvent = e;
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (!lastEvent) return;
        const rect = card.getBoundingClientRect();
        const px = (lastEvent.clientX - rect.left) / rect.width - 0.5;
        const py = (lastEvent.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--ry", `${(px * MAX_TILT).toFixed(2)}deg`);
        card.style.setProperty("--rx", `${(-py * MAX_TILT).toFixed(2)}deg`);
      });
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--ry", "0deg");
      card.style.setProperty("--rx", "0deg");
      lastEvent = null;
    });
  });
}

// Staggered reveal observer
function initReveals() {
  const targets = document.querySelectorAll(".reveal");

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
  );

  targets.forEach((el) => observer.observe(el));
}

// Circular scroll showcase
const ROLL = {
  DESKTOP_WIDTH: 1200,
  RADIUS: 500,
  CARD_SIZE: 205,
  SECTION_PER_ITEM_VH: 28,
  DEPTH_MIN: -1,
  DEPTH_MAX: 1,
  Z_INDEX_MIN: 1,
  LEFT_ANGLE_OFFSET: Math.PI,
  RIGHT_ANGLE_OFFSET: -Math.PI * 0.08,
  FOCUS_PHASE: 0.5,
  TEXT_CENTER_SCALE: 1,      TEXT_SIDE_SCALE: 0.68,
  TEXT_CENTER_OPACITY: 1,    TEXT_SIDE_OPACITY: 0.18,
  IMAGE_CENTER_SCALE: 1,     IMAGE_SIDE_SCALE: 0.58,
  IMAGE_CENTER_OPACITY: 1,   IMAGE_SIDE_OPACITY: 0.14,
  TEXT_FOCUS_START: 0.42,    TEXT_FOCUS_POWER: 2.6,
  IMAGE_FOCUS_START: 0.45,   IMAGE_FOCUS_POWER: 3.2,
  LEFT_DEPTH_MAX: 30,        RIGHT_DEPTH_MAX: 40,
  MIN_WIDTH: 1025
};

function wrapProgress(value) {
  let wrapped = value % 1;
  if (wrapped < 0) wrapped += 1;
  return wrapped;
}

function getCircularPosition(progress, radiusX, radiusY, angleOffset) {
  const angle = progress * Math.PI * 2 + angleOffset;
  return {
    x: Math.sin(angle) * radiusX,
    y: Math.cos(angle) * radiusY,
    horizontalDepth: Math.sin(angle)
  };
}

function getStrength(value) {
  return clamp(0, 1, mapRange(ROLL.DEPTH_MIN, ROLL.DEPTH_MAX, 0, 1, value));
}

function shapeFocus(strength, start, power) {
  const normalized = clamp(0, 1, (strength - start) / (1 - start));
  return Math.pow(normalized, power);
}

function rollEnabled() {
  return !prefersReducedMotion && window.innerWidth >= ROLL.MIN_WIDTH;
}

function initRoll() {
  const section = document.querySelector(".roll-section");
  const titlesTrack = document.getElementById("roll-titles");
  const cardsTrack = document.getElementById("roll-cards");
  if (!section || !titlesTrack || !cardsTrack) return;

  const total = AGENTS.length;
  titlesTrack.innerHTML = AGENTS.map(
    (a) => `<div class="roll-title">${esc(a.name)}</div>`
  ).join("");
  cardsTrack.innerHTML = AGENTS.map((a) => `
    <div class="roll-card${a.image ? "" : " roll-card--missing"}">
      ${a.image
        ? `<img src="${a.image}" alt="" loading="lazy" draggable="false">`
        : `<span aria-hidden="true">?</span>`}
    </div>`
  ).join("");

  section.style.height = `calc(100vh + ${total * ROLL.SECTION_PER_ITEM_VH}vh)`;

  const titleNodes = [...titlesTrack.children];
  const cardNodes = [...cardsTrack.children];

  let ticking = false;

  function render(scrollProgress) {
    const width = window.innerWidth;
    const factor =
      width < ROLL.DESKTOP_WIDTH && width >= 768 ? width / ROLL.DESKTOP_WIDTH : 1;

    const leftR = ROLL.RADIUS * factor * 0.62;
    const rightR = ROLL.RADIUS * factor * 0.62;
    const cardSize = ROLL.CARD_SIZE * factor;
    section.style.setProperty("--roll-card-size", `${cardSize}px`);

    titleNodes.forEach((node, index) => {
      const local = wrapProgress(index / total - scrollProgress + ROLL.FOCUS_PHASE / total);
      const pos = getCircularPosition(local, leftR, leftR * 0.9, ROLL.LEFT_ANGLE_OFFSET);
      const focus = shapeFocus(
        getStrength(pos.horizontalDepth), ROLL.TEXT_FOCUS_START, ROLL.TEXT_FOCUS_POWER);
      const scale = lerp(ROLL.TEXT_SIDE_SCALE, ROLL.TEXT_CENTER_SCALE, focus);
      const opacity = lerp(ROLL.TEXT_SIDE_OPACITY, ROLL.TEXT_CENTER_OPACITY, focus);
      node.style.zIndex = Math.round(lerp(ROLL.Z_INDEX_MIN, ROLL.LEFT_DEPTH_MAX, focus));
      node.style.transform =
        `translate(-50%, -50%) translate(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px) scale(${scale.toFixed(3)})`;
      node.style.opacity = opacity.toFixed(3);
    });

    cardNodes.forEach((node, index) => {
      const local = wrapProgress(index / total - scrollProgress + ROLL.FOCUS_PHASE / total);
      const pos = getCircularPosition(local, rightR, rightR * 0.9, ROLL.RIGHT_ANGLE_OFFSET);
      const focus = shapeFocus(
        getStrength(-pos.horizontalDepth), ROLL.IMAGE_FOCUS_START, ROLL.IMAGE_FOCUS_POWER);
      const scale = lerp(ROLL.IMAGE_SIDE_SCALE, ROLL.IMAGE_CENTER_SCALE, focus);
      const opacity = lerp(ROLL.IMAGE_SIDE_OPACITY, ROLL.IMAGE_CENTER_OPACITY, focus);
      node.style.zIndex = Math.round(lerp(ROLL.Z_INDEX_MIN, ROLL.RIGHT_DEPTH_MAX, focus));
      node.style.transform =
        `translate(${pos.x.toFixed(1)}px, ${pos.y.toFixed(1)}px) scale(${scale.toFixed(3)})`;
      node.style.opacity = opacity.toFixed(3);
    });
  }

  function update() {
    ticking = false;
    if (!rollEnabled()) return;
    const rect = section.getBoundingClientRect();
    const range = section.offsetHeight - window.innerHeight;
    const progress = range > 0 ? clamp(0, 1, -rect.top / range) : 0;
    render(progress);
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  if (rollEnabled()) render(0);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", () => {
    if (rollEnabled()) update();
  });
}

// Scroll progress bar
function initScrollProgress() {
  const fill = document.getElementById("scroll-progress-fill");
  if (!fill) return;
  let ticking = false;

  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    fill.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }, { passive: true });
  update();
}

// Mobile navigation
function initNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    links.dataset.open = String(!open);
  });

  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) {
      toggle.setAttribute("aria-expanded", "false");
      links.dataset.open = "false";
    }
  });
}

// Role filter tabs
function initRoleFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".agent-card");
  if (!buttons.length || !cards.length) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      buttons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      let visibleIndex = 0;
      cards.forEach((card) => {
        const role = card.dataset.role;
        const matches = (filter === "all" || role === filter);

        if (matches) {
          card.classList.remove("is-filtered-out");
          card.style.setProperty("--i", String(visibleIndex % 3));
          card.classList.add("is-visible");
          visibleIndex++;
        } else {
          card.classList.add("is-filtered-out");
        }
      });
    });
  });

  document.querySelectorAll(".filter-link").forEach((link) => {
    link.addEventListener("click", () => {
      const role = link.dataset.role;
      const targetBtn = document.querySelector(`.filter-btn[data-filter="${role}"]`);
      if (targetBtn) {
        targetBtn.click();
      }
    });
  });
}

// Bootstrap
document.addEventListener("DOMContentLoaded", () => {
  renderAgentGrid();
  initRoleFilters();
  initCardTilt();
  initReveals();
  initRoll();
  initScrollProgress();
  initNavToggle();

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
});

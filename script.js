const PROJECT_TYPES = [
  {
    id: "grazing",
    label: "Grazing impacts & range/riparian projects",
    shortLabel: "Grazing impacts",
    description:
      "Projects involving grazing impacts on rangeland, riparian areas, livestock water developments, sediment runoff, and related watershed conditions.",
    mainIssues: [
      "Rangeland and riparian degradation",
      "Livestock water developments",
      "Sediment runoff and erosion"
    ],
    coreEntities: {
      tribalChapter: [
        "Chapter President",
        "Chapter Grazing Official",
        "Navajo Nation Agriculture / Natural Resources",
        "Navajo Nation Water Resources",
        "Navajo Utah Commission"
      ],
      localStateFederal: [
        "San Juan County (roads, fences, right-of-way)",
        "Utah Department of Agriculture and Food",
        "Utah Department of Natural Resources",
        "NRCS",
        "BLM / U.S. Forest Service (if federal lands or allotments involved)"
      ]
    },
    contactOrder: [
      "Chapter President and Chapter Grazing Official. Confirm the issue, identify affected grazing areas, and determine whether the matter is local, inter-Chapter, or watershed-wide.",
      "Navajo Nation Agriculture / Natural Resources. Review grazing plans, carrying capacity concerns, policy issues, range conditions, and whether administrative or legislative action is needed.",
      "Navajo Nation Water Resources. Bring in Water Resources if off-stream livestock water, well improvements, spring development, or related water infrastructure could reduce pressure on damaged areas.",
      "Navajo Utah Commission. Coordinate Utah-side alignment and identify county or state interfaces.",
      "County and state entities. Engage San Juan County and Utah agriculture/natural resources entities where roads, fencing, state land, wildlife, or watershed programs intersect.",
      "NRCS and federal land managers. Use NRCS for conservation planning and cost-share; engage BLM or USFS if the project affects federal grazing allotments or adjacent lands."
    ],
    funding: [
      "Tribal/chapter contributions, including labor and local match where possible.",
      "Navajo Nation range or natural resources funds, where available.",
      "USDA NRCS programs such as EQIP and CSP for grazing management, fencing, livestock water, and riparian practices.",
      "BLM / USFS allotment improvement resources where applicable.",
      "Utah agriculture, watershed, and rangeland support programs.",
      "EPA Clean Water Act Section 319 Tribal Nonpoint Source funds.",
      "EPA Tribal GAP funds for watershed program capacity, planning, outreach, and environmental staff support.",
      "Nonprofit/philanthropic planning and implementation support."
    ],
    keyNotes:
      "Where grazing impacts are causing erosion, sediment loading, or riparian degradation, treat the project as both a range management issue and a nonpoint source water quality project to pair NRCS and EPA 319 support.",
    matrixRow: {
      firstCall: "Chapter President & Chapter Grazing official",
      secondCall: "Navajo Nation Agriculture / Natural Resources",
      thirdCall: "Navajo Nation Water Resources & Navajo Utah Commission",
      topFunding:
        "NRCS (EQIP/CSP), EPA 319 Tribal Nonpoint Source, Navajo range funds, Utah ag/range programs"
    }
  },
  {
    id: "contaminated-wells",
    label: "Contaminated drinking water wells",
    shortLabel: "Contaminated wells",
    description:
      "Private or community wells that are contaminated, unreliable, unsafe, or in need of replacement, connection, treatment, or emergency response.",
    mainIssues: [
      "Contaminated or unsafe wells",
      "Unreliable private or community supplies",
      "Need for replacement, treatment, or connection to safer sources"
    ],
    coreEntities: {
      tribalChapter: [
        "Chapter President and local water committee or designated local leaders",
        "Navajo Tribal Utility Authority (NTUA)",
        "Navajo Nation Department of Water Resources",
        "Navajo Nation environmental or water quality staff",
        "Navajo Utah Commission"
      ],
      localStateFederal: [
        "San Juan County public health or emergency management, as needed",
        "Utah Division of Drinking Water",
        "Utah Department of Environmental Quality",
        "Indian Health Service (IHS) Sanitation Facilities Construction",
        "EPA regional Tribal water and water quality programs",
        "NRCS or other source-specific partners if contamination is land-use related"
      ]
    },
    contactOrder: [
      "Chapter leadership. Document which wells are affected, how many households rely on them, whether contamination has been confirmed, and whether immediate health risks exist.",
      "NTUA and Navajo Nation Water Resources. Assess whether the issue is best solved through treatment, a replacement well, connection to an existing public system, hauling, storage, or a new distribution extension.",
      "Navajo Nation environmental / water quality staff. Confirm the contaminant type, extent, likely source, and urgency of response.",
      "Navajo Utah Commission and IHS Sanitation Facilities Construction.",
      "San Juan County and Utah DEQ. Engage county or state agencies for public health response, regulatory coordination, and state-linked funding where applicable.",
      "EPA Tribal water programs. Engage EPA for technical assistance, monitoring support, and applicable Tribal water quality funding.",
      "Source-specific agencies and partners. If contamination relates to septic systems, runoff, mining, agriculture, or erosion, engage the relevant additional agencies."
    ],
    funding: [
      "Indian Health Service Sanitation Facilities Construction for design and construction of safe drinking water infrastructure.",
      "NTUA and Navajo Nation capital resources for extensions, upgrades, or match.",
      "Utah Drinking Water Board and related state funding where applicable.",
      "County emergency funding for temporary supplies, hauling, or interim response.",
      "EPA Clean Water Act Section 106 Tribal Water Quality funds for monitoring, sampling, baseline data, program development, and follow-up testing.",
      "EPA Clean Water Act Section 319 Tribal Nonpoint Source funds where contamination is linked to runoff, failing septic systems, or nonpoint sources.",
      "EPA Tribal GAP funds for program capacity, outreach, and staffing support.",
      "Nonprofit/philanthropic support for interim bottled water, cisterns, filters, outreach, and planning."
    ],
    keyNotes:
      "This type of issue often needs a two-track response: immediate public health measures plus long-term infrastructure planning, with Section 106 supporting monitoring and data.",
    matrixRow: {
      firstCall: "Chapter President / local water lead",
      secondCall: "NTUA & Navajo Nation Water Resources",
      thirdCall:
        "Navajo Env/Water Quality + Navajo Utah Commission & IHS Sanitation Facilities",
      topFunding:
        "IHS Sanitation Facilities, EPA 106 Tribal Water Quality, EPA 319 (if nonpoint), NTUA/Navajo capital, Utah Drinking Water programs"
    }
  },
  {
    id: "erosion",
    label: "Erosion, streambank, gully, and road/watershed damage",
    shortLabel: "Erosion & streambank",
    description:
      "Streambank erosion, gullies, road washouts, unstable channels, sedimentation, and other watershed damage affecting infrastructure, land, cultural resources, or water quality.",
    mainIssues: [
      "Streambank erosion and unstable channels",
      "Gullies and road washouts",
      "Sedimentation and damage to infrastructure, land, or cultural resources"
    ],
    coreEntities: {
      tribalChapter: [
        "Chapter President and relevant local leaders",
        "Navajo Nation Water Resources",
        "Navajo Nation Natural Resources",
        "Navajo Nation transportation staff where roads are affected",
        "Navajo Utah Commission"
      ],
      localStateFederal: [
        "San Juan County Roads / Public Works",
        "Utah Department of Natural Resources",
        "Utah Division of Forestry, Fire, and State Lands",
        "NRCS",
        "BLM / U.S. Forest Service",
        "Army Corps of Engineers",
        "FEMA in post-disaster situations"
      ]
    },
    contactOrder: [
      "Chapter leadership. Document the location, severity, and impacts using photos, maps, and observations from residents.",
      "Navajo Nation Water Resources and Natural Resources. Determine whether the site is local or part of a broader watershed instability issue and identify priority interventions.",
      "Navajo Utah Commission. Coordinate the Utah-side interface, especially where projects cross jurisdictional lines or implicate multiple programs.",
      "Transportation and infrastructure owners. Bring in Navajo transportation and San Juan County early where erosion is threatening roads, culverts, or access.",
      "NRCS and federal land managers. Use NRCS for design and cost-share; engage BLM or USFS if adjacent or contributing lands are under federal management.",
      "Army Corps and state entities. If in-channel work or regulated stream modifications are needed, engage permitting entities early to avoid rework."
    ],
    funding: [
      "Navajo Nation and Chapter resources for small works and match.",
      "NRCS watershed, erosion control, and conservation practice support.",
      "San Juan County and Tribal transportation budgets where road infrastructure is implicated.",
      "Utah watershed, hazard mitigation, and flood-related programs.",
      "EPA Clean Water Act Section 319 Tribal Nonpoint Source funds for watershed restoration, sediment reduction, streambank stabilization, and watershed implementation work.",
      "EPA Clean Water Act Section 106 Tribal Water Quality funds for sediment and water quality monitoring before and after implementation.",
      "FEMA hazard mitigation or disaster-linked funds where erosion is associated with declared events.",
      "Nonprofit/philanthropic match and design assistance."
    ],
    keyNotes:
      "If erosion is affecting water quality, habitat, roads, and community access at the same time, build the project as a multi-benefit watershed package to improve competitiveness across funding sources.",
    matrixRow: {
      firstCall: "Chapter President",
      secondCall: "Navajo Nation Water & Natural Resources",
      thirdCall:
        "Navajo Utah Commission + Navajo/County Transportation",
      topFunding:
        "NRCS watershed/erosion programs, EPA 319 Tribal Nonpoint Source, EPA 106 monitoring, Utah watershed/hazard programs, FEMA (if disaster-linked)"
    }
  },
  {
    id: "small-irrigation",
    label: "Small–medium irrigation using San Juan River water",
    shortLabel: "Small–medium irrigation",
    description:
      "Local irrigation projects that use San Juan River water to support agriculture, grazing, and watershed objectives.",
    mainIssues: [
      "Small to medium irrigation systems",
      "Use of San Juan River water for agriculture",
      "Local conveyance and distribution needs"
    ],
    coreEntities: {
      tribalChapter: [
        "Chapter President",
        "Chapter Grazing official (if relevant)",
        "Navajo Nation Water Resources",
        "Navajo Nation Agriculture / Natural Resources",
        "Navajo Utah Commission"
      ],
      localStateFederal: [
        "San Juan County",
        "Utah Division of Water Resources",
        "Utah Department of Agriculture and Food",
        "Reclamation (where applicable)",
        "NRCS"
      ]
    },
    contactOrder: [
      "Chapter President & Grazing official (if relevant).",
      "Navajo Nation Water & Agriculture / Natural Resources.",
      "Navajo Utah Commission + San Juan County.",
      "NRCS, Utah Water Resources/Ag programs, and Reclamation (where applicable)."
    ],
    funding: [
      "NRCS programs for irrigation and water management.",
      "Utah Water Resources and agriculture programs.",
      "Reclamation support where applicable.",
      "Navajo Nation and Chapter funds."
    ],
    keyNotes:
      "Align irrigation projects with San Juan River water-rights use and local agriculture priorities, and document how they reduce pressure on degraded grazing and riparian areas.",
    matrixRow: {
      firstCall:
        "Chapter President & Grazing official (if relevant)",
      secondCall:
        "Navajo Nation Water & Agriculture / Natural Resources",
      thirdCall: "Navajo Utah Commission + San Juan County",
      topFunding:
        "NRCS, Utah Water Resources/Ag programs, Reclamation (where applicable), Navajo/Chapter funds"
    }
  },
  {
    id: "major-pipelines",
    label:
      "Major pipelines & large-scale irrigation (settlement-related backbone projects)",
    shortLabel: "Major pipelines & large irrigation",
    description:
      "Regional backbone infrastructure such as pipelines, storage, large conveyance, and major irrigation systems tied to the Utah Navajo water-rights settlement.",
    mainIssues: [
      "Long-distance pipelines and storage",
      "Large-scale irrigation systems",
      "Putting the 81,500 acre-feet Colorado River allocation to work"
    ],
    coreEntities: {
      tribalChapter: [
        "Affected Chapter leadership and project champions",
        "Navajo Nation Department of Water Resources",
        "Navajo Nation Agriculture / Natural Resources",
        "Navajo Nation Department of Justice / legal counsel",
        "Navajo Utah Commission",
        "Navajo Nation Resource and Development Committee"
      ],
      localStateFederal: [
        "Seven County Infrastructure Coalition (SCIC)",
        "Jones & DeMille Engineering (JDE)",
        "San Juan County",
        "Utah Division of Water Rights",
        "Utah Division of Water Resources",
        "Utah Governor’s Office of Planning and Budget",
        "Utah Governor’s Office of Economic Opportunity",
        "Bureau of Reclamation",
        "Bureau of Indian Affairs",
        "U.S. Army Corps of Engineers",
        "EPA"
      ]
    },
    contactOrder: [
      "Affected Chapters and Navajo Nation Water Resources. Confirm which settlement projects are priority for that Chapter and how they advance use of the 81,500 acre-feet Colorado River allocation.",
      "Navajo leadership, legal counsel, and Navajo Utah Commission. Review sovereignty, water rights, governance, long-term ownership/O&M, and settlement strategy alignment.",
      "Resource and Development Committee. Confirm legislative and policy support, including resolution needs and how the project interacts with existing white papers and project lists.",
      "SCIC and JDE. Review and refine corridor concepts, capacities, phasing, and costs developed in the Utah Navajo Water Settlement Planning report.",
      "Utah state water and planning agencies. Coordinate on Colorado River/Lake Powell delivery pathways, compact compliance, and state participation.",
      "Federal agencies (Reclamation, BIA, Corps, EPA). Engage on funding, right-of-way grants, NEPA roles, and Clean Water Act permitting.",
      "Funding and finance partners. Once a preferred alternative and governance structure are identified, assemble a financing package using settlement-related funds, federal and state programs, and other partners."
    ],
    funding: [
      "Navajo Nation capital and settlement-related channels.",
      "State of Utah infrastructure and water funding (including Drinking Water State Revolving Fund and state water development funds).",
      "Bureau of Reclamation programs such as WaterSMART Water and Energy Efficiency Grants.",
      "USDA Rural Development programs for components serving rural and low-income households.",
      "EPA drinking water infrastructure programs (e.g., WIIN Act Section 2104 Assistance for Small and Disadvantaged Communities, DWIG-TSA, WIFIA).",
      "Bureau of Indian Affairs right-of-way support and potential infrastructure funding.",
      "Utah Navajo Revitalization Fund and similar Tribal-state funds.",
      "NGO / philanthropic partners for planning, facilitation, community engagement, and match funding."
    ],
    keyNotes:
      "These projects should be framed as backbone systems that serve specific local beneficiary nodes such as contaminated wells, community drinking water systems, large-scale irrigation, and resilience for underserved Chapters.",
    matrixRow: {
      firstCall:
        "Affected Chapters & Navajo Nation Water Resources",
      secondCall:
        "Navajo leadership/legal + Navajo Utah Commission & Resource & Development Committee",
      thirdCall:
        "SCIC & JDE + Utah Water Rights/Water Resources",
      topFunding:
        "Navajo capital/settlement channels, Utah infrastructure funds, Reclamation/BIA, federal infrastructure, regional financing via SCIC"
    }
  },
  {
    id: "community-systems",
    label:
      "Community drinking water systems (new or expansion)",
    shortLabel: "Community systems",
    description:
      "New or expanded community drinking water systems that serve households and community facilities.",
    mainIssues: [
      "New or expanded community systems",
      "Distribution extensions to unserved homes",
      "System upgrades for reliability and safety"
    ],
    coreEntities: {
      tribalChapter: [
        "Chapter President / local water lead",
        "Navajo Tribal Utility Authority (NTUA)",
        "Navajo Nation Water Resources",
        "Navajo Utah Commission"
      ],
      localStateFederal: [
        "IHS Sanitation Facilities Construction",
        "San Juan County",
        "Utah Division of Drinking Water / Drinking Water Board",
        "EPA drinking water programs",
        "Philanthropic partners"
      ]
    },
    contactOrder: [
      "Chapter President / local water lead.",
      "NTUA & Navajo Nation Water Resources.",
      "Navajo Utah Commission + IHS Sanitation Facilities.",
      "San Juan County and Utah drinking water programs.",
      "EPA drinking water programs and philanthropy for planning and match."
    ],
    funding: [
      "IHS Sanitation Facilities Construction.",
      "NTUA/Navajo capital resources.",
      "EPA drinking water and Section 106 programs.",
      "Utah Drinking Water Board and related programs.",
      "Philanthropy for match and planning."
    ],
    keyNotes:
      "Pair community-scale system work with Chapter-level documentation of unserved homes and health risks to support funding requests.",
    matrixRow: {
      firstCall: "Chapter President / local water lead",
      secondCall: "NTUA & Navajo Nation Water Resources",
      thirdCall:
        "Navajo Utah Commission + IHS Sanitation Facilities",
      topFunding:
        "IHS Sanitation Facilities, NTUA/Navajo capital, EPA drinking water/106, Utah Drinking Water Board, philanthropy (match/planning)"
    }
  }
];
const COORDINATION_SEQUENCE = [
  "Start with tribal and chapter leadership when the issue is on tribal land, affects tribal members, or requires consultation with Navajo Nation or Ute Mountain Ute authorities.",
  "Bring in tribal technical programs early so the project is in the correct department(s) and internal approval processes.",
  "Use the Navajo Utah Commission as a Utah-facing coordination bridge for projects crossing tribal, state, and county systems.",
  "Engage county and state entities after local and tribal alignment is established, unless an emergency requires immediate public health or safety intervention.",
  "Bring in federal agencies once the project concept, affected geography, and likely jurisdictional triggers are understood.",
  "Layer funding conversations after the basic project pathway is clear so agencies and funders are asked to support a defined project rather than a general concern."
];

function getProjectTypeById(id) {
  return PROJECT_TYPES.find((p) => p.id === id) || null;
}

function renderProjectTypes() {
  const select = document.getElementById("projectTypeId");
  const list = document.getElementById("type-list");
  select.innerHTML = '<option value="">Select…</option>';
  list.innerHTML = "";

  PROJECT_TYPES.forEach((p) => {
    const opt = document.createElement("option");
    opt.value = p.id;
    opt.textContent = p.shortLabel;
    select.appendChild(opt);

    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "type-pill";
    btn.textContent = p.shortLabel;
    btn.dataset.typeId = p.id;
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function renderCoordinationSequence() {
  const ol = document.getElementById("coordination-sequence");
  COORDINATION_SEQUENCE.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ol.appendChild(li);
  });
}

function renderMatrix() {
  const tbody = document.querySelector("#matrix-table tbody");
  tbody.innerHTML = "";
  PROJECT_TYPES.forEach((p) => {
    const tr = document.createElement("tr");

    const tdType = document.createElement("td");
    tdType.textContent = p.shortLabel;
    tr.appendChild(tdType);

    const tdFirst = document.createElement("td");
    tdFirst.textContent = p.matrixRow.firstCall;
    tr.appendChild(tdFirst);

    const tdSecond = document.createElement("td");
    tdSecond.textContent = p.matrixRow.secondCall;
    tr.appendChild(tdSecond);

    const tdThird = document.createElement("td");
    tdThird.textContent = p.matrixRow.thirdCall;
    tr.appendChild(tdThird);

    const tdFunding = document.createElement("td");
    tdFunding.textContent = p.matrixRow.topFunding;
    tr.appendChild(tdFunding);

    tbody.appendChild(tr);
  });
}

function updateTypePillsActive(selectedId) {
  document.querySelectorAll(".type-pill").forEach((btn) => {
    if (btn.dataset.typeId === selectedId) {
      btn.classList.add("type-pill--active");
    } else {
      btn.classList.remove("type-pill--active");
    }
  });
}

function renderProjectSummary(selectedTypeId) {
  const container = document.getElementById("project-summary");
  const projectType = getProjectTypeById(selectedTypeId);

  if (!projectType) {
    container.className = "panel muted";
    container.innerHTML =
      "Select a project type to see the recommended pathway.";
    return;
  }

  container.className = "panel";

  const mainIssuesList = projectType.mainIssues
    .map((issue) => `<li>${issue}</li>`)
    .join("");

  const tribalList = projectType.coreEntities.tribalChapter
    .map((e) => `<li>${e}</li>`)
    .join("");

  const localList = projectType.coreEntities.localStateFederal
    .map((e) => `<li>${e}</li>`)
    .join("");

  const contactList = projectType.contactOrder
    .map((step) => `<li>${step}</li>`)
    .join("");

  const fundingList = projectType.funding.map((f) => `<li>${f}</li>`).join("");

  container.innerHTML = `
    <h2>Project pathway</h2>
    <p class="subtitle">
      This pathway is based on the San Juan River Watershed Project Builder guidance for the selected project type.
    </p>

    <section>
      <h3>Main issue and context</h3>
      <p>${projectType.description}</p>
      <ul>${mainIssuesList}</ul>
    </section>

    <section>
      <h3>Core entities</h3>
      <div class="two-col">
        <div>
          <h4>Tribal / Chapter</h4>
          <ul>${tribalList}</ul>
        </div>
        <div>
          <h4>Local / State / Federal</h4>
          <ul>${localList}</ul>
        </div>
      </div>
    </section>

    <section>
      <h3>Recommended order of contact</h3>
      <ol>${contactList}</ol>
    </section>

    <section>
      <h3>Top funding combinations</h3>
      <ul>${fundingList}</ul>
    </section>

    <section>
      <h3>Key notes</h3>
      <p>${projectType.keyNotes}</p>
    </section>
  `;
}

function updateFormStatus() {
  const requiredIds = [
    "projectName",
    "communityChapter",
    "projectTypeId",
    "urgency",
    "currentStage",
    "needDescription"
  ];
  const statusEl = document.getElementById("form-status");
  const allFilled = requiredIds.every((id) => {
    const el = document.getElementById(id);
    return el && el.value.trim().length > 0;
  });
  statusEl.textContent = allFilled
    ? "All required fields are filled."
    : "Required fields marked with *.";
}

function attachEventHandlers() {
  const select = document.getElementById("projectTypeId");
  const form = document.getElementById("project-form");
  const clearBtn = document.getElementById("clear-form");
  const typeList = document.getElementById("type-list");

  select.addEventListener("change", (e) => {
    const id = e.target.value;
    updateTypePillsActive(id);
    renderProjectSummary(id);
    updateFormStatus();
  });

  form.addEventListener("input", updateFormStatus);

  clearBtn.addEventListener("click", () => {
    form.reset();
    renderProjectSummary("");
    updateTypePillsActive("");
    updateFormStatus();
  });

  typeList.addEventListener("click", (e) => {
    if (e.target.matches(".type-pill")) {
      const id = e.target.dataset.typeId;
      document.getElementById("projectTypeId").value = id;
      updateTypePillsActive(id);
      renderProjectSummary(id);
      updateFormStatus();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjectTypes();
  renderCoordinationSequence();
  renderMatrix();
  attachEventHandlers();
  updateFormStatus();
  renderProjectSummary("");
});

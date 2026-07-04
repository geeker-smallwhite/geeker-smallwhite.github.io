const projects = [
  {
    id: "coding-eval-system",
    title: "生产级 Coding Agent 评测系统",
    time: "2025.06 - 至今",
    categories: ["eval", "agent", "data"],
    tags: ["SWE-bench", "Agentic Eval", "Rubric RCA", "Patch Checker", "Code SFT"],
    summary:
      "面向 Douyin AI4SE 的真实业务研发任务，建设从评测题构建、环境运行、Agent 接入、结果判定、轨迹归因到数据回流的生产级评测闭环。",
    role:
      "负责评测体系设计、题目构建 Agent、题目上线准入、异构 Agent 接入、Trace/Rubric RCA、Patch Checker 和训练数据回流。",
    work: [
      "评测题构建：由 Agent 自动读取研发需求、业务仓库、历史 issue、测试脚本和 ground truth patch，生成 SWE-bench 风格评测实例。",
      "题目上线准入：校验任务描述、仓库上下文、验证命令、fail2pass/pass2pass、ground truth patch、环境依赖和可复现性，阻断不稳定题目进入评测集。",
      "环境与执行：建设一题一环境的容器化运行机制，自动拉起镜像和依赖服务，并通过 Health Check 过滤环境噪音。",
      "Agent 接入：设计统一 SDK，支持 Claude Code、OpenHands 等异构 Agent 在同一任务和环境下横向对比。",
      "Cookbook 与 Rubric：为每道题沉淀标准解题路径、关键代码位置、验证方式和常见失败点；同时用 cookbook 反向验证题目质量，并支撑 rubric 生成与复核。",
      "轨迹解读与 Rubric 归因：基于已有 rubric 对失败 trace 做判定，聚合到上下文理解、问题定位、代码修改、验证不足、工具使用等能力维度。",
      "Patch Checker：结合历史命中、候选 patch、标准答案、关键测试和 rubric judge，输出 ACCEPT / REJECT / ABSTAIN。",
      "信号回流：将模型能力短板和 Agent 架构问题反馈到模型训练、Agent 迭代、SFT/RL 数据构造、回归样本和 benchmark 治理。"
    ],
    outcomes: [
      "构建 200+ 业务 SWE/Agent 评测数据，支持一题一环境运行。",
      "沉淀 200+ 个 check rules、50 个核心 rule 方向。",
      "Patch Checker 在 198 条样本上正确 181 条，成功率 91.4%。",
      "LLM 标注校准 564 条 case，正确率 93.6%。",
      "评测解读耗时从 286.17s 降至 30.24s，LLM 调用从 37 次降至 13 次，token 下降 64.33%。",
      "基于坏例和 RCA 构造代码 SFT 数据，内场复杂评测集同口径 Pass@1 提升 1.5 个百分点。"
    ],
    stack: ["Python", "Docker", "Kubernetes", "SWE-bench", "OpenHands", "Claude Code", "Rubric Judge", "Trace Analyzer", "SFT Data"]
  },
  {
    id: "full-auto-code-agent",
    title: "自研全自动 Code Agent",
    time: "2025.03 - 2025.07",
    categories: ["agent", "eval", "data"],
    tags: ["Code Agent", "Reproduce Agent", "Codebase Wiki", "Voting Agent", "AST"],
    summary:
      "研发面向真实代码任务的全自动 Code Agent，覆盖 issue 理解、仓库探索、问题复现、问题定位、代码修改、测试验证和候选 patch 选择。",
    role:
      "负责 Agent 主流程、关键子 Agent、仓库级上下文组织、候选 patch 选择和全链路 prompt/策略调优。",
    work: [
      "主流程：搭建 issue 到 patch 的完整执行链路，支持搜索、阅读、编辑、测试、复盘和结果总结。",
      "Reproduce Agent：在修复前自动生成复现脚本，并用 ground truth patch 反向验证脚本是否能区分修复前后行为。",
      "AST Codebase Wiki：基于 AST/Tree-sitter/LSP 解析函数、类、调用关系和关键符号，生成仓库级语义索引与模块说明。",
      "上下文召回：提供语法树节点模糊查询、代码片段匹配、相关文件召回和压缩后的 Agent 定位线索。",
      "Voting Agent：收集多个候选 patch 的 diff、测试结果、trace 摘要和关键修改点，对候选解做比较与选择。",
      "全链路调优：围绕搜索策略、工具调用、文件选择、测试反馈、终止条件和失败复盘持续优化。"
    ],
    outcomes: [
      "单轮 rollout 达到 71.2%，多轮优化达到 72.4%。",
      "复现脚本有效率达到 60%。",
      "沉淀 Agent 执行、trace 采集、失败归因和 patch 选择经验，并迁移到后续评测系统。",
      "形成从 issue 复现、定位、patch 生成到候选选择的端到端 Agent 工程能力。"
    ],
    stack: ["Code Agent", "Prompt Engineering", "Tool Use", "AST", "Tree-sitter", "LSP", "Codebase Wiki", "Patch Ranking"]
  },
  {
    id: "go2rust",
    title: "go2rust 代码翻译与代码任务沙箱",
    time: "2024.11 - 2025.03",
    categories: ["agent", "platform"],
    tags: ["Go", "Rust", "gopls", "rust-analyzer", "workspace sandbox", "编译反馈"],
    summary:
      "面向 Go 到 Rust 的代码翻译任务，建设仓库级 AST、LSP 编译反馈、并行 workspace 沙箱和翻译质量诊断链路。",
    role:
      "负责 AST/LSP 基础能力、沙箱执行、编译反馈、节点级指标和翻译链路优化。",
    work: [
      "基于 gopls 获取 Go 仓库语义结构、符号关系和引用链。",
      "接入 rust-analyzer、cargo 和 clippy，形成 Rust 侧编译诊断和修复反馈。",
      "建设 LSP client pool 与 workspace sandbox，支持多任务并行翻译和隔离执行。",
      "记录节点级编译指标、错误类型、修复轮次和接受状态。",
      "把代码翻译中的编译反馈、上下文组织和任务沙箱经验迁移到 Code Agent 与评测沙箱。"
    ],
    outcomes: [
      "Compile 指标从 70 提升到 83.44。",
      "Broad acceptance 从 47 提升到 64。",
      "诊断耗时从 96s 降至 45s。",
      "沉淀仓库级代码理解、编译反馈和代码任务沙箱能力。"
    ],
    stack: ["Go", "Rust", "gopls", "rust-analyzer", "cargo", "clippy", "Sandbox", "LSP Client Pool"]
  },
  {
    id: "ai-ide-completion",
    title: "AI IDE 代码补全与开发者 AI 产品",
    time: "2023.10 - 2024.10",
    categories: ["product", "agent", "data"],
    tags: ["VSCode", "JetBrains", "RAG", "LSP", "代码补全", "A/B 实验"],
    summary:
      "参与开发面向研发场景的代码补全产品，覆盖 IDE 插件、本地/远程上下文、RAG、模型流量、A/B 实验和效果看板。",
    role:
      "负责插件工程、本地上下文、远程 RAG、模型接入、流量策略、数据分析和效果看板。",
    work: [
      "IDE 插件：建设 VSCode/JetBrains 插件能力，包括鉴权、遥测、debounce、WebView 动态加载、自动升级和 bridge 通信。",
      "本地上下文：结合本地相似代码、LSP 上下文、编辑器状态和光标附近代码构建补全上下文。",
      "远程 RAG：基于 tree-sitter 切分代码库并接入向量检索，支持 Chat、补全和单测生成等场景。",
      "模型与策略：建设公有云/私有化流量管理、模型路由、A/B 实验和策略配置。",
      "数据分析：搭建动态看板和定时报告，跟踪采纳率、延迟、错误率和用户行为。"
    ],
    outcomes: [
      "代码补全采纳率达到 30%。",
      "线上 P95 延迟控制在 500ms 内。",
      "形成对上下文质量、模型效果和产品体验关系的系统认知。",
      "沉淀 IDE 插件、模型服务、RAG 和产品数据分析的完整工程经验。"
    ],
    stack: ["VSCode", "JetBrains", "TypeScript", "WebView", "LSP", "Tree-sitter", "RAG", "A/B Test"]
  },
  {
    id: "engineering-platform",
    title: "研发效能、BuildFarm 与全栈平台工程",
    time: "2022.06 - 2023.06",
    categories: ["platform", "data", "product"],
    tags: ["研发效能", "BuildFarm", "CI/CD", "数据平台", "React", "Go"],
    summary:
      "围绕研发流程、构建链路和工程数据建设平台能力，覆盖 CI/CD、构建诊断、数据采集、指标加工、可视化看板和多系统集成。",
    role:
      "负责平台后端、前端页面、数据链路、构建分析、可视化诊断和多系统集成。",
    work: [
      "工效平台：接入 Jira、Feishu、Jenkins、Gerrit、GitLab、K8s、Zadig、BuildFarm 等研发系统。",
      "研发数据平台：采集构建、提交、评审、流水线、缺陷和发布数据，沉淀研发过程指标。",
      "BuildFarm 管控：建设构建任务、节点、缓存、日志和诊断数据的统一管理入口。",
      "构建诊断：分析构建耗时、缓存命中、异常任务和关键路径，优化火焰图等大规模调用链可视化模块。",
      "全栈平台：开发 React/TypeScript 页面和 Go/Python/Node.js 服务，支持权限、报告、数据导出和任务状态追踪。",
      "能力迁移：将研发数据、构建 trace、指标看板和平台化交付经验迁移到后续 AI4SE 评测平台。"
    ],
    outcomes: [
      "编译 P75 耗时降低到原来的 1/4。",
      "构建诊断链路从 96s 降至 45s。",
      "沉淀跨系统集成、数据看板、构建诊断和平台化交付能力。",
      "为后续 AI4SE 评测平台、Agent trace 分析和 benchmark 治理提供工程基础。"
    ],
    stack: ["React", "TypeScript", "Go", "Python", "Node.js", "Flink", "StarRocks", "Grafana", "Kubernetes", "BuildFarm"]
  },
  {
    id: "opensource",
    title: "开源贡献与公开技术内容",
    time: "持续",
    categories: ["opensource", "agent", "platform"],
    tags: ["OpenHands", "vLLM", "BuildBuddy", "SWE-bench", "LeetCode", "GitBook"],
    summary:
      "持续参与代码 Agent、推理框架、构建系统和评测基准相关开源项目，并沉淀公开技术内容。",
    role:
      "负责具体 bug fix、能力拓展、性能优化、评测环境修复和技术内容整理。",
    work: [
      "OpenHands：拓展 Runtime Server 接口能力，支持命令预注入，增强 Agent 运行环境初始化灵活性。",
      "vLLM：修复特定场景下 Stop Word 失效问题，保证生成结果截断准确性。",
      "BuildBuddy：优化 Flame Graph 可视化模块，引入过滤逻辑降低渲染开销。",
      "SWE-bench：修复部分评测任务 Docker 镜像构建失败问题，提升环境复现率。",
      "公开内容：参与 LeetCode《图解网络》编写，并通过 GitBook 沉淀个人技术文档。"
    ],
    outcomes: [
      "开源贡献方向与个人主线一致，覆盖 Agent runtime、模型推理、构建诊断和 SWE 评测。",
      "通过公开项目验证工程能力、跨代码库适应能力和技术表达能力。"
    ],
    stack: ["OpenHands", "vLLM", "BuildBuddy", "SWE-bench", "Docker", "Runtime", "GitBook"]
  }
];

const categoryLabels = {
  all: "全部",
  eval: "评测",
  agent: "Agent",
  data: "数据",
  platform: "平台",
  product: "产品",
  opensource: "开源"
};

const filterButtons = Array.from(document.querySelectorAll(".filter"));
const searchInput = document.querySelector("#projectSearch");
const projectList = document.querySelector("#projectList");
const projectDetail = document.querySelector("#projectDetail");
const projectCount = document.querySelector("#projectCount");
const timeline = document.querySelector(".timeline");
const timelineCards = Array.from(document.querySelectorAll(".timeline article"));
const timelineNavButtons = Array.from(document.querySelectorAll(".timeline-nav"));

let activeFilter = "all";
let activeProjectId = projects[0].id;
let detailModal = null;
let lastFocusedElement = null;

function projectText(project) {
  return [
    project.title,
    project.time,
    project.summary,
    project.role,
    ...project.tags,
    ...project.work,
    ...project.outcomes,
    ...project.stack
  ]
    .join(" ")
    .toLowerCase();
}

function getFilteredProjects() {
  const query = (searchInput?.value || "").trim().toLowerCase();
  return projects.filter((project) => {
    const categoryMatched = activeFilter === "all" || project.categories.includes(activeFilter);
    const queryMatched = !query || projectText(project).includes(query);
    return categoryMatched && queryMatched;
  });
}

function tagMarkup(items, className = "pill") {
  return items.map((item) => `<span class="${className}">${item}</span>`).join("");
}

function listMarkup(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function detailMarkup(project, expanded = false) {
  const categoryText = project.categories.map((key) => categoryLabels[key]).join(" / ");
  const expandAction = expanded
    ? ""
    : `<button class="expand-detail" type="button" data-expand-project="${project.id}" aria-label="放大查看 ${project.title}" title="放大查看">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 3H3v5" />
          <path d="M3 3l7 7" />
          <path d="M16 3h5v5" />
          <path d="M21 3l-7 7" />
          <path d="M8 21H3v-5" />
          <path d="M3 21l7-7" />
          <path d="M16 21h5v-5" />
          <path d="M21 21l-7-7" />
        </svg>
      </button>`;

  return `
    <div class="detail-head">
      <div>
        <p class="detail-meta">${project.time} · ${categoryText}</p>
        <h3>${project.title}</h3>
      </div>
      <div class="detail-side">
        ${expandAction}
        <div class="detail-tags">${tagMarkup(project.tags)}</div>
      </div>
    </div>
    <p class="detail-summary">${project.summary}</p>
    <div class="detail-grid">
      <section class="detail-section span-2">
        <h4>我的角色</h4>
        <p>${project.role}</p>
      </section>
      <section class="detail-section">
        <h4>项目内容</h4>
        <ul>${listMarkup(project.work)}</ul>
      </section>
      <section class="detail-section">
        <h4>项目成果</h4>
        <ul>${listMarkup(project.outcomes)}</ul>
      </section>
      <section class="detail-section span-2">
        <h4>技术栈 / 资产</h4>
        <div class="stack-list">${tagMarkup(project.stack, "stack-pill")}</div>
      </section>
    </div>
  `;
}

function ensureDetailModal() {
  if (detailModal) {
    return detailModal;
  }

  detailModal = document.createElement("div");
  detailModal.className = "detail-modal";
  detailModal.setAttribute("role", "dialog");
  detailModal.setAttribute("aria-modal", "true");
  detailModal.setAttribute("aria-hidden", "true");
  detailModal.innerHTML = `
    <div class="detail-modal-panel">
      <button class="modal-close" type="button" aria-label="关闭放大详情" title="关闭">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      <div class="detail-modal-content"></div>
    </div>
  `;
  document.body.appendChild(detailModal);

  detailModal.addEventListener("click", (event) => {
    if (event.target === detailModal || event.target.closest(".modal-close")) {
      closeDetailModal();
    }
  });

  return detailModal;
}

function openDetailModal(project) {
  const modal = ensureDetailModal();
  const content = modal.querySelector(".detail-modal-content");
  lastFocusedElement = document.activeElement;
  content.innerHTML = detailMarkup(project, true);
  modal.setAttribute("aria-hidden", "false");
  modal.classList.add("open");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeDetailModal() {
  if (!detailModal) {
    return;
  }

  detailModal.classList.remove("open");
  detailModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  if (lastFocusedElement?.focus) {
    lastFocusedElement.focus();
  }
}

function renderDetail(project) {
  if (!project) {
    projectDetail.innerHTML = `
      <div class="empty-state">
        <h3>没有匹配项目</h3>
        <p>换一个关键词或筛选条件。</p>
      </div>
    `;
    return;
  }

  projectDetail.innerHTML = detailMarkup(project);
  projectDetail.querySelector(".expand-detail")?.addEventListener("click", () => openDetailModal(project));
}

function renderProjects() {
  const filtered = getFilteredProjects();
  projectCount.textContent = String(filtered.length);

  if (!filtered.some((project) => project.id === activeProjectId)) {
    activeProjectId = filtered[0]?.id || activeProjectId;
  }

  projectList.innerHTML = filtered
    .map((project) => {
      const active = project.id === activeProjectId;
      const labels = project.categories.map((key) => categoryLabels[key]).join(" / ");
      return `
        <button class="project-list-button ${active ? "active" : ""}" data-project="${project.id}" type="button" aria-pressed="${active}">
          <span class="project-list-time">${project.time}</span>
          <strong>${project.title}</strong>
          <span class="project-list-tags">${labels}</span>
        </button>
      `;
    })
    .join("");

  const activeProject = projects.find((project) => project.id === activeProjectId);
  renderDetail(filtered.find((project) => project.id === activeProjectId) || activeProject);

  Array.from(projectList.querySelectorAll(".project-list-button")).forEach((button) => {
    button.addEventListener("click", () => {
      activeProjectId = button.dataset.project;
      history.replaceState(null, "", `#project-${activeProjectId}`);
      renderProjects();
    });
  });
}

filterButtons.forEach((button) => {
  button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    renderProjects();
  });
});

searchInput?.addEventListener("input", renderProjects);

const hashId = window.location.hash.replace("#project-", "");
if (projects.some((project) => project.id === hashId)) {
  activeProjectId = hashId;
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && detailModal?.classList.contains("open")) {
    closeDetailModal();
  }
});

timelineCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 80}ms`;
  card.addEventListener("click", () => {
    timelineCards.forEach((item) => item.classList.remove("active"));
    card.classList.add("active");
  });
});

timelineCards[0]?.classList.add("active");

const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

timelineCards.forEach((card) => timelineObserver.observe(card));

timelineNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = Number(button.dataset.timelineDir || 1);
    timeline?.scrollBy({ left: direction * 360, behavior: "smooth" });
  });
});

renderProjects();

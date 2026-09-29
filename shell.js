/**
 * =============================================================================
 * SEMİH ÖZDEMİR — INTERACTIVE BASH SHELL EMULATOR
 * =============================================================================
 * Features:
 * - Virtual File System (VFS) with hierarchical directories & files
 * - Unix commands: ls, dir, cd, pwd, cat, tree, whoami, id, uname, neofetch,
 *   clear, echo, date, uptime, history, matrix, theme, open, sudo, help
 * - Tab autocompletion for commands and files/directories
 * - Command history navigation (Up / Down arrows)
 * - Click-to-focus, auto-scroll, theme toggling, maximize window
 * =============================================================================
 */

(function () {
  "use strict";

  /* ── 1. VIRTUAL FILE SYSTEM ─────────────────────────────────── */
  const VFS = {
    "/": {
      type: "dir",
      permissions: "drwxr-xr-x",
      owner: "root",
      size: "4096",
      children: {
        "bin": {
          type: "dir",
          permissions: "drwxr-xr-x",
          owner: "root",
          size: "4096",
          children: {
            "bash": { type: "file", permissions: "-rwxr-xr-x", owner: "root", size: "1234384", content: "ELF 64-bit LSB executable (zyr1on bash)" },
            "ls":   { type: "file", permissions: "-rwxr-xr-x", owner: "root", size: "142144",  content: "ELF 64-bit LSB executable (ls)" },
            "cat":  { type: "file", permissions: "-rwxr-xr-x", owner: "root", size: "43416",   content: "ELF 64-bit LSB executable (cat)" }
          }
        },
        "etc": {
          type: "dir",
          permissions: "drwxr-xr-x",
          owner: "root",
          size: "4096",
          children: {
            "hostname": { type: "file", permissions: "-rw-r--r--", owner: "root", size: "14", content: "zyr1on-station" },
            "os-release": { type: "file", permissions: "-rw-r--r--", owner: "root", size: "180", content: "NAME=\"Zyr1on Linux\"\nVERSION=\"2.4 LTS\"\nID=zyr1on\nPRETTY_NAME=\"Zyr1on Linux 2.4 (x86_64)\"\nHOME_URL=\"https://zyr1on.github.io\"" }
          }
        },
        "home": {
          type: "dir",
          permissions: "drwxr-xr-x",
          owner: "root",
          size: "4096",
          children: {
            "semih": {
              type: "dir",
              permissions: "drwxr-xr-x",
              owner: "semih",
              size: "4096",
              children: {
                "about.txt": {
                  type: "file",
                  permissions: "-rw-r--r--",
                  owner: "semih",
                  size: "620",
                  content: "NAME: Semih Özdemir (zyr1on)\nROLE: Computer Engineering Student & Systems Developer\nFOCUS: Low-level Systems, Computer Graphics & Cybersecurity\n\nBio:\nPassionate Computer Engineering student with a deep fascination for\nlow-level architecture, GPU rendering pipelines, and cybersecurity.\nActively developing compiler/LSP tooling in Rust, real-time 3D graphics\nengines in C++20 / OpenGL, and malware analysis utilities in Python.\n\nEager to collaborate on impactful engineering projects and internships."
                },
                "contact.json": {
                  type: "file",
                  permissions: "-rw-r--r--",
                  owner: "semih",
                  size: "248",
                  content: "{\n  \"author\": \"Semih Özdemir\",\n  \"email\": \"semihozdmirr@gmail.com\",\n  \"github\": \"https://github.com/zyr1on\",\n  \"linkedin\": \"https://linkedin.com/in/semihozdmirr/\",\n  \"youtube\": \"https://youtube.com/@semihozdmirr\",\n  \"devto\": \"https://dev.to/semihozdmirr\"\n}"
                },
                "resume.txt": {
                  type: "file",
                  permissions: "-rw-r--r--",
                  owner: "semih",
                  size: "710",
                  content: "========================================================\nSEMIH ÖZDEMİR — CURRICULUM VITAE SUMMARY\n========================================================\nEducation: Computer Engineering (GPA: 3.48)\nLanguages: C++20, C, Rust, Python, C#, GLSL, HLSL, x86 Assembly\n\nKey Highlights:\n* Built SamEngine: OpenGL 4.6 3D PBR renderer with ImGui\n* Created HLSL & ShaderLab Extended: LSP suite for Zed & VS Code\n* Created GLSL Extended: Unified Rust language server for Desktop OpenGL & Vulkan\n* Malware Analysis: LIEF ELF/PE static analysis framework\n* Certifications: Google Cybersecurity, Cisco Networking Basics\n\nFor full details, visit the #about and #projects tabs."
                },
                "skills": {
                  type: "dir",
                  permissions: "drwxr-xr-x",
                  owner: "semih",
                  size: "4096",
                  children: {
                    "languages.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "210",
                      content: "PROGRAMMING LANGUAGES:\n- C++ (C++20, Modern idioms, Templates, Memory management)\n- C (Systems programming, macros, low-level data structures)\n- Rust (LSP tooling, memory safety, cargo ecosystem)\n- Python (Automation, Malware analysis, ML)\n- C# (Game dev, tooling)\n- GLSL / HLSL (Shader development, compute, graphics pipelines)\n- Bash & Linux CLI"
                    },
                    "graphics.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "260",
                      content: "GRAPHICS & SHADERS:\n- OpenGL 4.6 (PBR materials, bindless textures, UBO camera/lighting)\n- Vulkan SPIR-V shader validation & reflection\n- DirectX DXC shader model 6.3+ integration\n- Unity ShaderLab & Unreal USF/USH parsing\n- Poisson disk shadow mapping\n- ImGui dockable UI architecture"
                    },
                    "security.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "230",
                      content: "CYBERSECURITY & REVERSE ENGINEERING:\n- Static malware analysis with LIEF (ELF & PE)\n- API call interception & IOC anomaly detection\n- Network packet analysis (Wireshark)\n- Linux system hardening and privilege inspection\n- Reverse engineering fundamentals (Ghidra, x64dbg)"
                    },
                    "tools.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "180",
                      content: "DEV TOOLS & PLATFORMS:\n- Git, GitHub, CI/CD Actions\n- Linux (Ubuntu, Debian, Arch)\n- CMake, Cargo, Make\n- Zed Editor, Visual Studio Code, Visual Studio\n- Docker containerization"
                    }
                  }
                },
                "projects": {
                  type: "dir",
                  permissions: "drwxr-xr-x",
                  owner: "semih",
                  size: "4096",
                  children: {
                    "hlsl-shaderlab-extended.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "480",
                      content: "PROJECT: HLSL & ShaderLab Extended\nLANGUAGE: Rust\nCATEGORY: Graphics & Developer Tooling\nREPO: https://github.com/zyr1on/hlsl-shaderlab-extended\n\nAll-in-one HLSL and Unity ShaderLab development suite for modern code\neditors (Zed & VS Code). Real-time Microsoft DXC diagnostics, smart\nautocompletion, 198+ HLSL intrinsics, code formatting, and go-to-definition."
                    },
                    "glsl-extended.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "470",
                      content: "PROJECT: GLSL Extended\nLANGUAGE: Rust\nCATEGORY: Graphics & Developer Tooling\nREPO: https://github.com/zyr1on/glsl-extended\n\nAll-in-one GLSL shader development suite for modern code editors (Zed & VS Code).\nFeatures unified Rust LSP engine with Desktop OpenGL and Vulkan SPIR-V\nvalidation, smart autocompletion, AST formatting, and docs.gl hover docs."
                    },
                    "samengine.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "420",
                      content: "PROJECT: SamEngine\nLANGUAGE: C++20 / OpenGL 4.6\nCATEGORY: 3D Graphics Engine\nREPO: https://github.com/zyr1on/SamEngine\n\nReal-time 3D renderer built from scratch in C++20. Features bindless\ntextures, PBR material pipeline, UBO-based camera/lighting, Poisson disk\nshadow mapping, and a dockable ImGui editor."
                    },
                    "binary-analyzer.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "360",
                      content: "PROJECT: Binary Analyzer\nLANGUAGE: Python\nCATEGORY: Cybersecurity\nREPO: https://github.com/zyr1on/Binary-Analyzer\n\nStatic malware analysis tool for ELF and PE binaries. Parses binaries using\nLIEF, detects suspicious API calls and IOC indicators without execution."
                    },
                    "cvector.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "310",
                      content: "PROJECT: CVector.h\nLANGUAGE: C\nCATEGORY: Systems / Data Structures\nREPO: https://github.com/zyr1on/CVector\n\nGeneric dynamic array in C using macros, replicating core features of\nC++ std::vector with manual memory management and type safety."
                    },
                    "advicemephone.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "320",
                      content: "PROJECT: adviceMePhone\nLANGUAGE: Python / AI\nCATEGORY: NLP & Recommendation Systems\nREPO: https://github.com/zyr1on/adviceMePhone\n\nWeb-based recommendation system using DistilBERT + TF-IDF hybrid model\nto recommend smartphones based on user review sentiments and requirements."
                    }
                  }
                },
                "certifications": {
                  type: "dir",
                  permissions: "drwxr-xr-x",
                  owner: "semih",
                  size: "4096",
                  children: {
                    "certs.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "340",
                      content: "EARNED CERTIFICATIONS:\n1. Google Cybersecurity Specialization — Coursera\n2. Cisco Networking Basics — Cisco Networking Academy\n3. Operating Systems and You: Becoming an Active User — Google\n4. Introduction to Hardware and Operating Systems — IBM\n\nUse 'open certs' to view certificates in the browser."
                    }
                  }
                },
                "articles": {
                  type: "dir",
                  permissions: "drwxr-xr-x",
                  owner: "semih",
                  size: "4096",
                  children: {
                    "devto_posts.txt": {
                      type: "file",
                      permissions: "-rw-r--r--",
                      owner: "semih",
                      size: "260",
                      content: "ARTICLES & WRITEUPS ON DEV.TO:\n* Developing Modern LSP Extensions with Rust and WebAssembly\n* Architectural Breakdown of an OpenGL 4.6 PBR Renderer\n* Static Binary Analysis in Linux with Python and LIEF\n\nCheck out https://dev.to/semihozdmirr"
                    }
                  }
                },
                "secret": {
                  type: "dir",
                  permissions: "drwx------",
                  owner: "semih",
                  size: "4096",
                  children: {
                    "flag.txt": {
                      type: "file",
                      permissions: "-r--------",
                      owner: "semih",
                      size: "142",
                      content: "🚩 CTF FLAG FOUND:\nzyr1on{y0u_4r3_a_tru3_h4ck3r_w3lc0m3_t0_th3_syst3m}\n\nCongratulations on exploring the shell! Semih says hi 👋"
                    },
                    ".hidden_note.txt": {
                      type: "file",
                      permissions: "-rw-------",
                      owner: "semih",
                      size: "82",
                      content: "Great job checking for hidden files with 'ls -la'! Curious minds go far."
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };

  /* ── 2. STATE ───────────────────────────────────────────────── */
  const HOME_PATH = "/home/semih";
  let cwd = HOME_PATH;
  let oldPwd = HOME_PATH;
  const history = [];
  let historyIndex = -1;
  let tempCommand = "";
  let currentThemeIndex = 0;
  const themes = ["theme-cyber", "theme-matrix", "theme-amber", "theme-dracula"];

  // DOM Elements
  const shellEl        = document.getElementById("interactive-shell");
  const screenEl       = document.getElementById("shell-screen");
  const outputEl       = document.getElementById("shell-output");
  const promptPrefixEl = document.getElementById("shell-prompt-prefix");
  const cmdInputEl     = document.getElementById("shell-cmd-input");
  const titleBarEl     = document.getElementById("shell-title-bar");
  const cwdStatusEl    = document.getElementById("shell-status-cwd");
  const maximizeBtn    = document.getElementById("shell-maximize-btn");
  const themeToggleBtn = document.getElementById("shell-theme-toggle");

  if (!shellEl || !cmdInputEl || !outputEl) return;

  /* ── 3. PATH RESOLUTION & VFS UTILITIES ─────────────────────── */
  function normalizePath(targetPath) {
    if (!targetPath) return cwd;
    let path = targetPath.trim();

    // Handle home aliases
    if (path === "~") return HOME_PATH;
    if (path.startsWith("~/")) {
      path = HOME_PATH + path.slice(1);
    } else if (!path.startsWith("/")) {
      path = (cwd === "/" ? "" : cwd) + "/" + path;
    }

    const segments = path.split("/").filter(Boolean);
    const resolved = [];

    for (const segment of segments) {
      if (segment === ".") continue;
      if (segment === "..") {
        if (resolved.length > 0) resolved.pop();
      } else {
        resolved.push(segment);
      }
    }

    return "/" + resolved.join("/");
  }

  function getVfsNode(path) {
    const norm = normalizePath(path);
    if (norm === "/") return VFS["/"];

    const parts = norm.split("/").filter(Boolean);
    let current = VFS["/"];

    for (const part of parts) {
      if (!current || current.type !== "dir" || !current.children) return null;
      current = current.children[part];
      if (!current) return null;
    }

    return current;
  }

  function formatDisplayPath(path) {
    if (path === HOME_PATH) return "~";
    if (path.startsWith(HOME_PATH + "/")) return "~" + path.slice(HOME_PATH.length);
    return path;
  }

  function updatePrompt() {
    const disp = formatDisplayPath(cwd);
    if (promptPrefixEl) {
      promptPrefixEl.innerHTML = `<span class="shell-user">guest@zyr1on</span>:<span class="shell-path">${disp}</span>$&nbsp;`;
    }
    if (titleBarEl) {
      titleBarEl.textContent = `guest@zyr1on: ${disp} (bash)`;
    }
    if (cwdStatusEl) {
      cwdStatusEl.textContent = cwd;
    }
  }

  /* ── 4. OUTPUT HELPERS ───────────────────────────────────────── */
  function print(html, className = "") {
    const line = document.createElement("div");
    line.className = className ? `shell-line ${className}` : "shell-line";
    line.innerHTML = html;
    outputEl.appendChild(line);
    scrollToBottom();
  }

  function printPromptEcho(cmdText) {
    const disp = formatDisplayPath(cwd);
    const escaped = escapeHtml(cmdText);
    print(`<span class="shell-user">guest@zyr1on</span>:<span class="shell-path">${disp}</span>$&nbsp;<span class="shell-echoed-cmd">${escaped}</span>`, "shell-echo-row");
  }

  function printError(msg) {
    print(`<span class="shell-err">${escapeHtml(msg)}</span>`);
  }

  function scrollToBottom() {
    if (screenEl) {
      screenEl.scrollTop = screenEl.scrollHeight;
    }
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /* ── 5. COMMAND HANDLERS ────────────────────────────────────── */

  // Help command
  function cmdHelp() {
    const helpTable = `
<div class="shell-help-wrap">
  <p class="shell-highlight">ZYR1ON BASH TERMINAL — AVAILABLE COMMANDS</p>
  <div class="shell-help-grid">
    <div><span class="cmd-name">ls / dir / ll</span> <span class="cmd-desc">List files & directories (-l, -a, -la)</span></div>
    <div><span class="cmd-name">cd &lt;dir&gt;</span>       <span class="cmd-desc">Change directory (.., ~, /, -)</span></div>
    <div><span class="cmd-name">pwd</span>            <span class="cmd-desc">Print current working directory</span></div>
    <div><span class="cmd-name">cat &lt;file&gt;</span>      <span class="cmd-desc">Display file contents</span></div>
    <div><span class="cmd-name">tree</span>           <span class="cmd-desc">Display directory tree structure</span></div>
    <div><span class="cmd-name">whoami / id</span>    <span class="cmd-desc">Display current user identity</span></div>
    <div><span class="cmd-name">neofetch</span>       <span class="cmd-desc">Display system info & ASCII art</span></div>
    <div><span class="cmd-name">uname -a</span>       <span class="cmd-desc">Show OS and kernel details</span></div>
    <div><span class="cmd-name">echo &lt;text&gt;</span>     <span class="cmd-desc">Print text to terminal</span></div>
    <div><span class="cmd-name">date / uptime</span>  <span class="cmd-desc">Display system date and uptime</span></div>
    <div><span class="cmd-name">history</span>        <span class="cmd-desc">Show command history</span></div>
    <div><span class="cmd-name">open &lt;target&gt;</span>   <span class="cmd-desc">Open repo or page section (github, hlsl, glsl)</span></div>
    <div><span class="cmd-name">matrix</span>         <span class="cmd-desc">Play digital rain animation</span></div>
    <div><span class="cmd-name">theme</span>          <span class="cmd-desc">Cycle terminal color theme</span></div>
    <div><span class="cmd-name">clear / cls</span>    <span class="cmd-desc">Clear terminal screen</span></div>
    <div><span class="cmd-name">sudo &lt;cmd&gt;</span>     <span class="cmd-desc">Execute a command as superuser</span></div>
  </div>
  <p class="shell-muted">💡 Pro tip: Press [Tab] to autocomplete, [↑/↓] for history, or click quick pills above!</p>
</div>`;
    print(helpTable);
  }

  // List directory contents
  function cmdLs(args) {
    let showAll = false;
    let longFormat = false;
    let targetPath = "";

    for (const arg of args) {
      if (arg.startsWith("-")) {
        if (arg.includes("a")) showAll = true;
        if (arg.includes("l")) longFormat = true;
      } else if (!targetPath) {
        targetPath = arg;
      }
    }

    const resolved = normalizePath(targetPath || cwd);
    const node = getVfsNode(resolved);

    if (!node) {
      printError(`ls: cannot access '${targetPath}': No such file or directory`);
      return;
    }

    if (node.type !== "dir") {
      print(`<span class="shell-file">${escapeHtml(targetPath)}</span>`);
      return;
    }

    const entries = Object.keys(node.children || {}).sort();
    const visibleEntries = entries.filter(name => showAll || !name.startsWith("."));

    if (visibleEntries.length === 0) return;

    if (longFormat) {
      let out = `<div class="shell-ls-long"><p class="shell-muted">total ${visibleEntries.length * 4}</p>`;
      if (showAll) {
        out += `<div class="ls-row"><span class="perm">drwxr-xr-x</span> <span class="owner">semih</span> <span class="size">4096</span> <span class="date">Sep 29 14:00</span> <span class="shell-dir">.</span></div>`;
        out += `<div class="ls-row"><span class="perm">drwxr-xr-x</span> <span class="owner">semih</span> <span class="size">4096</span> <span class="date">Sep 29 14:00</span> <span class="shell-dir">..</span></div>`;
      }
      for (const name of visibleEntries) {
        const item = node.children[name];
        const isDir = item.type === "dir";
        const perm = item.permissions || (isDir ? "drwxr-xr-x" : "-rw-r--r--");
        const owner = item.owner || "semih";
        const size = (item.size || (isDir ? "4096" : "1024")).padStart(6, " ");
        const cls = isDir ? "shell-dir" : (name.endsWith(".txt") ? "shell-txt" : (name.endsWith(".json") ? "shell-json" : "shell-file"));
        const displayName = isDir ? `${name}/` : name;
        out += `<div class="ls-row"><span class="perm">${perm}</span> <span class="owner">${owner}</span> <span class="size">${size}</span> <span class="date">Sep 29 14:20</span> <span class="${cls}">${displayName}</span></div>`;
      }
      out += `</div>`;
      print(out);
    } else {
      let out = `<div class="shell-ls-grid">`;
      for (const name of visibleEntries) {
        const item = node.children[name];
        const isDir = item.type === "dir";
        const cls = isDir ? "shell-dir" : (name.endsWith(".txt") ? "shell-txt" : (name.endsWith(".json") ? "shell-json" : "shell-file"));
        const displayName = isDir ? `${name}/` : name;
        out += `<span class="${cls}">${displayName}</span>`;
      }
      out += `</div>`;
      print(out);
    }
  }

  // Change directory
  function cmdCd(args) {
    const target = args[0];

    // cd with no args or cd ~ goes to home
    if (!target || target === "~") {
      oldPwd = cwd;
      cwd = HOME_PATH;
      updatePrompt();
      return;
    }

    // cd - returns to oldPwd
    if (target === "-") {
      const temp = cwd;
      cwd = oldPwd;
      oldPwd = temp;
      print(`<span class="shell-muted">${cwd}</span>`);
      updatePrompt();
      return;
    }

    const resolved = normalizePath(target);
    const node = getVfsNode(resolved);

    if (!node) {
      printError(`bash: cd: ${target}: No such file or directory`);
      return;
    }

    if (node.type !== "dir") {
      printError(`bash: cd: ${target}: Not a directory`);
      return;
    }

    oldPwd = cwd;
    cwd = resolved;
    updatePrompt();
  }

  // Print working directory
  function cmdPwd() {
    print(`<span>${escapeHtml(cwd)}</span>`);
  }

  // View file contents
  function cmdCat(args) {
    if (args.length === 0) {
      printError("cat: missing file operand");
      return;
    }

    for (const fileArg of args) {
      const resolved = normalizePath(fileArg);
      const node = getVfsNode(resolved);

      if (!node) {
        printError(`cat: ${fileArg}: No such file or directory`);
        continue;
      }

      if (node.type === "dir") {
        printError(`cat: ${fileArg}: Is a directory`);
        continue;
      }

      const content = node.content || "";
      const escaped = escapeHtml(content);
      print(`<pre class="shell-cat-output">${escaped}</pre>`);
    }
  }

  // ASCII Tree
  function cmdTree(args) {
    const target = args[0] || cwd;
    const resolved = normalizePath(target);
    const rootNode = getVfsNode(resolved);

    if (!rootNode || rootNode.type !== "dir") {
      printError(`tree: ${target}: No such directory`);
      return;
    }

    let dirCount = 0;
    let fileCount = 0;
    let lines = [`<span class="shell-dir">${formatDisplayPath(resolved)}</span>`];

    function buildTree(node, prefix = "") {
      const entries = Object.keys(node.children || {}).filter(n => !n.startsWith(".")).sort();
      entries.forEach((name, idx) => {
        const isLast = idx === entries.length - 1;
        const pointer = isLast ? "└── " : "├── ";
        const child = node.children[name];
        const isDir = child.type === "dir";

        if (isDir) {
          dirCount++;
          lines.push(`${prefix}${pointer}<span class="shell-dir">${name}/</span>`);
          buildTree(child, prefix + (isLast ? "    " : "│   "));
        } else {
          fileCount++;
          lines.push(`${prefix}${pointer}<span class="shell-file">${name}</span>`);
        }
      });
    }

    buildTree(rootNode);
    lines.push(`<br><span class="shell-muted">${dirCount} directories, ${fileCount} files</span>`);
    print(lines.join("<br>"));
  }

  // Neofetch command
  function cmdNeofetch() {
    const uptimeStr = "42 days, 13 hours, 37 mins";
    const logo = `
<div class="shell-neofetch">
  <pre class="neofetch-art">
       __   __ ____  _  ___  _   _ 
  ___  \\ \\ / /|  _ \\/ |/ _ \\| \\ | |
 |_  |  \\ V / | |_) | | | | |  \\| |
  / /    | |  |  _ &lt;| | |_| | |\\  |
 /___|   |_|  |_| \\_\\_|\\___/|_| \\_|
  </pre>
  <div class="neofetch-info">
    <p><strong class="shell-accent">semih@zyr1on-station</strong></p>
    <p class="shell-muted">----------------------</p>
    <p><span class="shell-accent2">OS:</span> Zyr1on Linux v2.4 x86_64</p>
    <p><span class="shell-accent2">Host:</span> Semih Özdemir Portfolio Workstation</p>
    <p><span class="shell-accent2">Kernel:</span> 6.8.0-custom-preempt</p>
    <p><span class="shell-accent2">Uptime:</span> ${uptimeStr}</p>
    <p><span class="shell-accent2">Shell:</span> zyr1on-bash 5.2.26</p>
    <p><span class="shell-accent2">Primary Stack:</span> C++20, Rust, Python, HLSL, GLSL</p>
    <p><span class="shell-accent2">Graphics API:</span> OpenGL 4.6, Vulkan, DirectX DXC</p>
    <p><span class="shell-accent2">Editor:</span> Zed & Visual Studio Code</p>
    <p><span class="shell-accent2">Status:</span> Open to Internships & Projects 🚀</p>
    <div class="neofetch-colors">
      <span class="color-block cb-black"></span>
      <span class="color-block cb-red"></span>
      <span class="color-block cb-green"></span>
      <span class="color-block cb-yellow"></span>
      <span class="color-block cb-blue"></span>
      <span class="color-block cb-magenta"></span>
      <span class="color-block cb-cyan"></span>
      <span class="color-block cb-white"></span>
    </div>
  </div>
</div>`;
    print(logo);
  }

  // Matrix digital rain effect
  let isMatrixRunning = false;
  function cmdMatrix() {
    if (isMatrixRunning) return;
    isMatrixRunning = true;
    print(`<span class="shell-accent">Entering the Matrix... (Hold tight)</span>`);

    const matrixChars = "01ZYR1ONABCDEF0123456789$#@%&*";
    const lineCount = 14;
    let currentLine = 0;

    const interval = setInterval(() => {
      let str = "";
      for (let i = 0; i < 48; i++) {
        const ch = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        str += ch;
      }
      print(`<span class="shell-matrix-line">${str}</span>`);
      currentLine++;

      if (currentLine >= lineCount) {
        clearInterval(interval);
        isMatrixRunning = false;
        print(`<span class="shell-accent2">Matrix connection closed. Reality restored.</span>`);
      }
    }, 70);
  }

  // Open external links or scroll to page sections
  function cmdOpen(args) {
    if (args.length === 0) {
      printError("open: specify a target (e.g., github, hlsl, glsl, samengine, projects, skills, contact)");
      return;
    }
    const target = args[0].toLowerCase();
    const links = {
      github: "https://github.com/zyr1on",
      linkedin: "https://linkedin.com/in/semihozdmirr/",
      youtube: "https://youtube.com/@semihozdmirr",
      devto: "https://dev.to/semihozdmirr",
      hlsl: "https://github.com/zyr1on/hlsl-shaderlab-extended",
      glsl: "https://github.com/zyr1on/glsl-extended",
      samengine: "https://github.com/zyr1on/SamEngine",
      analyzer: "https://github.com/zyr1on/Binary-Analyzer",
      cvector: "https://github.com/zyr1on/CVector"
    };

    if (links[target]) {
      print(`Opening <a href="${links[target]}" target="_blank" class="shell-link">${links[target]}</a> in new tab...`);
      if (typeof window !== "undefined" && typeof window.open === "function") {
        window.open(links[target], "_blank");
      }
      return;
    }

    const sections = ["about", "skills", "projects", "shell", "certifications", "articles", "contact"];
    if (sections.includes(target) || sections.includes(target.replace("#", ""))) {
      const id = target.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        print(`Scrolling to section #${id}...`);
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    printError(`open: unknown target '${target}'. Try 'github', 'hlsl', 'glsl', 'samengine', or page sections.`);
  }

  // Sudo
  function cmdSudo(args) {
    const cmd = args.join(" ");
    print(`[sudo] password for guest: `);
    setTimeout(() => {
      printError(`guest is not in the sudoers file. This incident will be reported to Semih.`);
    }, 400);
  }

  // Theme command
  function cmdTheme(args) {
    const choice = args[0];
    if (choice) {
      const found = themes.find(t => t.includes(choice));
      if (found) {
        shellEl.classList.remove(...themes);
        shellEl.classList.add(found);
        print(`Terminal theme switched to <span class="shell-accent">${found.replace("theme-", "")}</span>.`);
        return;
      }
    }
    // Cycle theme
    cycleTheme();
  }

  function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    shellEl.classList.remove(...themes);
    shellEl.classList.add(themes[currentThemeIndex]);
    const themeName = themes[currentThemeIndex].replace("theme-", "");
    print(`Terminal theme set to: <span class="shell-accent">${themeName}</span>`);
  }

  /* ── 6. MAIN COMMAND DISPATCHER ─────────────────────────────── */
  function executeCommand(rawInput) {
    const trimmed = rawInput.trim();
    if (!trimmed) return;

    // Record in history
    history.push(rawInput);
    historyIndex = history.length;

    // Print command prompt echo
    printPromptEcho(rawInput);

    // Parse tokens
    const parts = trimmed.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) || [];
    const command = parts[0].toLowerCase();
    const args = parts.slice(1).map(arg => {
      if ((arg.startsWith('"') && arg.endsWith('"')) || (arg.startsWith("'") && arg.endsWith("'"))) {
        return arg.slice(1, -1);
      }
      return arg;
    });

    switch (command) {
      case "help":
      case "?":
        cmdHelp();
        break;

      case "ls":
      case "dir":
      case "ll":
        cmdLs(command === "ll" ? ["-la", ...args] : args);
        break;

      case "cd":
        cmdCd(args);
        break;

      case "pwd":
        cmdPwd();
        break;

      case "cat":
      case "type":
      case "view":
      case "head":
      case "tail":
        cmdCat(args);
        break;

      case "tree":
        cmdTree(args);
        break;

      case "whoami":
        print(`<span class="shell-accent">semih_ozdemir</span> (zyr1on) — Computer Engineering Student, Graphics & Systems Dev`);
        break;

      case "id":
        print(`uid=1000(semih) gid=1000(semih) groups=1000(semih),4(adm),24(cdrom),27(sudo),100(users)`);
        break;

      case "uname":
        if (args.includes("-a")) {
          print(`Linux zyr1on-station 6.8.0-45-generic #45-Ubuntu SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`);
        } else {
          print(`Linux`);
        }
        break;

      case "neofetch":
      case "fetch":
        cmdNeofetch();
        break;

      case "clear":
      case "cls":
        outputEl.innerHTML = "";
        break;

      case "echo":
        print(`<span>${escapeHtml(args.join(" "))}</span>`);
        break;

      case "date":
        print(`<span>${new Date().toString()}</span>`);
        break;

      case "uptime":
        print(`<span> 14:42:00 up 42 days, 13:37,  1 user,  load average: 0.12, 0.08, 0.05</span>`);
        break;

      case "history":
        if (history.length === 0) {
          print(`<span class="shell-muted">No commands in history.</span>`);
        } else {
          let out = `<div class="shell-history-list">`;
          history.forEach((h, i) => {
            out += `<div><span class="shell-muted">${(i + 1).toString().padStart(3, " ")}</span>  ${escapeHtml(h)}</div>`;
          });
          out += `</div>`;
          print(out);
        }
        break;

      case "matrix":
        cmdMatrix();
        break;

      case "theme":
        cmdTheme(args);
        break;

      case "open":
      case "goto":
        cmdOpen(args);
        break;

      case "sudo":
        cmdSudo(args);
        break;

      case "exit":
        print(`<span class="shell-muted">There is no exit from the matrix. (Type 'help' for commands)</span>`);
        break;

      default:
        printError(`bash: ${command}: command not found. Type 'help' for a list of commands.`);
        break;
    }
  }

  /* ── 7. AUTOCOMPLETION (TAB KEY) ────────────────────────────── */
  const COMMAND_LIST = [
    "help", "ls", "dir", "ll", "cd", "pwd", "cat", "tree", "whoami",
    "id", "uname", "neofetch", "clear", "echo", "date", "uptime",
    "history", "matrix", "theme", "open", "sudo", "exit"
  ];

  function handleTabCompletion() {
    const raw = cmdInputEl.value;
    const parts = raw.split(" ");

    // If typing first token -> autocomplete command
    if (parts.length === 1) {
      const prefix = parts[0].toLowerCase();
      if (!prefix) return;

      const matches = COMMAND_LIST.filter(c => c.startsWith(prefix));
      if (matches.length === 1) {
        cmdInputEl.value = matches[0] + " ";
      } else if (matches.length > 1) {
        printPromptEcho(raw);
        print(`<div class="shell-ls-grid">${matches.map(m => `<span>${m}</span>`).join("")}</div>`);
      }
      return;
    }

    // If typing argument to cd, cat, ls, etc. -> autocomplete file/directory name
    const cmd = parts[0].toLowerCase();
    const arg = parts[parts.length - 1];
    let searchDir = cwd;
    let filePrefix = arg;

    if (arg.includes("/")) {
      const lastSlash = arg.lastIndexOf("/");
      const dirPart = arg.slice(0, lastSlash);
      filePrefix = arg.slice(lastSlash + 1);
      searchDir = normalizePath(dirPart || "/");
    }

    const node = getVfsNode(searchDir);
    if (!node || node.type !== "dir") return;

    const entries = Object.keys(node.children || {});
    const matches = entries.filter(name => name.startsWith(filePrefix));

    if (matches.length === 1) {
      const match = matches[0];
      const isDir = node.children[match].type === "dir";
      const completed = isDir ? `${match}/` : `${match} `;

      if (arg.includes("/")) {
        const lastSlash = arg.lastIndexOf("/");
        parts[parts.length - 1] = arg.slice(0, lastSlash + 1) + completed;
      } else {
        parts[parts.length - 1] = completed;
      }
      cmdInputEl.value = parts.join(" ");
    } else if (matches.length > 1) {
      printPromptEcho(raw);
      print(`<div class="shell-ls-grid">${matches.map(m => {
        const isDir = node.children[m].type === "dir";
        return `<span class="${isDir ? "shell-dir" : "shell-file"}">${isDir ? m + "/" : m}</span>`;
      }).join("")}</div>`);
    }
  }

  /* ── 8. EVENT LISTENERS ─────────────────────────────────────── */
  cmdInputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = cmdInputEl.value;
      cmdInputEl.value = "";
      executeCommand(val);
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleTabCompletion();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      if (historyIndex === history.length) {
        tempCommand = cmdInputEl.value;
      }
      if (historyIndex > 0) {
        historyIndex--;
        cmdInputEl.value = history[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (history.length === 0) return;
      if (historyIndex < history.length - 1) {
        historyIndex++;
        cmdInputEl.value = history[historyIndex];
      } else if (historyIndex === history.length - 1) {
        historyIndex = history.length;
        cmdInputEl.value = tempCommand;
      }
    }
  });

  // Focus input when clicking anywhere inside shell
  if (screenEl) {
    screenEl.addEventListener("click", () => {
      cmdInputEl.focus();
    });
  }

  // Maximize / Restore
  if (maximizeBtn) {
    maximizeBtn.addEventListener("click", () => {
      shellEl.classList.toggle("shell-maximized");
      const isMax = shellEl.classList.contains("shell-maximized");
      maximizeBtn.textContent = isMax ? "🗗" : "⛶";
      scrollToBottom();
      cmdInputEl.focus();
    });
  }

  // Theme toggle button
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      cycleTheme();
      cmdInputEl.focus();
    });
  }

  // Quick Action Pill Buttons
  document.querySelectorAll(".shell-pill-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const cmd = btn.getAttribute("data-cmd");
      if (cmd) {
        executeCommand(cmd);
        cmdInputEl.focus();
      }
    });
  });

  /* ── 9. INITIAL GREETING BANNER ─────────────────────────────── */
  function printInitialBanner() {
    outputEl.innerHTML = "";
    const banner = `
<div class="shell-welcome-banner">
  <p><span class="shell-accent">Zyr1on Linux 2.4 (x86_64)</span> — Portfolio Interactive Bash Shell</p>
  <p class="shell-muted">Type <span class="shell-cmd-hint">'help'</span> for available commands, <span class="shell-cmd-hint">'ls -la'</span> to inspect files, or <span class="shell-cmd-hint">'neofetch'</span> for specs.</p>
</div>`;
    print(banner);
  }

  // Bootstrap initial state
  updatePrompt();
  printInitialBanner();
})();

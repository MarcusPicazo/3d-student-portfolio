// ==========================================
// PORTAFOLIO 3D - MOTOR PRINCIPAL UNIFICADO
// ==========================================

// 1. Base de datos de proyectos (RUTAS EXACTAS Y PANTALLAS UX)
const studentGames = [
    // --- SALA ARCADE (Edades 8 a 12) ---
    { id: 'game1', title: 'Turbo Race 3D', color: 0xff0000, creator: 'Alumno 1', matricula: 'A01726354', edad: 10, path: './ARCADE/Turbo Race 3D/index.html' },
    { id: 'game2', title: 'Speed rush', color: 0xff6600, creator: 'Alumno 2', matricula: 'A01837465', edad: 12, path: './ARCADE/Speed rush/index.html' },
    { id: 'game3', title: 'Neon Racer', color: 0xffcc00, creator: 'Alumno 3', matricula: 'A01948576', edad: 9, path: './ARCADE/Neon Racer/index.html' },
    { id: 'game4', title: 'Kawai Cat', color: 0xccff00, creator: 'Alumno 4', matricula: 'A01059687', edad: 8, path: './ARCADE/Kawai Cat/index.html' },
    { id: 'game5', title: 'Halo Bross', color: 0x66ff00, creator: 'Alumno 5', matricula: 'A01160798', edad: 11, path: './ARCADE/Halo Bross/index.html' },
    { id: 'game6', title: 'FLAPPY HELICOPTER', color: 0x00ff00, creator: 'Alumno 6', matricula: 'A01271809', edad: 9, path: './ARCADE/FLAPPY HELICOPTER/index.html' },
    { id: 'game7', title: 'Cat and Ghost', color: 0x00ff66, creator: 'Alumno 7', matricula: 'A01382910', edad: 10, path: './ARCADE/Cat and Ghost/index.html' },
    { id: 'game8', title: 'Axolote', color: 0x00ffcc, creator: 'Alumno 8', matricula: 'A01493021', edad: 12, path: './ARCADE/Axolote/index.html' },

    // --- DESARROLLO WEB (Edades 12 a 18) ---
    { id: 'game9', title: 'Synapsis', color: 0x00ccff, creator: 'Alumno 9', matricula: 'A01504132', edad: 16, path: './WEBSITES/Synapsis/index.html' },
    { id: 'game10', title: 'Secret Circle', color: 0x0066ff, creator: 'Alumno 10', matricula: 'A01615243', edad: 14, path: './WEBSITES/Secret Circle/index.html' },
    { id: 'game11', title: 'Second Life Archive', color: 0x0000ff, creator: 'Alumno 11', matricula: 'A01726355', edad: 17, path: './WEBSITES/Second Life Archive/index.html' },
    { id: 'game12', title: 'Midnight Stories', color: 0x6600ff, creator: 'Alumno 12', matricula: 'A01837466', edad: 15, path: './WEBSITES/Midnight Stories/index.html' },
    { id: 'game13', title: 'EBVG PRUEBA', color: 0xcc00ff, creator: 'Alumno 13', matricula: 'A01948577', edad: 12, path: './WEBSITES/EBVG PRUEBA/index.html' },
    { id: 'game14', title: 'Aura Studio', color: 0xff00cc, creator: 'Alumno 14', matricula: 'A01059688', edad: 18, path: './WEBSITES/Aura Studio/index.html' },

    // --- DESARROLLO UX (Edades 14 a 16) ---
    { id: 'game15', title: 'Math App', color: 0xff0066, creator: 'Alumno 15', matricula: 'A01160799', edad: 15,
        screens: ['./UX/Math App/onboarding_mathflux/code.html', './UX/Math App/pantalla_principal_calculadora/code.html', './UX/Math App/resultado_y_explicaci_n_paso_a_paso/code.html'] },
    { id: 'game16', title: 'Chef IA', color: 0xff3333, creator: 'Alumno 16', matricula: 'A01271810', edad: 16, 
        screens: ['./UX/Chef IA/home_onboarding_1/code.html', './UX/Chef IA/ai_scanning_view_1/code.html', './UX/Chef IA/cooking_mode_detail_1/code.html'] },
    { id: 'game17', title: 'Navegador Aether', color: 0xff9933, creator: 'Alumno 17', matricula: 'A01382911', edad: 14, 
        screens: ['./UX/Navegador Aether/aether_home_new_tab/code.html', './UX/Navegador Aether/aether_ai_smart_search/code.html', './UX/Navegador Aether/aether_workspace_tab_management/code.html'] },
    { id: 'game18', title: 'NEXUS NOTION', color: 0xffff33, creator: 'Alumno 18', matricula: 'A01493022', edad: 15, 
        screens: ['./UX/NEXUS NOTION/dashboard_nexus_home/code.html', './UX/NEXUS NOTION/page_explorer_hierarchy/code.html', './UX/NEXUS NOTION/tasks_workflow_high_priority_view/code.html'] },
    { id: 'game19', title: 'SOCIAL MEDIA', color: 0x99ff33, creator: 'Alumno 19', matricula: 'A01504133', edad: 16, 
        screens: ['./UX/SOCIAL MEDIA/home_feed/code.html', './UX/SOCIAL MEDIA/discovery_explore/code.html', './UX/SOCIAL MEDIA/user_profile/code.html'] },
    { id: 'game20', title: 'Task Master', color: 0x33ff33, creator: 'Alumno 20', matricula: 'A01615244', edad: 14, 
        screens: ['./UX/Task Master/dashboard_inicio/code.html', './UX/Task Master/calendario_acad_mico/code.html', './UX/Task Master/tablero_acad_mico_monday_style/code.html'] },
    { id: 'game21', title: 'Arcade Educativo', color: 0x33ff99, creator: 'Alumno 21', matricula: 'A01726356', edad: 15, 
        screens: ['./UX/ARCADE EDUCATIVO/landing_inmersiva_splash/code.html', './UX/ARCADE EDUCATIVO/detalle_de_m_quina_arcade/code.html', './UX/ARCADE EDUCATIVO/perfil_del_alumno/code.html'] }
];

// 2. Traducciones
const translations = {
    es: { 
        title: "PORTAFOLIO ESTUDIANTIL", subtitle: "Una selección de los mejores proyectos interactivos", controlsTitle: "Controles de Movimiento", ctrlWalk: "Caminar", ctrlLook: "Mirar", ctrlPlay: "Interactuar", ctrlExit: "Salir / Pausar", ctrl2D: "Vista 2D Rápida", selectRoom: "Selecciona una sala para ingresar:", btnArcade: "SALA ARCADE", btnWeb: "DESARROLLO WEB", btnUX: "DESARROLLO UX", loading: "Cargando Proyecto...", exitBtn: "SALIR DEL PROYECTO (ESC)", createdBy: "Creado por", matPrefix: "Matrícula:", agePrefix: "Edad:", escReminder: "[ESC] PARA MENÚ", qReminder: "[Q] VISTA 2D", interactPrompt: "[CLICK] PARA VER PROYECTO", roomArcadeTitle: "SALA ARCADE", roomWebTitle: "DESARROLLO WEB", roomUXTitle: "DESARROLLO UX", view2DTitle: "VISTA 2D RÁPIDA", view2DReturn: "VOLVER A 3D (Q)", signTitle: "SOBRE ESTA PLATAFORMA", 
        signP1: "¡Hola! Soy Marcus Escalona. He desarrollado esta plataforma web junto con mis alumnos.", 
        signP2: "Impartiendo clases, muchos alumnos y yo hemos hecho esta plataforma en el aula para seleccionar nuestros proyectos favoritos de entre cientos de los que hay.", 
        signP3: "Por motivos de seguridad, cada proyecto muestra únicamente un número de matrícula y edad de referencia. ¡Esperamos que disfrutes la experiencia!" 
    },
    en: { 
        title: "STUDENT PORTFOLIO", subtitle: "A selection of the best interactive projects", controlsTitle: "Movement Controls", ctrlWalk: "Walk", ctrlLook: "Look", ctrlPlay: "Interact", ctrlExit: "Exit / Pause", ctrl2D: "Quick 2D View", selectRoom: "Select a room to enter:", btnArcade: "ARCADE ROOM", btnWeb: "WEB DEVELOPMENT", btnUX: "UX DEVELOPMENT", loading: "Loading Project...", exitBtn: "EXIT PROJECT (ESC)", createdBy: "Created by", matPrefix: "Student ID:", agePrefix: "Age:", escReminder: "[ESC] FOR MENU", qReminder: "[Q] QUICK 2D", interactPrompt: "[CLICK] TO VIEW PROJECT", roomArcadeTitle: "ARCADE ROOM", roomWebTitle: "WEB DEVELOPMENT", roomUXTitle: "UX DEVELOPMENT", view2DTitle: "QUICK 2D VIEW", view2DReturn: "RETURN TO 3D (Q)", signTitle: "ABOUT THIS PLATFORM", 
        signP1: "Hello! I am Marcus Escalona. I have developed this web platform together with my students.", 
        signP2: "While teaching classes, many students and I built this platform in the classroom to select our favorite projects out of hundreds available.", 
        signP3: "For security reasons, each project only displays a reference student ID and age. We hope you enjoy the experience!" 
    }
};

// 3. Variables Globales y Estado
let currentLang = 'es';
let is2DMode = false;
let wasLockedBefore2D = false; 
let currentRoom = null; 
let camera, scene, renderer, controls;
let objects = [];
let moveForward = false, moveBackward = false, moveLeft = false, moveRight = false;
let prevTime = performance.now();
const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const raycaster = new THREE.Raycaster();
let isPlayingMinigame = false;
let exitingMinigame = false; // ✅ Escudo contra el bug de ESC
let signMesh = null;
let roomGroup;

// Parche de Seguridad PointerLock
const originalRequestPointerLock = Element.prototype.requestPointerLock;
Element.prototype.requestPointerLock = function(options) {
    const promise = originalRequestPointerLock.call(this, options);
    if (promise !== undefined) promise.catch(() => {});
    return promise;
};
document.addEventListener('pointerlockerror', (e) => e.stopImmediatePropagation(), true);

// 4. Lógica de UI (Idiomas y 2D)
function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    document.getElementById('ui-title').innerText = t.title;
    document.getElementById('ui-subtitle').innerText = t.subtitle;
    document.getElementById('ui-controls').innerText = t.controlsTitle;
    document.getElementById('ui-walk').innerText = t.ctrlWalk;
    document.getElementById('ui-look').innerText = t.ctrlLook;
    document.getElementById('ui-play').innerText = t.ctrlPlay;
    document.getElementById('ui-exit').innerText = t.ctrlExit;
    document.getElementById('ui-2d-hint').innerText = t.ctrl2D;
    document.getElementById('ui-select-room').innerText = t.selectRoom;
    document.getElementById('btn-room-arcade').innerText = t.btnArcade;
    document.getElementById('btn-room-web').innerText = t.btnWeb;
    document.getElementById('btn-room-ux').innerText = t.btnUX;
    document.getElementById('close-minigame-btn').innerText = t.exitBtn;
    document.getElementById('esc-reminder-text').innerText = t.escReminder;
    document.getElementById('q-reminder-text').innerText = t.qReminder;
    document.getElementById('interact-prompt').innerText = t.interactPrompt;
    document.getElementById('view-2d-title').innerText = t.view2DTitle;
    document.getElementById('view-2d-return').innerText = t.view2DReturn;
    if (document.getElementById('loading-text')) document.getElementById('loading-text').innerText = t.loading;

    const btnEs = document.getElementById('btn-es'), btnEn = document.getElementById('btn-en');
    if (btnEs && btnEn) {
        if (lang === 'es') {
            btnEs.className = "flex flex-col items-center gap-2 p-2 w-28 bg-black border-2 neon-border-cyan text-white font-bold rounded-lg transition-all hover:scale-105";
            btnEn.className = "flex flex-col items-center gap-2 p-2 w-28 bg-black border-2 border-zinc-700 text-zinc-500 font-bold rounded-lg hover:border-zinc-500 transition-all hover:scale-105";
            btnEs.querySelector('img').classList.remove('opacity-50'); btnEn.querySelector('img').classList.add('opacity-50');
        } else {
            btnEn.className = "flex flex-col items-center gap-2 p-2 w-28 bg-black border-2 neon-border-cyan text-white font-bold rounded-lg transition-all hover:scale-105";
            btnEs.className = "flex flex-col items-center gap-2 p-2 w-28 bg-black border-2 border-zinc-700 text-zinc-500 font-bold rounded-lg hover:border-zinc-500 transition-all hover:scale-105";
            btnEn.querySelector('img').classList.remove('opacity-50'); btnEs.querySelector('img').classList.add('opacity-50');
        }
    }
    updateSignTexture();
    if (is2DMode) render2DGrid();
}

function toggle2DMode() {
    if (isPlayingMinigame) return; 
    const view2D = document.getElementById('view-2d-overlay');
    const menuScreen = document.getElementById('menu-screen');
    
    if (!is2DMode) {
        wasLockedBefore2D = controls.isLocked; 
        is2DMode = true; 
        if (controls.isLocked) controls.unlock(); 
        menuScreen.style.display = 'none'; view2D.style.display = 'flex'; render2DGrid();
    } else {
        view2D.style.display = 'none'; is2DMode = false;
        if (wasLockedBefore2D) controls.lock(); else menuScreen.style.display = 'flex'; 
    }
}

function render2DGrid() {
    const grid = document.getElementById('grid-2d'); grid.innerHTML = '';
    let gamesToShow = studentGames;
    if (currentRoom === 'arcade') gamesToShow = studentGames.slice(0, 8);
    else if (currentRoom === 'web') gamesToShow = studentGames.slice(8, 14);
    else if (currentRoom === 'ux') gamesToShow = studentGames.slice(14, 21);
    
    gamesToShow.forEach(game => {
        const card = document.createElement('div'), hexColor = '#' + game.color.toString(16).padStart(6, '0');
        card.className = "relative group rounded-2xl overflow-hidden bg-zinc-900/60 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-2 cursor-pointer shadow-xl";
        card.style.border = `1px solid #3f3f46`;
        card.onmouseenter = () => { card.style.borderColor = hexColor; card.style.boxShadow = `0 10px 40px -10px ${hexColor}`; };
        card.onmouseleave = () => { card.style.borderColor = '#3f3f46'; card.style.boxShadow = 'none'; };
        
        card.innerHTML = `
            <div class="h-44 w-full relative overflow-hidden flex items-center justify-center">
                <div class="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" style="background: radial-gradient(circle at center, ${hexColor}, transparent 75%);"></div>
                <div class="absolute inset-0 opacity-10" style="background-image: repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px);"></div>
                <div class="z-10 w-20 h-20 rounded-full flex items-center justify-center bg-black/60 border border-white/10 backdrop-blur-md transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-12 shadow-lg" style="box-shadow: inset 0 0 20px ${hexColor}40;">
                    <span class="text-3xl ml-1" style="color: ${hexColor}; text-shadow: 0 0 15px ${hexColor}">▶</span>
                </div>
            </div>
            <div class="p-6 relative z-20 bg-gradient-to-t from-black via-zinc-950/90 to-transparent">
                <div class="flex items-center gap-3 mb-2">
                    <div class="w-3 h-3 rounded-full animate-pulse shadow-lg" style="background-color: ${hexColor}; box-shadow: 0 0 10px ${hexColor}"></div>
                    <h3 class="text-xl font-black text-white tracking-wide truncate">${game.title}</h3>
                </div>
                <div class="text-zinc-400 font-mono text-sm mb-6 flex flex-col gap-1">
                    <span class="flex items-center gap-2"><svg class="w-4 h-4 opacity-70" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg> ${translations[currentLang].createdBy} <span class="text-white">${game.creator}</span></span>
                    <span class="text-xs text-zinc-500">${translations[currentLang].matPrefix} ${game.matricula} | ${translations[currentLang].agePrefix} ${game.edad}</span>
                </div>
                <div class="w-full py-3 rounded-lg text-center font-bold text-xs tracking-[0.2em] transition-all duration-300 opacity-80 group-hover:opacity-100 text-black uppercase" style="background-color: ${hexColor}; box-shadow: 0 0 20px ${hexColor}60;">${translations[currentLang].ctrlPlay}</div>
            </div>`;
        card.onclick = () => { toggle2DMode(); openMinigame(game); };
        grid.appendChild(card);
    });
}

// ==========================================
// 5. VISUALIZADOR DE PROYECTOS (ESTRUCTURA INTACTA)
// ==========================================
function openMinigame(data) {
    isPlayingMinigame = true;
    controls.unlock(); 
    let t = translations[currentLang];
    
    const game = studentGames.find(g => g.id === (data.gameId || data.id));
    const hexColor = game ? '#' + game.color.toString(16).padStart(6, '0') : '#00ffff';

    const titleEl = document.getElementById('minigame-title');
    titleEl.innerText = `${data.gameTitle || game.title} | ${t.matPrefix} ${data.matricula || game.matricula} | ${t.agePrefix} ${data.edad || game.edad}`;
    titleEl.style.textShadow = `0 0 15px ${hexColor}`;
    
    const indicator = document.getElementById('minigame-indicator');
    if(indicator) indicator.style.backgroundColor = hexColor;

    const frameVisualizer = document.getElementById('minigame-frame');
    const target = document.getElementById('panzoom-target') || frameVisualizer;

    frameVisualizer.style.borderColor = hexColor;
    frameVisualizer.style.boxShadow = `0 0 40px -10px ${hexColor}`;
    
    target.innerHTML = ''; 
    document.getElementById('minigame-overlay').style.display = 'flex';

    if (game && game.screens && game.screens.length > 0) {
        // ✅ MODO UX (Con Zoom In/Out, Scroll Nativo, Manita y Tamaño Web)
        initUXMode(target, game.screens, hexColor, game.title);
    } else {
        // 🎮 MODO ARCADE / WEB (Pantalla Completa Mono-iframe)
        target.className = "w-full h-full relative";
        target.style.overflow = "hidden"; 
        
        const iframe = document.createElement('iframe');
        iframe.style.width = '100%'; iframe.style.height = '100%'; iframe.style.border = 'none'; iframe.style.backgroundColor = '#000';
        
        const path = data.path || (game && game.path);
        if (path) iframe.src = path; 
        else iframe.srcdoc = '<html><body style="color:white;text-align:center;margin-top:20%;font-family:sans-serif;"><h2>Proyecto no encontrado</h2></body></html>';
        
        // Escucha ESC desde dentro del iframe para salir
        iframe.onload = () => { 
            try { 
                iframe.contentWindow.document.addEventListener('keydown', (e) => { 
                    if (e.key === 'Escape') closeMinigame(); 
                }); 
            } catch (err) {} 
        };

        target.appendChild(iframe);
    }
}

// ✅ Función Nativa para Modo UX (Todo en uno)
function initUXMode(targetContainer, screensArray, projectColor, projectTitle) {
    // 1. Contenedor base con scrollbars y cursor de manita
    targetContainer.className = "w-full h-full relative cursor-grab bg-zinc-900/50";
    targetContainer.style.overflow = "auto"; 
    targetContainer.style.display = "block"; 
    
    // 2. Capa intermedia para aplicar el ZOOM
    const canvasWrapper = document.createElement('div');
    canvasWrapper.className = "min-w-max min-h-max p-20 transition-transform duration-200 ease-out";
    canvasWrapper.style.transformOrigin = "0 0";
    let currentScale = 0.5; // Vista alejada inicial
    canvasWrapper.style.transform = `scale(${currentScale})`;

    const canvas = document.createElement('div');
    canvas.style.display = "flex";
    canvas.style.flexDirection = "row";
    canvas.style.gap = "80px";         
    canvas.style.width = "max-content"; 
    
    canvasWrapper.appendChild(canvas);
    targetContainer.appendChild(canvasWrapper);

    // 3. Crear controles de ZOOM y Descarga Flotantes
    const zoomUI = document.createElement('div');
    zoomUI.id = "ux-zoom-ui";
    zoomUI.className = "absolute bottom-6 right-6 flex gap-3 z-[60] bg-black/80 p-3 rounded-2xl border-2 border-zinc-700 shadow-2xl backdrop-blur-md";
    
    const downloadLink = `./UX/${projectTitle}.zip`; 
    zoomUI.innerHTML = `
        <a href="${downloadLink}" download class="px-5 py-2 flex items-center justify-center bg-cyan-700 hover:bg-cyan-500 text-white rounded-xl text-sm font-black transition-all mr-2 border border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.4)]">
            📥 DESCARGAR
        </a>
        <button id="ux-zoom-out" class="w-12 h-12 flex items-center justify-center bg-zinc-800 hover:bg-zinc-600 hover:text-cyan-400 text-white rounded-xl text-2xl font-black transition-all">-</button>
        <div id="ux-zoom-level" class="flex items-center justify-center w-20 text-cyan-400 font-mono text-lg font-bold tracking-widest">${Math.round(currentScale * 100)}%</div>
        <button id="ux-zoom-in" class="w-12 h-12 flex items-center justify-center bg-zinc-800 hover:bg-zinc-600 hover:text-cyan-400 text-white rounded-xl text-2xl font-black transition-all">+</button>
    `;
    document.getElementById('minigame-frame').appendChild(zoomUI);

    // Funciones de los botones de Zoom
    document.getElementById('ux-zoom-in').onclick = () => {
        currentScale = Math.min(currentScale + 0.15, 2.0); // Máximo 200%
        canvasWrapper.style.transform = `scale(${currentScale})`;
        document.getElementById('ux-zoom-level').innerText = `${Math.round(currentScale * 100)}%`;
    };
    document.getElementById('ux-zoom-out').onclick = () => {
        currentScale = Math.max(currentScale - 0.15, 0.3); // Mínimo 30%
        canvasWrapper.style.transform = `scale(${currentScale})`;
        document.getElementById('ux-zoom-level').innerText = `${Math.round(currentScale * 100)}%`;
    };

    // 4. Lógica para la manita (Drag to Scroll Nativo)
    let isDown = false;
    let startX, startY, scrollLeft, scrollTop;

    targetContainer.addEventListener('mousedown', (e) => {
        if (e.target.closest('#ux-zoom-ui')) return; // No arrastrar si clicaste el zoom
        isDown = true;
        targetContainer.style.cursor = 'grabbing';
        targetContainer.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = 'none');
        startX = e.pageX - targetContainer.offsetLeft;
        startY = e.pageY - targetContainer.offsetTop;
        scrollLeft = targetContainer.scrollLeft;
        scrollTop = targetContainer.scrollTop;
    });

    const stopDragging = () => {
        isDown = false;
        targetContainer.style.cursor = 'grab';
        targetContainer.querySelectorAll('iframe').forEach(ifr => ifr.style.pointerEvents = 'auto');
    };

    targetContainer.addEventListener('mouseleave', stopDragging);
    targetContainer.addEventListener('mouseup', stopDragging);
    targetContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - targetContainer.offsetLeft;
        const y = e.pageY - targetContainer.offsetTop;
        targetContainer.scrollLeft = scrollLeft - ((x - startX) * 1.5);
        targetContainer.scrollTop = scrollTop - ((y - startY) * 1.5);
    });

    // 5. Crear pantallas a tamaño de PC (1024x800) para ver páginas web completas
    screensArray.forEach((screenPath) => {
        const artboard = document.createElement('div');
        artboard.className = "bg-black rounded-xl overflow-hidden shadow-2xl border-4";
        artboard.style.position = "relative";
        artboard.style.width = "1024px"; 
        artboard.style.height = "800px"; 
        artboard.style.flexShrink = "0"; 
        artboard.style.borderColor = `${projectColor}aa`;

        const iframe = document.createElement('iframe');
        iframe.src = screenPath; 
        iframe.style.width = "100%"; 
        iframe.style.height = "100%"; 
        iframe.style.border = "none"; 
        iframe.style.backgroundColor = "#000";
        iframe.setAttribute('scrolling', 'yes'); // Permite scroll interno de la app/web
        
        iframe.onload = () => { 
            try { 
                iframe.contentWindow.document.addEventListener('keydown', (e) => { 
                    if (e.key === 'Escape') closeMinigame(); 
                }); 
            } catch (err) {} 
        };

        artboard.appendChild(iframe); 
        canvas.appendChild(artboard);
    });
}

function closeMinigame() {
    if (!isPlayingMinigame) return;
    isPlayingMinigame = false;
    
    // ✅ ACTIVAMOS EL ESCUDO para que no se abra la pantalla de inicio
    exitingMinigame = true; 

    // Quitar UI de zoom y descarga
    const zoomUI = document.getElementById('ux-zoom-ui');
    if (zoomUI) zoomUI.remove();

    // Ocultar overlays
    document.getElementById('minigame-overlay').style.display = 'none';
    document.getElementById('menu-screen').style.display = 'none';
    
    // Restaurar texto de carga
    const target = document.getElementById('panzoom-target') || document.getElementById('minigame-frame');
    if (target) {
        target.className = "w-full h-full relative overflow-hidden flex justify-center items-center";
        target.innerHTML = `<div id="placeholder-text" class="absolute inset-0 flex flex-col justify-center items-center animate-pulse z-0"><h3 id="loading-text" class="text-3xl font-bold mb-2 text-zinc-500 tracking-widest uppercase">${translations[currentLang].loading}</h3></div>`;
    }
        
    // Regresamos a la sala
    try { controls.lock(); } catch (e) {} 

    // Apagamos el escudo
    setTimeout(() => { exitingMinigame = false; }, 500);
}

// 6. Motor Three.js
function init() {
    const container = document.getElementById('game-container');
    renderer = new THREE.WebGLRenderer({ antialias: true }); renderer.setPixelRatio(window.devicePixelRatio); renderer.setSize(window.innerWidth, window.innerHeight); container.appendChild(renderer.domElement);
    scene = new THREE.Scene(); scene.background = new THREE.Color(0x050510); scene.fog = new THREE.FogExp2(0x050510, 0.015);
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); camera.position.y = 4;
    roomGroup = new THREE.Group(); scene.add(roomGroup); scene.add(new THREE.AmbientLight(0x222233));
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.8, metalness: 0.2 })); floor.rotation.x = -Math.PI / 2; scene.add(floor);
    const gridHelper = new THREE.GridHelper(200, 100, 0xaa00ff, 0x220055); gridHelper.position.y = 0.01; scene.add(gridHelper);

    createFloatingSign();
    controls = new THREE.PointerLockControls(camera, document.body);
    
    // Listeners de los botones Originales
    const btnArcade = document.getElementById('btn-room-arcade');
    if (btnArcade) btnArcade.addEventListener('click', () => { loadRoom('arcade'); controls.lock(); });
    
    const btnWeb = document.getElementById('btn-room-web');
    if (btnWeb) btnWeb.addEventListener('click', () => { loadRoom('web'); controls.lock(); });
    
    const btnUx = document.getElementById('btn-room-ux');
    if (btnUx) btnUx.addEventListener('click', () => { loadRoom('ux'); controls.lock(); });
    
    const btnClose = document.getElementById('close-minigame-btn');
    if (btnClose) btnClose.addEventListener('click', closeMinigame);

    controls.addEventListener('lock', () => { 
        document.getElementById('menu-screen').style.display = 'none'; 
        const reminder = document.getElementById('controls-reminder');
        if(reminder) reminder.classList.remove('hidden'); 
    });
    
    controls.addEventListener('unlock', () => {
        const reminder = document.getElementById('controls-reminder');
        if(reminder) reminder.classList.add('hidden'); 
        
        // ✅ RESPETA EL ESCUDO: Si no estás jugando y NO acabas de salir con ESC...
        if (!isPlayingMinigame && !is2DMode && !exitingMinigame) { 
            document.getElementById('menu-screen').style.display = 'flex'; 
            currentRoom = null; 
            document.getElementById('interact-prompt').style.opacity = '0';
        } else if (currentRoom && !isPlayingMinigame) {
            // El usuario usó ESC. Pide 1 click extra para respetar la seguridad del navegador
            const prompt = document.getElementById('interact-prompt');
            prompt.innerText = currentLang === 'en' ? "[CLICK TO RESUME CAMERA]" : "[CLICK PARA REANUDAR CÁMARA]";
            prompt.style.opacity = '1';
            prompt.style.transform = 'translate(-50%, 0)';
        }
        
        document.getElementById('crosshair').classList.remove('active-crosshair'); 
        document.getElementById('crosshair').style.transform = 'translate(-50%, -50%) scale(1)';
    });

    scene.add(controls.getObject());
    document.addEventListener('keydown', (e) => { if (e.code === 'Escape' && isPlayingMinigame) closeMinigame(); handleKey(e.code, true); });
    document.addEventListener('keyup', (e) => handleKey(e.code, false));
    document.addEventListener('mousedown', onMouseClick);
    window.addEventListener('resize', () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); });
}

function loadRoom(roomType) {
    currentRoom = roomType; while(roomGroup.children.length > 0) roomGroup.remove(roomGroup.children[0]); 
    objects = []; controls.getObject().position.set(0, 4, 0);
    if(roomType === 'arcade') createArcades(); if(roomType === 'web') createDesktops(); if(roomType === 'ux') createGallery();
    createRoomTitleSigns(roomType);
}

function createRoomTitleSigns(roomType) {
    let titleText = "", colorHex = "";
    if(roomType === 'arcade') { titleText = translations[currentLang].roomArcadeTitle; colorHex = '#ff00ff'; }
    if(roomType === 'web') { titleText = translations[currentLang].roomWebTitle; colorHex = '#00ffff'; }
    if(roomType === 'ux') { titleText = translations[currentLang].roomUXTitle; colorHex = '#a855f7'; }

    const canvas = document.createElement('canvas'); canvas.width = 2048; canvas.height = 512; const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgba(0, 0, 0, 0)'; ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(10, 0, 20, 0.7)'; ctx.fillRect(50, 50, canvas.width - 100, canvas.height - 100);
    ctx.strokeStyle = colorHex; ctx.lineWidth = 15; ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 130px "Arial Black", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.shadowColor = colorHex; ctx.shadowBlur = 30; ctx.fillText(titleText, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const sign = new THREE.Mesh(new THREE.PlaneGeometry(40, 10), new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide }));
    sign.position.set(0, 22, -35); roomGroup.add(sign);
}

function createMarqueeTexture(title) {
    const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = 256; const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.strokeStyle = '#222'; ctx.lineWidth = 15; ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx.fillStyle = '#000000'; ctx.font = 'bold 90px "Arial Black", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.shadowColor = 'rgba(0,0,0,0.4)'; ctx.shadowOffsetX = 5; ctx.shadowOffsetY = 5; ctx.shadowBlur = 5; ctx.fillText(title.toUpperCase(), canvas.width / 2, canvas.height / 2);
    const texture = new THREE.CanvasTexture(canvas); texture.anisotropy = renderer.capabilities.getMaxAnisotropy(); return texture;
}

function createFloatingSign() {
    signMesh = new THREE.Mesh(new THREE.BoxGeometry(50, 25, 1), new THREE.MeshBasicMaterial({ color: 0xffffff })); signMesh.position.set(0, 14, 40); signMesh.lookAt(0, 14, 0); scene.add(signMesh);
    const glowMesh = new THREE.Mesh(new THREE.BoxGeometry(51.5, 26.5, 0.5), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x00ffff, emissiveIntensity: 0.6 })); glowMesh.position.set(0, 14, 40.6); glowMesh.lookAt(0, 14, 0); scene.add(glowMesh);
    updateSignTexture();
}

function updateSignTexture() {
    if (!signMesh) return; const canvas = document.createElement('canvas'); canvas.width = 2048; canvas.height = 1024; const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#0f0f13'; ctx.fillRect(0, 0, canvas.width, canvas.height); ctx.strokeStyle = '#3f3f46'; ctx.lineWidth = 12; ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
    ctx.fillStyle = '#ffffff'; ctx.textAlign = 'center'; ctx.font = 'bold 70px "Segoe UI", Roboto, Helvetica, Arial, sans-serif'; ctx.fillText(translations[currentLang].signTitle, canvas.width / 2, 160);
    ctx.strokeStyle = '#a855f7'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(canvas.width / 2 - 300, 210); ctx.lineTo(canvas.width / 2 + 300, 210); ctx.stroke();
    ctx.font = '45px "Segoe UI", Roboto, Helvetica, Arial, sans-serif'; ctx.fillStyle = '#d4d4d8';
    let y = 320; y = wrapText(ctx, translations[currentLang].signP1, canvas.width / 2, y, 1700, 65) + 50; y = wrapText(ctx, translations[currentLang].signP2, canvas.width / 2, y, 1700, 65) + 50; wrapText(ctx, translations[currentLang].signP3, canvas.width / 2, y, 1700, 65);
    signMesh.material.map = new THREE.CanvasTexture(canvas); signMesh.material.needsUpdate = true;
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' '); let line = '';
    for (let i = 0; i < words.length; i++) { let testLine = line + words[i] + ' ', testWidth = context.measureText(testLine).width; if (testWidth > maxWidth && i > 0) { context.fillText(line, x, y); line = words[i] + ' '; y += lineHeight; } else line = testLine; }
    context.fillText(line, x, y); return y;
}

function createArcades() {
    studentGames.slice(0, 8).forEach((game, index) => {
        const angle = Math.PI + (index * (Math.PI / 7)), arcadeGroup = new THREE.Group(); arcadeGroup.position.set(Math.cos(angle) * 30, 0, Math.sin(angle) * 30); arcadeGroup.lookAt(0, 0, 0);
        const cabinetMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.6 }), base = new THREE.Mesh(new THREE.BoxGeometry(3, 3, 3), cabinetMat); base.position.y = 1.5; arcadeGroup.add(base);
        const controlBoardGroup = new THREE.Group(); controlBoardGroup.position.set(0, 3.2, 1); controlBoardGroup.rotation.x = 0.2; controlBoardGroup.add(new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.5, 1.5), cabinetMat));
        const stickBase = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.25, 0.05, 16), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 })); stickBase.position.set(-0.8, 0.275, 0.2); controlBoardGroup.add(stickBase);
        const stickShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.25, 8), new THREE.MeshStandardMaterial({ color: 0xcccccc, metalness: 0.8, roughness: 0.2 })); stickShaft.position.set(-0.8, 0.4, 0.2); stickShaft.rotation.set(-0.1, 0, -0.1); controlBoardGroup.add(stickShaft);
        const stickBall = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16), new THREE.MeshStandardMaterial({ color: game.color, roughness: 0.2, metalness: 0.1 })); stickBall.position.set(-0.83, 0.52, 0.18); controlBoardGroup.add(stickBall);
        const btnColors = [0xdd0000, 0x0044ff, 0xffcc00, 0x00cc44, 0x00ffff, 0xff00ff]; 
        [{ x: 0.3, z: -0.2 }, { x: 0.65, z: -0.25 }, { x: 1.0, z: -0.2 }, { x: 0.25, z: 0.15 }, { x: 0.6, z: 0.1 }, { x: 0.95, z: 0.15 }].forEach((pos, i) => { const btn = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.1, 16), new THREE.MeshStandardMaterial({ color: btnColors[i], roughness: 0.4 })); btn.position.set(pos.x, 0.26, pos.z); btn.rotation.x = -0.05; controlBoardGroup.add(btn); });
        const startBtnMat = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.8 }), start1 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.08, 16), startBtnMat); start1.position.set(-0.6, 0.26, -0.5); controlBoardGroup.add(start1); const start2 = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.08, 16), startBtnMat); start2.position.set(0.6, 0.26, -0.5); controlBoardGroup.add(start2);
        arcadeGroup.add(controlBoardGroup);
        const topBody = new THREE.Mesh(new THREE.BoxGeometry(3, 4, 2), cabinetMat); topBody.position.set(0, 5, -0.5); arcadeGroup.add(topBody);
        const screen = new THREE.Mesh(new THREE.BoxGeometry(2.6, 2.2, 0.1), new THREE.MeshBasicMaterial({ color: game.color })); screen.position.set(0, 4.5, 0.55); screen.rotation.x = -0.15; screen.userData = { isGameScreen: true, gameId: game.id, gameTitle: game.title, creator: game.creator, matricula: game.matricula, edad: game.edad }; arcadeGroup.add(screen); objects.push(screen);
        const marquee = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.8, 0.2), new THREE.MeshBasicMaterial({ map: createMarqueeTexture(game.title) })); marquee.position.set(0, 6.5, 0.5); marquee.rotation.x = 0.15; arcadeGroup.add(marquee);
        const light = new THREE.PointLight(game.color, 1.5, 15); light.position.set(0, 4.5, 2); arcadeGroup.add(light); roomGroup.add(arcadeGroup);
    });
}

function createDesktops() {
    studentGames.slice(8, 14).forEach((game, index) => {
        const angle = Math.PI + (index * (Math.PI / 5)), deskGroup = new THREE.Group(); deskGroup.position.set(Math.cos(angle) * 30, 0, Math.sin(angle) * 30); deskGroup.lookAt(0, 0, 0);
        const deskMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.8 }), deskTop = new THREE.Mesh(new THREE.BoxGeometry(4, 0.2, 2.5), deskMat); deskTop.position.set(0, 2.9, 0); deskGroup.add(deskTop);
        const legGeo = new THREE.BoxGeometry(0.2, 2.9, 0.2); [[-1.8,-1.0], [1.8,-1.0], [-1.8,1.0], [1.8,1.0]].forEach(pos => { const leg = new THREE.Mesh(legGeo, deskMat); leg.position.set(pos[0], 1.45, pos[1]); deskGroup.add(leg); });
        const pcGroup = new THREE.Group(); pcGroup.position.set(0, 3.0, 0);
        const plasticMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9, metalness: 0.1 }), standMat = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.6, metalness: 0.5 }); 
        const mousepad = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.01, 1.0), new THREE.MeshStandardMaterial({color: 0x0a0a0a})); mousepad.position.set(0, 0.005, 0.4); pcGroup.add(mousepad);
        const keyboard = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.04, 0.5), plasticMat); keyboard.position.set(-0.3, 0.02, 0.4); pcGroup.add(keyboard); const kbRgb = new THREE.Mesh(new THREE.BoxGeometry(1.22, 0.01, 0.52), new THREE.MeshBasicMaterial({ color: game.color })); kbRgb.position.set(-0.3, 0.01, 0.4); pcGroup.add(kbRgb);
        const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.05, 0.25), plasticMat); mouse.position.set(0.6, 0.025, 0.4); pcGroup.add(mouse); const mouseRgb = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.01, 0.26), new THREE.MeshBasicMaterial({ color: game.color })); mouseRgb.position.set(0.6, 0.015, 0.4); pcGroup.add(mouseRgb);
        const monitorBase = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.02, 0.5), standMat); monitorBase.position.set(0, 0.01, -0.6); pcGroup.add(monitorBase); const monitorStand = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.5), standMat); monitorStand.position.set(0, 0.25, -0.65); monitorStand.rotation.x = 0.1; pcGroup.add(monitorStand);
        const monitorHead = new THREE.Group(); monitorHead.position.set(0, 0.5, -0.6); monitorHead.rotation.x = -0.05; monitorHead.add(new THREE.Mesh(new THREE.BoxGeometry(2.6, 1.4, 0.05), new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.9, metalness: 0 })));
        const screen = new THREE.Mesh(new THREE.BoxGeometry(2.55, 1.35, 0.01), new THREE.MeshBasicMaterial({ color: game.color })); screen.position.set(0, 0, 0.03); screen.userData = { isGameScreen: true, gameId: game.id, gameTitle: game.title, creator: game.creator, matricula: game.matricula, edad: game.edad }; monitorHead.add(screen); objects.push(screen);
        const playIcon = new THREE.Mesh(new THREE.ConeGeometry(0.15, 0.3, 3), new THREE.MeshBasicMaterial({ color: 0xffffff })); playIcon.rotation.z = -Math.PI / 2; playIcon.position.set(0, 0, 0.04); monitorHead.add(playIcon); pcGroup.add(monitorHead);
        const towerGroup = new THREE.Group(); towerGroup.position.set(1.5, 1.0, -0.2); const caseMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.7, metalness: 0.3 }), rgbMat = new THREE.MeshBasicMaterial({ color: game.color });
        [[0.8,0.05,1.8, 0,0.975,0], [0.8,0.05,1.8, 0,-0.975,0], [0.8,1.9,0.05, 0,0,0.875], [0.8,1.9,0.05, 0,0,-0.875], [0.05,1.9,1.7, 0.375,0,0]].forEach(d => { const w = new THREE.Mesh(new THREE.BoxGeometry(d[0], d[1], d[2]), caseMat); w.position.set(d[3], d[4], d[5]); towerGroup.add(w); });
        const glassW = new THREE.Mesh(new THREE.BoxGeometry(0.02, 1.9, 1.7), new THREE.MeshPhysicalMaterial({ color: 0x111111, metalness: 0.8, roughness: 0.1, transparent: true, opacity: 0.3 })); glassW.position.set(-0.38, 0, 0); towerGroup.add(glassW);
        const componentMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 }), mobo = new THREE.Mesh(new THREE.BoxGeometry(0.05, 1.2, 1.2), componentMat); mobo.position.set(0.32, 0.1, -0.2); towerGroup.add(mobo); const gpu = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.15, 0.8), componentMat); gpu.position.set(0.05, -0.3, -0.2); towerGroup.add(gpu); const gpuNeon = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.02, 0.82), rgbMat); gpuNeon.position.set(0.05, -0.3, -0.2); towerGroup.add(gpuNeon); const ram1 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.3, 0.05), rgbMat); ram1.position.set(0.2, 0.3, -0.4); towerGroup.add(ram1); const ram2 = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.3, 0.05), rgbMat); ram2.position.set(0.2, 0.3, -0.3); towerGroup.add(ram2);
        [0.4, -0.4].forEach(y => { const fan = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.02, 8, 24), rgbMat); fan.position.set(0, y, 0.82); fan.rotation.y = Math.PI/2; towerGroup.add(fan); });
        const innerLight = new THREE.PointLight(game.color, 1.0, 3); towerGroup.add(innerLight); pcGroup.add(towerGroup); deskGroup.add(pcGroup);
        const marquee = new THREE.Mesh(new THREE.BoxGeometry(3, 0.6, 0.1), new THREE.MeshBasicMaterial({ map: createMarqueeTexture(game.title) })); marquee.position.set(0, 1.5, 1.26); deskGroup.add(marquee);
        const light = new THREE.PointLight(game.color, 1.0, 12); light.position.set(0, 4.5, 0.5); deskGroup.add(light); roomGroup.add(deskGroup);
    });
}

function createGallery() {
    studentGames.slice(14, 21).forEach((game, index) => {
        const angle = Math.PI + (index * (Math.PI / 6)), galleryGroup = new THREE.Group(); galleryGroup.position.set(Math.cos(angle) * 30, 0, Math.sin(angle) * 30); galleryGroup.lookAt(0, 0, 0);
        const wall = new THREE.Mesh(new THREE.BoxGeometry(4.5, 6, 0.5), new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 1.0 })); wall.position.y = 3; galleryGroup.add(wall);
        const poster = new THREE.Mesh(new THREE.BoxGeometry(3.5, 2.5, 0.1), new THREE.MeshBasicMaterial({ color: game.color })); poster.position.set(0, 3.5, 0.26); poster.userData = { isGameScreen: true, gameId: game.id, gameTitle: game.title, creator: game.creator, matricula: game.matricula, edad: game.edad }; galleryGroup.add(poster); objects.push(poster);
        const playIcon = new THREE.Mesh(new THREE.ConeGeometry(0.2, 0.4, 3), new THREE.MeshBasicMaterial({ color: 0xffffff })); playIcon.rotation.z = -Math.PI / 2; playIcon.position.set(0, 3.5, 0.32); galleryGroup.add(playIcon);
        const marquee = new THREE.Mesh(new THREE.BoxGeometry(3, 0.6, 0.1), new THREE.MeshBasicMaterial({ map: createMarqueeTexture(game.title) })); marquee.position.set(0, 1.5, 0.26); galleryGroup.add(marquee);
        const light = new THREE.PointLight(game.color, 1.5, 20); light.position.set(0, 6, 2); galleryGroup.add(light); roomGroup.add(galleryGroup);
    });
}

function handleKey(code, isDown) {
    switch (code) { case 'ArrowUp': case 'KeyW': moveForward = isDown; break; case 'ArrowLeft': case 'KeyA': moveLeft = isDown; break; case 'ArrowDown': case 'KeyS': moveBackward = isDown; break; case 'ArrowRight': case 'KeyD': moveRight = isDown; break; }
}

function onMouseClick(event) {
    if (!controls.isLocked) {
        // Clic de recuperación de cámara tras presionar ESC
        if (currentRoom && !isPlayingMinigame && !is2DMode && event.target.tagName === 'CANVAS') {
            controls.lock(); 
            document.getElementById('menu-screen').style.display = 'none';
            const prompt = document.getElementById('interact-prompt');
            prompt.innerText = translations[currentLang].interactPrompt;
            prompt.style.transform = 'translate(-50%, 30px)';
            prompt.style.opacity = '0';
        }
        return;
    }
    raycaster.setFromCamera(new THREE.Vector2(0, 0), camera); const intersects = raycaster.intersectObjects(objects);
    if (intersects.length > 0 && intersects[0].distance < 15) openMinigame(intersects[0].object.userData);
}

function animate() {
    requestAnimationFrame(animate);
    if (controls.isLocked === true) {
        const time = performance.now(), delta = (time - prevTime) / 1000;
        velocity.x -= velocity.x * 10.0 * delta; velocity.z -= velocity.z * 10.0 * delta;
        direction.z = Number(moveForward) - Number(moveBackward); direction.x = Number(moveRight) - Number(moveLeft); direction.normalize();
        if (moveForward || moveBackward) velocity.z -= direction.z * 400.0 * delta; if (moveLeft || moveRight) velocity.x -= direction.x * 400.0 * delta;
        controls.moveRight(-velocity.x * delta); controls.moveForward(-velocity.z * delta);
        const pos = controls.getObject().position; if (pos.x > 80) pos.x = 80; if (pos.x < -80) pos.x = -80; if (pos.z > 80) pos.z = 80; if (pos.z < -80) pos.z = -80; prevTime = time;
        raycaster.setFromCamera(new THREE.Vector2(0, 0), camera); const intersects = raycaster.intersectObjects(objects); const prompt = document.getElementById('interact-prompt'), crosshair = document.getElementById('crosshair');
        if (intersects.length > 0 && intersects[0].distance < 15) { prompt.style.opacity = '1'; prompt.style.transform = 'translate(-50%, 20px)'; crosshair.style.transform = 'translate(-50%, -50%) scale(1.5)'; crosshair.classList.add('active-crosshair'); } else { prompt.style.opacity = '0'; prompt.style.transform = 'translate(-50%, 30px)'; crosshair.style.transform = 'translate(-50%, -50%) scale(1)'; crosshair.classList.remove('active-crosshair'); }
    } else prevTime = performance.now();
    renderer.render(scene, camera);
}

// 7. Arranque Inicial
window.onload = function () {
    const btnEs = document.getElementById('btn-es'); if (btnEs) btnEs.addEventListener('click', () => setLanguage('es'));
    const btnEn = document.getElementById('btn-en'); if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));
    const btnReturn = document.getElementById('view-2d-return'); if (btnReturn) btnReturn.addEventListener('click', toggle2DMode);
    const btnArcade = document.getElementById('btn-room-arcade'); if (btnArcade) btnArcade.addEventListener('click', () => { loadRoom('arcade'); controls.lock(); });
    const btnWeb = document.getElementById('btn-room-web'); if (btnWeb) btnWeb.addEventListener('click', () => { loadRoom('web'); controls.lock(); });
    const btnUx = document.getElementById('btn-room-ux'); if (btnUx) btnUx.addEventListener('click', () => { loadRoom('ux'); controls.lock(); });
    const btnClose = document.getElementById('close-minigame-btn'); if (btnClose) btnClose.addEventListener('click', closeMinigame);

    init(); animate(); setLanguage(currentLang);
};
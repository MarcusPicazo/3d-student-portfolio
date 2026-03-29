// Base de datos de los proyectos de los alumnos
export const studentGames = [
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

    // --- DESARROLLO UX (MÓDULOS FIGMA) (Edades 14 a 16) ---
    { 
        id: 'game15', title: 'Math App', color: 0xff0066, creator: 'Alumno 15', matricula: 'A01160799', edad: 15,
        screens: [
            './UX/Math App/onboarding_mathflux/code.html',
            './UX/Math App/pantalla_principal_calculadora/code.html',
            './UX/Math App/resultado_y_explicaci_n_paso_a_paso/code.html'
        ]
    },
    { 
        id: 'game16', title: 'Chef IA', color: 0xff3333, creator: 'Alumno 16', matricula: 'A01271810', edad: 16, 
        screens: [
            './UX/Chef IA/home_onboarding_1/code.html',
            './UX/Chef IA/ai_scanning_view_1/code.html',
            './UX/Chef IA/cooking_mode_detail_1/code.html'
        ]
    },
    { 
        id: 'game17', title: 'Navegador Aether', color: 0xff9933, creator: 'Alumno 17', matricula: 'A01382911', edad: 14, 
        screens: [
            './UX/Navegador Aether/aether_home_new_tab/code.html',
            './UX/Navegador Aether/aether_ai_smart_search/code.html',
            './UX/Navegador Aether/aether_workspace_tab_management/code.html'
        ]
    },
    { 
        id: 'game18', title: 'NEXUS NOTION', color: 0xffff33, creator: 'Alumno 18', matricula: 'A01493022', edad: 15, 
        screens: [
            './UX/NEXUS NOTION/dashboard_nexus_home/code.html',
            './UX/NEXUS NOTION/page_explorer_hierarchy/code.html',
            './UX/NEXUS NOTION/tasks_workflow_high_priority_view/code.html'
        ]
    },
    { 
        id: 'game19', title: 'SOCIAL MEDIA', color: 0x99ff33, creator: 'Alumno 19', matricula: 'A01504133', edad: 16, 
        screens: [
            './UX/SOCIAL MEDIA/home_feed/code.html',
            './UX/SOCIAL MEDIA/discovery_explore/code.html',
            './UX/SOCIAL MEDIA/user_profile/code.html'
        ]
    },
    { 
        id: 'game20', title: 'Task Master', color: 0x33ff33, creator: 'Alumno 20', matricula: 'A01615244', edad: 14, 
        screens: [
            './UX/Task Master/dashboard_inicio/code.html',
            './UX/Task Master/calendario_acad_mico/code.html',
            './UX/Task Master/tablero_acad_mico_monday_style/code.html'
        ]
    },
    { 
        id: 'game21', title: 'Arcade Educativo', color: 0x33ff99, creator: 'Alumno 21', matricula: 'A01726356', edad: 15, 
        screens: [
            './UX/ARCADE EDUCATIVO/landing_inmersiva_splash/code.html',
            './UX/ARCADE EDUCATIVO/detalle_de_m_quina_arcade/code.html',
            './UX/ARCADE EDUCATIVO/perfil_del_alumno/code.html'
        ]
    }
];
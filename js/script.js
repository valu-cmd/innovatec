const questions = [
    { question: "1. Crear animaciones, ilustración, dibujos y arte digital.", area: "Área I Arte y creatividad" },
    { question: "2. Realizar excavaciones en busca de rastros que ayuden a descubrir más sobre el pasado.", area: "Área II Ciencias sociales" },
    { question: "3. Hacer un control de la entrada de tu dinero, tus gastos y posibles opciones de inversión.", area: "Área III Económica administrativa" },
    { question: "4. Realizar operaciones de cálculo.", area: "Área IV Ciencia y tecnología" },
    { question: "5. Cuidar, curar y criar animales de granja y domésticos.", area: "Área V Ciencias de la salud, ecológicas y biológicas" },
    { question: "6. Tocar algún instrumento y componer una canción.", area: "Área I Arte y creatividad" },
    { question: "7. Defender a tu familiar o conocido ante un chantaje, leyendo las leyes y asesorándolos en el proceso legal.", area: "Área II Ciencias sociales" },
    { question: "8. Elaborar una campaña publicitaria para tu negocio, mandando encuestas, diseñando panfletos, logotipo y eslogan.", area: "Área III Económica administrativa" },
    { question: "9. Verse inmerso en la producción en masa de bienes materiales como automóviles, muebles, etc.", area: "Área IV Ciencia y tecnología" },
    { question: "10. Realizar investigaciones de medio ambiente, áreas verdes y fauna", area: "Área V Ciencias de la salud, ecológicas y biológicas" },
    { question: "11. Pasar el día haciendo una escultura o pintando un cuadro.", area: "Área I Arte y creatividad" },
    { question: "12. Leer un ensayo sobre la salud mental, las emociones y afecciones al sistema inmunológico.", area: "Área II Ciencias sociales" },
    { question: "13. Emprender tu propio micro negocio.", area: "Área III Económica administrativa" },
    { question: "14. Aprender sobre la reparación de dispositivos electrónicos, electrodomésticos y maquinaria.", area: "Área IV Ciencia y tecnología" },
    { question: "15. Asistir a personas enfermas.", area: "Área V Ciencias de la salud, ecológicas y biológicas" },
    { question: "16. Redactar guiones y libretos para un video para plataforma digital.", area: "Área I Arte y creatividad" },
    { question: "17. Estudiar la diversidad cultural en el ámbito rural y urbano", area: "Área II Ciencias sociales" },
    { question: "18. Ver un documental sobre la distribución y almacenaje de productos a gran escala.", area: "Área III Económica administrativa" },
    { question: "19. Trabajar en una empresa petrolera realizando labores técnicas, como la supervisión de gasoductos, manejo de material químico.", area: "Área IV Ciencia y tecnología" },
    { question: "20. Escuchar un radio programa que trate de organismos vivos para elaborar vacunas.", area: "Área V Ciencias de la salud, ecológicas y biológicas" },
    { question: "21. Dedicarte profesionalmente a la fotografía, ya sea en el área artística, cultural, científica o social.", area: "Área I Arte y creatividad" },
    { question: "22. Explicarle un tema de una materia a un niño(a) pequeño(a).", area: "Área II Ciencias sociales" },
    { question: "23. Gestionar una excursión hacia otro estado, rentando camiones y contactando viajeros.", area: "Área III Económica administrativa" },
    { question: "24. Cambiarte de ciudad para trabajar en una empresa minera.", area: "Área IV Ciencia y tecnología" },
    { question: "25. Observar y preguntar sobre el trabajo de los dentistas.", area: "Área V Ciencias de la salud, ecológicas y biológicas" },
    { question: "26. Empezar tu propio canal de YouTube, ser locutor de radio, presentador de televisión o comentarista deportivo.", area: "Área I Arte y creatividad" },
    { question: "27. Leer sobre las diversas religiones, corrientes filosóficas y pensadores.", area: "Área II Ciencias sociales" },
    { question: "28. Aprender a optimizar los recursos financieros de una institución pública.", area: "Área III Económica administrativa" },
    { question: "29. Recorrer un museo con temática interactiva del espacio, los cuerpos celestes, naves, transbordadores y satélites", area: "Área IV Ciencia y tecnología" },
    { question: "30. Leer y ver documentales para entender mejor las dietas para personas diabéticas y/o con sobrepeso tiene que aplicarse para mejorar su salud.", area: "Área V Ciencias de la salud, ecológicas y biológicas" },
];

const areas = {
    "Área I Arte y creatividad": 0,
    "Área II Ciencias sociales": 0,
    "Área III Económica administrativa": 0,
    "Área IV Ciencia y tecnología": 0,
    "Área V Ciencias de la salud, ecológicas y biológicas": 0
};

let currentQuestionIndex = 0;

function updateQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-title").innerText = `Pregunta ${currentQuestionIndex + 1}`;
    document.getElementById("question-text").innerText = question.question;
    updateProgressBar();
}

function handleAnswer(isInterested) {
    if (isInterested) {
        const question = questions[currentQuestionIndex];
        areas[question.area] += 1;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        updateQuestion();
    } else {
        showResults();
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById("progress-bar");
    const progress = (currentQuestionIndex / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
}

function showResults() {
    const container = document.getElementById("question-container");
    const highestArea = Object.keys(areas).reduce((a, b) => areas[a] > areas[b] ? a : b);
    container.innerHTML = `<h2>¡Test completado!</h2>
    <br>
    <p>Tu área de mayor interés es...<span style="font-weight: bold; color: green;"> ${highestArea}</span></p>
    <br>
    <button id="area-info" class="submit">¡Quiero saber más!</button>`;

    document.getElementById("area-info").addEventListener("click", function() {
        redirectToAreaPage(highestArea);
    });
}

function redirectToAreaPage(area) {
    let url;
    switch (area) {
        case "Área I Arte y creatividad":
            url = "area-arte-creatividad.html";
            break;
        case "Área II Ciencias sociales":
            url = "area-ciencias-sociales.html";
            break;
        case "Área III Económica administrativa":
            url = "area-economico-administrativo.html";
            break;
        case "Área IV Ciencia y tecnología":
            url = "area-ciencia-tecnologia.html";
            break;
        case "Área V Ciencias de la salud, ecológicas y biológicas":
            url = "area-ciencias-salud-ecologicas-biologicas.html";
            break;
        default:
            url = "error-page.html"; // Opcional: una página por defecto en caso de error
            break;
    }
    window.location.href = url;
}

// Inicializa la primera pregunta
updateQuestion();
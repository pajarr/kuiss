const quizData = [
{
    question: "Lahir dimana Gw?",
    
    a: "Malang",
    b: "Cianjur",
    c: "Bogor",
    d: "Solo",
    correct: "c",
},
{
    question: "Gw pernah tinggal disuatu kota selama 3 minggu kota apa itu? (clue gajayana)",
    
    a: "Malang",
    b: "Cianjur",
    c: "Bogor",
    d: "Solo",
    correct: "a",
},
 {
    question: "gue sering remed mapel apa?",
    
    a: "Bahasa Indonesia",
    b: "Matematika",
    c: "Bahasa Inggris",
    d: "PBO",
    correct: "b",
},
{
    question: "Warna laptop gw silver kan ya, merk prossesor nya ryzen berapa?",
    
    a: "3",
    b: "5",
    c: "7",
    d: "9",
    correct: "a",
},
{
    question: "Binggi badan gw?",
    
    a: "170 cm",
    b: "172 cm",
    c: "169 cm",
    d: "180 cm",
    correct: "b",
},
{
    question: "Berat badan gw?",
    
    a: "49 kg",
    b: "55 kg",
    c: "53 kg",
    d: "52 kg",
    correct: "c",
},
{
    question: "Berapa jam gw ngoding sehari?",
    
    a: "3 jam ",
    b: "2 jam",
    c: "1 jam",
    d: "setengah jam",
    correct: "b",
},
{
    question: "Warna kesukaan gw jig",
    
    a: "Biru",
    b: "Hijau",
    c: "Abu",
    d: "Hitam",
    correct: "c",
},
{
    question: "Gw sejarang lagi pengen kemana?",
    
    a: "Ke Bogor",
    b: "Ke Gunung",
    c: "Ke Warnet",
    d: "Ke Cinagara",
    correct: "b",
},
{
    question: "Gw dah suka dia berapa bulan?",
    
    a: "3",
    b: "2",
    c: "1",
    d: "3 minggu",
    correct: "a",
},
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;


const deselectAnswer = () => {
    answerElements.forEach((answer) => (answer.checked = false)); 
};
const getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) answer = answerElement.id;
    });
    return answer; 
};
const loadQuiz = () => {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};
loadQuiz();
submitButton.addEventListener("click", () => {
    const answer = getSelected();
    if(answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
            <h2>Selamat lu bener ${score} dari ${quizData.length} soal</h2>

            <button onclick="history.go(0)">Main Lagi</button>
             `// location.reload() kelass ges
        }
    }
})

const questionsAndAnswers = [
    { question: "คุณชื่ออะไร?", answer: "ฉันชื่อ [ชื่อของคุณ]" },
    { question: "คุณชอบทำอะไรในเวลาว่าง?", answer: "ฉันชอบอ่านหนังสือและดูหนัง" },
    { question: "คุณอาศัยอยู่ที่ไหน?", answer: "ฉันอาศัยอยู่ในกรุงเทพมหานคร" },
    { question: "คุณชอบกินอาหารอะไร?", answer: "ฉันชอบกินอาหารไทย เช่น ผัดไทยและต้มยำกุ้ง" },
    { question: "คุณมีสัตว์เลี้ยงหรือไม่?", answer: "ฉันมีแมวชื่อว่า มะลิ" },
    { question: "คุณชอบดูหนังเรื่องอะไร?", answer: "ฉันชอบดูหนังเรื่อง Inception" },
    { question: "คุณชอบฟังเพลงแนวไหน?", answer: "ฉันชอบฟังเพลงป๊อปและร็อก" },
    { question: "คุณเคยไปเที่ยวที่ไหนบ้าง?", answer: "ฉันเคยไปเที่ยวที่เชียงใหม่และภูเก็ต" },
    { question: "คุณมีงานอดิเรกอะไร?", answer: "ฉันชอบวาดรูปและถ่ายภาพ" },
    { question: "คุณชอบกีฬาประเภทไหน?", answer: "ฉันชอบเล่นแบดมินตันและว่ายน้ำ" }
];

let currentQuestionIndex = -1;

document.getElementById('random-number-button').addEventListener('click', function() {
    currentQuestionIndex = Math.floor(Math.random() * questionsAndAnswers.length);
    document.getElementById('random-number-display').innerText = `คำถามข้อที่ : ${currentQuestionIndex + 1}`;
    document.getElementById('question-display').style.display = 'none';
    document.getElementById('answer-display').style.display = 'none';
    document.getElementById('show-question-button').style.display = 'inline-block';
    document.getElementById('show-answer-button').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
});

document.getElementById('show-question-button').addEventListener('click', function() {
    if (currentQuestionIndex !== -1) {
        document.getElementById('question-display').innerText = questionsAndAnswers[currentQuestionIndex].question;
        document.getElementById('question-display').style.display = 'block';
        document.getElementById('show-answer-button').style.display = 'inline-block';
        document.getElementById('random-number-display').style.display = 'none';
        document.getElementById('random-number-button').style.display = 'none';
        document.getElementById('show-question-button').style.display = 'none';
        document.getElementById('reset-button').style.display = 'inline-block';
    }
});

document.getElementById('show-answer-button').addEventListener('click', function() {
    if (currentQuestionIndex !== -1) {
        document.getElementById('answer-display').innerText = questionsAndAnswers[currentQuestionIndex].answer;
        document.getElementById('answer-display').style.display = 'block';
        document.getElementById('show-answer-button').style.display = 'none';
    }
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.getElementById('random-number-display').innerText = 'กดปุ่มเพื่อสุ่มคำถาม';
    document.getElementById('random-number-display').style.display = 'block';
    document.getElementById('question-display').style.display = 'none';
    document.getElementById('answer-display').style.display = 'none';
    document.getElementById('random-number-button').style.display = 'inline-block';
    document.getElementById('show-question-button').style.display = 'none';
    document.getElementById('show-answer-button').style.display = 'none';
    document.getElementById('reset-button').style.display = 'none';
});

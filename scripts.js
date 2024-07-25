const questionsAndAnswers = [
    { question: "CIB คืออะไร", answer: "ตำรวจสอบสวนกลาง" },
    { question: "ตำรวจสอบสวนกลาง ตัวย่อภาษาอังกฤษคืออะไร", answer: "CIB" },
    { question: "ปอท. หรือ กองบังคับการปราบปรามอาชญากรรมทางเทคโนโลยี ตัวย่อภาษาอังกฤษคืออะไร", answer: "TCSD" },
    { question: "ยกตัวอย่าง วิธีการที่มิจฉาชีพใช้ AI ในการหลอกลวง", answer: "ฟังเฉลยจากเจ้าหน้าที่" },
    { question: "หากตัองการระงับหรืออายัดบัญชีคนร้าย ต้องโทรเบอร์อะไร", answer: "1441" },
    { question: "หากมีคนส่งลิงก์แปลกๆ มาให้ ควรกดลิงก์หรือไม่", answer: "ไม่ควร เพราะอาจจะเป็นลิงก์หลอกดูดข้อมูล หรือ อาจจะมีการฝังมัลแวร์ไว้ในเครื่องเราได้" },
    { question: "ยกตัวอย่าง จุดสังเกตมิจฉาชีพที่มักจะหลอกลงทุน", answer: "ฟังเฉลยจากเจ้าหน้าที่" },
    { question: "ยกตัวอย่าง วิธีรู้เท่าทันมิจฉาชีพออนไลน์", answer: "ฟังเฉลยจากเจ้าหน้าที่" },
    { question: "คุณคิดว่าตำรวจจะมีการ Video CALL เข้ามาหาคุณหรือไม่", answer: "ไม่มี และหากมีการบอกให้โอนเงินหรือมีการขอข้อมูลส่วนตัวต่างๆ ให้คิดไว้เสมอว่าเป็น มิจฉาชีพ" },
    { question: "เราสามารถแจ้งความผ่านทาง Line หรือ Facebook ได้หรือไม่", answer: "ไม่ได้ หากต้องการแจ้งความต้องแจ้งผ่านพนักงานสอบสวนโดยตรง หรือแจ้งผ่านทางเว็บไซต์ thaipoliceonline.go.th เท่านั้น" }
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

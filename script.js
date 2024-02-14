let attempts1 = 0;

function checkAnswer(correctAnswer, questionNumber) {
    attempts1++;
    let userAnswer = document.getElementById('answer1').value;
    let result = document.getElementById('result1');
    
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        result.textContent = 'Correct!';
        result.style.color = 'green';
        // You can add more complex logic here like showing a video or slides
    } else {
        if (attempts1 < 3) {
            result.textContent = `Incorrect. Try again. Attempt ${attempts1}/3`;
        } else {
            result.textContent = `Incorrect. The correct answer is ${correctAnswer}.`;
            result.style.color = 'red';
            // You can add more complex logic here like showing a video or slides
        }
    }
}

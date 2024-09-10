function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.plus-icon');
    
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        icon.textContent = '+';
    } else {
        answer.style.display = 'block';
        icon.textContent = '-';
    }
}

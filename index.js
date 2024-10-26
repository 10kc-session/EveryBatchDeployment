const url = 'https://jokes-always.p.rapidapi.com/common';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'b126d85474mshe64f1aa4d8742e9p19b32ajsn2a2e19b22508',
        'x-rapidapi-host': 'jokes-always.p.rapidapi.com'
    }
};

async function getData() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        const joke = data.data;
        const [question, answer] = joke.split('?');

        // Add the question mark back to the question
        const formattedQuestion = question.trim() + '?';
        const formattedAnswer = answer ? answer.trim() : '';

        // Create elements
        const container = document.createElement('div');
        container.className = 'joke-container';

        const jokeQuestion = document.createElement('div');
        jokeQuestion.className = 'joke-question';
        jokeQuestion.textContent = formattedQuestion;

        const jokeAnswer = document.createElement('div');
        jokeAnswer.className = 'joke-answer';
        jokeAnswer.textContent = formattedAnswer;

        // Append elements to container
        container.appendChild(jokeQuestion);
        container.appendChild(jokeAnswer);

        // Append container to body
        document.body.appendChild(container);
    } catch (error) {
        console.error(error);
    }
}
getData();
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

//Dynamic buttons
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('dynamic-buttons-container');
    const numberOfButtons = Math.floor(Math.random() * 12) + 1; // Generates a number between 1 and 12

    for (let i = 0; i < numberOfButtons; i++) {
      const button = document.createElement('button');
      button.textContent = `Dynamic Button ${i + 1}`;
      container.appendChild(button);
    }

  });

/* Group 1 */
document.getElementById('button1').addEventListener('click', function() {
    this.style.backgroundColor = getRandomColor();
});

/* Group 2 */
let groupTwo = document.getElementsByClassName('group2');

for (let i = 0; i < groupTwo.length; i++) {
    groupTwo[i].addEventListener('click', function(event) {
        this.style.backgroundColor = getRandomColor();
    });
};

/* Group 3 */
let groupThree = document.getElementsByClassName('group3');

function oddOrEven() {
    return (Math.random() < 0.5);
}

if (oddOrEven()) {
    for (let i = 0; i < groupThree.length; i++) {
        if (i % 2 == 0) {
            groupThree[i].addEventListener('click', function() {
                this.style.backgroundColor = getRandomColor();
            });
        };
    };
} else {
    for (let i = 0; i < groupThree.length; i++) {
        if (i % 2 != 0) {
            groupThree[i].addEventListener('click', function() {
                this.style.backgroundColor = getRandomColor();
            });
        };
    };
};


/* Group 4 */
window.addEventListener('DOMContentLoaded', () => {
    let dynamicButtons = document.getElementById('dynamic-buttons-container').getElementsByTagName('button');
    
    for (let i = 0; i < dynamicButtons.length; i++) {
        dynamicButtons[i].addEventListener('click', function() {
            this.style.backgroundColor = getRandomColor();
        });
    };
});

/* Group 5 */
let groupFiveButtons = document.getElementById('group5-container').getElementsByTagName('button');

for (let i = 0; i < groupFiveButtons.length; i++) {
    groupFiveButtons[i].addEventListener('click', function() {
        this.style.backgroundColor = getRandomColor();
    });
};
let diceData = [
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
    {
        value: undefined,
        status: 'active'
    },
]

const diceDivs = document.querySelectorAll('.dice');
diceDivs.forEach((dice) => {
    dice.addEventListener('click', () => {
        if (dice.dataset.status == 'active') {
            dice.dataset.status = 'locked';
            diceData[dice.dataset.index].status = 'locked';
        } else {
            dice.dataset.status = 'active';
            diceData[dice.dataset.index].status = 'active';
        }

        console.log(diceData);
    });
});

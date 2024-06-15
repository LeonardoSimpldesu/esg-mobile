export const completedTasks = {
    title: 'Temporada de Outono',
    completedTasks: [
        {
            id: 1,
            title: 'Seu primeiro feijão da temporada',
            date: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
            points: 21,
        },
        {
            id: 2,
            title: 'Rápido e saudável',
            date: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
            points: 17,
        },
        {
            id: 3,
            title: 'Coleta de lixo',
            date: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
            points: 12,
        },
        {
            id: 4,
            title: 'O começo de um jardin',
            date: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
            points: 21,
        },
        {
            id: 5,
            title: 'Reciclando!',
            date: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
            points: 19,
        },
        {
            id: 6,
            title: 'Entrando em forma',
            date: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
            points: 24,
        },
    ]
}

export const ranking = [
    {
        title: 'Temporada de Verão',
        position: 4,
        initalDate: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        endDate: new Date()
    },
    {
        title: 'Temporada de Primavera',
        position: 7,
        initalDate: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        endDate: new Date()
    },
    {
        title: 'Temporada de Inverno',
        position: 5,
        initalDate: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        endDate: new Date()
    },
    {
        title: 'Temporada de Outono',
        position: 8,
        initalDate: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        endDate: new Date()
    },
    {
        title: 'Temporada de Verão',
        position: 5,
        initalDate: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        endDate: new Date()
    },
    {
        title: 'Temporada de Primavera',
        position: 2,
        initalDate: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        endDate: new Date()
    },
]

export const reward = [
    {
        title: 'DayOFF!',
        collectedAt: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        price: 12,
    },
    {
        title: 'Garra Térmica!',
        collectedAt: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        price: 18,
    },
    {
        title: 'Xicara Condelivery',
        collectedAt: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        price: 12,
    },
    {
        title: 'Headset',
        collectedAt: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        price: 24,
    },
    {
        title: 'Boné Condelivery',
        collectedAt: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        price: 21,
    },
    {
        title: 'Camisa Condelivery',
        collectedAt: new Date(new Date(2023, 0, 1).getTime() + Math.random() * (new Date().getTime() - new Date(2023, 0, 1).getTime())),
        price: 22,
    },
]
import { GameEventType } from "@/schema/GameEvent.schema";
import { type GameEvent } from "@prisma/client";

export const GameEventDemoData: GameEventType[] = [
    {
        id: '1',
        title: 'Epic Game Tournament',
        link: 'https://example.com/epic-tournament',
        thumbnail: 'https://example.com/epic-tournament-thumbnail.jpg',
        createdAt: new Date('2023-04-05'),
        expiredAt: new Date('2023-05-31'),
        prize: 5000,
        gameId: null,
        currencyCode: null,
        Game: {
            title: 'Fortnite',
            thumbnail: '',
            id: 'sgdsds',
            createdAt: new Date(),
            updatedAt: new Date()
        }
    },
    {
        id: '2',
        title: 'Super Smash Bros Championship',
        link: 'https://example.com/smash-championship',
        thumbnail: 'https://example.com/smash-championship-thumbnail.jpg',
        createdAt: new Date('2023-02-15'),
        expiredAt: new Date('2023-05-28'),
        prize: 7500,
        gameId: null,
        currencyCode: null,
        Game: null
    },
    {
        id: '3',
        title: 'League of Legends World Series',
        link: 'https://example.com/lol-world-series',
        thumbnail: 'https://example.com/lol-world-series-thumbnail.jpg',
        createdAt: new Date('2023-03-01'),
        expiredAt: new Date('2023-06-31'),
        prize: 10000,
        gameId: null,
        currencyCode: null,
        Game: null
    },
    {
        id: '4',
        title: 'Fortnite Battle Royale',
        link: 'https://example.com/fortnite-battle-royale',
        thumbnail: 'https://example.com/fortnite-battle-royale-thumbnail.jpg',
        createdAt: new Date('2023-04-01'),
        expiredAt: new Date('2023-04-30'),
        prize: 5000,
        gameId: null,
        currencyCode: null,
        Game: null
    },
    {
        id: '5',
        title: 'Overwatch Heroes Challenge',
        link: 'https://example.com/overwatch-heroes-challenge',
        thumbnail: 'https://example.com/overwatch-heroes-challenge-thumbnail.jpg',
        createdAt: new Date('2023-04-01'),
        expiredAt: new Date('2023-05-31'),
        prize: 15000,
        gameId: null,
        currencyCode: null,
        Game: null
    },
    // {
    //     id: '6',
    //     title: 'Mortal Kombat Grand Tournament',
    //     link: 'https://example.com/mortal-kombat-grand-tournament',
    //     thumbnail: 'https://example.com/mortal-kombat-grand-tournament-thumbnail.jpg',
    //     createdAt: new Date('2022-06-15'),
    //     expiredAt: new Date('2022-06-30'),
    //     prize: 10000,
    //     gameId: null,
    //     currencyCode: null,
    //     Game: null
    // },
    // {
    //     id: '7',
    //     title: 'FIFA World Cup',
    //     link: 'https://example.com/fifa-world-cup',
    //     thumbnail: 'https://example.com/fifa-world-cup-thumbnail.jpg',
    //     createdAt: new Date('2022-07-01'),
    //     expiredAt: new Date('2022-07-31'),
    //     prize: 20000,
    //     gameId: null,
    //     currencyCode: null,
    //     Game: null
    // },
    // {
    //     id: '8',
    //     title: 'Dota 2 Pro Circuit',
    //     link: 'https://example.com/dota-2-pro-circuit',
    //     thumbnail: 'https://example.com/dota-2-pro-circuit-thumbnail.jpg',
    //     createdAt: new Date('2022-08-15'),
    //     expiredAt: new Date('2022-08-31'),
    //     prize: 5000,
    //     gameId: null,
    //     currencyCode: null,
    //     Game: null
    // },
    // {
    //     id: '9',
    //     title: 'Call of Duty Elite Challenge',
    //     link: 'https://example.com/c',
    //     thumbnail: 'https://example.com/dota-2-pro-circuit-thumbnail.jpg',
    //     createdAt: new Date('2022-08-15'),
    //     expiredAt: new Date('2022-08-31'),
    //     prize: 5000,
    //     gameId: null,
    //     currencyCode: null,
    //     Game: null
    // },
    // {
    //     id: '10',
    //     title: 'Counter-Strike Global Championship',
    //     link: 'https://example.com/cs-global-championship',
    //     thumbnail: 'https://example.com/cs-global-championship-thumbnail.jpg',
    //     createdAt: new Date('2022-09-01'),
    //     expiredAt: new Date('2022-09-30'),
    //     prize: 15000,
    //     gameId: null,
    //     currencyCode: null,
    //     Game: null
    // }
]

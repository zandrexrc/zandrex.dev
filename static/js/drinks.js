const categories = [
    {
        name: 'Coffee',
        description: 'Drinks to get you in the zone',
        color: '#005A7A',
        contents: [
            {
                label: 'Espresso',
                flavor: '90s hip-hop, jazz rap',
                link: 'https://open.spotify.com/playlist/2LT1hg6z3nPELPCnqJbhgX?si=e5fb36de151d4e51'
            },
            {
                label: 'Macchiato',
                flavor: 'Hip-hop, r&b',
                link: 'https://open.spotify.com/playlist/51ZG7HM2uHmoBg0e6JjY2G?si=df17431cf6d24c9d'
            },
            {
                label: 'Latte',
                flavor: 'Korean rap, pop rap',
                link: 'https://open.spotify.com/playlist/0nVE4EvFhRKC89XBKXbxkh?si=bfc28617e65b4d94'
            },
        ]
    },
    {
        name: 'Tea',
        description: 'Drinks for taking it easy',
        color: '#196659',
        contents: [
            {
                label: 'Earl grey',
                flavor: 'Traditional pop, acoustic',
                link: 'https://open.spotify.com/playlist/5UtDE8C5mRy654VPCUZZ5T?si=6af0feefb3674666'
            },
            {
                label: 'Chamomile',
                flavor: 'Folk, indie pop',
                link: 'https://open.spotify.com/playlist/00qusYHbGHfsxVSt4VZF4A?si=34ee3de2b0754908'
            },
            {
                label: 'Cascara',
                flavor: 'Guajira, bolero',
                link: 'https://open.spotify.com/playlist/65mSByNCyTGnPc0DBKq4sX?si=81fbd69de4ce4b67'
            },
        ]
    },
    {
        name: 'Soda',
        description: 'Drinks for living in the moment',
        color: '#C98D1D',
        contents: [
            {
                label: 'Milkis',
                flavor: 'K-pop',
                link: 'https://open.spotify.com/playlist/3yVjq0bZllud9IuUHs2f2y?si=d20ac109289f4b2c'
            },
            {
                label: 'Sprite',
                flavor: 'Alt-pop',
                link: 'https://open.spotify.com/playlist/1VkTIVXDNchGZLmpsdgNuw?si=729c26dcb6a84a4e'
            },
            {
                label: 'Pepsi',
                flavor: 'Pop',
                link: 'https://open.spotify.com/playlist/35JGWIdOiOLe1MJq9eWGgy?si=55766985a994479b'
            },
            {
                label: 'Fanta',
                flavor: 'Pop, r&b',
                link: 'https://open.spotify.com/playlist/2MIeM53AqCGXu0IHbgugcr?si=21aaef445bbf4435'
            },
            {
                label: 'Ramune',
                flavor: 'City pop',
                link: 'https://open.spotify.com/playlist/78S53LtReAhoKjWfmMbdCl?si=1f998f36532b46ed'
            },
        ]
    },
    {
        name: 'Energy drink',
        description: 'Drinks to get your feet moving',
        color: '#BA4C03',
        contents: [
            {
                label: 'Red bull',
                flavor: 'Eurodance',
                link: 'https://open.spotify.com/playlist/6iKCau4X8iK1oVI9ANRTrl?si=93cc4c71370a4119'
            },
            {
                label: 'Monster',
                flavor: 'Synth-pop',
                link: 'https://open.spotify.com/playlist/1rnMWFrBCeCVRVQR7qZF79?si=d4173cf40baa434b'
            },
            {
                label: 'Bang',
                flavor: 'Dance pop',
                link: 'https://open.spotify.com/playlist/1k816Q5dbkFQFREFCtcUC0?si=08badcc90b874a11'
            },
            {
                label: 'Burn',
                flavor: 'House, EDM',
                link: 'https://open.spotify.com/playlist/6dkNVNIs3MhdjdevmN6o0y?si=4f40dae18b71409f'
            },
        ]
    },
    {
        name: 'Beer',
        description: 'Drinks to get your head banging',
        color: '#9B2226',
        contents: [
            {
                label: 'Guiness',
                flavor: 'Classic rock',
                link: 'https://open.spotify.com/playlist/3iG6zawCViajQKdiOPIKTS?si=5953ffba9a954fea'
            },
            {
                label: 'Corona',
                flavor: 'Alt-rock',
                link: 'https://open.spotify.com/playlist/3lbF6pDWX3r3e6QeVD5Uff?si=aee5479ddda84b76'
            },
            {
                label: 'Asahi',
                flavor: 'Japanese rock',
                link: 'https://open.spotify.com/playlist/0W0obqOwJ89yVmTFl4m4tM?si=202c3481ae2b4bec'
            },
            {
                label: 'Red Horse',
                flavor: 'Filipino rock, OPM',
                link: 'https://open.spotify.com/playlist/3ho2T6Bjore2ypasHtrjxn?si=cd8db08139484767'
            },
            {
                label: 'BrewDog',
                flavor: 'Pop rock, pop punk',
                link: 'https://open.spotify.com/playlist/7kZRt9To4gC2qONfvxY2IK?si=d60d3f3146e14022'
            },
        ]
    },
    {
        name: 'Wine',
        description: 'Drinks for the heart and soul',
        color: '#6E2B5E',
        contents: [
            {
                label: 'Merlot',
                flavor: 'Jazz, swing',
                link: 'https://open.spotify.com/playlist/5L2V8A5y6CXFFWg4nN6OBm?si=5878b3e4e6bf424e'
            },
            {
                label: 'Pinot noir',
                flavor: 'Soul',
                link: 'https://open.spotify.com/playlist/5raXrBxxyIJpOtkdfD6Qjl?si=ff97b7f95a97495e'
            },
            {
                label: 'Riesling',
                flavor: '80s pop, soul',
                link: 'https://open.spotify.com/playlist/5n0lU800U124kMPYawJ1Qr?si=81ef458a84804ef8'
            },
        ]
    },
    {
        name: 'Cocktail',
        description: 'Drinks behind closed doors',
        color: '#493474',
        contents: [
            {
                label: 'Martini',
                flavor: 'R&B, hip-hop',
                link: 'https://open.spotify.com/playlist/1H0xztjTMdkhriPgIAf8z7?si=88fe851307584ad7'
            },
            {
                label: 'Negroni',
                flavor: '90s r&b, hip-hop',
                link: 'https://open.spotify.com/playlist/6RBO3rWOwkjYaBTP0Ql5bX?si=592ed91374564ae3'
            },
            {
                label: 'Cosmopolitan',
                flavor: 'Korean r&b, pop',
                link: 'https://open.spotify.com/playlist/4fckA9m6FhDDGOVXNlDVmX?si=54f870ca8e354e80'
            },
        ]
    },
    {
        name: 'Spirit',
        description: 'Drinks to fill the void',
        color: '#262524',
        contents: [
            {
                label: 'Gin',
                flavor: 'Pop, r&b',
                link: 'https://open.spotify.com/playlist/6hk2pgZJbpir7cmtt6FzyC?si=1781f2a01f104989'
            },
            {
                label: 'Aquavit',
                flavor: 'Norwegian pop',
                link: 'https://open.spotify.com/playlist/0lAunA6MqkCW3u6F1sIq6M?si=3b5cbc185fa947bd'
            },
            {
                label: 'Lambanog',
                flavor: 'Filipino pop, r&b',
                link: 'https://open.spotify.com/playlist/43ib9kl8gTD45Cow8GaPbs?si=951fe54af105467f'
            },
            {
                label: 'Shochu',
                flavor: 'Japanese pop, pop rock',
                link: 'https://open.spotify.com/playlist/3fWO4NPkR1HMO9xRWuio3b?si=23c67437f6204f70'
            },
        ]
    },
];

function hex2rgba(hex, alpha = 1) {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
};

function createPointerIcon() {
    const template = document.querySelector('.pointer-outline-template');
    const clone = template.cloneNode(true);
    clone.removeAttribute('style');

    return clone
}
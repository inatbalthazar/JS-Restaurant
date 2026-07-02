let foodDatabase = [
    {
        id: 1,
        name: "pizza",
        cuisine: "Italian",
        origin: "Italy",
        vegetarian: false,
        price: 18.99,
        description: 'Wood-fired perfection with San Marzano tomatoes, fresh mozzarella, and fragrant basil.',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=420&fit=crop'
    },
    {
        id: 2,
        name: "burger",
        cuisine: "American",
        origin: "USA",
        vegetarian: false,
        price: 15.99,
        description: 'Prime Angus beef with aged cheddar, caramelized onions, and our signature sauce.',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=420&fit=crop'
    },
    {
        id: 3,
        name: "pasta",
        cuisine: "Italian",
        origin: "Italy",
        vegetarian: true,
        price: 16.99,
        description: 'Al dente spaghetti tossed in a rich, slow-simmered pomodoro with garden herbs.',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=420&fit=crop'
    },
    {
        id: 4,
        name: "sushi",
        cuisine: "Japanese",
        origin: "Japan",
        vegetarian: false,
        price: 22.99,
        description: 'Premium nori rolls with seasoned rice, fresh salmon, and creamy avocado.',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600&h=420&fit=crop'
    },
    {
        id: 5,
        name: "tacos",
        cuisine: "Mexican",
        origin: "Mexico",
        vegetarian: false,
        price: 14.99,
        description: 'Soft corn tortillas with grilled carne asada, pico de gallo, and lime crema.',
        image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&h=420&fit=crop'
    },
    {
        id: 6,
        name: "pad thai",
        cuisine: "Thai",
        origin: "Thailand",
        vegetarian: true,
        price: 17.99,
        description: 'Stir-fried rice noodles with shrimp, bean sprouts, tamarind sauce, and crushed peanuts.',
        image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&h=420&fit=crop'
    },
    {
        id: 7,
        name: "ramen",
        cuisine: "Japanese",
        origin: "Japan",
        vegetarian: false,
        price: 18.99,
        description: 'Rich tonkotsu broth with chashu pork, soft egg, nori, and hand-pulled noodles.',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=420&fit=crop'
    },
    {
        id: 8,
        name: "steak",
        cuisine: "American",
        origin: "USA",
        vegetarian: false,
        price: 38.99,
        description: '30-day dry-aged prime ribeye, chargrilled to perfection with rosemary butter.',
        image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&h=420&fit=crop'
    }
]

const heroBackground = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80';

const fallbackGradients = {
    Italian:  'linear-gradient(135deg, #f7971e, #ffd200)',
    American: 'linear-gradient(135deg, #e43a15, #e65245)',
    Japanese: 'linear-gradient(135deg, #1a1a2e, #c31432)',
    Mexican:  'linear-gradient(135deg, #11998e, #38ef7d)',
    Thai:     'linear-gradient(135deg, #f2709c, #ff9472)'
};
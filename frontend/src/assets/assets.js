import basket_icon from './basket_icon.png'
import logo from './logo.png'
import header_img from './header_img.png'
import search_icon from './search_icon.png'
import menu_1 from './menu_1.png'
import menu_2 from './menu_2.png'
import menu_3 from './menu_3.png'
import menu_4 from './menu_4.png'
import menu_5 from './menu_5.png'
import menu_6 from './menu_6.png'
import menu_7 from './menu_7.png'
import menu_8 from './menu_8.png'

import ticket1 from './ticket1.png'
import ticket2 from './ticket2.png'
import ticket3 from './ticket3.png'
import ticket4 from './ticket4.png'
import ticket5 from './ticket5.png'
import ticket6 from './ticket6.png'
import ticket7 from './ticket7.png'
import ticket8 from './ticket8.png'


import attraction1 from './attraction1.png' 
import attraction2 from './attraction2.png'
import attraction3 from './attraction3.png'
import attraction4 from './attraction4.png'


import hotel1 from './hotel1.png' 
import hotel2 from './hotel2.png'
import hotel3 from './hotel3.png'
import hotel4 from './hotel4.png'
import hotel5 from './hotel5.png' 
import hotel6 from './hotel6.png'
import hotel7 from './hotel7.png'
import hotel8 from './hotel8.png'

import add_icon_white from './add_icon_white.png'
import add_icon_green from './add_icon_green.png'
import remove_icon_red from './remove_icon_red.png'
import app_store from './app_store.png'
import play_store from './play_store.png'
import linkedin_icon from './linkedin_icon.png'
import facebook_icon from './facebook_icon.png'
import twitter_icon from './twitter_icon.png'
import cross_icon from './cross_icon.png'
import selector_icon from './selector_icon.png'
import rating_starts from './rating_starts.png'
import profile_icon from './profile_icon.png'
import bag_icon from './bag_icon.png'
import logout_icon from './logout_icon.png'
import parcel_icon from './parcel_icon.png'

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon,

    attraction1, attraction2, attraction3, attraction4,
    hotel1, hotel2, hotel3, hotel4, hotel5, hotel6, hotel7, hotel8
}

export const menu_list = [
    {
        menu_name: "Dindori",
        menu_image: menu_1
    },
    {
        menu_name: "Chandwad",
        menu_image: menu_2
    },
    {
        menu_name: "Girnare",
        menu_image: menu_3
    },
    {
        menu_name: "Igatpuri",
        menu_image: menu_4
    },
    {
        menu_name: "Ozar",
        menu_image: menu_5
    },
    {
        menu_name: "Pimpalgaon",
        menu_image: menu_6
    },
    {
        menu_name: "Sinnar",
        menu_image: menu_7
    },
    {
        menu_name: "Yeola",
        menu_image: menu_8
    }]

export const food_list = [
    {
        _id: "1",
        name: "Dindori to Nashik",
        image: ticket1,
        price: 120,
        description: "Reserved slot for Darshan and slot.",
        category: "Dindori"
    },
    {
        _id: "2",
        name: "Chandwad to Nashik",
        image: ticket2,
        price: 180,
        description: "Reserved slot for Darshan and slot.",
        category: "Chandwad"
    }, {
        _id: "3",
        name: "Girnare to Nashik",
        image: ticket3,
        price: 160,
        description: "Reserved slot for Darshan and slot.",
        category: "Girnare"
    }, {
        _id: "4",
        name: "Igatpuri to Nashik",
        image: ticket4,
        price: 140,
        description: "Reserved slot for Darshan and slot.",
        category: "Igatpuri"
    }, {
        _id: "5",
        name: "Ozar to Nashik",
        image: ticket5,
        price: 140,
        description: "Reserved slot for Darshan and slot.",
        category: "Ozar"
    }, {
        _id: "6",
        name: "Pimpalgaon to Nashik",
        image: ticket6,
        price: 120,
        description: "Reserved slot for Darshan and slot.",
        category: "Pimpalgaon"
    }, {
        _id: "7",
        name: "Sinnar to Nashik",
        image: ticket7,
        price: 200,
        description: "Reserved slot for Darshan and slot.",
        category: "Sinnar"
    }, {
        _id: "8",
        name: "Yeola to Nashik",
        image: ticket8,
        price: 150,
        description: "Reserved slot for Darshan and slot.",
        category: "Yeola"
    }
]


export const attraction_list = [
    {
        name: "Trimbakeshwar Jyotirlinga",
        image: attraction1,
        description: "One of the 12 Jyotirlingas, located at the source of the Godavari river. Highly sacred.",
        type: "Religious"
    },
    {
        name: "Pandavleni Caves",
        image: attraction2,
        description: "Ancient rock-cut Buddhist caves (Trirashmi Caves), perfect for history and nature lovers.",
        type: "Historical"
    },
    {
        name: "Shree Kalaram Mandir",
        image: attraction3, 
        description: "A prominent black-stone temple dedicated to Lord Rama in the historic Panchavati area.",
        type: "Religious"
    },
    {
        name: "Sita Gufa",
        image: attraction4, 
        description: "The mythological cave linked to the Ramayana, believed to be the spot of Sita's abduction.",
        type: "Historical"
    }
]

export const hotel_list = [
    {
        name: "Courtyard by Marriott Nashik",
        image: hotel1, 
        description: "A luxury international hotel brand offering modern amenities and a premium stay experience.",
        price_range: "Rs. 7000+",
        rating: 5,
    },
    {
        name: "The Haven by Sula",
        image: hotel2,
        description: "A high-end resort offering a serene escape right next to the Sula Vineyards.",
        price_range: "Rs. 8000+",
        rating: 4.5,
    },
    {
        name: "The Gateway Hotel Ambad (Taj)",
        image: hotel3, 
        description: "A 5-star hotel known for its extensive grounds, excellent service, and fine dining options.",
        price_range: "Rs. 6000 - 16000+",
        rating: 4.5,
    },
    {
        name: "Holiday Inn Express Nashik",
        image: hotel4, 
        description: "A smart, mid-range choice located conveniently near the highway, good for business travelers.",
        price_range: "Rs. 3500 - 4500",
        rating: 3.8,
    },
    {
        name: "ibis Nashik",
        image: hotel5, 
        description: "A reliable Accor brand hotel offering modern, clean, and consistent stays at an affordable price.",
        price_range: "Rs. 3000 - 4500+",
        rating: 3.7,
    },
    {
        name: "Hotel Grand Rio Nashik",
        image: hotel6, 
        description: "Well-located hotel with spacious rooms, good food, and a swimming pool.",
        price_range: "Rs. 4000 - 6000+",
        rating: 4.4,
    },
    {
        name: "Panchavati Elite Inn",
        image: hotel7,
        description: "A centrally located mid-range option, popular for pilgrims and budget-conscious travelers.",
        price_range: "Rs. 1800 - 3000+",
        rating: 3.6,
    },
    {
        name: "Palm Springs Nashik",
        image: hotel8,  
        description: "A resort-style property offering a peaceful ambiance and good amenities outside the main city rush.",
        price_range: "Rs. 3500 - 5500+",
        rating: 4.5,
    }
]
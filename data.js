export const pageLinks = [
    {id : 1, href: "#home", text:"home"},
    {id : 2, href: "#about", text:"about"},
    {id : 3, href: "#services", text:"services"},
    {id : 4, href: "#tours", text:"tours"},
]
export const socialLinks = [
    {id : 1, href: "https://www.facebook.com", iconClass:"fa-brands fa-facebook"},
    {id : 2, href: "https://www.threads.com", iconClass:"fa-brands fa-twitter"},
    {id : 3, href: "https://www.twitter.com", iconClass:"fa-brands fa-squarespace"},
]
export const services = [
    {id : 1, icon: "fa-solid fa-wallet", title: "saving money", info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quos amet in labore placeat. Praesentium."},
    {id : 2, icon: "fa-solid fa-tree", title: "endless hiking", info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quos amet in labore placeat. Praesentium."},
    {id : 3, icon: "fa-solid fa-socks", title: "amazing comfort", info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quos amet in labore placeat. Praesentium."},
]
import tour1 from './src/assets/02.jpg'
import tour2 from './src/assets/03.jpg'
import tour3 from './src/assets/04.jpg'
import tour4 from './src/assets/05.jpg'
export const tours = [
    {id : 1,
        image : tour1,
        date : "september 26th, 2026",
        title : "mount everest",
        info : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, beatae!",
        location : "china",
        duration : 6,
        price : 2100,
    },
    {id : 2,
        image : tour2,
        date : "october 5th, 2026",
        title : "mount everest",
        info : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, beatae!",
        location : "china",
        duration : 4,
        price : 1500,
    },
    {id : 3,
        image : tour3,
        date : "october 12h, 2026",
        title : "mount everest",
        info : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, beatae!",
        location : "china",
        duration : 7,
        price : 2500,
    },
    {id : 4,
        image : tour4,
        date : "november 15th, 2026",
        title : "mount everest",
        info : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, beatae!",
        location : "china",
        duration : 3,
        price : 2000,
    },
]
import { 
    Home,
    Box, 
    Boxes,
    BookPlus,
    PackagePlus,
    Mails,
    Webhook,
    BookOpen,
    Coins,
    Bitcoin,
    Medal,
    Wallet,
    Truck
} from 'lucide-react';
import AppDescriptionImage from "../assets/images/img (1).jfif";
import { ReactComponent as InstagramLogo } from '../assets/svg/instagram-color.svg';
import { ReactComponent as TelegramLogo } from '../assets/svg/telegram-color.svg';
import { ReactComponent as TwitterLogo } from '../assets/svg/twitter-color.svg';
// import { ReactComponent as YoutubeLogo } from '../assets/svg/youtube-color.svg';
import { ReactComponent as SpotifyLogo } from '../assets/svg/spotify-color.svg';
import { ReactComponent as FacebookLogo } from '../assets/svg/facebook-color.svg';
import { ReactComponent as WhatsappLogo } from '../assets/svg/whatsapp-color.svg';
import { ReactComponent as MailLogo } from '../assets/svg/mail-color.svg';
import { APP_NAME } from '../config';

export const dashboardLinks = [
    {
        icon: Home ,
        title: 'Account',
        route: '/dashboard/account'
    },
	{
        icon: Box,
        title: 'Orders',
        route: '/dashboard'
    },
    {
        icon: Boxes,
        title: 'Mass order',
        route: '/dashboard/orders/mass-order'
    },
    {
        icon: BookPlus,
        title: 'Book order',
        route: '/dashboard/orders/book-order'
    },
    {
        icon: PackagePlus,
        title: 'Add funds',
        route: '/dashboard/add-funds'
    },
    {
        icon: Mails,
        title: 'Ticket support',
        route: '/dashboard/ticket-support'
    },
    {
        icon: Webhook,
        title: 'Api',
        route: '/api'
    },
    {
        icon: BookOpen,
        title: 'How to use',
        route: '/how-to-use'
    },
];

export const navigationLinks = [
    {
        title: "Home",
        route: "/"
    },
    {
        title: "Services",
        route: "/services"
    },
    {
        title: "Api",
        route: "/api"
    }
];

export const fundsPaymentOptions = [
    {
        option: 'CoinPayment « [Up to 7% Bonus] 🎇 » BTC',
        key: 'coinbase',
        icon: Coins
    },
    {
        option: 'Binance « [Up to 5% Bonus] 🎇 » BTC',
        key: 'binance',
        icon: Bitcoin
    }
];

export const heroContent = {
    heading: "Place Panel and Digital Marketing By Placeholder",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
}

export const appDescription = {
    title: "Best placeholder panel",
    image: AppDescriptionImage,
    content: [
        "A professional Panel should meet all the needs of it's user. On the other hand, it has to provide all the surveys and also it has to adjust the prices so that users can sell it to their customers at a significant profit. We try to have the most complete panel here.",
        "You can see all the factors in Placeholder. We have the highest number of services, the lowest market price and the best support team to solve your problems at any time."
    ]
}

export const companyFeatures = {
  first: [
    {
        Icon: Medal,
        title: "Awesome quality",
        content: "You will be satisfied with the quality of our Placeholder services."
    },
    {
        Icon: Wallet,
        title: "Many payment options",
        content: "Good variety of payment options to choose from."
    }
  ],
  second: [
    {
        Icon: Bitcoin,
        title: "Unbelievable prices",
        content: "Here you can purchase Placeholder services at super affordable prices!."
    },
    {
        Icon: Truck,
        title: "Very fast delivery",
        content: "We provide quick order processing and quick results.."
    }
  ]    
}

export const companyServices = [
    {
        Icon: TelegramLogo,
        title: "Buy telegram members"
    },
];

// const otherCompanyServices = [
//     {
//         Icon: InstagramLogo,
//         title: "Buy instagram followers"
//     },
//     {
//         Icon: TwitterLogo,
//         title: "Buy telegram followers"
//     },
//     {
//         Icon: YoutubeLogo,
//         title: "Buy youtube subscribers"
//     }
// ]

export const companyFollowLinks = [
    {
        Icon: TelegramLogo,
        title: "Telegram",
        link: ""
    },
    {
        Icon: TwitterLogo,
        title: "Twitter",
        link: ""
    },
    {
        Icon: SpotifyLogo,
        title: "Spotify",
        link: ""
    },
    {
        Icon: InstagramLogo,
        title: "Instagram",
        link: ""
    },
    {
        Icon: FacebookLogo,
        title: "Facebook",
        link: ""
    },
    {
        Icon: WhatsappLogo,
        title: "Whatsapp",
        link: ""
    },
    {
        Icon: MailLogo,
        title: "Email spam",
        link: ""
    }
];

export const companyAbout = {
    about: `${APP_NAME} is not a only panel. An advanced and unique community. We are here to make you special on social media and to make you better than others`,
    contact: `admin@${APP_NAME.toLowerCase()}.com`
}
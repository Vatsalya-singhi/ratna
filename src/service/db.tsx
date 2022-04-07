import Bottle from '../assets/oil/bottle.jpg';
import Oil1 from '../assets/oil/oil-1.jpg';
import Oil2 from '../assets/oil/oil-2.webp';
import Oil3 from '../assets/oil/oil-3.jpg';
import Oil4 from '../assets/oil/oil-4.jpg';
import Oil5 from '../assets/oil/oil-5.jpg';
import Oil6 from '../assets/oil/oil-6.jpg';
import Oil7 from '../assets/oil/oil-7.webp';

import AleoVera from '../assets/aloe_vera/aloevera.jpg';
import AleoVera1 from '../assets/aloe_vera/aloe-vera-1.jpg';
import AleoVera2 from '../assets/aloe_vera/aloe-vera-2.jpg';
import AleoVera3 from '../assets/aloe_vera/aloe-vera-3.jpg';
import AleoVera4 from '../assets/aloe_vera/aloe-vera-4.jpg';
import AleoVera5 from '../assets/aloe_vera/aloe-vera-5.jpg';
import AleoVera6 from '../assets/aloe_vera/aloe-vera-6.jpg';
import AleoVera7 from '../assets/aloe_vera/aloe-vera-7.jpg';
import AleoVera8 from '../assets/aloe_vera/aloe-vera-8.jpg';

import Burfi from '../assets/dry_fruits_burfi/burfi.jpg';
import Burfi1 from '../assets/dry_fruits_burfi/dry-fruits-burfi-1.jpg';
import Burfi2 from '../assets/dry_fruits_burfi/dry-fruits-burfi-2.jpg';
import Burfi3 from '../assets/dry_fruits_burfi/dry-fruits-burfi-3.jpg';
import Burfi4 from '../assets/dry_fruits_burfi/dry-fruits-burfi-4.jpg';
import Burfi5 from '../assets/dry_fruits_burfi/dry-fruits-burfi-5.jpg';
import Burfi6 from '../assets/dry_fruits_burfi/dry-fruits-burfi-6.jpg';
import Burfi7 from '../assets/dry_fruits_burfi/dry-fruits-burfi-7.jpg';


export const db = {
    "productList": [
        {
            "id": 0,
            "name": "Brilliantine",
            "cover_img": Bottle,
            "card_title": "Brilliantine",
            "card_text": "The formulation of neem, nettle, birch bark, arnica and burdock root infused with handpressed oil addresses a variety of hair and scalp needs.",
            "img_array": [
                Bottle,
                Oil1,
                Oil2,
                Oil3,
                Oil4,
                Oil5,
                Oil6,
                Oil7,
            ],
            "size": "300 ml",
            "content": [
                {
                    "key": "Direction for use",
                    "value": [
                        "Apply a few drops on scalp and massage with fingertips, to help the oil penetrate into the roots of your hair.",
                        "Leave for atleast 2-4 hrs or overnight for better results"
                    ],
                    "type": "li"
                },
                {
                    "key": "Advantages",
                    "value": [
                        "controls hair fall",
                        "adds strength and shine",
                        "balances scalp",
                        "safe for all hair types",
                        "helps in detangling the hair",
                        "increases shine",
                        "perfect for hair moisturization",
                        "helps to get silkier",
                        "100% Natural Free of Harmful Chemicals & Toxins",
                        "Anti- Dandruff"
                    ],
                    "type": "span"
                }
            ],
            "price": "1200"
        },
        {
            "id": 1,
            "name": "Aloe Vera Gel",
            "cover_img": AleoVera,
            "card_title": "Aloe Vera Gel",
            "card_text": "The Aloe Vera Gel extract is an excellent natural day cream for face and body and help soothe your skin problems. 100% organic and safe for natural healthy skin.",
            "img_array": [
                AleoVera,
                AleoVera1,
                AleoVera2,
                AleoVera3,
                AleoVera4,
                AleoVera5,
                AleoVera6,
                AleoVera7,
                AleoVera8,
                // AleoVera9,
                // AleoVera10,
            ],
            "size": "200 ml",
            "content": [
                {
                    "key": "Direction for use",
                    "value": [
                        "Apply a few drops on scalp and massage with fingertips, to help the oil penetrate into the roots of your hair.",
                        "Leave for atleast 2-4 hrs or overnight for better results"
                    ],
                    "type": "li"
                },
                {
                    "key": "Advantages",
                    "value": [
                        "Aloe Vera Gel is a natural, organic product that has been amplified by a process called gel-filtration.",
                        "The Aloe Vera Gel extract is an excellent natural day cream for face and body and help soothe your skin problems.",
                        "It helps heal skin conditions like eczema, psoriasis, sunburns and acne",
                        "It is an excellent natural day cream for face and body",
                        "Made with organic ingredients, this product will help soothe skin problems",
                        "It also goes well with other products like Aromatherapy to enhance skin improvement.",
                        "100% Natural Free of Harmful Chemicals & Toxins",
                        "Try it today for a healthy, beautiful you!"
                    ],
                    "type": "span"
                }
            ],
            "price": "1200"
        },
        {
            "id": 2,
            "name": "Dry Fruits Burfi",
            "cover_img": Burfi,
            "card_title": "Dry Fruits Burfi",
            "card_text": "This sweet has no artificial sweetner and rich source of protein, vitamins, minerals, and dietary fiber, making them a tasty and healthy snack.",
            "img_array": [
                Burfi,
                Burfi1,
                Burfi2,
                Burfi3,
                Burfi4,
                Burfi5,
                Burfi6,
                Burfi7,
            ],
            "size": "200 ml",
            "content": [],
            "price": "1200"
        }
    ]
};
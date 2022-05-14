import c_Mount from '../Assets/Camp Images/Compressed Images/c_Mount Ulap.jpg'
import c_Calaguas from '../Assets/Camp Images/Compressed Images/c_Calaguas Island.jpg'
import c_Onay from '../Assets/Camp Images/Compressed Images/c_Onay Beach.jpg'
import c_SevenSisters from '../Assets/Camp Images/Compressed Images/c_Seven Sisters Waterfall.jpg'
import c_Latik from '../Assets/Camp Images/Compressed Images/c_Latik Riverside.jpg'
import c_Buloy from '../Assets/Camp Images/Compressed Images/c_Buloy Springs.jpg'

import hq_Mount from '../Assets/Camp Images/High Quality Images/hq_Mount Ulap.png'
import hq_Calaguas from '../Assets/Camp Images/High Quality Images/hq_Calaguas Island.jpg'
import hq_Onay from '../Assets/Camp Images/High Quality Images/hq_Onay Beach.jpg'
import hq_SevenSisters from '../Assets/Camp Images/High Quality Images/hq_Seven Sisters Waterfall.jpg'
import hq_Latik from '../Assets/Camp Images/High Quality Images/hq_Latik Riverside.jpg'
import hq_Buloy from '../Assets/Camp Images/High Quality Images/hq_Buloy Springs.jpg'

const campgroundData = [
    {
        name: 'Mount Ulap',
        description: [
            'One of the most famous hikkes in Benguet is Mt Ulap in Itogon.',
            'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tube, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.'
        ],
        submittedBy: 'Andrew Mike',
        images: {
            compressed: c_Mount,
            highQuality: hq_Mount,
            alt: 'Mount Ulap landscape'
        },
        price: '$104.99/night',
        comments: [
            {
                username: 'Adam Jones',
                userComment: 'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
                timePosted: '13h ago'
            },
            {
                username: 'Isaac Dylan',
                userComment: 'Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
                timePosted: '1 day ago'
            },
            {
                username: 'Hudson Luca',
                userComment: 'Definitely recommended going there, not too far and not a lot of people to ruin the experience.',
                timePosted: '3 days ago'
            }
        ]
    },
    {
        name: 'Calaguas Islands',
        description: [
            'A paradise of islands that can rival the white sand beauty of Boracay.',
            'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tube, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.'
        ],
        submittedBy: 'Andrew Mike',
        images: {
            compressed: c_Calaguas,
            highQuality: hq_Calaguas,
            alt: 'Calagugas Islands landscape'
        },
        price: '$112.09/night',
        comments: [
            {
                username: 'Adam Jones',
                userComment: 'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
                timePosted: '13h ago'
            },
            {
                username: 'Isaac Dylan',
                userComment: 'Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
                timePosted: '1 day ago'
            },
            {
                username: 'Hudson Luca',
                userComment: 'Definitely recommended going there, not too far and not a lot of people to ruin the experience.',
                timePosted: '3 days ago'
            }
        ]
    },
    {
        name: 'Onay Beach',
        description: [
            'This is one of the best beach camping sites, beautiful and pristine.', 
            'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tube, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.'
        ],
        submittedBy: 'Andrew Mike',
        images: {
            compressed: c_Onay,
            highQuality: hq_Onay,
            alt: 'Onay Beach landscape'
        },
        price: '$90/night',
        comments: [
            {
                username: 'Adam Jones',
                userComment: 'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
                timePosted: '13h ago',
            },
            {
                username: 'Isaac Dylan',
                userComment: 'Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
                timePosted: '1 day ago'
            },
            {
                username: 'Hudson Luca',
                userComment: 'Definitely recommended going there, not too far and not a lot of people to ruin the experience.',
                timePosted: '3 days ago'
            }
        ]
    },
    {
        name: 'Seven Sisters Waterfall',
        description: [
            'The Seven Sisters is the 39th tallest waterfall in Norway.', 
            'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tube, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.'
        ],
        submittedBy: 'Andrew Mike',
        images: {
            compressed: c_SevenSisters,
            highQuality: hq_SevenSisters,
            alt: 'Seven Sisters Waterfall landscape'
        },
        price: '$124.99/night',
        comments: [
            {
                username: 'Adam Jones',
                userComment: 'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
                timePosted: '13h ago'
            },
            {
                username: 'Isaac Dylan',
                userComment: 'Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
                timePosted: '1 day ago'
            },
            {
                username: 'Hudson Luca',
                userComment: 'Definitely recommended going there, not too far and not a lot of people to ruin the experience.',
                timePosted: '3 days ago'
            }
        ]
    },
    {
        name: 'Latik Riverside',
        description: [
            'Philippines is one of the most dazzling countries in all of Asia.', 
            'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tube, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.'
        ],
        submittedBy: 'Andrew Mike',
        images: {
            compressed: c_Latik,
            highQuality: hq_Latik,
            alt: 'Latik Riverside landscape'
        },
        price: '$114.99/night',
        comments: [
            {
                username: 'Adam Jones',
                userComment: 'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
                timePosted: '13h ago'
            },
            {
                username: 'Isaac Dylan',
                userComment: 'Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
                timePosted: '1 day ago'
            },
            {
                username: 'Hudson Luca',
                userComment: 'Definitely recommended going there, not too far and not a lot of people to ruin the experience.',
                timePosted: '3 days ago'
            }
        ]
    },
    {
        name: 'Buloy Springs',
        description: [
        'This is one of the best beach camping sites, beautiful and pristine', 
        'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tube, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.'
        ],
        submittedBy: 'Andrew Mike',
        images: {
            compressed: c_Buloy,
            highQuality: hq_Buloy,
            alt: 'Buloy Springs landscape'
        },
        price: '$90.99/night',
        comments: [
            {
                username: 'Adam Jones',
                userComment: 'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
                timePosted: '13h ago'
            },
            {
                username: 'Isaac Dylan',
                userComment: 'Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
                timePosted: '1 day ago'
            },
            {
                username: 'Hudson Luca',
                userComment: 'Definitely recommended going there, not too far and not a lot of people to ruin the experience.',
                timePosted: '3 days ago'
            }
        ]
    },
]

export default campgroundData
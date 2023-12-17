const Images = [
    { image: require("../assets/awissawella.jpg") },
    { image: require("../assets/maharagama.jpg") },
    { image: require("../assets/homagama.jpg") },
    { image: require("../assets/gampha.png") },
    { image: require("../assets/nuwaraeliya.png") },
    { image: require("../assets/nikaweratiya.jpg") },
    { image: require("../assets/badulla.jpg") },
];

export const markers = [
    { 
      id:1,
      coordinate: {
        latitude: 6.951829526,
        longitude: 80.217665796,
      },
      areas: ['Puwakpitiya', 'Ruwanwella'],
      title: "Awissawella",
      description: "2-3 hours power outage",
      image: Images[0].image,
      rating: 'Colombo district',
      tobe:true,
      reason: 'Transformer explotion',
      status:'Crew assigned'
    },
    {
      id:2,
      coordinate: {
        latitude: 6.848,
        longitude: 79.9265,
      },
      areas:[
        "Nawinna","Wathegedara","Pannipitiya",'Pamunuwa Road'
        ],
      title: "Maharagama",
      description: "5-2 hours power outage",
      image: Images[1].image,
      rating: 'Colombo district',
      tobe:true,
      reason: 'Tree fallen',
      status:'Crew assigned'
    },
    {
      id:3,
      coordinate: {
        latitude: 6.8408,
        longitude: 80.0139,
      },
      title: "Homagama",
      areas:[
        "Katuwana","Panagoda","Hiripitiya"
      ],
      description: "4-2 hours power outage",
      image: Images[2].image,
      rating: 'Colombo district',
      tobe:false,
      reason: 'Maintains',
      status:'Crew assigned'
    },
    {
      id:4,
      coordinate: {
        latitude: 7.0897,
        longitude: 79.9925,
      },
      areas:[
        "Ihalagama","Pahalagama","Medagama"
      ],
      title: "Gampha",
      description: "2-7 hours power outage",
      image: Images[3].image,
      rating: 'Gampha district',
      tobe:false,
      reason: 'Power shortage',
      status:'Crew assigned'
    },
    {
      id:5,
      coordinate: {
        latitude: 6.97078,
        longitude: 80.78286,
      },
      areas:[
        "Ambewela","Bogawantalawa","Bopattalawa"
      ],
      title: "Nuwara Eliya",
      description: "7-8 hours power outage",
      image: Images[3].image,
      rating: 'Nuwara Eliya district',
      tobe:false,
      reason: 'Defective equipment',
      status:'Crew assigned'
    },
    {
      id:6,
      coordinate: {
        latitude: 8.31223, 
        longitude: 80.41306,
      },
      areas:[
        "Thuparamaya", "Lovamahapaya", "Abhayagiri"
      ],
      title: "Anuradhpura",
      description: "5-7 hours power outage",
      image: Images[4].image,
      rating: 'Anuradhapura district',
      tobe:false,
      reason: 'Tree fallen',
      status:'Crew assigned'
    },
    {
      id:7,
      coordinate: {
        latitude:7.9333296, 
        longitude:  81.0,
      },
      areas:[
        "Divlana", "Thambala", "Girithale"
      ],
      title: "Polonnaruwa",
      description: "5-4 hours power outage",
      image: Images[4].image,
      rating: 'Polonnaruwa district',
      tobe:false,
      reason: 'Power shortage',
      status:'Crew assigned'
    },
    {
      id:8,
      coordinate: {
        latitude:7.717, 
        longitude:80.117,
      },
      areas:[
        "Ihakolagama", "Withikuliya", "Hengamuwa"
      ],
      title: "Nikaweratiya",
      description: "3-4 hours power outage",
      image: Images[4].image,
      rating: 'Kurunegla district',
      tobe:false,
      reason: 'Tree fallen',
      status:'Crew assigned'
    },
    {
      id:9,
      coordinate: {
        latitude:6.9895, 
        longitude:81.0557,
      },
      areas:[
        "Haputalle", "Diyatalawa", "Bandarawela"
      ],
      title: "Badulla",
      description: "2 hours power outage",
      image: Images[5].image,
      rating: 'Badulla district',
      tobe:false,
      reason: 'Maintaince',
      status:'Crew assigned'
    },
];

export const mapDarkStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

  export const mapStandardStyle = [
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
  ];
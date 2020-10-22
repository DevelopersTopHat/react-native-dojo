/**
 * For the sake of simplicity, we are going to be using static data for this dojo.
 */
class DataService {
  constructor() {}

  getElectronicProducts = async () => {
    return new Promise.resolve(electronics);
  };
}

export default DataService;

const electronics = [
  {
    id: 2,
    name: 'Amazon Echo',
    price: 199,
    image: require('../../assets/images/echo.png'),
    description: "You can yell at it to tell you the weather."  
  },
  {
    id: 3,
    name: 'Bose QC 35 Headphones',
    price: 300,
    image: require('../../assets/images/headphones.jpg'),
    description: "Sometimes you only want sound from your headphones, not outside."  
  },
  {
    id: 4,
    name: 'Potato Clock',
    price: 344.99,
    image: require('../../assets/images/potato_clock.jpg'),
    description: "Clock sold separately."  
  },
  {
    id: 5,
    name: 'Google Home',
    price: 222,
    image: require('../../assets/images/google_home.jpeg'),
    description: "You can yell at this to tell you the weather, Google edition."  
  },
  {
    id: 6,
    name: 'Usb',
    price: 10,
    image: require('../../assets/images/USB.jpg'),
    description: "Description here"  
  },
  {
    id: 7,
    name: 'Lemon clock',
    price: 49.99,
    image: require('../../assets/images/lemon_clock.jpg'),
    description: "Allergic to potatoes and need a clock?"  
  },
  {
    id: 8,
    name: 'Amazon Lambda',
    price: 199,
    image: require('../../assets/images/amazon_lambda.png'),
    description: "3"  
  },
  {
    id: 9,
    name: 'Analog Headphones',
    price: 300,
    image: require('../../assets/images/analog_headphones.jpg'),
    description: "Sometimes your headphones need to have a mic."  
  },
  {
    id: 10,
    name: 'Clock Hat',
    price: 344.99,
    image: require('../../assets/images/clock-hat-pin.png'),
    description: "Every bought a potato clock, but didn't get a clock with it?"  
  },
  {
    id: 11,
    name: 'Home, Technical',
    price: 222,
    image: require('../../assets/images/home_technical.jpg'),
    description: "Better than an actual home!"  
  },
  {
    id: 12,
    name: 'Robot',
    price: 10,
    image: require('../../assets/images/robot.jpg'),
    description: "You can yell at this to tell you the weather! WARNING, it might fight back."  
  },
];

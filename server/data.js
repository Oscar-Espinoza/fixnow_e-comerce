import bcrypt from 'bcryptjs'

const data = {
  users: [
    {
      name: 'Oscar',
      email: 'oscardavid2094@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
    },{
      name: 'David',
      email: 'oscardavid9420@gmail.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
  products: [

  {category: 'iPhone', name: 'iPhone 5 screen', description: 'Modulo de iPhone 5', price: 1100, image: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg', inStock: 3},

  {category: 'iPhone', name: 'iPhone 5se screen', description: 'Modulo de iPhone 5se', price: 1100, image: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg', inStock: 7},

  {category: 'iPhone', name: 'iPhone 6 screen', description: 'Modulo de iPhone 6', price: 1200, image: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg', inStock: 8},

  {category: 'iPhone', name: 'iPhone 6 plus screen', description: 'Modulo de iPhone 6 plus', price: 1300, image: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg', inStock: 15},

  {category: 'iPhone', name: 'iPhone 6s screen', description: 'Modulo de iPhone 6s', price: 1400, image: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg', inStock: 6},

  {category: 'iPhone', name: 'iPhone 6s plus screen', description: 'Modulo de iPhone 6s plus', price: 1500, image: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg', inStock: 10},

  {category: 'iPhone', name: 'iPhone 7 screen', description: 'Modulo de iPhone 7', price: 1600, image: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg', inStock: 12},

  {category: 'iPhone', name: 'iPhone 7 plus screen', description: 'Modulo de iPhone 7 plus', price: 1700, image: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg', inStock: 10},

  {category: 'iPhone', name: 'iPhone 8 screen', description: 'Modulo de iPhone 8', price: 1800, image: 'https://www.fixshop.eu/media/carousel_images/1100018646-099_1054087305388501952.jpg.500x0_q85_crop_replace_alpha-%23fff.jpg', inStock: 17},

  ]
}

export default data
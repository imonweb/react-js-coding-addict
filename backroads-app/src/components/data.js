import img1 from '../images/tour-1.jpeg';
import img2 from '../images/tour-2.jpeg';
import img3 from '../images/tour-3.jpeg';
import img4 from '../images/tour-4.jpeg';
import img5 from '../images/tour-5.jpeg';
import img6 from '../images/tour-6.jpeg';

export const pageLinks = [
  {id: 1, href: '#home', text: 'Home'},
  {id: 2, href: '#about', text: 'About'},
  {id: 3, href: '#services', text: 'Services'},
  {id: 4, href: '#tours', text: 'Tours'},
]

export const socialLinks = [
  {id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook'},
  {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
  {id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace'},
]

export const ourServices = [
  {id: 1, icon: 'fas fa-wallet fa-fw', title: 'saving money', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
  {id: 2, icon: 'fas fa-tree fa-fw', title: 'endless hiking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
  {id: 3, icon: 'fas fa-socks fa-fw', title: 'amazing comfort', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.'},
]

 
export const ourTours = [
  {
    id: 1, 
    image: img1, 
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempo voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'china',
    duration: '6',
    price: 'from $2100'
  },
  {
    id: 2, 
    image: img2, 
    date: 'october 1th, 2020',
    title: 'best of java',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempo voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'indonesia',
    duration: '11',
    price: 'from $1400'
  },
  {
    id: 3, 
    image: img3, 
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempo voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'Hong Kong',
    duration: '8',
    price: 'from $3300'
  },
  {
    id: 4, 
    image: img4, 
    date: 'september 15th, 2020',
    title: 'explore kenya',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempo voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'kenya',
    duration: '7',
    price: 'from $2300'
  },
  {
    id: 5, 
    image: img5, 
    date: 'september 15th, 2020',
    title: 'explore Africa',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempo voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'South Africa',
    duration: '8',
    price: 'from $4300'
  },
  {
    id: 6, 
    image: img6, 
    date: 'september 15th, 2020',
    title: 'explore India',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempo voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    location: 'New Delhi',
    duration: '12',
    price: 'from $2300'
  }
]
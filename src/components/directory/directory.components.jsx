//jshint esversion:6
import DirectroyItem from '../directroy-items/directory-item.component';
import './directory.styles.scss';

const categories = [
    {
      id: 1,
      title: 'Hats',
      imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
      route:'shop/hats'
    },
    {
      id: 2,
      title: 'Jackets',
      imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
      route:'shop/jackets'
    },
    {
      id: 3,
      title: 'Mens',
      imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
      route:'shop/mens'
    },
    {
      id: 4,
      title: 'Sneakers',
      imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route:'shop/sneakers'
    },
    {
      id: 5,
      title: 'Womens',
      imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
      route:'shop/womens'
    }
  ];

const Directory = () =>{
    return(
        <div>
            <div className='categories-container'>
                {categories.map( (category) => (
                <DirectroyItem key={category.id} category = {category} />
                ))}
            </div>
        </div>
        
    );
}

export default Directory
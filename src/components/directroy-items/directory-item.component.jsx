//jshint esversion:6
import { useNavigate } from 'react-router-dom';

import './directory-item.styles.scss';

const DirectroyItem = ({category}) => {
    const {imageURL, title, route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return(
        <div className='directory-item-container' onClick={onNavigateHandler}>
            <div className='background-image' style={{backgroundImage: `url(${imageURL})`}}/>
            <div className='directory-item-body-container'>
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
        </div>
      
    );
}


export default DirectroyItem;


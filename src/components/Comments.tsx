import Cards from './Cards';
import comment from './images/image copy 2.png';
import card from './images/test2.jpeg'
import card1 from './images/test3.jpeg'
const Comments = () => {
  return (
    <div 
      className="flex flex-wrap justify-center p-6 items-center gap-8  w-full mb-6"  
      style={{ backgroundImage: `url(${comment})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    <Cards card={card}/>
    <Cards card={card1}/>
    
    </div>
  );
};

export default Comments;

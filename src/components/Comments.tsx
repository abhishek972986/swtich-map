import Cards from './Cards';
import comment from './images/image copy 2.png';

const Comments = () => {
  return (
    <div 
      className="flex flex-wrap justify-center p-6 items-center gap-8 my-10"  
      style={{ backgroundImage: `url(${comment})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
    <Cards/>
    <Cards/>
    
    </div>
  );
};

export default Comments;

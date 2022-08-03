
import './App.css';
import Image from './components/Image';
import Title from './components/Title';
import useCars from './hooks/cars';


function App() {

  const {brand, model, image, animateClass, getRandom} = useCars()
 
  return (
    <div className="bg-slate-700/30 h-[400px] flex w-[800px] rounded-lg shadow-2xl  ">
      <div className="w-1/2 relative">
        <Image image={image} animateClass={animateClass}  />
      </div>
      <div className="flex items-end  h-full relative  flex-col  w-1/2 py-3 pr-5">
      <Title brand={brand} model={model} animateClass={animateClass}/>

        <button
          className="mt-auto w-full text-lg font-semibold hover:text-blue-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-500"
          onClick={getRandom}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default App;

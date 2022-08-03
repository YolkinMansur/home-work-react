import { useEffect, useState } from 'react';

const visible = 'translate-x-0 opacity-100'
const hidden = '-translate-x-6 opacity-0'


export default function useCars() {
    const rootURL = 'https://jse-211.herokuapp.com';
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [image, setImage] = useState('');
    const [animateClass, setAnimateClass] = useState(hidden);
  
    useEffect(() => {
      getRandom();
    }, []);
  
    const getRandom = async () => {
      setAnimateClass(hidden);
      const res = await fetch(rootURL + '/api/cars');
      const data = await res.json();
  
      setTimeout(async () => {
        setBrand(data.brand);
        setModel(data.model);
        setImage(`${rootURL}/images/cars/${data.image}`);
        setTimeout(() => {
          setAnimateClass(visible);
        }, 300);
      }, 500);
    };
  
    return {brand, model, image, animateClass, getRandom}
}
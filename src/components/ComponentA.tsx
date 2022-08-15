import { ComponentB } from './ComponentB';

const ComponentA = () => {
  const color = '#31c5b2';

  return (
    <div>
      <p>Component A</p>
      <ComponentB />
    </div>
  );
};
export {ComponentA}
/* @ts-ignore */
import { useEffect, useState } from 'react';

const UseEffectLesson = () => {
  const [products, setProducts] = useState<any>([]);

  // fetch('api/products')
  //   // [] , [] , [] 10011 01010 1001010 110101 => data
  //   // streamable streamData
  //   .then((res) => res.json())
  //   .then((res) => {
  //     const data = res.data;
  //     setProducts(data);
  //   });

  //1. Mounting (componentDidMount)
  useEffect(() => {
    // Code here will run once after the initial render, equivalent to componentDidMount.
    console.log('Component did mount');
    const fetchProducts = () => {
      fetch('api/products')
        // [] , [] , [] 10011 01010 1001010 110101 => data
        // streamable streamData
        .then((res) => res.json())
        .then((res) => {
          const data = res.data;
          setProducts(data);
        });
    };
    fetchProducts();
  }, []); // Empty dependency array means this effect runs only once.

  //2. Updates (componentDidUpdate)
  useEffect(() => {
    // This code will run when 'value' changes, similar to a specific componentDidUpdate.
    //@ts-ignore
    console.log('Value changed:', value);
    // state => [page,SetPage]
    const fetchProducts = () => {
      //@ts-ignore
      fetch(`api/products?page=${page}`)
        // [] , [] , [] 10011 01010 1001010 110101 => data
        // streamable streamData
        .then((res) => res.json())
        .then((res) => {
          const data = res.data;
          setProducts(data);
        });
    };
    fetchProducts();
    //@ts-ignore
  }, [page]); // Dependency array with 'value'.

  //3. Unmounting (componentWillUnmount)
  useEffect(() => {
    // Setup code, runs on mount or update
    console.log('Effect is running');
    //@ts-ignore
    connectChat('Tien123');
    return () => {
      // Cleanup code, runs on unmount or before the effect runs again
      //@ts-ignore
      disconnectChat();
      console.log('Cleanup for effect');
    };
    //@ts-ignore
  }, [dependencies]); // Specify dependencies here.
  return (
    <div>
      <div>{products[0]?.name}</div>
      <div>
        <button></button>
      </div>
    </div>
  );
};

export default UseEffectLesson;

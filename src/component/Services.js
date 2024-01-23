import React from 'react';
import Card from './Card';
import Cdata from './Cdata';

const Services = () => {
  return (
    <>
      <div className='mt-4'>
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row justify-content-center'>
          <div className='col-10 max auto '>
            <div className='row'>

            {
              Cdata.map((val , index)=>{
                return(
                  <Card
                    key ={val.index}
                    imgsrc={val.imgsrc}

                    title = {val.title}
                  />
                )
              })
            }

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Services;
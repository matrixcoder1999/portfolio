import React from "react";
import Head from "next/head";
import { JobLevel } from "../data";

const Experience = () => {
  return (
    <main className="md:px-10 py-5 px-2 text-white  w-screen h-auto  ">
      <Head>
        <title>George Georgiou | Experience</title>
        <meta name="description" content="Aliks savoullis Portfolio Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className="text-center  m-auto mb-5 ">Experience </h2>
      <section className="grid grid-cols-1 justify-center items-center mb-20  gap-5  ">
        {JobLevel.map((value, index) => (
          <React.Fragment key={index}>
            <div className="md:flex md:flex-row grid grid-cols-1 gap-5 justify-start items-start bg-no-repeat bg-gray-900 text-gray-300 md:w-full shadow-lg shadow-gray-900  py-10  rounded-xl duration-300 border border-1 border-[#13a094] ease-in-out relative text-left pl-[15px] overflow-hidden h-auto">
                <img
                    src={value?.image ? value?.image : '/assets/logo.jpeg'}
                    width="50px" height="50px"
                    className="rounded-full mt-8"
                />
              <div className="md:border-l-2 md:border-gray-300 w-full h-auto md:mt-8 pt-1 md:pt-2 md:pl-5 ">
                <p>{value.year}</p>
                <h3 className="text-white font-bold ">{value.title}</h3>
                <p>{value.role}</p>
                <p>{value.location}</p>
                <br />
                  <ul className="list-outside list-disc px-4">
                      { value.overview.map((list, index) => (
                          <li className="text-sm mb-1 text-justify" key={index}> {list} </li>
                      )) }
                  </ul>
                  <br />
                <p className="text-white"> Skills:</p>
                <p>{value.skills}</p>
              </div>
            </div>
            {/* <p className='text-[12px]  font-semibold'></p>
                            <h3 className='text-[23px] text-gray-300 '>{ value.title }</h3>
                            <p className='font-semibold' >{ value.role }</p>
                            <p className='px-10 font-bold ' >{ value.overview }</p> */}
          </React.Fragment>
        ))}
      </section>
    </main>
  );
};

export default Experience;

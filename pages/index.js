import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/navbar";
import finance from "../public/finance.png";
import snowMountains from "../public/snowMountains.png";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="py-20 bg-gray-900 radius-for-skewed">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-md mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-3xl font-bold">
              Financial Tweaks
            </h1>
            <div className="bg-coolGray-50  container  mx-auto px-2  mt-8 h-14  w-1/4">
            <Image src={finance} alt="image" className=" h-32 w-1/2"/>
            </div>
          </div>
          <section className="bg-coolGray-50 py-4 ">
            <div className="flex flex-row">
              <div className=" container relative ">
              <div className=" flex items-center justify-center  basis-1/4 mx-auto w-full  p-3">
              <p className=" text-2xl max-w-md font-bold text-white text-center mb-8">
                          A financial management app that help you track and
                          analyze your financial status and plan for the future.
                          The goal is to help you understand your financial
                          situation and make informed decisions about your
                          money!
                        </p>
                        </div>
                <div className=" flex flex-wrap -m-4 ">
                  <div className=" flex items-center justify-center  basis-3/4 mx-auto w-full  p-3">
                  
                  <Image src={snowMountains} alt="mountain image" className = "mx-auto"/>
                 
                  </div>
                  
                  
                        
      
                  
  

                
            
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

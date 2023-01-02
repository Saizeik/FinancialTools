import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Navbar } from "../components/navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div className="py-20 bg-gray-900 radius-for-skewed">
        <div className="container mx-auto px-6">
          <div className="mb-16 max-w-md mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-3xl font-bold">
              Financial Tools
            </h1>
          </div>
          <section className="bg-coolGray-50 py-4 ">
            <div className="flex flex-row">
              <div className=" container relative">
                <div className=" flex flex-wrap -m-4 ">
                  <div className=" basis-1/2 mx-auto w-full  p-3">
                    <div className="bg-green-600 border border-coolGray-100 shadow-dashboard rounded-md">
                      <div className="flex flex justify-center items-center px-4 pt-8 pb-6 border-b border-coolGray-100 ">
                        <p className="text-2md md:text-2xl font-bold text-white text-2md font-bold">
                          A financial management app that help you track and
                          analyze your financial status and plan for the future.
                          The goal is to help you understand your financial
                          situation and make informed decisions about your
                          money!
                        </p>
                      </div>
                    </div>
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

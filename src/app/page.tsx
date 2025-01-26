"use client"
import CarRental from '@/components/CarRental';
import HeroSection from '@/components/Hero';
import Recomendation from '@/components/Recommendation';
import React, {useEffect, useState} from "react"
import { Car } from '../../types/car1';
import { client } from '@/sanity/lib/client';
import { allCars } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';



const Home = () => {

  

  return (
    <div>
     
      <HeroSection/>

      <Recomendation/>
      
    </div>
  );
}

export default Home;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import property from '../../topresidencies.json';

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

const FeaturedRes = () => {
  return (
    <div className='p-20'>
        <Swiper>
            {
                property.map((property)=>(
                    <SwiperSlide key={property.id}>
                    <Card className="w-96">
                        <CardHeader shadow={false} floated={false} className="h-96">
                            <img
                            src="./residential_1.jpg"
                            alt="card-image"
                            className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                            <Typography color="blue-gray" className="font-medium">
                               {property.name}
                            </Typography>
                            <Typography color="blue-gray" className="font-medium">
                                {property.price}
                            </Typography>
                            </div>
                            <Typography
                            variant="small"
                            color="gray"
                            className="font-normal opacity-75"
                            >
                            {property.desc}
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            >
                            Add to Cart
                            </Button>
                        </CardFooter>
                    </Card>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </div>
  )
}

export default FeaturedRes
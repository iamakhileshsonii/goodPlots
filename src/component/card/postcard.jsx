import React from 'react';
import { Card, CardBody, CardFooter, Typography, Button} from "@material-tailwind/react";

const Postcard = ({post}) => {
    const {title, desc} = post;
  return (
    <>
    <Card className="mt-6 w-full">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>
          {desc}
        </Typography>
      </CardBody>
    </Card>
    </>
  )
}

export default Postcard
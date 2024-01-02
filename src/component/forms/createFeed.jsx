import React from 'react';
import { Card, Input, Button, Typography, Textarea } from "@material-tailwind/react";
import {db, auth} from "../../firebase";
import { addDoc, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';


const CreateFeed = () => {
    const navigate = useNavigate();

    const feedRef = collection(db, "gp_feed");
    
    async function createFeed(event){
        event.preventDefault();   
        const feed = {
            title: event.target.feedTitle.value,
            desc: event.target.feedDesc.value,
            author: {
                authorName: auth.currentUser.displayName,
                authorId: auth.currentUser.uid
            }
        }

        await addDoc(feedRef, feed);
        navigate("/home");
        
        
    }

  return (
    <div className='grid justify-center p-20'>

    <Card color="transparent" shadow={false} className='border border-color p-10'>
        <Typography variant="h4" color="blue-gray" className='text-center text-3xl'>
            Create Feed
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
            What's in your mind, Let's publish your new feed post!
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={createFeed}>
            <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                Title
            </Typography>
            <Input
                size="lg"
                placeholder="Give title to your feed"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                className: "before:content-none after:content-none feedTitle",
                }}
                name='feedTitle'
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
                What's in your mind...
            </Typography>
            <Textarea name="feedContent" id="" cols="30" rows="10" className='feedDesc' name='feedDesc'></Textarea>
            </div>

            <Button className="mt-6" fullWidth type='submit'>
            Upload
            </Button>
        </form>
        </Card>

    </div>
  )
}

export default CreateFeed;
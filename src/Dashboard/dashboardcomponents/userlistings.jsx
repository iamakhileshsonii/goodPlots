import React, { useEffect, useState } from 'react';
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";

const Userlistings = () => {

    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")))
    const [gp_feed, setGpFeed] = useState([]);
    const postsRef = collection(db, "gp_feed");

    useEffect(() => {
        async function get_current_user_feed() {
            const data = await getDocs(postsRef);
            const transformedData = data.docs.map((document) => (
                { ...document.data(), id: document.id }
            ));
            setGpFeed(transformedData);
        }

        get_current_user_feed();
    }, []);

    async function handleDelete(id){
        const document = doc(db, "gp_feed", id);
        await deleteDoc(document)
        // Filter out the deleted feed from gp_feed state
        setGpFeed(prevFeed => prevFeed.filter(feed => feed.id !== id));
    }

    return (
        <div>
            <div className='block'>
                {isAuth && gp_feed.filter(feed => auth.currentUser?.uid === feed.author.authorId).map((feed) => (
                    <div key={feed.id} className='p-5 m-5 border border-bordercolor rounded'>
                        <div>
                            <h2 className='font-semibold text-lg'>{feed.title}</h2>
                            <p className='text-sm'>{feed.desc}</p>
                            <div className='flex justify-between'>
                            <span className='font-semibold text-sm'>{auth.currentUser.displayName}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={()=>handleDelete(feed.id)} ><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" className='text-red' /></svg>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Userlistings;

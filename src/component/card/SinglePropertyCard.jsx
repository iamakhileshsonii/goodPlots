import React, { useEffect, useState } from 'react';
import poster from '../../assets/images/Bg_cover.jpeg';
import { useParams } from 'react-router-dom';
import { auth, db } from '../../firebase';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useContextData } from '../../context/DataContext';


const SinglePropertyCard = ({propid}) => {

const { propertyId } = useParams();
const [singleProperty, setSingleProperty] = useState([]);

const{gpData, isLoading } = useContextData();

const [authUser, setAuthUser] = useState([]);


  useEffect(() => {
    async function fetchSingleProp() {
      try {
        const filterListing = gpData.filter((list)=> list.id == propertyId);
        setSingleProperty(filterListing[0])       
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    }
    fetchSingleProp();
  }, [propertyId]);


  return (
    <div className='block px-28 py-16'>
        <div className='flex justify-between py-5'>
            <h4 className='text-3xl font-semibold underline underline-offset-8 decoration-red'>{singleProperty.propertyDetail?.title}</h4>
            <p className='text-xs px-5 py-2 bg-red text-white rounded-lg'>₹ {singleProperty.propertyDetail?.expected_price}</p>
        </div>

        <div className='block w-full rounded-3xl'>
            <img src={poster} alt="Property Wallpaper" className='w-full object-cover object-center h-96 rounded-3xl '/>
        </div>

        <div className='flex justify-between py-5'>
            <div className='w-2/3 p-5 rounded-lg'>
                <h5 className='text-xl font-semibold underline underline-offset-8 decoration-red'>About Property</h5>
                <p className='py-5'>{singleProperty.propertyDetail?.desc}</p>
            </div>

            <div className='block w-1/4'>  
                <div className='border border-bordercolor m-4 p-5 rounded-lg'>
                    <h5 className='text-xl font-semibold underline underline-offset-8 decoration-red'>Property Information</h5>
                    <ul className='py-5'>
                        <li>Total Area:  {singleProperty.propertyDetail?.total_area} Sq.Ft.</li>
                        <li>Facing: North-East</li>
                        <li>Type: {singleProperty.propertyDetail?.property_subtype}</li>
                    </ul>
                </div>

                <div className='border border-bordercolor m-4 p-5 rounded-lg'>
                    <h5 className='text-xl font-semibold underline underline-offset-8 decoration-red'>Author Information</h5>
                    <ul className='py-5'>
                        <li>Author Name:  {singleProperty.authInfo?.userName}</li>
                    </ul>
                </div>
            </div>

            
        </div>

        <div className='w-full py-20'>
            <h4 className='text-xl font-semibold underline underline-offset-8 decoration-red'>Similar Properties</h4>
            <div className='flex'>
                {/* {
                    filterSimilarListing.map((property)=>(
                        <SimilarProperties prop={property}/>
                    ))
                } */}
                
            </div>
            <div>
           
            </div>
        </div>

    </div>
  )
}

export default SinglePropertyCard
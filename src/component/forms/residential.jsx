import React from 'react';
import {Card, Input, Checkbox, Radio, Button, Typography} from "@material-tailwind/react";

const ResidentialForm = () => {
  return (
    <>
        <div className='grid justify-center py-20'>
                    <Card color="transparent" shadow={false} className='border border-bordercolor p-10'>
                    <Typography variant="h4" color="blue-gray" className='text-center text-3xl'>
                        Residential 
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal pb-5 border-b border-bordercolor">
                        Publish your new residential property listing on <span className='text-red font-semibold'>GoodPlots</span>.
                    </Typography>
                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Property Title
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Property description 
                        </Typography>
                        <Input
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />   


                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Posession Status
                        </Typography>   
                        <div className="flex gap-10 ali">
                        <Radio name="type" label="Plot" defaultChecked />
                        <Radio name="type" label="Land"  />
                        </div>


                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Ownership Type
                        </Typography>   
                        <div className="flex gap-10">
                        <Radio name="type" label="Free Hold" defaultChecked/>
                        <Radio name="type" label="Lease Hold"  />
                        <Radio name="type" label="Power of Attorney"  />
                        </div>


                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Posession Status
                        </Typography>




                        

                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Ready Vacant Possession
                        </Typography>
                        <Input
                            size="md"
                            variant="static"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>

                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Share Certificate/ Yet to be allotted
                        </Typography>
                        <Input
                            size="md"
                            variant="static"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>


                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">Possession with tenant (not in dispute).</Typography>
                        <div className="flex gap-10">
                        <Radio name="type" label="Yes" defaultChecked/>
                        <Radio name="type" label="No"  />
                    
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        If Yes, Date of eviction
                        </Typography>
                        <Input
                            size="md"
                            variant="static"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>


                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Possession with self and ready to transfer
                        </Typography>
                        <Input
                            size="md"
                            variant="static"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>


                        <Typography variant="h6" color="blue-gray" className="-mb-3">Possession under Dispute.</Typography>
                        <div className="flex gap-10">
                        <Radio name="type" label="Yes" defaultChecked/>
                        <Radio name="type" label="No"  />
                        </div>

                        
                        <div className='block'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        If yes, describe the nature and status of dispute in 100 words
                        </Typography>
                        <Input
                            size="md"
                            variant="static"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                            className: "before:content-none after:content-none",
                            }}
                        />
                        </div>

                        <div className='block'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                        TITLE (check whichever is applicable)</Typography>
                        <Checkbox id="ripple-on" label="Clear Title" ripple={true} />
                        <Checkbox id="ripple-on" label="Title currently under dispute with restriction on sale" ripple={true} />
                        <Checkbox id="ripple-on" label="Title currently under dispute with NO restriction on sale" ripple={true} />
                        <Checkbox id="ripple-on" label="Title previously under dispute but now clear with no restrictions" ripple={true} />
                        </div>


                        <Typography variant="h6" color="blue-gray" className="-mb-3">Mortgaged</Typography>
                        <div className="flex gap-10">
                        <Radio name="type" label="Yes" defaultChecked/>
                        <Radio name="type" label="No"  />
                        </div>



                        <Typography variant="h6" color="blue-gray" className="-mb-3">Property Location</Typography>
                        <div className='flex'>
                        <div className="w-72">
                            <Input label="City" />
                        </div>
                        <div className="w-72">
                            <Input label="Locality" />
                        </div>
                        </div>


                        <Typography variant="h6" color="blue-gray" className="-mb-3">Sale Type</Typography>
                        <div className="flex gap-10">
                        <Radio name="type" label="New" defaultChecked/>
                        <Radio name="type" label="Resale"/>
                        <Radio name="type" label="Distressed Sale"  />
                        </div>


                        <div className='block'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 py-5">Property Features</Typography>
                        

                            <div className='flex'>
                                <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                                Floors Allowed for construction
                                </Typography>
                                <Input
                                    size="md"
                                    variant="static"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>


                            <div className='flex'>
                                <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                                No of open sides
                                </Typography>
                                <Input
                                    size="md"
                                    variant="static"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>


                            <div className='flex'>
                                <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                                Width of road facing the plot (Meters)
                                </Typography>
                                <Input
                                    size="md"
                                    variant="static"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>


                        <div className='block'>
                            <Typography variant="h6" color="blue-gray" className="-mb-3">Facing</Typography>
                            <div className="flex flex-wrap gap-x-3 gap-y-5">
                            <Radio name="type" label="East" defaultChecked/>
                            <Radio name="type" label="West"  />
                            <Radio name="type" label="North"  />
                            <Radio name="type" label="South"  />
                            <Radio name="type" label="North-East"  />
                            <Radio name="type" label="North-West"  />
                            <Radio name="type" label="South-East"  />
                            <Radio name="type" label="South-West"  />
                            </div>
                        </div>


                        </div>

                        
                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Any Construction done
                                </Typography>
                                <div className="flex flex-wrap gap-x-3 gap-y-5">
                            <Radio name="type" label="Yes" defaultChecked/>
                            <Radio name="type" label="No"  />
                            </div>
                        </div>


                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Boundary wall made
                                </Typography>
                                <div className="flex flex-wrap gap-x-3 gap-y-5">
                            <Radio name="type" label="Yes" defaultChecked/>
                            <Radio name="type" label="No"  />
                            </div>
                        </div>


                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Is in a gated colony
                                </Typography>
                                <div className="flex flex-wrap gap-x-3 gap-y-5">
                            <Radio name="type" label="Yes" defaultChecked/>
                            <Radio name="type" label="No"  />
                            </div>
                        </div>

                        <Typography variant="h6" color="blue-gray" className="-mb-3">Area</Typography>
                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Plot area
                                </Typography>
                                <Input
                                    size="md"
                                    variant="static"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                        </div>

                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Plot length
                                </Typography>
                                <Input
                                    size="md"
                                    variant="static"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                        </div>


                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Plot Breadth
                                </Typography>
                                <Input
                                    size="md"
                                    variant="static"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                        </div>

                        

                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Is this a corner plot
                                </Typography>
                                <div className="flex flex-wrap gap-x-3 gap-y-5">
                            <Radio name="type" label="Yes" defaultChecked/>
                            <Radio name="type" label="No"  />
                            </div>
                        </div>

                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Expected price
                                </Typography>
                                <Input
                                    size="md"
                                    variant="static"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                        </div>

                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Booking amount
                                </Typography>
                                <Input
                                    size="md"
                                    variant="static"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                    className: "before:content-none after:content-none",
                                    }}
                                />
                        </div>

                        <div className='flex'>
                        <Typography variant="h6" color="blue-gray" className="-mb-3 text-xs font-normal">
                        Is the Price negotiable
                                </Typography>
                                <div className="flex flex-wrap gap-x-3 gap-y-5">
                            <Radio name="type" label="Yes" defaultChecked/>
                            <Radio name="type" label="No"  />
                            </div>
                        </div>


                        <div className='block'>
                            <Typography variant="h6" color="blue-gray" className="-mb-3">Age of The Property:</Typography>
                            <div className="flex flex-wrap gap-x-3 gap-y-5">
                            <Radio name="type" label="Under 3 years" defaultChecked/>
                            <Radio name="type" label="Under 5 years"  />
                            <Radio name="type" label="5-10 years"  />
                            <Radio name="type" label="Above 10 years"  />
                            </div>
                        </div>


                        </div>

                        {/* SUBMIT BUTTON */}
                        
                        <Button className="mt-6" fullWidth>
                        Submit Listing
                        </Button>
                </form>
                </Card>
        </div>
    </>
  )
}

export default ResidentialForm
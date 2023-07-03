import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { MdFlight } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import airLoading from "../../Assets/loader.gif";

const Policies = () => {
    const airData = useLoaderData();
    const [filteredOptions, setFilteredOptions] = useState([]);
    const [searchItem, setSearchItem] = useState("");
    const [policies, setPolicies] = useState();
    const [resultLoading, setResultLoading] = useState(false);
    const splitPolicies = policies?.split('\n')
        .map((paragraph, index) => <p key={index} className='pb-1.5'>{paragraph}<br /></p>);
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchItem(value);
        console.log(value);
        if (value === "") {
            setFilteredOptions([]);
        } else {
            const filtered = airData.filter((option) =>
                option.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredOptions(filtered);
        }
    }
    const handleSelectOption = async (data) => {
        setFilteredOptions([]);
        setSearchItem(data.name);
        setResultLoading(true);
        await fetch("http://localhost:5000/api/v1/policy", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ airlineName: data.name })
        })
            .then(res => res.json())
            .then(data => {
                console.log("policy: ", data);
                setPolicies(data.data.AirlinesPolicies);
            })
            .catch(error => console.log("error: ", error))
        setResultLoading(false);
    };
    return (
        <>
            <div className='w-[90%] mx-auto'>
                <div className='flex justify-center md:justify-end pt-12'>
                    <div className='w-[90%] lg:w-[40%]'>
                        <label
                            className="block font-medium mb-2 text-gray-700 text-right"
                            htmlFor="name"
                        >
                            Airline Name
                        </label>
                        <div className="p-2 border w-full bg-white mx-auto border-gray-400 rounded flex justify-end items-center h-10">
                            <MdFlight className="text-gray-400 text-lg" />
                            <input
                                type="text"
                                className="ml-1 w-full border-none outline-none"
                                placeholder="Search Your Airlines Name"
                                value={searchItem}
                                onChange={handleSearch}
                                required
                            />
                            <RiArrowDropDownLine />
                        </div>
                        {filteredOptions.length > 0 && (
                            <div className="absolute w-[81%] lg:w-[27%] rounded-sm z-10 bg-gray-700 border-none outline-none text-white">
                                {filteredOptions.map((data, index) => (
                                    <div
                                        key={index}
                                        className="px-4 py-2 cursor-pointer hover:bg-gray-950"
                                        onClick={() => handleSelectOption(data)}
                                    >
                                        {data.name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    {
                        resultLoading ?
                            <>
                                <div className="h-full flex justify-center items-center">
                                    <img className="rounded-full" src={airLoading} alt="" />
                                </div>
                            </>
                            :
                            <>
                            
                                <div className="py-7" >
                                    {
                                        searchItem === "" ?
                                        <h2 className='text-center font-bold text-xl'>Airline Policies</h2>
                                        :
                                        <h2 className='text-center font-bold text-xl'>{searchItem}'s Policies</h2>
                                    }
                                    <div style={{ whiteSpace: 'pre-line' }}>{splitPolicies}</div>
                                </div>
                            </>
                    }
                </div>
            </div>

        </>
    );
};

export default Policies;
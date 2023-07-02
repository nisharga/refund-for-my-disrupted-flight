import React, { useState } from "react";
import FileSVG from "./AccountSettingParts/FileSVG";

const ImageUploader = ({ setAvatar }) => {
  
  const onChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    const url = `https://api.imgbb.com/1/upload?key=a57c49961905bdc8992484e12c0aa9d5`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setAvatar(data.data.url); 
      });
  };

  return  <div
  id="FileUpload"
  className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
>
  <input
    type="file"
    accept="image/*"
    className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
    onChange={onChange}
  />
  <div className="flex flex-col items-center justify-center space-y-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
      <FileSVG />
    </span>
    <p>
      <span className="text-primary">Click to upload</span> or
      drag and drop
    </p>
    <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
    <p>(max, 800 X 800px)</p>
    
  </div>
</div>

};

export default ImageUploader;

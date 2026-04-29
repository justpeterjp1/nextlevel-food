'use client'

import classes from './image-picker.module.css'
import Image from "next/image";
import { useRef, useState } from "react"

export default function ImagePicker({label, name}) {
    const imageInput = useRef();
    const [pickedImage, setPickedImage] = useState(null);

    function handleInputClick() {
        imageInput.current.click();
    }
    function handleImageChange(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setPickedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image selected</p>}
                    {pickedImage && (
                        <Image src={pickedImage} alt="Preview" fill/>
                    )}
                </div>
                <input 
                type="file" 
                id={name} 
                name={name} 
                accept="image/png, image/jpeg" 
                ref={imageInput}
                onChange={handleImageChange}
                className={classes.input} />
                
                <button 
                type="button" 
                className={classes.button} 
                onClick={handleInputClick}>
                    Upload Image
                </button>
            </div>
        </div>
    )
}
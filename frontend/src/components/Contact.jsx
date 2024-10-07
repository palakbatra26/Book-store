import React, { useEffect, useRef } from 'react';

function Contact() {
    const modalRef = useRef(null);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.showModal();  // Automatically show the modal when the component is rendered
        }
    }, []);

    return (
        <div>
            <dialog id="my_modal_3" className="modal" ref={modalRef}>
                <div className=" border border-gray-500 rounded-lg p-6 m-8">
                    <form>
                        <button 
                            type="button" 
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                            onClick={() => modalRef.current.close()} // Close the modal on button click
                        >✕</button>
                        
                        <h3 className="font-bold text-lg">Contact Us</h3> <br />
                        
                        <div className="mt-1 space-y-4">
                            <span>Name : </span><br />
                            <input 
                              type="text" 
                              placeholder="Enter Your Name" 
                              className="w-80 px-3 py-1 border rounded-md outline-none" 
                            />
                            <br />
                        </div>

                        <div className="mt-1 space-y-4">
                            <span>Email : </span><br />
                            <input 
                              type="email" 
                              placeholder="Enter Your Email" 
                              className="w-80 px-3 py-1 border rounded-md outline-none" 
                            />
                            <br />
                        </div>
                        
                        <div className="mt-1 space-y-4">
                            <span className="mt-1">Message : </span><br />
                            <input 
                              type="text" 
                              placeholder="Enter Your Message" 
                              className="w-80 px-3 py-1 border rounded-md outline-none" 
                            />
                            <br />
                        </div>
                        
                        <div className="mt-5 space-y-4 flex justify-around">
                            <button type="submit" className="btn btn-secondary rounded-md mt-3">Submit</button>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Contact;

import React from 'react';

const Contact = () => {
    const handleDownload = () => {
        const url = '/Myresume2024.pdf'; // Specify the path to your file here
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'Felix delgado updated resume'); // Specify the filename here
        document.body.appendChild(link);
        link.click();
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <button className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" onClick={handleDownload}>
                Download Resume
            </button>
        </div>
    );
};

export default Contact;
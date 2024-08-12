import React, { useState } from 'react';
import "../index.css";
import axios from 'axios';

function Dashboard() {
    // State to manage form data
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        link: '',
        image: '',
        days: '',
        hours: '',
        minutes: '',
        seconds: ''
    });

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
                const daysInSeconds = parseInt(formData.days) * 86400;
        const hoursInSeconds = parseInt(formData.hours) * 3600;
        const minutesInSeconds = parseInt(formData.minutes) * 60;
        const totalSeconds = daysInSeconds + hoursInSeconds + minutesInSeconds + parseInt(formData.seconds);
        const timerDate = new Date(Date.now() + totalSeconds * 1000).toISOString().slice(0, 19).replace('T', ' ');

        const timer = timerDate;

        const dataToSubmit = {
            title: formData.title,
            description: formData.description,
            link: formData.link,
            image_url: formData.image,
            timer: timer,
            visibility: 1 // Assuming visibility is set to 1 by default
        };

        try {
            const response = await axios.post('/api/banner/', dataToSubmit);
            
            if (response.status === 200) {
          alert('Banner created successfully!');
          console.log(response)
          localStorage.setItem('bannerId', response.data.id);
          setFormData({
              title: '',
              description: '',
              link: '',
              image: '',
              days: '',
              hours: '',
              minutes: '',
              seconds: ''
          });
            } else {
          alert('Failed to create banner.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }

           
    };

    return (
        <div className="container mx-auto bg-gradient-to-r from-blue to-lightest-blue my-4 p-4" style={{ width: '70%', textAlign: 'left' }}>
            <form className="flex flex-col space-y-4 p-4 border rounded" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <input type="text" name="title" id="title" className="border p-2 rounded" style={{ backgroundColor: 'lightblue', width: '70%', textAlign: 'left', margin: '0 auto' }} placeholder="Title" value={formData.title} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col">
                    <input type="text" name="description" id="description" className="border p-2 rounded" style={{ backgroundColor: 'lightblue', width: '70%', textAlign: 'left', margin: '0 auto' }} placeholder="Description" value={formData.description} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col">
                    <input type="text" name="link" id="link" className="border p-2 rounded" style={{ backgroundColor: 'lightblue', width: '70%', textAlign: 'left', margin: '0 auto' }} placeholder="Link" value={formData.link} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col">
                    <input type="text" name="image" id="image" className="border p-2 rounded" style={{ backgroundColor: 'lightblue', width: '70%', textAlign: 'left', margin: '0 auto' }} placeholder="Image" value={formData.image} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold mx-auto text-gray-700" style={{ width: '20%' }}>Banner Time</h2>
                    <div className="flex justify-center space-x-2">
                        <input type="text" name="days" id="days" className="border p-2 rounded" style={{ backgroundColor: 'lightblue', textAlign: 'left', width: '20%' }} placeholder="Days" value={formData.days} onChange={handleInputChange} />
                        <input type="text" name="hours" id="hours" className="border p-2 rounded" style={{ backgroundColor: 'lightblue', textAlign: 'left', width: '20%' }} placeholder="Hours" value={formData.hours} onChange={handleInputChange} />
                        <input type="text" name="minutes" id="minutes" className="border p-2 rounded" style={{ backgroundColor: 'lightblue', textAlign: 'left', width: '20%' }} placeholder="Minutes" value={formData.minutes} onChange={handleInputChange} />
                        <input type="text" name="seconds" id="seconds" className="border p-2 rounded" style={{ backgroundColor: 'lightblue', textAlign: 'left', width: '20%' }} placeholder="Seconds" value={formData.seconds} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="mt-8"></div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mx-auto hover:bg-green-600" style={{ width: '50%', textAlign: 'center' }}>Show</button>
            </form>
            <div className="mt-8"></div>
        </div>
    );
}

export default Dashboard;

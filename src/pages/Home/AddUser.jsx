import React, { useState } from 'react';
import SectionTitle from '../../component/SectionTitle';

const AddUser = () => {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [emailError, setEmailError] = useState('');

      const handleSubmit = (e) => {
            e.preventDefault();
            if (!name || !email || !phone) {
                  alert('Please fill in all fields');
                  return;
            }

            if (!validateEmail(email)) {
                  setEmailError('Please enter a valid email address');
                  return;
            }

            // Handle form submission logic here
            const user = {
                  name: name,
                  email: email,
                  phone: phone
            }
            console.log(user);
            fetch('http://localhost:5000/users', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(user),
            })
                  .then(res => {
                        console.log(res);
                        if (res.status === 200) {
                              alert('user added succesfully')
                        }
                  })


            // Reset form fields
            setName('');
            setEmail('');
            setPhone('');
            setEmailError('');
      };

      const validateEmail = (email) => {
            // Simple email validation using regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
      };


      return (

            <div>
                  <SectionTitle title={'Add User Here'}></SectionTitle>
                  <form onSubmit={handleSubmit} className="max-w-sm mx-auto  my-12">
                        <div className="mb-4">
                              <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                    Name
                              </label>
                              <input
                                    type="text"
                                    id="name"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="mb-4">
                              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                    Email
                              </label>
                              <input
                                    type="email"
                                    id="email"
                                    className={`appearance-none border ${emailError ? 'border-red-500' : 'border-gray-300'
                                          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => {
                                          setEmail(e.target.value);
                                          setEmailError('');
                                    }}
                                    required
                              />
                              {emailError && (
                                    <p className="text-red-500 text-xs italic">{emailError}</p>
                              )}
                        </div>
                        <div className="mb-4">
                              <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                    Phone Number
                              </label>
                              <input
                                    type="tel"
                                    id="phone"
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                              />
                        </div>
                        <div className="flex items-center justify-center">
                              <button
                                    type="submit"
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              >
                                    Submit
                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default AddUser;

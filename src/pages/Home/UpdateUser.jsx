import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateUser = () => {
      const { _id, name, email, phone } = useLoaderData();
      console.log(name, email, phone);

      const handleUpdate = (e) => {
            e.preventDefault();
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const phone = form.phone.value;
            const updatedUser = {
                  name,
                  email,
                  phone
            }
            fetch(`http://localhost:5000/users/${_id}`, {
                  method: "PUT",
                  headers: {
                        "content-type": "application/json"
                  },
                  body: JSON.stringify(updatedUser)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.modifiedCount > 0) {
                              alert("Updated successfully")

                        }
                  })


      }


      return (
            <div>
                  <form onSubmit={handleUpdate}>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                              <div className="form-control">

                                    <input type="text" name='name' defaultValue={name} className="input input-bordered" />
                              </div>
                              <div className="form-control">

                                    <input type="text" name='email' defaultValue={email} className="input input-bordered" />

                              </div>
                              <div className="form-control">

                                    <input type="text" name='phone' defaultValue={phone} className="input input-bordered" />
                              </div>

                        </div>


                        <input className='btn btn-primary btn-block my-8' type="submit" value="Add Toy" />

                  </form>
            </div>
      );
};

export default UpdateUser;

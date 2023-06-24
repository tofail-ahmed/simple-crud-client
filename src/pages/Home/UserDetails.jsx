import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../component/Button';
import { Link } from 'react-router-dom';

const UserDetails = ({ user, users, setUsers }) => {
      const { _id, name, email, phone } = user;

      const cardVariants = {
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                        duration: 0.5,
                        ease: 'easeOut'
                  }
            }
      };

      const handleDelete = (_id) => {
            fetch(`http://localhost:5000/users/${_id}`, {
                  method: 'DELETE'
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              alert('User deleted succefully')
                              const updatedUsers = users.filter(user => user._id !== _id); // Filter out the deleted user
                              setUsers(updatedUsers);
                        }
                  })
      }

      return (
            <motion.div
                  className="bg-white rounded-lg shadow-md p-4 hover:bg-green-100"
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
            >
                  <div className="flex items-center mb-4 ">
                        <div className="w-[10vw] h-[20vh] rounded-full bg-green-400 flex items-center justify-center text-white text-xl font-bold">
                              {name.charAt(0)}
                        </div>
                        <div className="ml-3">
                              <h2 className="text-xl font-bold text-green-800 uppercase">{name}</h2>
                              <p className="text-green-600">{email}</p>
                              <p className="text-green-700 mb-4">{phone}</p>
                              <div>

                                    <button onClick={() => handleDelete(_id)} className="btn btn-outline border-b-4 bg-green-400 ">
                                          Delete
                                    </button>
                                    <Link className="btn btn-outline border-b-4 bg-green-400 mx-4" to={`/updateuser/${_id}`}>
                                          Update
                                    </Link>
                              </div>
                        </div>
                  </div>

            </motion.div>
      );
};

export default UserDetails;

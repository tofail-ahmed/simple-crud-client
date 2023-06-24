import React, { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import { Audio } from 'react-loader-spinner';
import SectionTitle from '../../component/SectionTitle';

const Home = () => {
      const [users, setUsers] = useState([]);
      const [loading, setLoading] = useState(false);

      useEffect(() => {
            setLoading(true);
            fetch('https://simple-crud-server-blond.vercel.app/users')
                  .then(res => res.json())
                  .then(data => {
                        setUsers(data);
                        setLoading(false);
                  });
      }, []);

      return (
            <div>
                  <SectionTitle title={"Our Precious USers"}></SectionTitle>
                  <div className="flex justify-center items-center ">
                        {loading && (
                              <Audio
                                    height={100}
                                    width={100}
                                    color="#4fa94d"
                                    ariaLabel="audio-loading"
                                    visible={true}
                              />
                        )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
                        {users.map(user => (
                              <UserDetails key={user._id} user={user} users={users} setUsers={setUsers} />
                        ))}
                  </div>
            </div>
      );
};

export default Home;

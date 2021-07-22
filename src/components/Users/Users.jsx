import React from 'react';
import {Avatar} from "@material-ui/core";
import {v1} from "uuid";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                photoURL: 'https://get.pxhere.com/photo/puppy-dog-animal-pet-mammal-nose-golden-retriever-snout-vertebrate-labrador-retriever-labrador-dog-breed-dog-head-retriever-purebred-dog-light-brown-in-the-free-hundeportrait-dog-like-mammal-carnivoran-nova-scotia-duck-tolling-retriever-broholmer-652296.jpg',
                followed: false,
                fullName: 'Alex',
                status: 'Im a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photoURL: 'https://get.pxhere.com/photo/puppy-dog-animal-pet-mammal-nose-golden-retriever-snout-vertebrate-labrador-retriever-labrador-dog-breed-dog-head-retriever-purebred-dog-light-brown-in-the-free-hundeportrait-dog-like-mammal-carnivoran-nova-scotia-duck-tolling-retriever-broholmer-652296.jpg',
                followed: true,
                fullName: 'Bob',
                status: 'Your my first friend',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: v1(),
                photoURL: 'https://get.pxhere.com/photo/puppy-dog-animal-pet-mammal-nose-golden-retriever-snout-vertebrate-labrador-retriever-labrador-dog-breed-dog-head-retriever-purebred-dog-light-brown-in-the-free-hundeportrait-dog-like-mammal-carnivoran-nova-scotia-duck-tolling-retriever-broholmer-652296.jpg',
                followed: false,
                fullName: 'Liza',
                status: 'Your my first friend in my life bitch',
                location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }
    return (
        <div>
            {
                props.users.map((u) => {
                    return <div key={u.id}>
                        <span>

                            <div>
                                <Avatar src={u.photoURL} alt="" style={{height: '70px', width: '70px'}}/>
                            </div>

                            <div>
                                {u.followed ?
                                    <button onClick={() => props.unfollowUser(u.id)}>Follow</button> :
                                    <button onClick={() => props.followUser(u.id)}>UnFollow</button>}
                            </div>

                        </span>

                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </span>
                        </span>
                    </div>
                })
            }
        </div>
    );
};

export default Users;

import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers } from './userSlice';
import type { User } from '../../api/user';

export function User() {
    const dispatch = useAppDispatch();
    const users = useAppSelector(state => state.user.users);
    const status = useAppSelector(state => state.user.status);
    const error = useAppSelector(state => state.user.error);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <ul>
            {users.map((u: User) => (
                <li key={u.id}>{u.name}</li>
            ))}
        </ul>
    )   
}
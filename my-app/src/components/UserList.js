import React, {useCallback, useEffect, useState} from "react";
import Avatar from '@atlaskit/avatar';
import DynamicTable from '@atlaskit/dynamic-table';
import {v4} from 'uuid';
import DropdownMenu, {
    DropdownItem,
    DropdownItemGroup,
} from '@atlaskit/dropdown-menu';


const user_enpoint = "https://reqres.in/api/users";


function UserList() {

    const [userData, setUserData] = useState([]);
    const [userRows, setUserRows] = useState([]);

    const createHead = (withWidth = false) => {
        return {
            cells: [
                {
                    key: 'name',
                    content: 'Name',
                    isSortable: true,
                    width: withWidth ? 25 : undefined,
                },
                {
                    key: 'email',
                    content: 'email',
                    shouldTruncate: true,
                    isSortable: true,
                    width: withWidth ? 15 : undefined,
                },
                {
                    key: 'friend',
                    content: 'friend with',
                    shouldTruncate: true,
                    isSortable: true,
                    width: withWidth ? 10 : undefined,
                },
            ],
        };
    };

    const userList = () => {
        const getUsers = fetch(user_enpoint).then(
            (res) => res.json()
        ).then(
            (res) => {
                const data = res.data;
                console.log(data)
                if (data) {
                    setUserData(data);
                    const rows = data.map((user, index) => ({
                        key: v4(),
                        isHighlighted: false,
                        cells: [
                            {
                                key: v4(),
                                content: (
                                    <Avatar src={user.avatar} name={user.first_name} size="medium"/>
                                ),
                            },
                            {
                                key: v4(),
                                content: user.email,
                            },
                            {
                                key: v4(),
                                content: (
                                    <DropdownMenu trigger="More">
                                        <DropdownItemGroup>
                                            <DropdownItem>{user.last_name}</DropdownItem>
                                        </DropdownItemGroup>
                                    </DropdownMenu>
                                ),
                            },
                        ],
                    }));
                    setUserRows(rows);
                }
            }
        )
            .catch(
                console.log("Api error")
            );
    };

    function createKey(input = "") {
        return input ? input.replace(/^(the|a|an)/, '').replace(/\s/g, '') : input;
    }

    useEffect(() => {
        userList();
    }, []);


    return (
        <div className={'user-list-wrapper'}>
            <h2>This is use fetch api with useCallback</h2>
            <div className={'user-list'}>
                <DynamicTable
                    head={createHead(true)}
                    rows={userRows}
                    rowsPerPage={5}
                    defaultPage={1}
                    loadingSpinnerSize="large"
                    isRankable
                />
            </div>
        </div>
    );
}

export default UserList;
const getDummy = () => {
    return items;
}

const items = [
    {id: 1, name: 'name1', message: 'message6',
        comments: [
            {id: 1, postId: 1, name: 'guest', message: 'comment1'},
            {id: 2, postId: 1, name: 'guest', message: 'comment2'},
        ]
    },
    {id: 2, name: 'name2', message: 'message7',
        comments: [
            {id: 3, postId: 2, name: 'guest', message: 'comment'},
            {id: 4, postId: 2, name: 'guest', message: 'comment'},
        ]
    },
    {id: 3, name: 'name3', message: 'message8', 
        comments: [
            {id: 5, postId: 3, name: 'guest', message: 'comment'}
        ]
    },
    {id: 4, name: 'name4', message: 'message9', 
        comments: [
            {id: 6, postId: 4, name: 'guest', message: 'comment'}
        ]
    },
    {id: 5, name: 'name5', message: 'message10', 
        comments: [
            {id: 7, postId: 5, name: 'guest', message: 'comment1'},
            {id: 8, postId: 5, name: 'guest', message: 'comment2'},
            {id: 9, postId: 5, name: 'guest', message: 'comment3'},
        ]
    },
]

export default getDummy;
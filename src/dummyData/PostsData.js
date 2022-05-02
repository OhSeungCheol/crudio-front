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
    {id: 4, name: '슈카월드', message: '사회보험의 미래, 더 내느냐 덜 받느냐', 
        comments: [
            {id: 6, postId: 4, name: 'guest', message: '큰 문제는 저출산으로 인해 고령인구가 투표자 및 정치인의 대부분을 차지하게 될 거라서 젊은 세대의 부담을 외면하는 정책이 늘어날 가능성이 큼.'}
        ]
    },
    {id: 5, name: '코로나수호자', message: '증상이 없더라도 메릴랜드 대학에서 실시하는 간단한 설문 조사에 답변하여 의료 연구진이 코로나19 확산을 예측하는 데 도움을 줄 수 있습니다. 잠시만 시간을 내어 참여해주시겠어요?', 
        comments: [
            {id: 7, postId: 5, name: 'guest', message: '설문완료'},
            {id: 8, postId: 5, name: 'guest', message: '설문완료2'},
            {id: 9, postId: 5, name: 'guest', message: '설문완료3'},
        ]
    },
]

export default getDummy;
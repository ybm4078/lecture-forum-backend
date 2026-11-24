// userService 라는 이름의 "user"는
// 데이터베이스에서 user 테이블과 상호작용 하는 일꾼이라서 userService임

import prisma from "../config/prisma.ts";

const createUser = async (data) => {
    // User 객체를 받아서
    // 데이터베이스에 쓰는 일  => prisma.해당테이블명.create()

    // 이 일은, 백엔드 앱 안에서 일어나는 일이 아니라
    // 외부에 있는 '데이터베이스'라는 시스템과 통신을 하는 일임
    // prisma는 '비동기함수'임. 그렇기 때문에 일이 끝날 때 까지 기다려줄 필요가 있음

    // fetch를 했을 땐 .then()과 .catch()를 붙여서 다음 다음 일을 하는 방식이었는데
    // async - await 이라는 방식으로 비동기 함수를 처리할 것임
    // 비동기 함수에는 await 키워드를 붙이고, 그걸 감싸고 있는 부모 함수에 async를 붙여줌
    // 이렇게 하면 비동기 함수가 실행해서 결과가 도착될 때 까지 기다림
    // prisma의 create 명령을 내리면
    // 그에 대한 결과는 "생성된" 데이터베이스 칼럼 정보가 도착됨
    const result = await prisma.user.create({
        data
    });
    return result;
};

export default {
    createUser,
};
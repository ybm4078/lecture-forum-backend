import { type Request, type Response } from "express";
import { User } from "../generated/prisma/client.ts";
import userService from "../services/userService.ts";
import { UserCreateInput } from "../generated/prisma/models/User.ts";

// userController 라는 이름의 "user"는
// 경로 상에서 /user로 시작되는 요청이 들어오게 되는 곳이라서 userController임

// 컨트롤러(일꾼)은 (req: Request, res: Response) => {} 모양으로 정해져 있음
// Request,Response는 내장타입이 아니라, express에서 가져온 타입이어야 함
// 컨트롤러는 첫번째 매개변수의 req 자리에 프로트엔드에서 보내온 편지 자체가 들어옴
//          두번째 매개변수의 res 자리에는 앞으로 내보네야 하는 빈 택배상자가 들어옴

// 컨트롤러 계층은 프로그램 내부에서 데이터를 조작하는 1차 일꾼

const createUser = async (req: Request, res: Response) => {
    // 1. 프로트엔드에서 보내온 정보를 편지에서 읽고
    try{
        const {username,password,nickname, email,phoneNumber, gender, role} = req.body;

        // 2. 그 정보가 옳은지 판단하고
        // 2-1. 안 맞으면 처리가 안됐다는 내용으로 택배를 보내고

        //                        이미 User 테이블에 등록된 '사용자'라는 뜻을 담은 데이터 덩어리가 아니라
        // 3-0. 데이터베이스에게 보내 줄, 'User 테이블에 추가"할" 테이터'를 만들어줌
        const newUser: UserCreateInput = {
            username:username,
            password:password,
            nickname:nickname,
            email:email,
            phoneNumber: phoneNumber,
            gender:gender,
            role:role,
        };

        // 3-1. 테이터베이스에게 newUser 내용을 저장하도록 요청
        //      데이터베이스와 통신을 하는 일을 할 service도, 내부에서 일이 끝날 때 까지 기다려야 함
        const result = await userService.createUser(newUser);

        // 4. 회원 가입에 됐다는 내용으로 택배를 보내고
        // 여기서부터는 응답(Response) 처리
        // res라는, 앞으로 응답에 나갈 박스에
        // result 결과를 json으로 가공하여 넣음
        res.status(201).json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "유저 생성 중 오류가 발생하였습니다"});
    }
}

const updateUser = (req: Request, res: Response) => {};

export default {
    createUser,
    updateUser,
};
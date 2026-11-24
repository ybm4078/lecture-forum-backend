import bcrypt from "bcrypt";

// bcrypt라는 패키지는 암호화를 도와주는 패키지인데,
// 암호화 기능이 OS 내장 (javascript 내장이 아니라) = 외부 기능을 빌어서 사용하는 패키지 = 비동기

// 암호화를 하는 함수
const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
};

// 암호화한 값을 검증하는 함수 (로그인할 때)
const verifyPassword = async (plainPassword: string, hashedPassword: string) => {
    // bcrypt.compare(비교할원래텍스트,비교할암호화된텍스트) : 비동기함수, 두 개의 값을 비교해서 boolean 리턴함
    return await bcrypt.compare(plainPassword, hashedPassword);
};

export default {
    hashPassword,
    verifyPassword,
};

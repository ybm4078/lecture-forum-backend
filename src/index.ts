import express from 'express';
import  dotenv from 'dotenv';

// 환경설정 파일을 불러오는 도구가 필요함 => 그래서 설치한게 dotenv 패키지
// 환경설정 파일을 불러오는 dotenv 패키지 호출
dotenv.config();

// 백앤드를 구성하는 express 패키지를 이용해 앱 만들기
const app = express();

// 환경 변수 중 key가 PORT인 값을 가져오되,
// 프로그램을 실행한 입장에서 PORT는 있을 수도 있고 없을 수도 있는 상황
// PORT라는 환경변수는 프로그램에 포함된게 아니라 .env라는.
// 자바스크립트 엔진이 관장하는 영역이 아니기 때문
const PORT = process.env.PORT;

if (isNaN(Number(PORT))) {
    console.log("PORT에 오류가 존재합니다.");
    // 프로그램 중요 코드
    process.exit(1);
}

// 실제 app을 구동
// app.listen(여는포트번호, 서버가실행되면서해야되는 함수)
app.listen(PORT,() => {
    console.log(`서버실행됨! http://localhost:${PORT}`);
})
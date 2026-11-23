import express from 'express';
import  dotenv from 'dotenv';
import userRouter from "./routes/userRouter.ts";

// 환경설정 파일을 불러오는 도구가 필요함 => 그래서 설치한게 dotenv 패키지
// 환경설정 파일을 불러오는 dotenv 패키지 호출
dotenv.config();

// 백앤드를 구성하는 express 패키지를 이용해 앱 만들기
const app = express();

// express 앱에 기능을 확장할 때에는 app.use()메서드를 사용해서 확장함

// express.json() : 요청(Request)의 본문(body)에 담긴 내용(JSON 데이터)을 객체로 변환(파싱)하여 request.body에 저장
//              프론트엔드에서 요청이 오는 것도 string으로 옴. 그래서 객체로 변환해야되는데 그걸 express는 자동으로
//              대문에 설치하면 매 번 써줄 필요없이 해줌 => 경비원이 번역기를 갖고 있음
app.use(express.json());

// express.urlencoded({ extended: true })
// 요청(Request)의 본문(body)에 담긴 URL-encoded 데이터를 객채로 변환(파싱)하여 request.body에 저장
// URL은 한글을 원래 포함할 수 없기 때문에 변환을 하게 되는데 ,그것을 한글로 받아들일 수 있게 하는 기능
app.use(express.urlencoded({ extended: true }));


// 이 앱에 Request가 들어올 때의 경로를 읽어서
// 첫번쨰 매개변수의 값인 '/user'로 시작하면. 두번째 매개변수의 파일로 Routing시킴
app.use("/user", userRouter)








// ----------------- Express 구동 부 -----------------------------

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
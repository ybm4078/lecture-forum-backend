
// 내 프로그램 내부에서 생성한 prisma 정보를 가지고
// 백앤드가 실행되는 중(express)에 "실제" 데이터베이스와 통신을 할 수 있게 해주는 파일


// prisma.config.ts는 express와는 관련없는 파일임
// "prisma"라는 패키지는 schema.prisma를 가지고 파일 생성과 관련을 지으며,
// "@prisma/client" 패키지는 express에서 prisma로 통신할 수 있게 해주는 패키지


import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.ts";

// 각각의 접속 정보는 string만 받을 수 있음 (port는 number임)
// 환경변수에서 가져온 값은 string | undefined 타입이기 때문에
// 논리합을 통해 값이 없을 경우 빈 string을 넣도록 조치
const adapter = new PrismaMariaDb({
    host: process.env.PRISMA_HOST || "",
    port: Number(process.env.DATABASE_PORT),
    user: process.env.PRISMA_USERNAME || "",
    password: process.env.PRISMA_PASSWORD|| "",
    database: process.env.PRISMA_NAME|| "",
    connectionLimit: 5,     // 동시 처리량
});

const prisma = new PrismaClient({ adapter });

export default prisma;
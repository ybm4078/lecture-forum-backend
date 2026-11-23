import { defineConfig } from "prisma/config";
import "dotenv/config";

// 데이터베이스 URL
// mysql://사용자이름:비밀번호@주소:포트/데이터베이스명

const DATABASE_URL = `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;
const SHADOW_DATABASE_URL = `mysql://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.SHADOW_DATABASE_NAME}`;

const config = defineConfig({
    // schema : prisma가 동작할 때 참고해야 하는 스키마 파일의 위치를 지정
    schema: "prisma/schema.prisma",
    // migrations : prisma가 초기 설정 이후 스키마가 변경되면 변경 작업을 한 SQL문이 저장되는 위치 지정
    migrations: {
        path: "prisma/migrations",
    },
    // datasource : prisma가 데이터베이스에 접근할 때 사용하는 정보를 지정
    datasource: {
        url: DATABASE_URL,
        shadowDatabaseUrl: SHADOW_DATABASE_URL,
    },
});

export default config;

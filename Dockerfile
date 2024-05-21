# Nginx 이미지를 기반으로
FROM nginx:alpine

# 작업 디렉토리 설정
WORKDIR /usr/share/nginx/html

# 현재 디렉토리의 모든 파일을 컨테이너의 작업 디렉토리에 복사
COPY . .

# Nginx 포트 설정
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]

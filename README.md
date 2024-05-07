# learning-docker-101

Repository สำหรับการเรียนการสอน [Docker-101](https://github.com/actlook25957/docker-101) 


## [Day3] Docker 101 


### Part 3
หลังจาก docker compose up database แล้ว เราจะ เข้าไปดูข้อมูลใน database กัน

```
docker container exec -it postgres bash
```

```
root@2d70e5f14662:/# postgres
```

```
root@2d70e5f14662:/# psql -d postgres -U postgres
```

```
postgres-# \c postgres
```

```
postgres=# select * from merchants;
```

## [Day5] Docker 101 

imposters.ejs == ไฟล์ที่รวม Less API ไว้สักอย่าง

third-party.json == 

if use htpps postman WARNING! "Self signed certificate" that mean it need certificate 
if use htpp will not have this WARNING but anyway these problem not affect anythings

ระหว่าง : จะแบ่งฝั่ง ซ้ายเป็นฝั่ง Client และฝั่งขวาเป็นฝั่ง Container 

```
volumes:
      - ./backend-testing/test-report:/etc/newman/newman
```




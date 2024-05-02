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



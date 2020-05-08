
```.env
username: username
password:   ???????? 

mongodb+srv://username:?????@mflix-b6tos.mongodb.net/test
```

```shell script
# navigate to mflix directory
cd mflix-xxxx/mflix/data

# import data into Atlas
mongorestore --drop --gzip --uri mongodb+srv://username:???????@<YOUR_CLUSTER_URI> data

The entire dataset contains almost 200,000 documents, so importing this data
/usr/local/opt/mongodb-community-shell/bin/mongo    
/usr/local/opt/mongodb-community/bin/mongo 
/usr/local/opt/mongodb-community/bin/mongo mongodb+srv://username:???????@mflix-b6tos.mongodb.net/test        
```

```shell script
~/repo/mongo-db/M220JS/mflix-js master ⇡1 !4 ❯ node -v                                                                                                                                                            ↵ INT 14m 6s 03:04:59
v10.17.0
~/repo/mongo-db/M220JS/mflix-js master ⇡1 !4 ❯   

```

```shell script
# install MFlix dependencies
npm install
# start the MFlix application
npm start
npm test -t TICKET_TEST_NAME
npm test -t db-connection

```


```shell script
/usr/local/opt/mongodb-community/bin/mongostat  -u username -p ??????? --host mflix-b6tos.mongodb.net --authenticationDatabase admin

/usr/local/opt/mongodb-community/bin/mongostat  -u username -p ?????? --host mflix-b6tos.mongodb.net --authenticationDatabase admin

```
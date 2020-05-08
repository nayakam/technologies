
# Setup & Connection

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

# JS Details
*   [Callbacks, Promises and Async/Await](https://medium.com/front-end-weekly/callbacks-promises-and-async-await-ad4756e01d90)
*   [When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://www.freecodecamp.org/news/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26/)
    *   Fat-arrow functions are anonymous
        *   Harder to debug - can't be able to trace the name of the function or the exact line number where it occurred
        *   No self-referencing - If your function needs to have a self-reference at any point (e.g. recursion, event handler that needs to unbind), it will not work.
        *   No binding of ‘this’ - 
    *   Not to use
        *   Object methods with this because inherit the value of this from its parent scope.
        *   Callback functions with dynamic context
        *   When it makes your code less readable
    *   When you should use them
        *   Arrow functions shine best with anything that requires this to be bound to the context, and not the function itself.
        *   map and reduce 
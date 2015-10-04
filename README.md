# trikaar
Pre-requisite installs:
1- Visual studio 2015 enterprise
2-Node.js 
3-Express.js
4-Mongodb


#Express.js installation
cmd $ npm install express --save
#Mongo DB configuration
mongodb.conf
dbpath = F:\trikaar\Trikaar\mongoDB\data\db
logpath = F:\trikaar\Trikaar\mongoDB\mongo-logs.log
logappend = true

cmd F:\Program Files\MongoDB\bin>mongod.exe --config "F:\Program Files\MongoDB\bin\m
ongod.conf" --install
cmd net start mongodb

to stop service
cmd net stop mongodb

To commit using git explorer
Close all applications and then commit. remember to stop mongo db


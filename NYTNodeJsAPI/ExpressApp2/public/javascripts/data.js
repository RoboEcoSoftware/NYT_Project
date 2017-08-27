var TYPES = require("tedious").TYPES;
var msSqlConnecter = require("./msSqlConnecter"); 

var config = {
    userName:"proxyNYT",
    password: "123456",
    server: "localhost",
    options: {
        database: "NYTdb",
        encrypt: true,
    }
}; 

var product =
    [
        {
            "id": 1,
            "productName": "Pen",
            "productPrice": "200",
            'productStock': "false"
        },
        {
            "id": 2,
            "productName": "Pencil",
            "productPrice": "200",
            "productStock": "false"
        },
    ];



var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/bringit";

exports.getProducts = function (req, res) {

    res.send(product);
};

exports.getBringerJob = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var query = { BringerID: req.params.BringerID };
        db.collection("BringerJob").find(query).toArray(function (err, result) {
            if (err) throw err;
            return res.json(result);
            db.close();
        });
    });
};

exports.addBringerJob = function (req, res) {
    var data = req.body;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        db.collection("bringerjob").insertOne(data, function (err, res) {
            if (err) throw err;
            console.log("1 addBringerJob inserted");
            db.close();
        });
    });
}

exports.getSenderJob = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        //var query = { BringerID: "B0001" };
        var query = { SenderID: req.params.SenderID };
        db.collection("SenderJob").find(query).toArray(function (err, result) {
            if (err) throw err;
            return res.json(result);
            db.close();
        });
    });
};


exports.addSenderJob = function (req, res) {
    var data = req.body;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        db.collection("SenderJob").insertOne(data, function (err, res) {
            if (err) throw err;
            console.log("1 addSenderJob inserted");
            db.close();
        });
    });
}

exports.getBringerJobDetail = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        //var query = { BringerID: "B0001" };
        var query = { BringerID: req.params.BringerID };
        db.collection("BringerJobDetail").find(query).toArray(function (err, result) {
            if (err) throw err;
            return res.json(result);
            db.close();
        });
    });
};

exports.addBringerJobDetail = function (req, res) {
    var data = req.body;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        // var myobj = { name: "Company Inc", address: "Highway 37" };
         db.collection("BringerJobDetail").insertMany(data, function (err, res) {
            if (err) throw err;
            console.log("addBringerJobDetail inserted");
            db.close();
        });
    });
}

exports.getSenderJobDetail = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;

        //var query = { BringerID: "B0001" };
        var query = { SenderID: req.params.SenderID };
        db.collection("SenderJobDetail").find(query).toArray(function (err, result) {
            if (err) throw err;
            return res.json(result);
            db.close();
        });
    });
};

exports.getSenderJobMactching = function (req, res) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
    db.collection('SenderJobDetail').aggregate([
        {

                //( { geoNear: 'SenderJobDetail', near: {type: "Point", 
                //coordinates: [100.98817000000001, 13.129480000000001]
            //}, spherical: true, maxDistance: 100})  

            "$geoNear": {
                "near": {
                    "type": "Point",
                   // "coordinates": [parseFloat(req.params.lng), parseFloat(req.params.lat)]100.98817000000001
                    "coordinates": [100.98817000000001, 13.129480000000001]
                },
                "distanceField": "distance",
                "maxDistance": 50,
                "spherical": true
            }
        },
        //{
        //    "$sort": { "distance": -1 } // Sort the nearest first
        //}
    ],
        function (err, docs) {
           return  res.json(docs);
            });
    db.close();
    });   
};

exports.deleteBringerJobDetail = function (req, res) {
    var data = req.body;
        MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection("BringerJobDetail").deleteMany(data, function (err, res) {
            if (err) throw err;
            console.log("BringerJobDetail deleted!!");
            db.close(); 
        });
    });
}

exports.deleteBringerJob = function (req, res) {
    var data = req.body;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection("BringerJob").deleteMany(data, function (err, res) {
            if (err) throw err;
            console.log("BringerJob deleted!!");
            db.close();
        });
    });
}

exports.deleteSenderJobDetail = function (req, res) {
    var data = req.body;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection("SenderJobDetail").deleteMany(data, function (err, res) {
            if (err) throw err;
            console.log("SenderJobDetail deleted!!");
            db.close();
        });
    });
}

exports.deleteSenderJob = function (req, res) {
    var data = req.body;
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        db.collection("SenderJob").deleteMany(data, function (err, res) {
            if (err) throw err;
            console.log("SenderJob deleted!!");
            db.close();
        });
    });
}



exports.addSenderJobDetail = function (req, res) {
    var data = req.body;

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        // var myobj = { name: "Company Inc", address: "Highway 37" };
        db.collection("SenderJobDetail").insertMany(data, function (err, res) {
            if (err) throw err;
            console.log("1 addSenderJobDetail inserted");
            db.close();
        });
    });
}
exports.addProduct = function (req, res) {
    var data = req.body;
    product.push(data);
    res.send(product);
}



        exports.deleteProduct = function (req, res) {

            var id = parseInt(req.params.id) - 1;
            var itemdeleted = product.splice(id, 1)
            if (itemdeleted === undefined) {
                res.send("Not Deleted");
            }
            else {
                ;
                res.send(product);
            }
        }


        exports.updateProduct = function (req, res) {
            var id = parseInt(req.params.id) - 1;
            var productToUpdate = product[id];
            var data = req.body;

            if (productToUpdate === undefined) {

                res.send("Not Updated");
            }
            else {
                productToUpdate.productName = data.productName;
                productToUpdate.productPrice = data.productPrice;
                productToUpdate.productStock = data.productStock;
                res.send(product);
            }

        }


//////////////////////////////////////////////////////////////////////////////////////

exports.insertStudent = function (req, res) {
            //when insert 
    var con = new msSqlConnecter.msSqlConnecter(config);
    var data = req.body;
            con.connect().then(function () {
                new con.Request("insert into student values(@id,@name,@age)")
                    .addParam("id", TYPES.Int, data.Id)
                    .addParam("name", TYPES.VarChar, data.Name)
                    .addParam("age", TYPES.Int, data.Age)
                    .onComplate(function (count) {
                        res.send("Inserted 1 record");
                    })
                    .onError(function (err) {
                        res.send("Inserted Error!!");
                    })
                    .Run();
            }).catch(function (ex) {
                console.log(ex);
            });
        }

exports.queryAll = function (req, res)
        {
            var con = new msSqlConnecter.msSqlConnecter(config);
            con.connect().then(function () {
                new con.Request("select * from student")
                    .onComplate(function (count, datas) {
           
                        //res.send("Connected");
                        res.send(datas);
                    })
                    .onError(function (err) {
                        
                        res.send("not Connected");
                    }).Run();
            }).catch(function (ex) {
                res.send(ex);
                });
           // res.send(datas);

    //var Connection = require('tedious').Connection;
    //    var config = {
    //    userName: 'proxyNYT',
    //    password: 'fsefsfsfe',
    //    server: 'localhost',
    //    // If you are on Microsoft Azure, you need this:  
    //    options: { encrypt: true, database: 'NYTdb' }
    //};
    //var connection = new Connection(config);
    //connection.on('connect', function (err) {
    //    // If no error, then good to proceed.  
    //    res.send("Connected");
    //});  
        }



exports.queryById = function (req, res) {
    var con = new msSqlConnecter.msSqlConnecter(config);
    con.connect().then(function () {
        new con.Request("select * from student where ID = @id ")
            .addParam("id", TYPES.Int, req.params.id)

            .onComplate(function (count, datas) {

                //res.send("Connected");
                res.send(datas);
            })
            .onError(function (err) {

                res.send("not Connected");
            }).Run();
    }).catch(function (ex) {
        res.send(ex);
    });
    // res.send(datas);

    //var Connection = require('tedious').Connection;
    //    var config = {
    //    userName: 'proxyNYT',
    //    password: 'fsefsfsfe',
    //    server: 'localhost',
    //    // If you are on Microsoft Azure, you need this:  
    //    options: { encrypt: true, database: 'NYTdb' }
    //};
    //var connection = new Connection(config);
    //connection.on('connect', function (err) {
    //    // If no error, then good to proceed.  
    //    res.send("Connected");
    //});  
}
        function updateData(callback) {
            var con = new msSqlConnecter.msSqlConnecter(config);
            con.connect().then(function () {
                new con.Request("update student set name = @name where id > @id")
                    .addParam("id", TYPES.Int, 3)
                    .addParam("name", TYPES.VarChar, "frank")
                    .onComplate(function (count) {
                        if (callback)
                            callback(count);
                    })
                    .onError(function (err) {
                        console.log(err);
                    })
                    .Run();
            }).catch(function (ex) {
                console.log(ex);
            });
        }

        function deleteData(callback) {
            var con = new msSqlConnecter.msSqlConnecter(config);
            con.connect().then(function () {
                new con.Request("delete from student where id > @id")
                    .addParam("id", TYPES.Int, 3)
                    .onComplate(function (count) {
                        if (callback)
                            callback(count);
                    })
                    .onError(function (err) {
                        console.log(err);
                    })
                    .Run();
            }).catch(function (ex) {
                console.log(ex);
            });
        } 

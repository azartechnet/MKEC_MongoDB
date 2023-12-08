const {MongoClient}=require('mongodb')
const uri="mongodb+srv://admin:admin@cluster0.ugfvyks.mongodb.net/?retryWrites=true&w=majority";
const client=new MongoClient(uri);
async function run()
{
    try
    {
    await client.connect()
    const db=client.db('mcadepartement')
    const collection=db.collection('mycollection')
    var myobj={_id:1001,name:"azar1",age:34,email:"azar@gmail.com",salary:1000}
    const f1=await collection.insertOne(myobj);
    console.log(f1.insertedId)
    }
    finally
    {
   await client.close();
    }
}
run().catch(console.dir)
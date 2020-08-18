// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    try{
        const data = await db.collection('Heartmore').orderBy('number', 'desc').get();
        const datacount = await db.collection('Heartmore').count();
        return {
            data,datacount
        }
    }catch(e){
        console.log(e)
    }
    
}
import axios from 'axios'
import fs from 'fs'

//TODO: Comments from Graph API

const cfg = {
  liveVideoID: process.env.LIVE_VIDEO_ID || 1812838522556544,
  accessToken:
    process.env.ACCESS_TOKEN ||
    'EAAQi1tOQCP4BO8tewOoV8RlLCOI8BruOxLbUbUdrFYKAgdMGYFDhGh5ZAJyooEwjKTwZA9mgLXIZBifxZC8qrfSFcZBCX3SnzCKFfinAsbrsiAeZAAIfSjlZA2At1ipIpZAfgXokzGT8ss0Oi2alntXQTeZCdOSGicy1tgKjc7E1DHDO9ZC3u5ktnAkmlrrD7FpjeEuWd1Vg0yZBAs1HXD8L3V19qvZBcHTZAYa2dl8yxWvud0jOOwPxCCpLLZB2VgjYitXgEZC7FdvbwZDZD',
}

async function getCommentAPI() {
  let url = `https://graph.facebook.com/v19.0/${cfg.liveVideoID}/comments`
  let params = {
    access_token: cfg.accessToken,
  }
  try {
    let response = await axios.get(url, { params })
    // console.log(response.data)
    return response.data.data
  } catch (err) {
    console.log('Failed to get comments from graph api --->', err)
  }
}

//TODO: ฟังก์ชันอ่านเฉพาะ comment ใหม่
/* 
  วนลูป newComment ใหม่ที่ได้มา แล้วตรวจสอบ newComment ว่ามี oldComment หรือไม่
  หากไม่เจอ newComment ใน oldComment ก็ให้แสดงค่า newComment ใหม่
  หากทำงานเสร็จสิ้น ส่ง newComment ใหม่
*/
async function latestComment(oldComment, newComment) {
  return new Promise((resolve) => {
    newComment.forEach((comment) => {
      if (!oldComment.find((cm) => cm.id == comment.id)) {
        writeFileCSV(comment)
        console.log('This is a new comment', comment)
      }
    })
    resolve(newComment)
  })
}

//TODO: บันทึกไฟล์ .csv ลูกค้าที่สั่งซื้อสินค้าตามรหัส code
/* 
  ตรวจสอบ comment ที่ขึ้นต้นด้วย "รหัสสินค้า" ที่กำหนดไว้ หากตรงกันจริง
  จะทำการเขียนข้อมูลลงในไฟล์ CSV ในรูปแบบของตาราง rows, columns
  และใช้ fs.appendFileSync() โดยเขียนข้อมูลเข้าไปแทรกในข้อมูลที่มีอยู่แล้วในไฟล์
*/
let code = 'A=1'
const fileCSV = 'customer.csv'

function writeFileCSV(comment) {
  try {
    let message = String(comment.message).toLowerCase()
    if (message.substring(0, code.length) == code.toLowerCase()) {
      let row =
        comment.from.id +
        ',' +
        comment.from.name +
        ',' +
        comment.message +
        ',' +
        comment.created_time +
        '\n'
      fs.appendFileSync(fileCSV, row, 'utf8')
    }
  } catch (e) {
    console.log('Write file error --->', e)
  }
}

//TODO: Main Function
export async function getComment() {
  let firstLoad = true
  let commentList = []

  setInterval(async () => {
    let newComment = await getCommentAPI()
    if (firstLoad) {
      console.log('Initial comments', newComment)
      commentList = newComment

      fs.writeFileSync(fileCSV, '\ufeffComment_ID,Name,Code,Date\n', 'utf8')
      commentList.forEach((comment) => {
        writeFileCSV(comment)
      })

      firstLoad = false
    } else {
      commentList = await latestComment(commentList, newComment)
    }
  }, 10000)
}

getComment()

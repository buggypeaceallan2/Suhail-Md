const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254720492899";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_27_07_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDI5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ0LFxuICAgICAgICA4MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICA3NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk4LFxuICAgICAgICA3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTcxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDYyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwMixcbiAgICAgICAgNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgODAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDk4LFxuICAgICAgICA5LFxuICAgICAgICA5NixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNCxcbiAgICAgICAgMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDkyLFxuICAgICAgICA4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDg3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNixcbiAgICAgICAgODYsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgMzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgwLFxuICAgICAgICA2NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NixcbiAgICAgICAgMjUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDExNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQxLFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICA1NixcbiAgICAgICAgMjQxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvNWNzSFdmcVJPbFBxUDc3Z1NXc2JhL0xkNXNVODJqK3NKaTdVMFRYWDFFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJtLVNDMUFOSlFwQ0VhcVk4TFBGRjB3XCIsXG4gIFwicGhvbmVJZFwiOiBcImExY2UxNjFiLWQzYTYtNGRmYy1iMDA5LTJmMTFjM2Y5MDJiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAyMTksXG4gICAgICAyMixcbiAgICAgIDIwMSxcbiAgICAgIDIxOCxcbiAgICAgIDI0OSxcbiAgICAgIDQ1LFxuICAgICAgOTYsXG4gICAgICAyLFxuICAgICAgMjIwLFxuICAgICAgMzQsXG4gICAgICA0OCxcbiAgICAgIDE3MyxcbiAgICAgIDI0NCxcbiAgICAgIDEyMyxcbiAgICAgIDE5OCxcbiAgICAgIDgwLFxuICAgICAgMTk0LFxuICAgICAgMjU1LFxuICAgICAgMjI4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc5LFxuICAgICAgNTUsXG4gICAgICAxODEsXG4gICAgICAwLFxuICAgICAgMTMsXG4gICAgICAxODgsXG4gICAgICAxMDgsXG4gICAgICAyMDMsXG4gICAgICAxOTQsXG4gICAgICA2NixcbiAgICAgIDEyNixcbiAgICAgIDI0NyxcbiAgICAgIDY2LFxuICAgICAgOTgsXG4gICAgICA5NCxcbiAgICAgIDI0OCxcbiAgICAgIDIzOSxcbiAgICAgIDIzNixcbiAgICAgIDI0MSxcbiAgICAgIDQ5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhWQk5EVFhHXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjA0OTI4OTk6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjUxNTI3MTI1MzQwMTg1OjUwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05IdjJJa0JFSkN3bHJRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2RMQjJoSzZIYjd3SkFCVHhHRVBmVHVFU2FpMHRqSjlzZEFueng5aXZpUT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmcFhJdjJLZC9FcnI1VTZ5RkdUaEJhblJkd2Z6akNsSEtSUm56SS84bkFROG5VM2tnVHgvZVZaQk1aV2ptaEgrU0pNV2xRS3k2TlphY3E3dTlpYUZDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJuclE1STlESGtlRFhNL0ZJNjJ1UHhTRTdmQkUyQWV1WTc0QjM4Vmcrc3E3a3hIVWt6My9jNWRaTi9kckZVSDRhL1B0T095V2oveUJHSm8wVW5FTFJEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MjA0OTI4OTk6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAwMzEyNTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKK0xcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUorTC5qc29uIjogIntcImtleURhdGFcIjpcIlcwczZNRWd0NTdUaktDSjlZSFVvMU9OdTJGYkpPMWwvYVk4T3g2OEs1V3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6Mjg4NzY1OTAzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5OTQ0NzU5MjU4XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

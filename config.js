const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,919395193186";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,919395193186";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919395193186,919395193186";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_15_43_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1LFxuICAgICAgICAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDgyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgNixcbiAgICAgICAgMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5LFxuICAgICAgICAxMixcbiAgICAgICAgMjE1LFxuICAgICAgICA4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUwLFxuICAgICAgICA2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODMsXG4gICAgICAgIDM1LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY0LFxuICAgICAgICA2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxODksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk4LFxuICAgICAgICAzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDQwLFxuICAgICAgICAzNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDc0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjR2RXBVTHB6QUtyRmwrbyt6WnA3dVUwcVFhdzNUcHFpbXEzdjZPdlJPZlU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5Mzk1MTkzMTg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQTJCQUVBMjE1RjdBMEExNDE5MlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzM0MTM0MTNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia0pzajhRdnpSUkNrTEZVaGlDZDdqQVwiLFxuICBcInBob25lSWRcIjogXCIyZjVlMGJlOC05NzMyLTQ1MmMtYmFjYy1iMTI0ODE1ZWFhZjZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTgsXG4gICAgICAyNDUsXG4gICAgICAyNTMsXG4gICAgICAxMjksXG4gICAgICA5MCxcbiAgICAgIDEwMSxcbiAgICAgIDQ2LFxuICAgICAgMjQsXG4gICAgICAxODAsXG4gICAgICAxODAsXG4gICAgICAyNTUsXG4gICAgICAxMDcsXG4gICAgICAxODUsXG4gICAgICAxODgsXG4gICAgICAxNzMsXG4gICAgICAyNDAsXG4gICAgICAxNjIsXG4gICAgICAyMjMsXG4gICAgICAxMDEsXG4gICAgICAxNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzcsXG4gICAgICAyOCxcbiAgICAgIDAsXG4gICAgICAyNDAsXG4gICAgICAzOCxcbiAgICAgIDgyLFxuICAgICAgMjQsXG4gICAgICAxODMsXG4gICAgICAxNjksXG4gICAgICAxMDcsXG4gICAgICAzNCxcbiAgICAgIDE2OSxcbiAgICAgIDIxMSxcbiAgICAgIDExNCxcbiAgICAgIDEwNCxcbiAgICAgIDE0OSxcbiAgICAgIDExMyxcbiAgICAgIDEzOSxcbiAgICAgIDIwMyxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08rL2tmY0lFSjJVeDdvR0dBY2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYVZVMWZ1cFFMcXhqOThtQkJkRERzeUphczd2QVREWFJ0bkZ4L21LV2psaz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2K2c3WTlLRytNU3FhMlBLMEtRME16YjAwVGNZR3FxaVZyOVZQd1hKS1VTWjRVQmMyVTJlNFB4T2FkQW9BVFkxcERYTUxEMG1icTI0bGRGTXlHRUJCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJheUtTMmdURVFxdFFlRVRXZlZhb2pZejRLMm5INEVlZGwxam1xb0xUcC9NOTFBa3h4bXhhSEVWZGtpMGtkY1hhT281N1BhVWU1emZiZGhiRFY2WWtqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkxOTM5NTE5MzE4Njo5M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjY3NDgyMTkxMzg4ODQ2OjkzQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlJBSFVMXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTkzOTUxOTMxODY6OTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNDEzNDA5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQXpKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBekouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTMEJsN0NzaitYcmRnYlhwM083dnJRTEZrbTRLb1Nkc1YyYmJ2NWgweFNnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzOTczMzE0MzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMjY4NjE2MjY2NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF6TC5qc29uIjogIntcImtleURhdGFcIjpcIm1BUFJ0b0VZZ3hndk5jZGlCT2RNVi9QMDdzUkxBYk1tWmhON2FrdlI5b3M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjM5NzMzMTQzOSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzEsMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMxMzkxNzU1MzBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBek0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6WGZtNEpRWGk1Zm4zOEk1R05qOW42SzlENGZDd0VQRllIK056djgwUHB3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzOTczMzE0MzksXCJjdXJyZW50SW5kZXhcIjoyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzEzOTE3NzQzNlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF6Ty5qc29uIjogIntcImtleURhdGFcIjpcIkJJNUJZYmVpb2hwSk1jdjBHS1lFdXJYWVZXa2xONnhhVk4xb0VBeUxUWXc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjM5NzMzMTQzOSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzEsNSwzLDBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzM4MDcyODkzOVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUF6UC5qc29uIjogIntcImtleURhdGFcIjpcInpyS2xDL2daUVVBREY1WGRCQkNTK0ZIcTlkRUZmTUF5UVRGUkhqWXhhc2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjM5NzMzMTQzOSxcImN1cnJlbnRJbmRleFwiOjUsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwzXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzMzODA3Mjk3ODdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBelIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWTVZXVFAvVlBNbkZJYTlyQ0wrRmJFeWxiZ2lmZTE1TG5DUG4rY0M2bTg0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzOTczMzE0MzksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlszLDEsNiwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM0MTMzMTQ3NjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBelMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6Snh6Q2lONitpa0JkMHczbkJjUmRNSngzN1hNUkFGK2VZWlBtU3ZrU1NBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzOTczMzE0MzksXCJjdXJyZW50SW5kZXhcIjo2LFwiZGV2aWNlSW5kZXhlc1wiOlswLDMsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNDEzMzE2NDk3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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

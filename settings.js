const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english, spanyol} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia , english & spanyol 
//You can request others language 
global.language = indonesia  //change indonesia to english if you don't understand the language used by the bot


// Other
// Other
global.botname = "𝙍𝙖𝙢𝙖𝘽𝙤𝙩𝙯-𝙈𝘿" //namabot kalian
global.ownername= "ᴹᴿ𝙍𝙖𝙢𝙖" //nama kalian
global.myweb ="https://api.zeeoneofc.xyz" //bebas asal jan hapus
global.youtube = "https://youtube.com/channel/UCJNi-zXIsky4nheONnxoY1w" //bebas asal jan hapus
global.github = "https://RamaBotz19.github.io/" //bebas
global.email = "putriecee@gmail.com" //bebas
global.region = "Indonesia" //bebas
global.timezone = 'Asia/Jakarta' //  timezone wib
global.premium = ['6287793236775'] //premium user
global.owner = ["6287793236775","6287793236775"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "6287793236775" // nomor wa kalian
global.ownernomerr = "+6287793236775" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.packname = '© 𝙍𝙖𝙢𝙖𝘽𝙤𝙩𝙯-𝙈𝘿' //sticker wm ubah
global.author = '𝙗𝙮𝙚 𝙍𝙖𝙢𝙖' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'

global.limitawal = {
    premium: "Infinity",
    free: 10
}

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '𝙎𝙚𝙡𝙚𝙨𝙖𝙞...',
    admin: 'Perintah Ini Hanya Bisa Digunakan 𝙊𝙡𝙚𝙝 𝙖𝙙𝙢𝙞𝙣 !',
    botAdmin: '𝙇𝙐 𝘼𝙅𝘼 𝙂𝘼 𝙅𝘼𝘿𝙄𝙄𝙉 𝙂𝙒 𝘼𝘿𝙈𝙄𝙉!',
    owner: '𝘾𝙐𝙈𝘼 𝘽𝙄𝙎𝘼 𝘿𝙄 𝙋𝘼𝙆𝙀 𝙎𝙄 𝙍𝘼𝙈𝘼!',
    group: '𝘿𝙄 𝙂𝙍𝙐𝘽 𝙂𝙐𝙉𝘼𝙄𝙉 𝙉𝙔𝘼 𝙉𝙂𝙀𝙉!',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

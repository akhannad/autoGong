const GoogleHome = require('node-googlehome')
 
/**
 * search google home.
 * @param {waitTime: number(default: 1000)}
 */
GoogleHome.search(1000)
  .then(resp => { console.log(resp) })
 
/**
 * connect google home with IP.
 * @param {ip_address: string}
 */
let device = new GoogleHome.Connecter('192.168.0.185')
 
/**
 * setting language
 * @param {{lang: string(default: 'en')}}
 */
device.config({lang: 'ja'})
 
 
/**
 * Start speaker.
 * If you do this, google home will immediately sound when you call speak() or playMedia()
 */
device.readySpeaker()
  .then(() => { /* do something */ })
 
/**
 * play media. pass media url.
 * @param {url: string}
 */
device.playMedia('http://www.hypertrombones.jp/sample/system7.mp3')
  .then(console.log)
  .catch(console.log)
 
/**
 * google home speak!
 * @param {message: string, speed: number(default:1), timeout: number(default: 3000)}
 */
device.speak('こんにちは！')
  .then(console.log)
  .catch(console.log)
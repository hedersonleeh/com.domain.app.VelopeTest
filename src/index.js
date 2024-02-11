import { Launch } from '@lightningjs/sdk'
import App from './App.js'
export default function() {
  
  document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
    return Launch(App, ...arguments)
}

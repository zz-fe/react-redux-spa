export default {
   getItem: function(key){
     let value
     try {
       value = localStorage.getItem(key)
     } catch (e) {
        consoe.log('localStorage.getItem报错', e.message)
     } finally {
       return value
     }
   },
   setItem: function(key,value){
     try {
       localStorage.setItem(key, value)
       // 在IOS safari 无痕模式下  直接用localStorge.setItem 会报错 所以用try catch
     } catch (e) {
       console.log('localStorage.setItem报错')
     }
   }

}

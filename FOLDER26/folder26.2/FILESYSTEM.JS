const fs=require("fs")
console.log(fs);
///MKDIR
//recursive: false
//دقیق یادم نیست ولی اگه ترو بود و ما اون فولدری که می خواستیم بسازیم موجود بود مشکلی نداشت و اروری به ما نمیداد ولی اگه فالس بود به ما ارور میداد که این فولدر قبلا وجود دارد
fs.mkdir("dog", { recursive: false },(err)=>{
console.log(fs);
 if (err) {
    throw err;
  }
});

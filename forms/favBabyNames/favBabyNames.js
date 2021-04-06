
favBabyNames.onshow=function(){
  drpdnBabyNames.clear()
    console.log(favoriteBabyNames)
    for (i = 0; i < 5; i++)
        drpdnBabyNames.addItem(favoriteBabyNames[0][i])
    imgBaby.hidden = true
}

drpdnBabyNames.onclick=function(){
  if (typeof(s) == "object") {
        return
    } else {
        lblMessage4.value = `Your favorite baby name was ${s}.`
        imgBaby.hidden = false
    }
}

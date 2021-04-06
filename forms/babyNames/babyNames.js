let babyNames = ["Olivia", "Emma", "Ava", "Sophia", "Isabella", "Charlotte", "Amelia", "Mia", "Harper", "Evelyn", "Abigail", "Emily", "Ella", "Elizabeth", "Camila", "Luna", "Sofia", "Avery", "Mila", "Aria"]
let favoriteBabyNames = []


babyNames.onshow=function(){
   for (i = 0; i < BabyNames.length; i++)
        selBaby.addItem(BabyNames[i])
}


btnSelect.onclick=function(){
  favoriteBabyNames.push(selBaby.text)
  ChangeForm(favBabyNames)
}

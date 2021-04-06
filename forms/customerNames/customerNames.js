let req = ""
let query = ""
let results = ""
let pw = "Dcsd#253414"  // ***** put your database password here
let netID = "ach55357"
let allCustomerData = []




customerNames.onshow=function(){
  drpdnStates.clear()
 query = "SELECT * FROM customer"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ach55357&pass=" + pw + "&database=ach55357&query=" + query)

    if (req.status == 200) { //transit trip worked.        
           // see JSON results
           console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
           // see if results are correct
           console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
        
        if (results.length == 0)    // no results were returned by the query
           lblMessage1.textContent = "There are no pets in the database."
        else {     
        // Now output the names of all the dogs into the textArea control:
        let message = ""
        for (i = 0; i < results.length; i++)
            drpdnStates.addItem(message + results[i][4] + "\n")
     } else  // the transit didn't work - bad wifi? server turned off?
        lblMessage1.value = "Error code: " + req.status
}

drpdnStates.onclick=function(){
  if (typeof(s) == "object")   
      return                    
    else {  // the user picked something
        drpdnStates.value = s // make dropdown show choice the user made
        let state = drpdnStates.value
        
query = "SELECT * from customer WHERE state =" + '"' + state + '"'
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ach55357&pass=" + pw + "&database=ach55357&query=" + query)

    if (req.status == 200) { //transit trip worked.        
           // see JSON results
           console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
           // see if results are correct
           console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)
        
        if (results.length == 0)    // no results were returned by the query
           lblMessage1.value = "There are no pets in the database."
        else {     
        // Now output the names of all the customers associated with the state in the label control:
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
            lstgCustomer.addItem(message)
     } // end else

  } else   // the transit didn't work - bad wifi? server turned off?
        lblMessage1.value = "Error code: " + req.status
}

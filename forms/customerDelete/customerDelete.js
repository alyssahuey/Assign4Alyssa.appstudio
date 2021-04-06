customerDelete.onshow = function() {
    drpdnCustomers.clear()
    query = "SELECT * FROM customer"
    // Below change from my netID to yours (twice: user and database)    
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=ach55357&pass=" + pw + "&database=ach55357&query=" + query)

    if (req.status == 200) { //transit trip worked.        
        // see JSON results
        console.log(`req.responseText is a JSON string that looks like this: ${req.responseText}`)
        results = JSON.parse(req.responseText)
        // see if results are correct
        console.log(`The parsed JSON string is converted to a JS object (an array of arrays): ${results} where results[0] is ${results[0]}, the first array in the JS results object.`)

        if (results.length == 0) // no results were returned by the query
            lblMessage2.value = "There are no pets in the database."
        else {
            // Now output the names of all the dogs into the textArea control:
            let message = ""
            for (i = 0; i < results.length; i++)
                drpdnCustomers.addItem(message + results[i][1] + "\n")
        } // end else

    } else // the transit didn't work - bad wifi? server turned off?
        lblMessage2.value = "Error code: " + req.status
}



drpdnCustomers.onclick = function() {
    if (typeof(s) == "object")
        return
    else { // the user picked something
        drpdnCustomers.value = s // make dropdown show choice the user made
        let customerNameDel = drpdnCustomers.value
        console.log(`${customerNameDel}`)

        // make sure the pet name is in the database before you try to 
        // delete it
        let found = false
        for (i = 0; i < results.length; i++) {
            if (customerNameDel == results[i][1]) {
                found = true
                break // if found the item in the database jump out of loop
            }
        }
        if (found == false)
            lblMessage2.value = "That customer name is not in the database."
        else if (found == true) {
            query = "DELETE FROM customer WHERE name = '" + customerNameDel + "'"
            alert(query)

            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=jad64177&query=" + query)
            if (req.status == 200) //transit worked.
                if (req.responseText == 500) // means the insert succeeded
                    lblMessage2.value = `You have successfully deleted the customer named ${customerNameDel}`
            else
                lblMessage2.value = `There was a problem deleting ${customerNameDel} from the database.`
            else // transit error
                lblMessage2.value = `Error: ${req.status}`
        } // found is true
    }
}

btnRefresh.onclick=function(){
  customerDelete.reset()
}

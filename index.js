const invitees = ["Guadalupe", "Ollie", "Aki"]

function writeCards(invitees, event) {
    const inviteesMessage = []
    for(let i=0; i<invitees.length; i++) {
        inviteesMessage.push(`Thank you, ${invitees[i]}, for the wonderful surprise gift!`)
    }
    return inviteesMessage
}

function countDown () {
    let i = 11
    while (i>0){
        i--
        console.log(i);
        
    }
    
}
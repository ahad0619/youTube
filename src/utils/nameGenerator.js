
export function generateRandomName() {

    const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Katie", "Michael", "Sarah", "David", "Laura" ,"Kavish" , "Ahad" , "Fahad", "Hiba", "Tanu" , "Gauri" , "Akansha" , "Sahgufta"];
    const lastNames = ["Smith", "Johnson", "Brown", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin" , "Singh" , "Srivastava" , "Syed", "Khan", "Singhal", "Siddiqui"];


    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];


    return `${randomFirstName} ${randomLastName}`;
}

export function generateRandomString(length) {
   
    const characters = 'ABCDEFGH IJKLM NOPQR STU VWX YZab cde fgh ijklmno pqr stuvw xyz012 3456789  ';
    const charactersLength = characters.length; 

    if (length <= 0 || !Number.isInteger(length)) {
        throw new Error("Length must be a positive integer.");
    }

    let result = '';
    for (let i = 0; i < length; i++) {
       
        const randomIndex = Math.floor(Math.random() * charactersLength);
        result += characters[randomIndex];
    }
    return result;
}


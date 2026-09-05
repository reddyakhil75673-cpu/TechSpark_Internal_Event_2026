/* ===========================================================
   GOOGLE SHEETS API
=========================================================== */

const WEB_APP_URL =
"https://docs.google.com/spreadsheets/d/1GAbuaCh30d2k1W-ywxXVCFzVeJQ6UbYet6Wrt1XR8Pk/edit?gid=0#gid=0";

async function submitRegistration(data){

    const formData = new FormData();

    formData.append("data", JSON.stringify(data));

    try{

        const response = await fetch(WEB_APP_URL,{

            method:"POST",

            body:formData

        });

        const result = await response.json();

        return result;

    }

    catch(error){

        console.error(error);

        throw error;

    }

}
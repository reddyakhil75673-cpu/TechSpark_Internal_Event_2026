/* ===========================================================
   GOOGLE SHEETS API
=========================================================== */

const WEB_APP_URL =
"https://script.google.com/macros/s/AKfycbw9MWwhfBELzAHwPsH2BIUThe4U-fmoYS9lTjxs2pQVnpHB_DM2M5bhY1hooeHcQTbP/exec";

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
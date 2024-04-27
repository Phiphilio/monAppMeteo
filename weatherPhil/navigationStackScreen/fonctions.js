import { Buffer } from 'buffer'; // Importation nécessaire pour React Native

    export async function getCoordinates (cityName) {
        // source coordonnées : https://nominatim.org/release-docs/develop/api/Output/
            try{
                const query = cityName.trim();
                const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=1`
                const response = await fetch(url);
                const data = await response.json();

                if (data.length > 0) {
                  const location = data[0];
                  console.log("nous sommes à ", location.address.city)
                  const report = await WeatherReport(location.lat, location.lon)//appel de la fonction pour obtenir les coordonées météos
                return report
                }
            }catch(error) {
              console.error("City not found", error);
            }
          }

    //envoie des requêtes à l'api de meteomatics
    async function WeatherReport(lat, lon){

        // les coordonnées actuelles
        const currentDate = new Date();

        // Format ISO 8601 (année-mois-jourTheure:minute:seconde)
        const formattedDate = currentDate.toISOString(); // "2024-04-25T14:45:00.000Z"

        /** pour m'identifier https://www.meteomatics.com/en/api/request/api-requests-oauth-authentification/*/
        const username = "snowphil_phil_phil";
        const password = "61Hahp8YJe";

        // Encodage de base 64
        const credentials = Buffer.from(`${username}:${password}`).toString('base64');

        const url = `https://api.meteomatics.com/${formattedDate}/t_2m:C,wind_speed_10m:ms/${lat},${lon}/json`
            try{
                    const reponse = await fetch(url, {

                    method : "POST",
                    headers : {
                        'Authorization': `Basic ${credentials}`,
                        'Content-Type': 'application/json'
                    } })
                    const report = await reponse.json();
                   // console.log("voici la date :",report.dateGenerated)
                    console.log("voici le report :",report)
                   /* console.log("voici les données de temperature :",report.data[0].coordinates[0])
                    console.log("voici la temperature :",report.data[0].coordinates[0].dates[0].value)
                    console.log("voici les données de vitesse du vent :",report.data[1].coordinates[0].dates[0])*/
                    return report;
            }catch (error) {
                console.error("voici l erreur :",error)
            }

    }

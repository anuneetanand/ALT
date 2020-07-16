import React from 'react';

export const emailTemplate=(name,date,topics,results,type)=>{
    return(
        type==="Minute paper" ?
            `
            <html>
            <body>
            <div>
                <p style="color:#222222; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:19px; text-align:left;">
                    Respected Faculty ${name},
                    <br/> 
                    <br/>     
                    Following is the results of ${type} on ${date} 
                    <br/> 
                    <br/>        
                </p>
            ${topics.map((value, i) => (
                `
                    <h3> ${i+1}. ${" "+value}<h3/>
                    <img src="https://quickchart.io/chart?bkg=white&c=%7B%0A%20%20%20%20type%3A%20%27pie%27%2C%0A%20%20%20%20data%3A%20%7B%0A%20%20%20%20%20%20%20%20labels%3A%20%5B%27Not%20Very%20Clear%27%2C%20%27Somewhat%20Clear%27%2C%20%27Completely%20Clear%27%5D%2C%0A%20%20%20%20%20%20%20%20datasets%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20data%3A%20%5B${results[value][0]}%2C%20${results[value][1]}%2C%20${results[value][2]}%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%27%23F3460A%27%2C%20%27orange%27%2C%20%27%2360CA24%27%5D%0A%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%7D%2C%0A%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20%27right%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20align%3A%20%27start%27%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20%27black%27%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20doughnutlabel%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20labels%3A%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20text%3A%20%27Donut%27%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20font%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D" height=40% width = 40%/>
                `
            ))}
            <br/><br/><br/><br/>
            <p>
                Regards,
                <br/>
                Team TLS
                <br/>
                <img src="https://i.ibb.co/ky4tJD8/Logo.png" alt="Logo" border="0" width="75px"/>
                
            </p> 
        </div>	
        </body>
        </html> 
            `
        :
        type==="In-Class MCQ Quiz"?
        `
        <html>
        <body>
        <div>
            <p style="color:#222222; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:19px; text-align:left;">
                Respected Faculty ${name},
                <br/> 
                <br/>     
                Following is the results of ${type} on ${date} 
                <br/> 
                <br/>        
                <img src="https://quickchart.io/chart?c={type:'pie',data:{labels:['A','B', 'C','D'], datasets:[{data:[${results['A']},${results['B']},${results['C']},${results['D']}]}]}}" height=50% width = 50%>
            </p>
            <br/><br/><br/><br/>
            <p>
                Regards,
                <br/>
                Team TLS
                <br/>
                <img src="https://i.ibb.co/ky4tJD8/Logo.png" alt="Logo" border="0" width="75px"/>
                
            </p>    
        </div>	
        </body>
        </html>
        `
        :
        `
        <html>
        <body>
        <div>
            <p style="color:#222222; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:19px; text-align:left;">
                Respected Faculty ${name},
                <br/> 
                <br/>     
                Following is the results of ${type} on ${date} 
                <br/> 
                <br/>      
                ${results.map((value, i) => (
                    `
                        <div>
                            <h3>${i+1}. ${value[0]} : ${value[1]}</h3>
                            <br/>
                        </div>
                    `
                ))}  
            </p>
            <br/><br/><br/><br/>
            <p>
                Regards,
                <br/>
                Team TLS
                <br/>
                <img src="https://i.ibb.co/ky4tJD8/Logo.png" alt="Logo" border="0" width="75px"/>
                
            </p>    
        </div>
        </body>
        </html>
        `
    )}

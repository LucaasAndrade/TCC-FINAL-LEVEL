import { Router } from 'express';
import nodemailer from 'nodemailer'

const server = Router();



server.post('/enviar-email', async (req, resp) =>{
    let data = req.body;
    const transport = nodemailer.createTransport({
    host: process.env.HOST,
    service: process.env.SERVICE,
    secure:process.env.SECURE,
    auth:{
        user: process.env.EMAIL,
        pass: process.env.SENHA
    }
    })
    
    const message = {
    from: process.env.EMAIL,
     to: data.email,
     subject:'Street Elegance',
     html: `
     <div style="background-color:#f2f3f5;padding:10px;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
    <div style="max-width:650px;margin:0 auto">
        <div style="background:#fff;font-size:14pt;color:#686f7a;border-top:4px solid rgb(0,172, 236);margin-bottom:20px">
            <div style="float:left;font-size:0.8em;border-bottom:1px solid #f2f3f5;padding:20px 20px">
                <img width="55" height="65" style="float:left" src="https://www.bing.com/images/search?view=detailV2&insightstoken=bcid_sq4PTLgnf-kE6A*ccid_rg9MuCd%2F&form=ANCMS1&iss=SBIUPLOADGET&selectedindex=0&id=-985894637&ccid=rg9MuCd%2F&exph=100&expw=100&vt=2&sim=1" alt="Logo" class="CToWUd">
                <div style="float:left;margin-top:15px;margin-left:15px;">
                    <span style="font-size:0.7em">Loja Online</span> <sup style="font-size:10px">©</sup>
                    <br><b>STREET ELEGANCE<b/>
                </div>
            </div>

            <div style="padding:10px 20px;clear:both">
                <div style="font-size:0.8em;line-height:1.5em;border-bottom:1px solid #f2f3f5;padding-bottom:10px;margin-bottom:10px;">
                    <p>
                        <a style="text-decoration:none;color:black">
                            <b>Seu cadastro foi feito com sucesso!</b>
                        </a>
                    </p>

                    <div style="color:#000">

                        <p style="color:rgb(50,51,142)">
                            E-mail: <b style="color:#000000;">${data.email}</b><br>
                        </p>

                        <p style="color:#000">
                            Até logo com nossas novidades! =) 
                        </p>

                    </div>

                    <p style="font-size:14px;margin-top:50px;">
                        Atenciosamente,<br>
                        Equipe da Street Elegance. <br>
                        <span style="color:#A52A2A"> ** Este é um e-mail automático, não responda. </span>
                    </p>
                </div>
            </div>

        </div>
    </div>
     `
     
    }
    transport.sendMail(message, (error, info)=> {
        if (error) {
            return resp.status(400).send('Erro, tente novamente')
        }
        return resp.status(200).send('E-mail enviado com sucesso!')
    })
})
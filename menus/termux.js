const termux = (pr, NomeDoBot, nomeDono,pushname) => {
    return`

                    
                    
ใโใ [ ๐๐๐๐๐๐ ]

โโโโโโโโโ
โโ apt update && apt upgrade
โโ pkg install python 
โโ pkg install python2
โโ pkg install python3
โโ clear [Limpa a tela do termux]
โโโโโโโโโโโโโโโโ

ใโใ [๐ซ๐๐๐๐๐๐๐ ๐๐๐๐๐๐]

โโโโโโโโโ
 https://www.mediafire.com/file/e2qo64gee5zy9ds/Termux.apk/file  
โโโโโโโโโโโโโโโโ

ใโใ๐๐ฅ๐ ๐ฎ๐ฆ๐๐ฌ ๐๐๐ซ๐ซ๐๐ฆ๐๐ง๐ญ๐๐ฌ

โโโโโโโโโโโโโโโโ
โโ cd /sdcard/nome da pasta
โisso fara que vc entre na pasta
โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โโ cd $H [Volta pro inรญcio]
โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โโ MV -V [Para mover algo]
โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โโ rm -rf  [apaga pasta]
โโโโโโโโโโโโโโโโ
โโโโโโโโโโโโโโโโ
โโ git clone [clona uma ferramenta]
โโโโโโโโโโโโโโโโ

ใโใ๐จ๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐๐
โโโโโโโโโ
โโ ${pr}SpamWa
โโ ${pr}LITEDDOS
โโ ${pr}sqlmap
โโ ${pr}Kiny-Painel
โโ ${pr}TBomb
โโ ${pr}trackip
โโ ${pr}Brutal
โโ ${pr}crocodile
โโ ${pr}ipdrone
โโโโโโโโโโโโโโโโ
`
}
module.exports.termux = termux

const SpamWa = (pr, NomeDoBot, nomeDono) => {
    return`

Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
    pkg install python 
    
    pkg install git 
    
    python3 -m pip install requests
    
    git clone https://github.com/krypton-byte/SpamWa
    
    cd SpamWa 
    python3 spam.py
`
}
module.exports.SpamWa = SpamWa

const sqlmap = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
   git clone --depth 1 https://github.com/sqlmapproject/sqlmap.git
   
Para obter uma lista de opรงรตes e opรงรตes bรกsicas, use: 
  python sqlmap.py -h
  
  Para obter uma lista de todas as opรงรตes e opรงรตes, use: 
  python sqlmap.py -hh
  
  `
}
module.exports.sqlmap = sqlmap

const LITEDDOS = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.

   git clone  https://github.com/4L13199/LITEDDOS
   
   python2 LITEDDOS.py <ip> <porta> <pacotes>
   
   `
}
module.exports.LITEDDOS = LITEDDOS

const Painel = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
    pkg upgrade && pkg update -y 
    
    pkg install git python -y 
    
    git clone https://github.com/Kiny-Kiny/Kiny-Painel 
    
    cd Kiny-Painel
    
    python3 main.py
    
    
`
}
module.exports.Painel = Painel

const TBomb = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
    pkg install git -y 
    
    pkg install python -y 
    
    git clone https://github.com/TheSpeedX/TBomb.git 
   
    cd TBomb 
    
    ./TBomb.sh

 `
}
module.exports.TBomb = TBomb

const Brutal = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
 
    git clone https://github.com/Screetsec/Brutal.git

    cd Brutal
    
    chmod +x Brutal.sh
    
    ./Brutal.sh
`
}
module.exports.Brutal = Brutal

const trackip = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
 
  apt update

  apt install git curl -y

  git clone git://github.com/htr-tech/track-ip.git

  cd track-ip


bash trackip

`
}
module.exports.trackip = trackip
const crocodile = (pr, NomeDoBot, nomeDono) => {
    return`
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
pkg update && pkg upgrade
pkg install node
pkg install git
git clone https://github.com/isaias-silva/crocodile
cd crocodile 
bash install.sh 
para iniciar ao abrir o termux: cd crocodile npm start
`
}
module.exports.crocodile = crocodile

const ipdrone = (pr, NomeDoBot, nomeDono) => {
    return`  
Coloque um de cada vez no Termux, e se precisar use
    clear para deixa a tela do termux limpa.
    
apt-get update -y
apt-get upgrade -y
pkg install python -y
pkg install python2 -y
pkg install git -y
pip install lolcat
pip install requests
git clone https://github.com/noob-hackers/ipdrone
cd $HOME
ls
cd ipdrone
ls
python ipdrone.py -v (seu ip de pessoa aqui)
    `
}
module.exports.ipdrone = ipdrone
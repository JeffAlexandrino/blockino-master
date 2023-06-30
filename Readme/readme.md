# BLOCK.INO - RexLab
![logosatc](logos_satc_enc.png)

## Sobre o projeto
Este projeto é focado no desenvolvimento de uma maquete com dispositivos eletrônicos, visando simular o controle e a automação de uma residência. Um aspecto importante é que foi utilizado programação em C++ embarcado e a criação de programação em blocos, além da criação de circuitos com o uso do Arduino como controlador e Raspberry Pi como servidor. O objetivo final é permitir o controle remoto da maquete (Internet das Coisas - IOT) através do RexLAB, em uma parceria entre a SATC e o RexLAB.

## Componentes necessários
* Arduino UNO
* Raspberry Pi 3 Modelo B+
* Mini Cooler (ventilador)
* LM35 
* DHT11
* LDR
* Linha de LED RGB x10 WS2813 Grove
* Relé (aquecedor)
* 7 LEDs 
* 5 LEDs pequenos 
* 12 Resistores 220 Ω
* 1 Resistor 1k Ω
* 1 Resistor 10 Ω 

## Cômodos e suas funções
Cômodo | Função
--------- | ------
Quarto  |  Lâmpada, abajur, ventilador, sensor de temperatura, aquecedor
Varanda | Lâmpada, sensor de luminosidade
Banheiro | Lâmpada
Sala | Lâmpada, televisão (fita RGB)
Cozinha | Lâmpada, sensor de temperatura e umidade, forno (led)

## Configuração de Hardware
COMPONENTE | PINAGEM
---------  | ------
Boneco Varanda | Pino 5
Boneco Quarto | A3
Boneco Banheiro | A4
Boneco Sala | Pino 6
Boneco Cozinha | A5
Led Varanda | Pino 9
Led Quarto | Pino 12
Led Banheiro | Pino 10
Led Sala | Pino 13
Led Cozinha | Pino 7
Fogão (LED) | Pino 3 
Ventilador (Cooler) | Pino 2
LM35 | A2
DHT11 | A0
LDR | A1
TV (LED RGB) | Pino 11
Aquecedor (RELÉ) | Pino 8
Abajur (LED) | Pino 4

## Configuração do Raspberry
### Baixando os arquivos
Antes de tudo, você deve acessar este link clicando [aqui](https://alunosatcedu-my.sharepoint.com/:f:/g/personal/jefferson_57221_alunosatc_edu_br/Ep4_SScbwBZFpGY_S-Wh9d0B6rdQTvU-0xS5ClqPOsheoA?e=wVx5ys) para acessar o OndeDrive 
e realizar o download do arquivo que será colocado em seu cartão MicroSD.

Após isso, clique aqui para acessar o site para poder baixar o [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/). Depois disso, 
insira o seu cartão microSD e abra o Win32; selecione o cartão em Device, selecione o arquivo que foi baixado do OneDrive anteriormente e clique em WRITE, 
espere o processo ser concluído.

### Configuração 
Com os arquivos no cartão, coloque-o no Raspberry e também um monitor, teclado e fonte de energia.
Após um breve carregamento, em raspberry login digite **root**, aperte enter e em password escreva **./rexlabBL!LB**, dê enter novamente.
-  A partir daqui apenas vá escrevendo o que for necessário e vá apertando enter:
1. cd/home, enter
2. ls, enter
3. cd labx, enter
4. ls 
5. nano queue.js
  
- Vá para **var status={ video: "http://xxx.xxx.xxx.xxx:8080"**, e coloque o IP público na porta onde o vídeo da câmera será transmitido.
 
- Com o IP configurado, aperte ctrl+x
1. cd/home, enter
2. ls, enter
3. cd.., enter
4. ls, enter
5. cd etc, enter
6. /etc# ls, enter
7. /etc# nano dhcpcd.conf, enter

- Dentre as 4 primeiras linhas que aparecerem, altere "static ip_address" para o IP público que você digitou anteriormente.

## Manual
Para mais informações sobre o hardware e software, acesse o [manual](https://github.com/SATCEngComputacao/RexLab) do projeto. 
  
## Autores
[Jefferson Barzan Alexandrino](https://github.com/JeffAlexandrino)
[Guilherme Chaves Volpato](https://github.com/GuilhermeVolpato)
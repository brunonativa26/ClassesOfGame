
//Definindo a classe com as propriedades

class Heroi{
    constructor(name, age, type){
        this.name = name;
        this.age = age;
        this.type = type
    }

    //Criando o metodo attack que exibe uma msg baseada no tipo do heroi   

    attack() {
        let attack;
        switch (this.type) {
            case 'Magic':
                attack = 'magia';
                break;
            case 'Guerreiro':
                 attack = 'espada';
                 break;
            case 'Monge':
                 attack = 'artes marciais';
                 break;
            case 'Ninja':
                 attack = 'shuriken';
                 break
            default:
                 attack =  'realizou um ataque';
                 break;           
        }

        console.log(`O ${this.type} atacou usando ${attack}`);

    }
}
//Criando instancias da classe Heroi 

const heroi1 = new Heroi('Jon Sno', 35, 'Guerreiro');
const heroi2 = new Heroi('Merlin', 250, 'Magic');
const heroi3 = new Heroi('Avatar', 112, 'Monge');
const heroi4 = new Heroi('Sasuke', 16,'Ninja');

//Chamando o metodo atacar para o Heroi

heroi1.attack();
heroi2.attack();
heroi3.attack();
heroi4.attack();
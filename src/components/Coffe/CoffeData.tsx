import american from '../../assets/american.svg'
import icedCoffe from '../../assets/icedCoffe.svg'
import milkCoffe from '../../assets/milkCofee.svg'
import capuccino from '../../assets/capuccino.svg'
import hotChocolat from '../../assets/hotChocolat.svg'
import cuban from '../../assets/cuban.svg'
import creamyExpress from '../../assets/creamyExpress.svg'
import express from '../../assets/express.svg'
import hawaian from '../../assets/hawaian.svg'
import irish from '../../assets/irish.svg'
import latte from '../../assets/latte.svg'
import macchiato from '../../assets/macchiato.svg'
import mocaccino from '../../assets/mochaccino.svg'
import arabian from '../../assets/arabian.svg'

export interface CoffeeInfo {
    image: string;
    coffeType: Array<string>;
    name: string;
    description: string;
    price: number;
  }
  

export const CoffeData: Record<string, CoffeeInfo> = {
    american: {
        image: american,
        coffeType: [
            'TRADICIONAL',
        ],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90
    },

    icedCoffe: {
        image: icedCoffe,
        coffeType: [
            'TRADICIONAL',
            'GELADO'
        ],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90
    },

    milkCoffe: {
        image: milkCoffe,
        coffeType: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90
    },

    capuccino: {
        image: capuccino,
        coffeType: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90
    },

    hotChocolat: {
        image: hotChocolat,
        coffeType: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90
    },

    cuban: {
        image: cuban,
        coffeType: [
            'ESPECIAL',
            'ALCOÓLICO',
            'GELADO'
        ],
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90
    },

    creamyExpress: {
        image: creamyExpress,
        coffeType: [
            'TRADICIONAL',
        ],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90
    },

    express: {
        image: express,
        coffeType: [
            'TRADICIONAL',
        ],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90
    },

    hawaian: {
        image: hawaian,
        coffeType: [
            'ESPECIAL',
        ],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90
    },
    
    irish: {
        image: irish,
        coffeType: [
            'ESPECIAL',
            'ALCOÓLICO'
        ],
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
        price: 9.90
    },

    latte: {
        image: latte,
        coffeType: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90
    },

    macchiato: {
        image: macchiato,
        coffeType: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90
    },
    
    mocaccino: {
        image: mocaccino,
        coffeType: [
            'TRADICIONAL',
            'COM LEITE'
        ],
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
        price: 9.90
    },

    arabian: {
        image: arabian,
        coffeType: [
            'ESPECIAL',
        ],
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90
    },
}
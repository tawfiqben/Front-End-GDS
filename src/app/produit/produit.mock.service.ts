import { Produit } from '../shared/produit';
import { Injectable } from '@angular/core';

@Injectable()
export class ProduitMockService {

    private PRODUITS: Produit[] = [];

    constructor(){
        let p1 : Produit = new Produit('Armoire',500,89);
        let p2 : Produit = new Produit('Bureau',10,150);
        let p3 : Produit = new Produit('Lit',30,830);
        let p4 : Produit = new Produit('Table',19,399);

        this.PRODUITS.push(p1);
        this.PRODUITS.push(p2);
        this.PRODUITS.push(p3);
        this.PRODUITS.push(p4);
    }

    getProduits() : Produit[]{
        return this.PRODUITS;
    }
}
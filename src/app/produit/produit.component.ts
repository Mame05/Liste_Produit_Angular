import { Component } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';
import localeFR from '@angular/common/locales/fr'

registerLocaleData(localeFR, 'fr');

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [ProduitComponent,CommonModule, DetailProduitComponent],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  produits = [
    {
      id: 1,
      nom: 'Réchauffe',
      description: 'Chauffe-Biberon Électrique Blanc Philips Avent ',
      prix: 38.46,
      imageUrl: 'https://www.nenetouti.com/wp-content/uploads/2020/02/Chauffe-biberonPhilips-Avent.jpg'
    },
    {
      id: 2,
      nom: 'Gobelets pré-stérilisés',
      description: '3 Petites Boîtes de Conservation Mom Easy 30 ml',
      prix: 4.62,
      imageUrl: 'https://www.nenetouti.com/wp-content/uploads/2024/07/2.png'
    },
    {
      id: 3,
      nom: 'Bavoirs',
      description: 'Bavoir en silicone -nettoyable réglable couleur vert/jaune',
      prix: 5.38,
      imageUrl: 'https://www.nenetouti.com/wp-content/uploads/2019/05/Capturesilicone.jpg'
    },
    {
      id: 4,
      nom: 'Bavoirs tablier',
      description: 'Bavoir Tablier imperméable à manches longues pour enfants (4 coloris)',
      prix: 4.62,
      imageUrl: 'https://www.nenetouti.com/wp-content/uploads/2024/03/PHOTO-2024-03-05-12-04-15_1-504x504.jpg'
    },
    {
      id: 5,
      nom: 'Vêtements garçon 0-2 ans',
      description: 'Barboteuse noeud Rouge',
      prix: 9.23,
      imageUrl: 'https://www.nenetouti.com/wp-content/uploads/2020/01/barboteusegaronblanc.jpg'
    },
    {
      id: 6,
      nom: 'Vêtements fille 2-7 ans',
      description: 'Robe_sans_manches',
      prix: 6.92,
      imageUrl: 'https://www.nenetouti.com/wp-content/uploads/2019/08/robe_enfant-e1565196318394.jpg'
    }
  ];
  produitSelectionne: any = null;  // Défini la propriété produitSelectionne

  afficherDetails(produit: any): void {
    this.produitSelectionne = produit;
  }

  cacherDetails(): void {  // Défini la méthode cacherDetails
    this.produitSelectionne = null;
  }

}

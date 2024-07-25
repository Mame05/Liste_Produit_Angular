import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';
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
      nom: 'Produit 1',
      description: 'Description du produit 1',
      prix: 10,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      nom: 'Produit 2',
      description: 'Description du produit 2',
      prix: 20,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      nom: 'Produit 3',
      description: 'Description du produit 3',
      prix: 30,
      imageUrl: 'https://via.placeholder.com/150'
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

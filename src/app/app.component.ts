import { Component } from '@angular/core';
import { ProduitComponent } from './produit/produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProduitComponent,DetailProduitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ListeProduit';
}
